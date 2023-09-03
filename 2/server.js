const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/numbers', (req,res) => {
    const urls = req.query.url;
    if(!urls)
    {
        return res.status(400);
    }
    urls.forEach(url => {
        const numbers = extractNumberFromUrl(url);

        numbers.forEach(number => {
            uniqueNumber.add(number);
        })
    })

    res.json({
        numbers : uniqueNumber
    });
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});