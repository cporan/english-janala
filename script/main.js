const loadLessons = () => {
    fetch("https://openapi.programming-hero.com/api/levels/all")
    .then(res => res.json())
    .then(json =>displayLesson(json.data))
};

const loadLevelWord = (id)=>{
    
    const url =`https://openapi.programming-hero.com/api/level/${id}`
    console.log(url)
    fetch(url)
    .then(res => res.json())
    .then(data=> displayLevelWord(data.data))
}


// const displayLevelWord= (word) => {
    
//     const  wordContainer = document.getElementById('wordContainer')
//     wordContainer.innerHTML= "";
//     word.forEach(word =>{
//         const card = document.createElement("div")
//         card.innerHTML=`
//         <p>chapp    </p>
        
//         `;
//         wordContainer.append("card")
//     })
// }

//  "id": 19,
//             "level": 1,
//             "word": "Sincere",
//             "meaning": "সত্‍ / আন্তরিক",
//             "pronunciation": "সিনসিয়ার"





const displayLevelWord = (words)=>{
const wordCon = document.getElementById("wordContainer")
wordCon.innerHTML= '';
    words.forEach((words) => {
        const carde = document.createElement('div')
        carde.innerHTML= `
               <div class="cardsForWord bg-white rounded-xl shadow-sm text-center py-10 px-5 space-y-4">
                <h2 class="font-bold text-2xl">${words.word}</h2>
                <p class="font-semibold">Meaning / pronumchueation</p>
                <div class="font-medium text-2xl font-bangla">${words.meaning} / ${words.pronunciation} </div>
                <div class="flex justify-between items-center">
                    <button class="btn bg-[#1A91FF10] hover:bg-[#1A91FF80]"><i class="fa-solid fa-circle-info"></i></button>
                    <button class="btn bg-[#1A91FF10] hover:bg-[#1A91FF80]"><i class="fa-solid fa-volume-high"></i></button>

                </div>
            </div>


        `;
        wordCon.appendChild(carde)
    })
}




const displayLesson = (lesson)=> {
const containerDiv = document.getElementById("lavelContainer")
// containerDiv.innerHTML='';
for(let les of lesson){
    console.log(les)
    const btnDiv = document.createElement("div");
    btnDiv.innerHTML=`
                        <button onclick="loadLevelWord(${les.level_no})" href="" class="btn btn-outline btn-primary">
                            <i class="fa-solid fa-right-from-bracket"></i>Lesson - ${les.level_no}</button>
    
    
    `;

    containerDiv.appendChild(btnDiv);
}


}
loadLessons();