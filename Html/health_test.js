//Grand Parent
class health
{
  constructor()
  {
    var name=prompt("Enter your name");
    var age=prompt("Enter your age");
    document.write("Name : ",name,"<br>","Age : ",age,"<br><br>");
  }

Health()
{
  var i = prompt("1-BP , 2-Sugar , 3-salt , 4-Fat , 5-HP");
   switch(i)
   {
      case '1':
      var bp=prompt("Enter BP result") 
     
      if(bp<90){
      document.write("BP level = ",bp,"<br>");
      document.write("You have <b>Low Blood Pressure</b>","<br><br>")
      document.write("<u>Medication & Diet plan : </u>","<br><br>","Take midodrine(Orvaten) medicine.","<br>")
      document.write("Drink Plenty of Fluids. When you're dehydrated, your blood volume is reduced, which causes your blood pressure to decrease.","<br>")
      document.write("Eat Salty Foods","<br>","Drink Caffeine","<br>","Boost Your B12 Intake","<br>","Reduce Meal Size","<br>","Easy On The Alcohol","<br><br>")
      }
      else if(bp>=90 && bp<=120){
        document.write("BP level = ",bp,"<br>");
      document.write("You have a <b>Normal</b> level of BP","<br><br>");
      document.write("<u>Medication & Diet plan : </u>","You don't need any medicine. Follow the regular diet","<br><br>");
      }
      else if(bp>=121 && bp<=130){
        document.write("BP level = ",bp,"<br>");
      document.write("You have <b>High Blood Pressure : Stage 1</b>","<br><br>"); 
      document.write("<u>Medication & Diet plan : </u>","<br><br>","Take Lisinopril tablet.","<br>")
      document.write("Vegetables: about 4-5 servings per day.","<br>","Fruits: about 4-5 servings per day.","<br>","Carbohydrates (mainly whole grains): about seven servings per day.",
      "<br>","Low-fat dairy products: about two servings per day","<br>","Lean meat products: about two or fewer servings per day","<br><br>",)
      }
      else if(bp>=131 && bp<=140){
        document.write("BP level = ",bp,"<br>");
        document.write("You have <b>High Blood Pressure : Stage 2</b>","<br><br>",);
        document.write("<u>Medication & Diet plan : </u>","<br><br>","Take  Diuretics tablet & ACE inhibitors.","<br>")
        document.write("Vegetables: about 4-5 servings per day.","<br>","Fruits: about 4-5 servings per day.","<br>","Carbohydrates (mainly whole grains): about seven servings per day.",
      "<br>","Low-fat dairy products: about two servings per day","<br>","Lean meat products: about two or fewer servings per day","<br><br>",)
      }
      else {
        document.write("BP level = ",bp,"<br>");
        document.write("You have <b>Hypertensive crisis</b>","<br><br>",);
        document.write("<u>Medication & Diet plan : </u>","<br><br>","Take hydralazine & labetalol tablet.","<br>")
        document.write("Vegetables: about 4-5 servings per day.","<br>","Fruits: about 4-5 servings per day.","<br>","Carbohydrates (mainly whole grains): about seven servings per day.",
      "<br>","Low-fat dairy products: about two servings per day","<br>","Lean meat products: about two or fewer servings per day","<br><br>",)

      };break;
       
  case '2':
       var k=prompt("1 - Before , 2 - After eating")
       switch(k)
       {
    //before 
    case '1':
 var sugar=prompt("enter sugar value(fasting)")
 
  if(sugar>=70 && sugar<=100){
    document.write("Sugar level : before eating = ",sugar,"<br>") 
    document.write("You are having a <b>normal</b> level of sugar","<br><br>")
    document.write("<u>Medication & Diet plan : </u>","You don't need any medicine. Follow the regular diet","<br><br>");
  }
  else if(sugar<70){
    document.write("Sugar level : before eating = ",sugar,"<br>")
    document.write("You have <b>Low Blood Sugar(hypoglycemia)</b>","<br><br>");
    document.write("<u>Medication & Diet plan : </u>","<br><br>","Take  Glimepiride tablet","<br>")
    document.write("Eat small meals every 3 to 4 hours throughout the day, rather than 3 large meals per day. Avoid foods high in saturated fats or trans fats.",
    "<br>","Choose foods with a low glycemic index score.","<br>","Choose complex carbohydrates over simple carbohydrates","<br>","Eat lean protein.",
    "<br>","Eat foods high in soluble fiber","<br><br>")
  }
  else if(sugar>=101 && sugar<=125){
    document.write("Sugar level : before eating = ",sugar,"<br>")  
    document.write("You have <b>Prediabetes</b>","<br><br>");
    document.write("<u>Medication & Diet plan : </u>","<br><br>","Take  Metformin.","<br>")
    document.write("Eat small meals every 3 to 4 hours throughout the day, rather than 3 large meals per day. Avoid foods high in saturated fats or trans fats.",
    "<br>","Choose foods with a low glycemic index score.","<br>","Choose complex carbohydrates over simple carbohydrates","<br>","Eat lean protein.",
    "<br>","Eat foods high in soluble fiber","<br><br>")
  }
  else
  {
    document.write("Sugar level : before eating = ",sugar,"<br>") 
    document.write("You have <b>Diabetes</b>","<br><br>");
    document.write("<u>Medication & Diet plan : </u>","<br><br>","Take  Metformin (Fortamet, Glumetza, others).","<br>")
    document.write("Eat small meals every 3 to 4 hours throughout the day, rather than 3 large meals per day. Avoid foods high in saturated fats or trans fats.",
    "<br>","Choose foods with a low glycemic index score.","<br>","Choose complex carbohydrates over simple carbohydrates","<br>","Eat lean protein.",
    "<br>","Eat foods high in soluble fiber","<br><br>")
  };break;

  //after eating
  case '2':
  var sugar=prompt("enter sugar value(after eating)")
 
  if(sugar>=70 && sugar<=140){
    document.write("Sugar level : after eating = ",sugar,"<br>")
    document.write("You are having a <b>Normal</b> level of sugar","<br><br>")
    document.write("<u>Medication & Diet plan : </u>","You don't need any medicine. Follow the regular diet","<br><br>");
  }
  else if(sugar<70){
    document.write("Sugar level : after eating = ",sugar,"<br>")
    document.write("You have <b>Low Blood Sugar(hypoglycemia)</b>","<br><br>");
    document.write("<u>Medication & Diet plan : </u>","<br><br>","Take  Glimepiride tablet","<br>")
    document.write("Eat small meals every 3 to 4 hours throughout the day, rather than 3 large meals per day. Avoid foods high in saturated fats or trans fats.",
    "<br>","Choose foods with a low glycemic index score.","<br>","Choose complex carbohydrates over simple carbohydrates","<br>","Eat lean protein.",
    "<br>","Eat foods high in soluble fiber","<br><br>")

  }
  else if(sugar>=141 && sugar<=200){
    document.write("Sugar level : after eating = ",sugar,"<br>")
    document.write("You have <b>Prediabetes</b>","<br><br>");
    document.write("<u>Medication & Diet plan : </u>","<br><br>","Take  Metformin.","<br>")
    document.write("Eat small meals every 3 to 4 hours throughout the day, rather than 3 large meals per day. Avoid foods high in saturated fats or trans fats.",
    "<br>","Choose foods with a low glycemic index score.","<br>","Choose complex carbohydrates over simple carbohydrates","<br>","Eat lean protein.",
    "<br>","Eat foods high in soluble fiber","<br><br>")
  }
  else
  {
    document.write("Sugar level : after eating = ",sugar,"<br>")
    document.write("You have <b>Diabetes</b>","<br><br>");
    document.write("<u>Medication & Diet plan : </u>","<br><br>","Take  Metformin (Fortamet, Glumetza, others).","<br>")
    document.write("Eat small meals every 3 to 4 hours throughout the day, rather than 3 large meals per day. Avoid foods high in saturated fats or trans fats.",
    "<br>","Choose foods with a low glycemic index score.","<br>","Choose complex carbohydrates over simple carbohydrates","<br>","Eat lean protein.",
    "<br>","Eat foods high in soluble fiber","<br><br>")
  };break;
       };break;
  //salt
      case '3':
      var salt=prompt("Enter sodium test result") 
     
      if(salt<145){
      document.write("salt level = ",salt,"<br>");
      document.write("You have <b>Hyponatremia</b>","<br>");
      document.write("<u>Medication & Diet plan : </u>","<br><br>","Take  Tolvaptan.","<br>")
      document.write("Any fresh fruits, like apples, oranges, or bananas","<br>","Frozen vegetables without added butter or sauce","<br>",
      "Canned vegetables that are low in sodium or have no salt added — you can rinse them off to remove some of the sodium","<br><br>")
      }
      else if(salt>=135 && salt<=145){
      document.write("salt level = ",salt,"<br>");
      document.write("Your sodium level is <b>Normal</b>","<br>");
      document.write("<u>Medication & Diet plan : </u>","You don't need any medicine. Follow the regular diet","<br><br>");
      }
      else {
        document.write("salt level = ",salt,"<br>");
        document.write("You have <b>Hyponatremia</b>","<br>");
        document.write("<u>Medication & Diet plan : </u>","<br><br>","Take  Tolvaptan.","<br>")
        document.write("Any fresh fruits, like apples, oranges, or bananas","<br>","Frozen vegetables without added butter or sauce","<br>",
      "Canned vegetables that are low in sodium or have no salt added — you can rinse them off to remove some of the sodium","<br>",
      "Low-sodium canned fish","<br><br>")
      };break;

//cholesterol
      case '4':
      var chole=prompt("Enter cholesterol result") 
     
      if(chole<200){
      document.write("Cholesterol level = ",chole,"<br>");
      document.write("Your Cholesterol level is <b>Normal</b>","<br>");
      document.write("<u>Medication & Diet plan : </u>","You don't need any medicine. Follow the regular diet","<br><br>");
      }
      else if(chole>=200 && chole<=239){
      document.write("Cholesterol level = ",chole,"<br>");
      document.write("You are at the <b>risk</b> of cholesterol","<br><br>");
      document.write("<u>Medication & Diet plan : </u>","<br><br>","Take  Statins.","<br>")
      document.write("Any fresh fruits, like apples, oranges, or bananas","<br>","Frozen vegetables without added butter or sauce","<br>",
      "Canned vegetables that are low in sodium or have no salt added — you can rinse them off to remove some of the sodium","<br>",
      "Low-sodium canned fish","<br><br>")

      }
      else {
        document.write("Cholesterol level = ",chole,"<br>");
        document.write("You are at the <b>dangerous level of cholesterol</b>");
        document.write("<u>Medication & Diet plan : </u>","<br><br>","Take  Statins.","<br>")
        document.write("Any fresh fruits, like apples, oranges, or bananas","<br>","Frozen vegetables without added butter or sauce","<br>",
      "Canned vegetables that are low in sodium or have no salt added — you can rinse them off to remove some of the sodium","<br>",
      "Low-sodium canned fish","<br><br>")
      };break;

//Hemoglobin      
      case '5':
      var HP=prompt("Enter Hemoglobin result") 
     
      if(HP<13){
      document.write("Hemoglobin level = ",HP,"<br>");
      document.write("Your have very <b>low level of Hemoglobin</b>","<br><br>");
      document.write("<u>Medication & Diet plan : </u>","<br><br>","Take  Erythropoietin .","<br>")
      document.write("Any fresh fruits, like apples, oranges, or bananas","<br>","Frozen vegetables without added butter or sauce","<br>",
      "Canned vegetables that are low in sodium or have no salt added — you can rinse them off to remove some of the sodium","<br>",
      "Low-sodium canned fish","<br><br>")

      }
      else if(HP>=13 && HP<=17){
      document.write("Hemoglobin level = ",HP,"<br>");
      document.write("Your Hemoglobin level is <b>Normal</b>","<br><br>");
      document.write("<u>Medication & Diet plan : </u>","You don't need any medicine. Follow the regular diet","<br><br>");
      }
      else {
        document.write("Hemoglobin level = ",HP,"<br>");
        document.write("Your have <b>high level of Hemoglobin</b>","<br><br>");
        document.write("<u>Medication & Diet plan : </u>","<br><br>","Take  Erythropoietin .","<br>")
        document.write("Any fresh fruits, like apples, oranges, or bananas","<br>","Frozen vegetables without added butter or sauce","<br>",
      "Canned vegetables that are low in sodium or have no salt added — you can rinse them off to remove some of the sodium","<br>",
      "Low-sodium canned fish","<br><br>")
      };break;

      default: {
        document.write("Invalid Option");
      }  
    }   
  }
}
class child extends health
{
  bmi()
  {
    var h=prompt("Enter your height")
    this.h=h;
   var w=prompt("Enter your weight")
    this.w=w; 
    this.b=this.w/this.h/this.h*10000;
    document.write("Your height : ",h,"cm","<br>","Your weight : ",w,"kg","<br><br>")
    document.write("BMI : ",this.b,"<br><br>");
    return this.b;
  }
  presc()
  {
      if(r<18.5)
      {
          document.write("You are <b>Underweight</b>","<br><br>")
          document.write("<u>How to put on weight safely : </u>","<br>")
          document.write("Eating at least 5 portions of a variety of fruit and vegetables every day.","<br>")
          document.write("Basing meals on potatoes, bread, rice, pasta or other starchy carbohydrates","<br>")
          document.write("Having some dairy or dairy alternatives (such as soya drinks and yoghurts)","<br>")
          document.write("Eating some beans, pulses, fish, eggs, meat and other protein","<br>")
      }
      else if(r>=18.5 && r<=24.9)
      {
          document.write("You are in <b>Normal</b> weight","<br><br>")
          document.write("Follow the regular diet","<br>")
      }
      else if(r>=25 && r<=29.9)
      {
          document.write("You are <b>Overweight</b>","<br><br>")
          document.write("You need to take high fiber low fat diet followed by detox diet","<br>")
          document.write("Drink lot of water everyday","<br>")
          document.write("Take small and frequent meals at regular intervals","<br>")
          document.write("Avoid outside food completely","<br>")
          document.write("Do crunches and pushups daily to reduce belly fat","<br>")
      }
      else if(r>=30 && r<=35)
      {
          document.write("You are <b>Obese</b>","<br><br>")
          document.write("You should visit doctors regularly","<br>")
          document.write("You need to take high fiber low fat diet followed by detox diet","<br>")
          document.write("Drink lot of water everyday","<br>")
          document.write("Take small and frequent meals at regular intervals","<br>")
          document.write("Avoid outside food completely","<br>")
          document.write("Do crunches and pushups daily to reduce belly fat","<br>")
      }
      else
      {
          document.write("You have <b>Morbid Obesity</b>","<br><br>")
          document.write("You should visit doctors regularly","<br>")
          document.write("You need to take high fiber low fat diet followed by detox diet","<br>")
          document.write("Drink lot of water everyday","<br>")
          document.write("Take small and frequent meals at regular intervals","<br>")
          document.write("Avoid outside food completely","<br>")
          document.write("Do crunches and pushups daily to reduce belly fat","<br>")
      }
  }
}

const test_result=new child()
test_result.Health()
var r=test_result.bmi()
test_result.presc()



