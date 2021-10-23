import {categoryActions} from './category-slice'


  export const showMEN = () => {
      return (dispatch) => {
           dispatch(
              categoryActions.showCategories({
                  categories: {
                    shoes:['Sneakers','Running Shoes','Sandals & SLides','Soccer Cleats & Shoes','Basketball Shoes','Golf Shoes','Footballl Cleats','Tennis Shoes','Skateboarding Shoes', 'Baseball CLeats & Shoes', 'Shoes $100 & Under'],
                    clothing:["Hoodies & Sweatshirts", "Pants", "Tracksuits", "Fleece","T-Shirts & Tops","Shorts",'Jerseys',"Sweatsuits","Socks & Underwear", "Big & Tall"],
                    accessories:['Bags & Backpacks', 'Balls','Face Covers', 'Gloves', 'Hats & Beanies', "Phone Cases", "Socks", "Sunglasses","Underwear","Water Bottles" ],
                    sports:['Baseball',"Basketball","Football",'Golf',"Hiking & Outdoor","Hockey","Running","Skateboarding","Soccer","Swim","Tennis","Volleyball","Workout",'Yoga'],

                  }
              })
          )
  
      };
    };
    export const showWOMEN = () => {
        return (dispatch) => {
             dispatch(
                categoryActions.showCategories({
                    categories: {
                        shoes:['zvecka'],
                        clothing:["Hoodies & Sweatshirts", "Pants", "Tracksuits", "Fleece","T-Shirts & Tops","Shorts",'Jerseys',"Sweatsuits","Socks & Underwear", "Big & Tall"],
                        accessories:['Bags & Backpacks', 'Balls','Face Covers', 'Gloves', 'Hats & Beanies', "Phone Cases", "Socks", "Sunglasses","Underwear","Water Bottles" ],
                        sports:['Baseball',"Basketball","Football",'Golf',"Hiking & Outdoor","Hockey","Running","Skateboarding","Soccer","Swim","Tennis","Volleyball","Workout",'Yoga'],
                    }
                })
            )
    
        };
      };
      export const showKIDS = () => {
        return (dispatch) => {
             dispatch(
                categoryActions.showCategories({
                    categories: {
                      shoes:['Sneakers','Running Shoes','Sandals & SLides','Soccer Cleats & Shoes','Basketball Shoes','Golf Shoes','Footballl Cleats','Tennis Shoes','Skateboarding Shoes', 'Baseball CLeats & Shoes', 'Shoes $100 & Under'],
                      clothing:["Hoodies & Sweatshirts", "Pants", "Tracksuits", "Fleece","T-Shirts & Tops","Shorts",'Jerseys',"Sweatsuits","Socks & Underwear", "Big & Tall"],
                      accessories:['Bags & Backpacks', 'Balls','Face Covers', 'Gloves', 'Hats & Beanies', "Phone Cases", "Socks", "Sunglasses","Underwear","Water Bottles" ],
                      sports:['Baseball',"Basketball","Football",'Golf',"Hiking & Outdoor","Hockey","Running","Skateboarding","Soccer","Swim","Tennis","Volleyball","Workout",'Yoga'],
  
                    }
                })
            )
    
        };
      };
      export const showBRANDS = () => {
        return (dispatch) => {
             dispatch(
                categoryActions.showCategories({
                    categories: {
                      shoes:['Sneakers','Running Shoes','Sandals & SLides','Soccer Cleats & Shoes','Basketball Shoes','Golf Shoes','Footballl Cleats','Tennis Shoes','Skateboarding Shoes', 'Baseball CLeats & Shoes', 'Shoes $100 & Under'],
                      clothing:["Hoodies & Sweatshirts", "Pants", "Tracksuits", "Fleece","T-Shirts & Tops","Shorts",'Jerseys',"Sweatsuits","Socks & Underwear", "Big & Tall"],
                      accessories:['Bags & Backpacks', 'Balls','Face Covers', 'Gloves', 'Hats & Beanies', "Phone Cases", "Socks", "Sunglasses","Underwear","Water Bottles" ],
                      sports:['Baseball',"Basketball","Football",'Golf',"Hiking & Outdoor","Hockey","Running","Skateboarding","Soccer","Swim","Tennis","Volleyball","Workout",'Yoga'],
  
                    }
                })
            )
    
        };
      };
      export const showSPORTS = () => {
        return (dispatch) => {
             dispatch(
                categoryActions.showCategories({
                    categories: {
                      shoes:['Sneakers','Running Shoes','Sandals & SLides','Soccer Cleats & Shoes','Basketball Shoes','Golf Shoes','Footballl Cleats','Tennis Shoes','Skateboarding Shoes', 'Baseball CLeats & Shoes', 'Shoes $100 & Under'],
                      clothing:["Hoodies & Sweatshirts", "Pants", "Tracksuits", "Fleece","T-Shirts & Tops","Shorts",'Jerseys',"Sweatsuits","Socks & Underwear", "Big & Tall"],
                      accessories:['Bags & Backpacks', 'Balls','Face Covers', 'Gloves', 'Hats & Beanies', "Phone Cases", "Socks", "Sunglasses","Underwear","Water Bottles" ],
                      sports:['Baseball',"Basketball","Football",'Golf',"Hiking & Outdoor","Hockey","Running","Skateboarding","Soccer","Swim","Tennis","Volleyball","Workout",'Yoga'],
  
                    }
                })
            )
    
        };
      };
      export const showCOLLECTION = () => {
        return (dispatch) => {
             dispatch(
                categoryActions.showCategories({
                    categories: {
                      shoes:['Sneakers','Running Shoes','Sandals & SLides','Soccer Cleats & Shoes','Basketball Shoes','Golf Shoes','Footballl Cleats','Tennis Shoes','Skateboarding Shoes', 'Baseball CLeats & Shoes', 'Shoes $100 & Under'],
                      clothing:["Hoodies & Sweatshirts", "Pants", "Tracksuits", "Fleece","T-Shirts & Tops","Shorts",'Jerseys',"Sweatsuits","Socks & Underwear", "Big & Tall"],
                      accessories:['Bags & Backpacks', 'Balls','Face Covers', 'Gloves', 'Hats & Beanies', "Phone Cases", "Socks", "Sunglasses","Underwear","Water Bottles" ],
                      sports:['Baseball',"Basketball","Football",'Golf',"Hiking & Outdoor","Hockey","Running","Skateboarding","Soccer","Swim","Tennis","Volleyball","Workout",'Yoga'],
  
                    }
                })
            )
    
        };
      };