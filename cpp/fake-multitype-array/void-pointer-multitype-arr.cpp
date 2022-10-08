#include <iostream>
#include <cstdlib>
#include <string>


using namespace std;

struct SType {
    string type_name;
    void* ptr;
};

int main()
{
    int a = 1;
    char b = 'c';
    float f = 3.14;
    
    string str[3] = {"integer", "character", "float"};
    
  struct SType arr[3];
  arr[0].type_name = str[0];
  arr[0].ptr = malloc(sizeof(int));
  arr[0].ptr = &a;
  
  arr[1].type_name = str[1];
  arr[1].ptr = malloc(sizeof(char));
  arr[1].ptr = &b;
  
  arr[2].type_name = str[2];
  arr[2].ptr = malloc(sizeof(float));
  arr[2].ptr = &f;
  
  
  for(int i = 0; i < 3; i++) {
      if (arr[i].type_name == str[0]) {
          cout<<*((int*)arr[i].ptr);
      }
      if (arr[i].type_name == str[1]) {
          cout<<*((char*)arr[i].ptr);
      }
      if (arr[i].type_name == str[2]) {
          cout<<*((float*)arr[i].ptr);
      }
  }
  
    return 0;
}