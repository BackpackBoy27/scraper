$(document).ready(function(){
    
    const apiKey="3aBCSv1dJcDYYIPscAas6NkwbAtDgUWF"

    $.ajax(`https://api.nytimes.com/svc/topstories/v2/world.json?api-key=${apiKey}`)
    .then(res=>{
        console.log(res.results);

        res.results.forEach(el=>{
            // $('#showData').append()
            // $('#title').text(el.title);
            // $('#description').text(el.abstract)
            console.log(el.title)
            console.log(el.abstract)
        })
    })
    .catch(err=>console.log(err))

});