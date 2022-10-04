#include <iostream>

using namespace std;

int getStrLen(char* p) {
    int count = 0;
    while (*p != '\0') {
        ++count;
        ++p;
    }
    return count;
}

void strSet(char* s, char ch) {
    int strLen = getStrLen(s);
    int count = 0;
    
    while(count <= strLen-1) {
        *(s+count) = ch;
        ++count;
    }
}

int main()
{
    char str[] = "hello";
    strSet(str, 'a');
    cout<<str;
    return 0;
}
