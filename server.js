require("dotenv").config;
const express = require("express");

//importing routes


const PORT = process.env.PORT || 3000;

// using middleware
app.use(express.json());

//session is not needed  (This is the place for the session)

//Routes




//error handler





//Like session I am not using the passport but this is the place for the passport


// Routes





//----------------------------End of middleware------------------------------

//Server listening

app.listen(PORT,() => {
    console.log(`App is running on http://localhost:${PORT}`);
});