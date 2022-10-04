
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

void strMoveOneRight(char* s) {
    int strLen = getStrLen(s);
    int lastChar = *(s+strLen-1);
    
    for(int i = strLen-1; i > 0; --i) {
        *(s+i) = *(s+i-1);
    }
    *(s) = lastChar;
}

void strMoveRight(char* s, int n) {
    if (n < 1) {
        return;
    }
    
    int strLen = getStrLen(s);
    int iterLen = n%strLen;
    int count = 0;
    
    while(count < iterLen) {
        strMoveOneRight(s);
        ++count;
    }
}

int main()
{
    char str[] = "hello";
    strMoveRight(str, 2);
    cout<<str;
    return 0;
}