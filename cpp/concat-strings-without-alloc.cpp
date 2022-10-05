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

void strCat(char* s1, char* s2) {
    int s1Len = getStrLen(s1);
    int s2Len = getStrLen(s2);
    
    int s1LastIndex = s1Len;
    int s2Index = 0;

    while(s1LastIndex <= s1Len+s2Len) {
        *(s1 + s1LastIndex) = *(s2 + s2Index);
        ++s1LastIndex;
        ++s2Index;
    }
    *(s1 + s1LastIndex) = '\0';
}

int main()
{
    char str1[20] = "hello";
    char str2[] = "world";
    strCat(str1, str2);
    cout<<str1; //helloworld
    return 0;
}