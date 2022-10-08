
#include <iostream>
#include <cstdlib>
#include <string>


using namespace std;

union MyUnion {
    int i;
    char ch;
    float fl;
};

struct MyStruct {
    string type_name;
    MyUnion uni;
};

int main()
{
    int a = 1;
    char b = 'c';
    float f = 3.14;
    
    string typeNames[3] = {"integer", "character", "float"};
    
    MyStruct arr[3];
    
    arr[0].type_name = typeNames[0];
    arr[0].uni.i = a;
    
    arr[1].type_name = typeNames[1];
    arr[1].uni.ch = b;
    
    arr[2].type_name = typeNames[2];
    arr[2].uni.fl = f;
    
    for (int j = 0; j < 4; j++) {
        if (arr[j].type_name == typeNames[0]) {
            cout<<arr[j].uni.i;
        }
        if (arr[j].type_name == typeNames[1]) {
            cout<<arr[j].uni.ch;
        }
        if (arr[j].type_name == typeNames[2]) {
            cout<<arr[j].uni.fl;
        }
    }
    
    return 0;
}