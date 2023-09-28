function search() {
          const searchBox = document.getElementById("search-item")
          const containerProduct = document.getElementById("product-list")
          const product = document.querySelectorAll(".product")
          const productName = document.getElementsByTagName("h2")

          for (var i = 0; i < productName.length; i++) {
                    let match = product[i].getElementsByTagName("h2")[0]

                    if (match) {
                              let textValue = match.textContent || match.innerHTML
                              // If the product is found, display on a web page else display = none
                              if (textValue.toUpperCase().indexOf(searchBox.value.toUpperCase()) > -1) {
                                        product[i].style.display = ""
                              } else {
                                        product[i].style.display = "none"
                              }
                    }
          }
}

document.querySelector("#search-item").addEventListener("keyup", () => search())