
// 1. Declare a variable named submissions that is initialized to an array with the following

// objects:

 

const submissions= [

    {name: 'Jane', score: 95, date: '2020-01-24', passed: true},
    
    {name: 'Joe', score: 77, date: '2018-05-14', passed: true},
    
    {name: 'Jack', score: 59, date: '2019-07-05', passed: false},
    
    {name: 'Jill', score: 88, date: '2020-04-22', passed: true}
    
    ]
    
    //  2. Declare a function named addSubmission
    
     
    
    function addSubmission(array, newName, newScore, newDate){
    
        const newObject= {name: newName, score: newScore, date: newDate, passed(){
            for (items of submissions){
                if (submissions.score>=60){
                submissions.passed = true; 
                } else{ submissions.passed =false};
                 return passed;
        }}}
        
            
        const count = submissions.push(newObject);
    
    }
    
    addSubmission(submissions, 'Jake', 50, '2020-11-22',  );
    console.log(submissions)
    
     
    
    // 3. Declare a function named deleteSubmissionByIndex
    
     
    
    function deleteSubmissionByIndex(array, index){
    
        return submissions.name === 'Jack';  
    
    }
    
    console.log(submissions.findIndex(deleteSubmissionByIndex));
    
    const deletedSubmissionByIndex = submissions.splice(2, 1);
    
    // console.log(deletedSubmissionByIndex);
    // console.log(submissions);
    //Jack has been deleted from the array
        
    // 4. deleteSubmissionByName
    
     
    
    function deleteSubmissionByName(array, name){
    
        for (var i =0; i < submissions.length; i++)
    
        if (submissions[i].name === "Jane") {
    
           submissions.splice(i,1);
    
           break;
    
        }
    
        console.log(submissions);
    
    }
    
     
    
    // 5. Declare a function named editSubmission
    function editSubmission(array, index, score){
        const newSubmission= {...submissions, score: newScore}
        for (items of submissions){
            if (submissions.score>=60){
            submissions.passed = true; 
            } else{ submissions.passed =false};
             return passed;
        
        }
    }
    console.log(submissions)


     
    // 6. Declare a function named findSubmissionByName
    
    // ○ Parameter(s): array, name
    
    // ○ Functionality: return the object in the array that has the provided name. Use the
    
    // find method.
    
     function findSubmissionByName(array, name){

        console.log(submissions.find(names => names.name ==="Jill"))

     }
    
    // 7. Declare a function named findLowestScore
     function findLowerstScore(array){
        const min = Math.min(...submissions.score)
        console.log(min)
     }
    // ○ Parameter(s): array
    
    // ○ Functionality: return the object in the array that has the lowest score. Use the
    
    // forEach method to loop through the whole array.
    
     
    
    function getLowestScore(submissions) {
    
        let lowest = null;
    
     
    
        submissions.forEach(function (submission) {
    
          if (lowest === null || lowest.score > submission.score) {
    
            lowest = submission;
    
          }
    
        });
    
     
    
        return lowest;
    
      }
    
    // 8. Declare a function named findAverageScore
    
    
     function findAverageScore(array){
        let scoreSum= 0;
        let scoresFound = 0;
        const len = submissions.length;
        let item = null;
        for(let i = 0; i < len; i++){
            item= submissions[i];
            if (item.found){
                scoreSum=item.score + scoreSum;
                scoresFound = scoresFound =1;
            }

         }

         const averageScore = scoreSum/scoresFound;
         return averageScore
        }

     
    // 9. Declare a function named filterPassing
    
    function filterPassing(array){
    
    let passingScore= array.filter(submission => submission.score >= 60);
    
        return passingScore;
    
    }
    
    let passer = filterPassing(submissions);
    
    console.log(passer)
    
    
    // 10. Declare a function named filter90AndAbove
    
    function filter90AndAbove(array){
    
        let passingScore= array.filter(submission => submission.score >= 90);
    
            return passingScore;
    
        }
    
        let above90 = filterPassing(submissions);
    
        console.log(above90)
    
       
    