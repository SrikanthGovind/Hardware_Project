import {createSlice} from '@reduxjs/toolkit'
import { configureStore} from '@reduxjs/toolkit'
import data from './data.json'
import { ProductState ,CartState} from './types'
const productsdata=data.products

const Products=createSlice({
      name:'products',
      initialState:{
        items:[...productsdata],
        openOverlay:false,
        overlayItem:{} ,
        selectedProduct:0,
        searchedProducts:[],
        checkedItems:[],
        wishlistItems:[]
      }  as ProductState,
      reducers:{
        setOpenOverlay:(state)=>{
           state.openOverlay=!state.openOverlay
        },
        setOverlayItem:(state,action)=>{
            state.overlayItem=action.payload
        },
        setSelectedProduct:(state,action)=>{
            state.selectedProduct=action.payload
        },
        setsearchedProducts:(state,action)=>{
              const query=action.payload;
              const filteredproducts=state.items.filter((ele)=>ele.category?.toLocaleLowerCase().includes(query.toLocaleLowerCase()) ||
			  ele.name?.toLocaleLowerCase().includes(query.toLocaleLowerCase()))
              state.searchedProducts=filteredproducts
        },
        setcheckedItems: (state, action) => {
          const { key, value } = action.payload;
         const existingItem = state.checkedItems.find(item => item?.key === key);
        
         if(Array.isArray(action.payload)){
             state.checkedItems=action.payload
              return
         }
         if (existingItem) {
          if (!existingItem.values) {
            existingItem.values = [];
          }
          if (!existingItem.values.includes(value)) {
            existingItem.values.push(value);
          }
        } else {
          state.checkedItems.push({ key, values: [value] });
        }
        },
        setWishlistItems:(state,action)=>{
          const item=action.payload
          const modifyItem=state.items.map((ele)=>{
            if(ele.id===item.id){
               return {
                ...ele,
                isAdded:true,
               }
            }
            return ele
          })
		     const modifysearchItem=state.searchedProducts.map((ele)=>{
            if(ele.id===item.id){
               return {
                ...ele,
                isAdded:true,
               }
            }
            return ele
          })
           state.overlayItem={...state.overlayItem,isAdded:true}
           state.items=[...modifyItem]
		   state.searchedProducts=[...modifysearchItem]


          const data=state.wishlistItems.filter((ele)=>ele.id===item.id)
           if(data.length!==0){
            return
           }
           state.wishlistItems=[...state.wishlistItems,item]

        },
        setRemoveWishlistItem: (state, action) => {
          const itemId = action.payload;
          state.wishlistItems = state.wishlistItems.filter((ele) => ele.id !== itemId);
          state.items = state.items.map((ele) => {
            if (ele.id === itemId) {
              return {
                ...ele,
                isAdded: false,  
              };
            }
            return ele;
          });
        }
      }
})

const Cart=createSlice({
    name:'cart',
    initialState:{
      items:[],
      totalQuantity:0,
      quantitystate:false
    } as CartState,
    reducers:{
      addItemtoCart:(state,action)=>{
        const item=action.payload
        const exisitingitem=state.items.find((ele)=>ele.id===item.id)
        if(exisitingitem){
          exisitingitem.quantity = (exisitingitem.quantity || 0) + 1;
        }else{    
           state.items.push({...item,quantity:1})
           state.totalQuantity++;
        }
     },
     removeItem:(state,action)=>{
         state.items=state.items.filter((ele)=>ele.id!!==action.payload)
     },
     Quantity:(state,action)=>{
         const type=action.payload.type
         const id=action.payload.id
         const exisitingitem=state.items.find((ele)=>ele.id===id)

        if (!exisitingitem) return;

        if(type==='increase'){
          exisitingitem.quantity = (exisitingitem.quantity || 0) + 1;
         }
         else{
          exisitingitem.quantity = (exisitingitem.quantity || 0) - 1;
         }

         if(exisitingitem.quantity===0){  
             const filtereditems=state.items.filter((ele)=>ele.id!==id);
             state.items=[...filtereditems]
             state.totalQuantity--;
             state.quantitystate=true
         }
         
         if(exisitingitem.quantity===0 && state.items.length===0){
             state.quantitystate=false
         }
     },

    }
})

export const productActions=Products.actions
export const cartActions=Cart.actions

export const store=configureStore({
    reducer:{
        product:Products.reducer,
        cart:Cart.reducer
    }
})

