import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Search } from 'lucide-react';
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import BlogCard from "./BlogCards";

function ArticleSection() {
  const categories = ["Highlight", "Cat", "Inspiration", "General"];

  const [selectCategory, setSelectCategory] = useState('Highlight');
  const [categorieCards, setCategoryCards] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [viewMoreBtn, setViewMoreBtn] = useState(true);
  const [search, setSearch] = useState('');
  const [allData ,setAllData] = useState([]);

  const fetchAllData = async () =>{
    try{
      const result = await axios.get(`https://blog-post-project-api.vercel.app/posts`)
      setAllData(result.data.posts)
    }catch(error){
      console.log(`Fail to fetch all data ${error}`);
    }
  }

  const fetchingData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`https://blog-post-project-api.vercel.app/posts?page=${page}&limit=6&category=${selectCategory}`);
      const newPosts = response.data.posts;

      setCategoryCards(prev => [...prev, ...newPosts]); // เพิ่มข้อมูลใหม่เข้าไป
      console.log("Fetched posts:", newPosts);
      
      // เช็คว่ามีโพสต์เพิ่มเติมหรือไม่
      setViewMoreBtn(newPosts.length > 0 && page < response.data.totalPages);
    } catch (error) {
      console.log(`Failed to fetch data: ${error}`);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchingData();
  }, [page, selectCategory]);

  useEffect(()=>{
    fetchAllData();
  },[])

  const handleSelectChange = (value) => {
    setSelectCategory(value);
    setCategoryCards([]);
    setPage(1);
  };

  const handleViewMore = () => {
    setPage(prev => prev + 1);
  };

  const filteredArticles = allData.filter(card => 
    card.title.toLowerCase().includes(search.toLowerCase()) ||
    card.description.toLowerCase().includes(search.toLowerCase()) ||
    card.content.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="bg-[#F9F8F6] lg:px-32 px-0">
      <h3 className="mb-8 text-2xl font-[Poppins] font-semibold px-3">
        Latest articles
      </h3>

      <div className="flex items-center flex-col lg:flex-row justify-between bg-[#EFEEEB] py-4 lg:px-6 rounded-md px-3 gap-4">
        <div className="bg-[#EFEEEB] gap-2 font-[Poppins] text-[#75716B] font-medium items-center border-none hidden lg:flex">
          {categories.map((button, index) => {
            const isSelected = button === selectCategory;
            return (
              <button
                key={index}
                className={`py-3 px-5 rounded-md transition-all duration-300 ease-in-out
                          ${isSelected ? "bg-[#DAD6D1] text-[#43403B]" : "bg-[#EFEEEB] text-[#75716B] hover:bg-[#F5F5F4] hover:scale-105"}`}
                onClick={() => handleSelectChange(button)}
                disabled={isSelected}
              >
                {button}
              </button>
            );
          })}
        </div>

        <div className="relative lg:w-1/3">
          <div className="w-full flex items-center bg-white py-2 gap-1 border border-[#DAD6D1] rounded-sm">
            <Input
              placeholder="search"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              value={search}
            />

            <Search className="text-[#26231E] lg:text-[#75716B] size-5" />
          </div>

          {search !== "" && (
            <ul className="absolute z-10 p-4 rounded-lg bg-white mt-2 shadow-lg font-[Poppins]">
              {filteredArticles.length > 0 ? (
                filteredArticles.map((filter) => (
                  <li
                    key={filter.id}
                    className="p-4 hover:bg-[#EFEEEB] hover:text-[#75716B] rounded-lg"
                  >
                    <Link to={`/post/${filter.id}`}>{filter.title}</Link>
                  </li>
                ))
              ) : (
                <li className="py-2 w-[370px] text-[#75716B] rounded-lg text-center">ไม่พบผลลัพธ์</li>
              )}
            </ul>
          )}
        </div>

        <div className="w-full flex flex-col gap-1 text-[#75716B] text-base font-medium font-[Poppins] lg:hidden">
          <label htmlFor="Category">Category</label>
          <Select onValueChange={handleSelectChange}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder={selectCategory} />
            </SelectTrigger>
            <SelectContent>
              {categories.map((categorie, index) => (
                <SelectItem
                  key={index}
                  value={categorie}
                  className="text-[#75716B] text-base font-medium font-[Poppins]"
                >
                  {categorie}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {isLoading && <h2 className="text-center p-40">Loading...</h2>}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-12 px-4 lg:px-0">
        {categorieCards.map((card) => (
          <Link key={card.id} to={`/post/${card.id}`}>
            <BlogCard
              image={card.image}
              title={card.title}
              category={card.category}
              description={card.description}
              author={card.author}
              date={new Date(card.date).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            />
          </Link>
        ))}
      </div>

      {viewMoreBtn && !isLoading && (
        <div className="w-full flex items-center justify-center py-12 lg:py-16">
          <button
            className="bg-transparent hover:bg-transparent text-[#26231E] underline"
            onClick={handleViewMore}
          >
            View More
          </button>
        </div>
      )}
    </section>
  );
}

export default ArticleSection;
