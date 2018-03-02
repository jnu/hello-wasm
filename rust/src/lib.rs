use std::os::raw::c_char;
use std::ffi::CString;

#[no_mangle]
pub extern "C" fn add_one(x: i32) -> i32 {
  x + 1
}

static HELLO: &'static str = "hello, from rust";

#[no_mangle]
pub extern "C" fn say_hello() -> *mut c_char {
    let s = CString::new(HELLO).unwrap();
    s.into_raw()
}

#[no_mangle]
pub extern "C" fn get_hello_len() -> usize {
    HELLO.len()
}


const BUF_SIZE: usize = 128;
static mut BUF: [u8; BUF_SIZE] = [0; BUF_SIZE];

#[no_mangle]
pub extern "C" fn get_buf_addr() -> *mut u8 {
    unsafe {
        BUF.as_mut_ptr()
    }
}

#[no_mangle]
pub extern "C" fn get_buf_size() -> usize {
    BUF_SIZE
}

#[no_mangle]
pub extern "C" fn sum_buf() -> i32 {
    let mut sum = 0;
    unsafe {
        for i in BUF.iter() {
            sum += *i as i32;
        }
    }
    sum
}
