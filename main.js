

let result = document.getElementById('button')
result.addEventListener('click',

    async function foo() {
        try {
            let countryname = document.getElementById('countryName').value

            let data = await fetch(`https://api.covid19api.com/dayone/country/${countryname}`)
            let res = await data.json();
            console.log(res)

            let totcase = res.length - 1

            let active = res[totcase].Active
            console.log(active)
            let deaths = res[totcase].Deaths
            console.log(deaths)
            let confirm = res[totcase].Confirmed
            console.log(confirm)
            let recover = res[totcase].Recovered
            console.log(recover)




            let output = document.getElementById('count')
            output.innerHTML = `<div class="col-sm-6 mx-auto m-0 p-0">
        <div class="card  mr-2  ">
           <div class="row g-0">
                <div class="col-md-4">
                    <img src="https://www.statnews.com/wp-content/uploads/2020/02/Coronavirus-CDC-645x645.jpg"
                        class="img-fluid rounded-start  " alt="weather image">
               </div>
               <div class="col-md-8 ">
                   <div id =" weatherDetails" class= "card-body">
                   
                       <p class="card-text"><small class="text-muted">total active: ${active}  </small> </p>
                      
                      <p class="card-text"><small class="text-muted">total death: ${deaths} </small> </p>
                   
                      <p class="card-text"><small class="text-muted">     total confirm: ${confirm}</small> </p>
                   
                      <p class="card-text"><small class="text-muted"> total recovered: ${recover}</small> </p>
            
                   </div>
                </div>
            </div>
        </div>`
        }
        catch (err) {
            alert("Invalid input")
        }
    })
