#include <iostream>

using namespace std;

template<typename T>
T* expandArr (T*& arr, int size, int new_size) {
   if (new_size > 0) {
      T* new_arr = new T[new_size];
   
      for(int i = 0; i < size; ++i) {
         new_arr[i] = arr[i];
      }
      
      delete [] arr;
      arr = new_arr;
   }
   
   return arr;
}


int main() {
   int* arr = new int[3] {1, 2, 3};
   cout<<arr<<"\n";
   
   expandArr(arr, 3, 5);
   arr[5] = 10;
   cout<<arr<<"\n"; //different address
   
   cout<<arr[2]<<"\n"; // 3
   cout<<arr[5]<<"\n"; //10
   
   char* arr1 = new char[2] {'H', 'e'};
   expandArr(arr1, 2, 3);
   arr1[2] = 'y';
   cout<<arr1[2]; // y
   return 0;
}
