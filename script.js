setTimeout(userReview, 6000)

let comment

let commentList = []

function userReview() {
   comment = prompt("What do you think about my page?")
   commentList.push(comment)
   alert("Thanks for your thoughts!")
}

