import logo from './logo.svg';
import { useState } from 'react'
import {Box,Typography,Grid,Button,Paper} from '@mui/material'
import Botton from './comp/button'
import './App.css';

function App() {
    const [data,setData] = useState({
      btn:'Back to quiz',
      Quiz:'ReactQuizz',
      totalQues:5,
      Question:[
        {
            question : "Who designed Pakistan's national flag _____",
            option : ["Ameer-ud-din Khidwai","Allama Iqbal","Sir Syed Ahmed Khan","None of these"],
            answer: "Ameer-ud-din Khidwai"
        },{
            question : "Name the Highest peak of Pakistan _____",
            option : ["Karakoram","Mount Everst","K-2 Mountain","None of these"],
            answer: "K-2 Mountain"
        },{
            question : "Which is the national language of Pakistan _____",
            option : ["A & B both","Sindhi","Punjabi","Urdu"],
            answer: "Urdu"
        },{
            question : "Which is the national bird of Pakistan _____",
            option : ["parrot","Chakor","pigeon","Chicken"],
            answer: "Chakor"
        },{
            question : "Which is the national flower of Pakistan _____",
            option : ["Jasmine","Rose","sunflower","None of these"],
            answer: "Jasmine"
        }
       ]
    })
    const [indexNum,setIndex] = useState(0)
    var [txt,setTxt] = useState('')
    const [marks,setMakrs] = useState(0)
    const [abc,setAbc]= useState()
    const [score,setScore] = useState(false)

    const {Question,Quiz,btn} = data
    
    var  setTxt =(e)=>{
          if(e === Question[indexNum].answer){
            setMakrs(marks +1)
          }
          
          if(indexNum + 1 < Question.length){
            setIndex(indexNum+1)
          }else{
            setScore(true)
            
            
          }
          
        }
        
        let againStart = ()=>{
          setScore(false)
          setIndex(0)
          setMakrs(0)
        }
        console.log(marks)
        console.log(abc)
  return (
      <div>
       <Box>{score ? (
          <div> {abc}
            <Box sx={{display:'flex',justifyContent:'center',width:"100%",height:'100vh',alignItems:'center'}}>
              <Paper elevation={24}>

              <Typography variant='h5'> Marks: {marks}</Typography>
              <Typography variant='h5'> percentage: {(marks/5 )*100} %</Typography> 
             <Typography variant='h5'> Score: {( marks / 5*100)  >= 50 ?( <Typography variant='p'>You pass <br /> Please Try Again </Typography> ) :( <Typography  variant='p'>You fail </Typography> ) }  </Typography>
              
              <Button  onClick={againStart}>{btn}</Button>
              </Paper>

            </Box>
          </div>
       ) : (
         <div>

         <Box sx={{backgroundColor:'black',color:'white'}}>
      <Typography sx={{textAlign:'center'}} variant='h2'>
          {Quiz}
      </Typography>
      <Typography variant='h6'>
     Current    {indexNum +1 }  / Total   {Question.length} 
      </Typography>
         </Box>

         <Box>
          <Typography sx={{textAlign:'center'}} variant='h3'>{Question[indexNum].question}</Typography>
         </Box>

         <Box>
           
          <Botton sx={{width:'100%'}} val={setTxt} data={Question[indexNum].option}/>
           
         </Box>
         </div>
      )
    }
    </Box>
      </div>
  );
}

export default App;
