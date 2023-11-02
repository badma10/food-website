import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome To My Resturant</Typography>
        <p>
        Food is the fuel that keeps us running throughout the day, and it also supports the body’s metabolic process and ensures we remain healthy. Children need to understand the importance of food to build healthy eating habits in the long term. They also need to learn that the body needs energy from healthy food to conduct day-to-day activities. Writing an essay on food in English is a great way to get kids acquainted with important information on the different food categories and their role in our diets. In this blog, we have put together a few examples of essays on food for classes 1, 2 & 3 that are easy to understand and informative.
        </p>
        <br />
        <p>
        Food is one of the most basic needs for all human beings, apart from clothes and shelter. It is necessary to give us the energy to function and maintain the bodily process that keeps us alive. To stay healthy, eating various foods that provide essential nutrition for the body is crucial. The body needs carbohydrates, proteins, fats, fiber, vitamins, and minerals to maintain all the organs functioning well. Excess junk deprives us of healthy nutrition, leading to obesity and deficiency diseases. The best diet balances different types of food and minimises junk.
        </p>
      </Box>
    </Layout>
  );
};

export default About;
