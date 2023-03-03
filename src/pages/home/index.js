import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { SearchAppBar } from "../../components";
import { useNavigate } from "react-router-dom";
import moment from "moment";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
export default function BasicGrid() {
  const navigate = useNavigate();
  const [usersList, setUsersList] = useState([]);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/everything?q=apple&from=2023-03-02&to=2023-03-02&sortBy=popularity&apiKey=cdcb29843045426cb8a49ef77470cb7e"
    )
      .then((response) => response.json())
      .then((json) => {
        setUsersList(json.articles);
        setLoader(false);
      });
  }, []);
console.log(usersList)
  return (
    <div>
      <SearchAppBar />
      {loader ? (
        <h1>Loading ....</h1>
      ) : (
        <Grid container spacing={2}>
          {usersList.length === 0 ? (
            <h1>No Data available .... </h1>
          ) : (
            usersList.map((v, i) => {
              return (
                <Grid item xl={3} lg={3} md={4} sm={6} xs={12} key={i}>
                  <Item>
                    <h1>
                      {v.title.slice(0, 30)} {v.title.length > 30 && "..."}
                    </h1>
                    <p>{v.description}</p>
                    <p>{moment(v.publishedAt).format("MMMM DD, YYYY")}</p>
                    <img src={v.urlToImage} style={{ width: "100%" }} />
                    <button
                      onClick={() => navigate(`/blog-details-2/${v.title}`)}
                    >
                      View
                    </button>
                  </Item>
                </Grid>
              );
            })
          )}
        </Grid>
      )}
    </div>
  );
}
