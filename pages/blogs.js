import React, { useState, useEffect } from "react";

import axios from "axios";
import ReactPaginate from "react-paginate";
import Router, { withRouter } from "next/router";
const Blogs = ({ data }) => {
  // console.log(data);
  // const [isLoading, setLoading] = useState(false); //State for the loading indicator
  // const startLoading = () => setLoading(true);
  // const stopLoading = () => setLoading(false);

  // /*
  //             Posts fetching happens after page navigation,
  //             so we need to switch Loading state on Router events.
  //         */
  // useEffect(() => {
  //   //After the component is mounted set router event handlers
  //   Router.events.on("routeChangeStart", startLoading);
  //   Router.events.on("routeChangeComplete", stopLoading);

  //   return () => {
  //     Router.events.off("routeChangeStart", startLoading);
  //     Router.events.off("routeChangeComplete", stopLoading);
  //   };
  // }, []);
  // const pagginationHandler = (page) => {
  //   // const currentPath = data.router.pathname;
  //   // console.log("path", page);
  //   // // const currentQuery = data.router.query;
  //   // currentQuery.page = page.selected + 1;
  //   // data.router.push({
  //   //   pathname: currentPath,
  //   //   query: currentQuery,
  //   // });
  // };
  // let content = null;
  // if (isLoading) content = <div>Loading...</div>;
  // else {
  //   //Generating posts list
  //   content = (
  //     <div>
  //       {data.blogs.data.map((blog) => {
  //         return <p>{blog.attributes.title}</p>;
  //       })}
  //     </div>
  //   );
  // }
  const [items, setItems] = useState([]);

  const [pageCount, setpageCount] = useState(0);

  let limit = 10;

  useEffect(() => {
    const getComments = async () => {
      const res = await fetch(
        `http://localhost:1337/api/blogs?pagination[page]=1&pagination[pageSize]=${limit}`
        // `https://jsonplaceholder.typicode.com/comments?_page=1&_limit=${limit}`
      );
      const data = await res.json();
      console.log(data);
      const total = data.meta.pagination.total;
      setpageCount(Math.ceil(total / limit));
      // console.log(Math.ceil(total/12));
      setItems(data);
    };

    getComments();
  }, [limit]);
  console.log("items", items);
  const fetchComments = async (currentPage) => {
    const res = await fetch(
      `http://localhost:1337/api/blogs?pagination[page]=${currentPage}&pagination[pageSize]=${limit}`
      // `https://jsonplaceholder.typicode.com/comments?_page=${currentPage}&_limit=${limit}`
    );
    const data = await res.json();
    return data;
  };

  const handlePageClick = async (data) => {
    console.log(data.selected);

    let currentPage = data.selected + 1;

    const commentsFormServer = await fetchComments(currentPage);

    setItems(commentsFormServer);
  };
  return (
    <div>
      {items &&
        items.data.map((blog) => {
          return <p>{blog.attributes.title}</p>;
        })}
      {/* {content} */}
      <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={"..."}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={"pagination justify-content-center"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />
    </div>
  );
};

// export async function getServerSideProps({ query }) {
//   // Fetch data from external API
//   const page = query.page || 1;
//   const res = await fetch(`http://localhost:1337/api/blogs`);
//   const blogs = await res.json();
//   // Pass data to the page via props
//   return {
//     props: {
//       data: {
//         blogs,
//         totalCount: blogs.meta.pagination.total,
//         pageCount: blogs.meta.pagination.pageCount,
//         currentPage: blogs.meta.pagination.page,
//         perPage: blogs.meta.pagination.pageSize,
//       },
//     },
//   };
// }

export default Blogs;

// posts: posts.data.result,
