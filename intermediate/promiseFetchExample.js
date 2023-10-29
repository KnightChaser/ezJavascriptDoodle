function fetchDataFromAPI(apiURL) {
    return new Promise((resolve, reject) => {
      fetch(apiURL)
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then(data => {
          resolve(data);
        })
        .catch(error => {
          reject(error);
        });
    });
  }
  
  const apiURL = 'https://jsonplaceholder.typicode.com/posts';
  
  fetchDataFromAPI(apiURL)
    .then(data => {
      data.forEach(post => {
        console.log(`Post #${post.id}: [${post.title}] ${post.title}`);
      });
    })
    .catch(error => {
      console.error(`Error: ${error}`);
    });
  