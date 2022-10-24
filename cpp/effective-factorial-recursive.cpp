#include <iostream>
#include <vector>

using namespace std;

class Factorial {
   private:
      vector<int> cache = vector<int> (15, 0);
   public:
      int operator()(int n) {
         if (n <= 1) {
               return 1;
         }
         if (!cache[n]) {
               cache[n] = n*operator()(n-1);
         }
         return cache[n];
      }
};

int main() {
   Factorial fact;
   cout<<fact(3);
   
   return 0;
}
