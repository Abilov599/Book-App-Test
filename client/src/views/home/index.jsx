import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./index.scss";
import fetchBooks from "../../services/getBooks";
import { Button, Input, Select, Space, Spin } from "antd";
import Card from "../../components/card";
const { Search } = Input;

const Home = () => {
  const [count, setCount] = useState(10);
  const [subject, setSubject] = useState("");
  const [order, setOrder] = useState("relevance");
  const dispatch = useDispatch();
  const { loading, error, data } = useSelector((state) => state.getBooksSlice);

  useEffect(() => {
    dispatch(
      fetchBooks(`subject:${subject}&maxResults=${count}&orderBy=${order}`)
    );
  }, [dispatch]);

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  return (
    <main>
      <section id="search-filter">
        <div className="container">
          <h1>Search for Book</h1>
          <div className="search">
            <Search
              placeholder="Book name"
              enterButton="Search"
              size="large"
              loading={loading}
            />
          </div>
          <div className="filter">
            <div className="categories">
              <label htmlFor="categories">Categories</label>
              <Select
                name="categories"
                id="categories"
                defaultValue="all"
                style={{
                  width: 120,
                }}
                onChange={handleChange}
                options={[
                  {
                    value: "all",
                    label: "All",
                  },
                  {
                    value: "art",
                    label: "Art",
                  },
                  {
                    value: "biography",
                    label: "Biography",
                  },
                  {
                    value: "computers",
                    label: "Computers",
                  },
                  {
                    value: "history",
                    label: "History",
                  },
                  {
                    value: "medical",
                    label: "Medical",
                  },
                  {
                    value: "poetry",
                    label: "Poetry",
                  },
                ]}
              />
            </div>
            <div className="sort">
              <label htmlFor="sort">Sorting by</label>
              <Select
                name="sort"
                id="sort"
                defaultValue="Relevance"
                style={{
                  width: 120,
                }}
                onChange={handleChange}
                options={[
                  {
                    value: "relevance",
                    label: "Relevance",
                  },
                  {
                    value: "newest",
                    label: "Newest",
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </section>
      <section id="books">
        <div className="container">
          {loading ? (
            <Space size="middle">
              <Spin size="small" />
              <Spin />
              <Spin size="large" />
            </Space>
          ) : (
            <div className="row">
              {data?.items.map((element, i) => (
                <Card key={i} element={element} />
              ))}
              <div className="btn">
                <Button>Show more</Button>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Home;
