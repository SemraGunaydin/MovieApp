const defaultRequest = (req,res)=>{
    //cevabın durum kodunu belirle
    res.statusCode=404;

    // cevaba gonderilecek icerigin tipini header olarak ekler
     // res.setHeader("content type","application/json");

    // cevabin icerigini belirle
    res.write(JSON.stringify({message: " istek adresi tanimsiz"}));

    //cevabi musteriye gonder
    return res.end();
};

module.exports =defaultRequest;