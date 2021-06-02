
function superbowlWin(record){

 const win = record.find(({result}) => result === 'W'); 
if(win){
 return win.year;
  // record === 'W';
  // console.log(win);
//if (win === 'W'){
   // return result.year;
}


}