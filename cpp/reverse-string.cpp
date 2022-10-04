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

void reverseCharSet(char* ps) {
    int strLen = getStrLen(ps);
    int lastIndex = strLen -1;
    int firstIndex = 0;
    char temporaryVal;

    while(firstIndex <= lastIndex) {
        temporaryVal = *(ps + firstIndex);
        *(ps + firstIndex) = *(ps + lastIndex);
        *(ps + lastIndex) = temporaryVal;
        ++firstIndex;
        --lastIndex;
    }
}

int main()
{
    char arr[] = "hello";
    reverseCharSet(arr);
    cout<<arr;
    return 0;
}
