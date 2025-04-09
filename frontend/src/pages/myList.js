import React, { useState, useEffect } from "react";
import { Box, Typography, Grid } from "@mui/material";
import Navbar from "../components/shared/navbar";
import FooterAccountHomePage from "../components/shared/footerAccountHomePage";

const MyListPage = () => {
  const [allItems, setAllItems] = useState([]);
  const [visibleItems, setVisibleItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const initialBatch = 30;

  useEffect(() => {
    const sampleItems = Array.from({ length: 50 }, (_, i) => ({
      id: i + 1,
      image: "/assets/newOnNetFlix.svg",
      title: `Saved Program ${i + 1}`,
    }));
    setAllItems(sampleItems);
    setVisibleItems(sampleItems.slice(0, initialBatch));
  }, []);

  // Check if content is tall enough, if not – load more until scroll appears
  useEffect(() => {
    let attempts = 0;

    const checkIfMoreNeeded = () => {
      const hasScroll =
        document.documentElement.scrollHeight > window.innerHeight;

      if (!hasScroll && hasMore && attempts < 10) {
        attempts++;

        setVisibleItems((prev) => {
          const next = allItems.slice(prev.length, prev.length + initialBatch);
          if (next.length === 0) setHasMore(false);
          return [...prev, ...next];
        });

        requestAnimationFrame(() => {
          setTimeout(checkIfMoreNeeded, 100);
        });
      }
    };

    requestAnimationFrame(() => {
      setTimeout(checkIfMoreNeeded, 100);
    });
  }, [allItems, hasMore]);

  useEffect(() => {
    const handleScroll = () => {
      const bottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 10;
      if (bottom && hasMore) {
        setTimeout(() => {
          setVisibleItems((prev) => {
            const next = allItems.slice(
              prev.length,
              prev.length + initialBatch
            );
            if (next.length === 0) setHasMore(false);
            return [...prev, ...next];
          });
        }, 300);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [visibleItems, hasMore, allItems]);

  return (
    <Box
      sx={{
        backgroundColor: "#000",
        minHeight: "100vh",
        height: "auto",
        color: "#fff",
        overflowX: "hidden",
        overflowY: "auto",
      }}
    >
      <Navbar />

      <Box sx={{ pt: 12, px: { xs: 2, md: 8 } }}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "1.5rem", md: "3rem" },
            mb: 4,
          }}
        >
          My List
        </Typography>

        <Grid container spacing={2}>
          {visibleItems.map((item) => (
            <Grid item xs={6} sm={4} md={3} lg={2} key={item.id}>
              <Box
                component="img"
                src={item.image}
                alt={item.title}
                sx={{
                  width: "100%",
                  height: "auto",
                  borderRadius: 1,
                  objectFit: "cover",
                  cursor: "pointer",
                }}
              />
              <Typography
                sx={{ mt: 1, fontSize: "0.9rem", textAlign: "center" }}
              >
                {item.title}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Box>

      {!hasMore && <FooterAccountHomePage />}
    </Box>
  );
};

export default MyListPage;
