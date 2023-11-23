import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  Dialog,
  DialogSurface,
  DialogTitle,
  DialogBody,
  DialogActions,
  DialogContent,
  Button,
} from '@fluentui/react-components';

export default function TriviaContent() {
  const style = {
    backgroundColor: '#e5e7eb',
    color: 'black',
    border: 'none',
    borderRadius: '5px',
  };
  const triviaCategories = useSelector((state) => state.trivia.categories);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const currentTheme = useSelector((state) => state.theme.mode);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <div className='flex flex-col justify-center my-auto h-full'>
      <h1
        className={`text-4xl font-bold mb-8 ${
          currentTheme === 'dark' ? 'text-white' : 'text-black'
        } `}
      >
        Trivia Categories
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {triviaCategories.map((category) => (
          <div
            key={category.id}
            className='bg-[#272829] p-3.5 rounded-xl shadow-md text-white cursor-pointer hover:scale-105 duration-500 transition-all'
            onClick={() => handleCategoryClick(category)}
          >
            <h2 className='text-md font-semibold mb-2'>{category.name}</h2>
          </div>
        ))}
      </div>
      {selectedCategory && (
        <Dialog open={isDialogOpen} onClose={handleCloseDialog}>
          <DialogSurface style={style}>
            <DialogBody>
              <DialogTitle style={{ fontWeight: 'bold' }}>
                {selectedCategory.name}
              </DialogTitle>
              <DialogContent>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse,
                rerum!
              </DialogContent>
              <DialogActions>
                <Button
                  style={{
                    backgroundColor: '#000',
                    color: '#fff',
                    padding: '5px 10px',
                    borderRadius: '5px',
                  }}
                  appearance='primary'
                  onClick={handleCloseDialog}
                >
                  Close
                </Button>
              </DialogActions>
            </DialogBody>
          </DialogSurface>
        </Dialog>
      )}
    </div>
  );
}
