exports.getProductsList = async (event) => {
  return {
    statusCode: 200,
    Headers:{
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET",
      "Content-Type": "application/json"
    },
    body: JSON.stringify([
    {
      id: "1",
      title: "Milk Chocolate",
      price: 10,
    },
    {
      id: "2",
      title: "Book Story",
      price: 123,
    }]),
};
}

exports.getProductsById = async (event) => {
  products = [
    {
      id: "1",
      title: "Milk Chocolate",
      price: 10,
    },
    {
      id: "2",
      title: "Book Story",
      price: 123,
    }];
    productId = event['pathParameters']['productId'];
    product = products.find((element) => element["id"] == productId);
    if (product == "undefined")
      {
        return {
          statusCode: 404,
          Headers:{
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET",
            "Content-Type": "application/json"
          },
          body: JSON.stringify("Product doesn't found!"),
        }}
        else {
          return {
            statusCode: 200,
            Headers:{
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Methods": "GET",
              "Content-Type": "application/json"},
              body: JSON.stringify(product),
};
}
}
