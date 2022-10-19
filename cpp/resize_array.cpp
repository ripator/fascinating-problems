#include <iostream>

using namespace std;

int* expandArr (int*& arr, int size, int new_size) {
   if (new_size > 0) {
   int* new_arr = new int[new_size];

   for(int i = 0; i < size; ++i) {
      new_arr[i] = arr[i];
   }
   
   delete [] arr;
   arr = new_arr;
   }
   
   return arr;
}


int main() {
   int* arr = new int[3];
   cout<<arr<<"\n";
   
   expandArr(arr, 3, 5);
   arr[5] = 10;
   cout<<arr<<"\n"; //different address
   
   cout<<arr[5]; //10
   return 0;
}