import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./index.scss";
import fetchBooks from "../../services/getBooks";
import { Button, Empty, Input, Select, Space, Spin } from "antd";
import Card from "../../components/card";
const { Search } = Input;

const Home = () => {
  const inputValue = useRef();
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(10);
  const [subject, setSubject] = useState("");
  const [order, setOrder] = useState("relevance");
  const dispatch = useDispatch();
  const { loading, error, data } = useSelector((state) => state.getBooksSlice);

  const handleChangeCategories = (value) => {
    setSubject(value);
  };

  const handleChangeSort = (value) => {
    setOrder(value);
  };

  const handleClick = () => {
    setStart((prev) => prev + 30);
    setEnd((prev) => prev + 30);
  };

  const handleSearch = (value) => {
    dispatch(
      fetchBooks(
        `intitle:${value}&startIndex=${start}&maxResults=${end}&orderBy=${order}`
      )
    );
  };

  useEffect(() => {
    if (inputValue.current.input.value === "") {
      dispatch(
        fetchBooks(
          `${subject}startIndex=${start}&maxResults=${end}&orderBy=${order}`
        )
      );
    }
  }, [dispatch, start, end, order, subject]);

  return (
    <main>
      <section id="search-filter">
        <div className="container">
          <h1>Search for Book</h1>
          <div className="search">
            <Search
              ref={inputValue}
              onSearch={handleSearch}
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
                defaultValue=""
                style={{
                  width: 120,
                }}
                onChange={handleChangeCategories}
                options={[
                  {
                    value: "",
                    label: "All",
                  },
                  {
                    value: "subject:art&",
                    label: "Art",
                  },
                  {
                    value: "subject:biography&",
                    label: "Biography",
                  },
                  {
                    value: "subject:computers&",
                    label: "Computers",
                  },
                  {
                    value: "subject:history&",
                    label: "History",
                  },
                  {
                    value: "subject:medical&",
                    label: "Medical",
                  },
                  {
                    value: "subject:poetry&",
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
                onChange={handleChangeSort}
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
        {data?.totalItems ? (
          <p>{`Found ${data?.totalItems} results`}</p>
        ) : (
          <Empty />
        )}
        <div className="container">
          {loading ? (
            <Space size="middle">
              <Spin size="small" />
              <Spin />
              <Spin size="large" />
            </Space>
          ) : (
            <div className="row">
              {data === null ? (
                <Empty />
              ) : (
                data?.items?.map((element, i) => (
                  <Card key={i} element={element} />
                ))
              )}
              <div className="btn">
                {data?.items && !(end >= data?.totalItems) ? (
                  <Button onClick={() => handleClick()}>Show more</Button>
                ) : null}
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Home;
