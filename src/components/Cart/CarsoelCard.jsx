import React from "react";
import styles from '../Cart/CarsoelCard.module.css';
import { useState } from "react";

const dummydata=[
   {
    image:'https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGFwcHklMjBiaXJ0aGRheSUyMGNha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    name:'cake1'
   },
   {
    image:'https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGFwcHklMjBiaXJ0aGRheSUyMGNha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    name:'cake2'
   },
   {
    image:'https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGFwcHklMjBiaXJ0aGRheSUyMGNha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    name:'cake3'
   },
   {
    image:'https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGFwcHklMjBiaXJ0aGRheSUyMGNha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    name:'cake4'
   },
   {
    image:'https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGFwcHklMjBiaXJ0aGRheSUyMGNha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    name:'cake5'
   },
   {
    image:'https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGFwcHklMjBiaXJ0aGRheSUyMGNha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    name:'cake6'
   },
   {
    image:'https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGFwcHklMjBiaXJ0aGRheSUyMGNha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    name:'cake7'
   },
   {
    image:'https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGFwcHklMjBiaXJ0aGRheSUyMGNha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    name:'cake8'
   },
   {
    image:'https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGFwcHklMjBiaXJ0aGRheSUyMGNha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    name:'cake9'
   },
   {
    image:'https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGFwcHklMjBiaXJ0aGRheSUyMGNha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    name:'cake10'
   },

]

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % dummydata.length);
  };

  const handlePrevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + dummydata.length) % dummydata.length);
  };

  return (
    <>
      <h1>Inspiration for your first order</h1>
      <div className={styles.container}>
        {dummydata.map((data, index) => (
          <div key={index} className={styles.carddiv}>
            <div className={styles.circle}>
              <img src={data.image} alt={data.name} />
            </div>
            <span>{data.name}</span>
          </div>
        ))}
      </div>
      <button onClick={handlePrevImage}>Previous Image</button>
      <button onClick={handleNextImage}>Next Image</button>
    </>
  );
};

export default Carousel;