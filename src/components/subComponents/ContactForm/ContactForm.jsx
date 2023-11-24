import * as React from 'react';
import {
  useId,
  Link,
  Toaster,
  useToastController,
  Toast,
  ToastTitle,
} from '@fluentui/react-components';
import { useSelector } from 'react-redux';

const ContactForm = () => {
  const toasterId = useId('toaster');
  const { dispatchToast } = useToastController(toasterId);
  const currentTheme = useSelector((state) => state.theme.mode);

  const notify = () =>
    dispatchToast(
      <Toast style={{ backgroundColor: '#9FBB73', border: 'none' }}>
        <ToastTitle action={<Link>Undo</Link>}>Email sent</ToastTitle>
      </Toast>,
      { intent: 'success' }
    );

  return (
    <div className='p-5'>
      <div className='overflow-hidden'>
        <h3
          className={`text-center text-xl mt-5 pb-4 font-semibold ${
            currentTheme === 'dark' ? 'text-white' : 'text-black'
          }`}
        >
          Contact Form
        </h3>
      </div>

      <div>
        <form action=''>
          <div className='mx-auto rounded-xl max-w-xl'>
            <div className='grid grid-cols-1 gap-2 label'>
              <label htmlFor='name' className='blockpy-2 '>
                <input
                  id='name'
                  type='text'
                  name='name'
                  required='required'
                  placeholder='Name'
                  className='appearance-none border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none  text-md'
                />
              </label>

              <label htmlFor='email' className='block '>
                <input
                  id='email'
                  type='email'
                  name='email'
                  placeholder='Email'
                  pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'
                  required='required'
                  className='
                    appearance-none border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none  text-md'
                />
              </label>

              <label className='block '>
                <textarea
                  id='message'
                  name='message'
                  rows='5'
                  required='required'
                  placeholder='Tell us a little more about your cool project!'
                  className='
                    appearance-none border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none text-cool-beige text-sm
                    '
                ></textarea>
              </label>
              <div className='text-center'>
                <Toaster toasterId={toasterId} />
                <button
                  onClick={notify}
                  className='w-[250px] bg-[#00acc4] py-[10px] rounded-md text-white'
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
