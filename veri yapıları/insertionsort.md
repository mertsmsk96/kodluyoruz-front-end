## Aşamalar:
***
- [22,27,16,2,18,6] -> n
- [2,27,16,22,18,6] ->(n-1)
- [2,6,16,22,18,27] ->(n-2)
- [2,6,16,18,22,27] ->(n-3)

## Big-o gösterimi:
***
Big-O : O(n)

## Time Complexity: Average case: Aradığımız sayının ortada olması,Worst case: Aradığımız sayının sonda olması, Best case: Aradığımız sayının dizinin en başında olması.
***
+ Average case : O(n^2) 
+ Worst case : O(n^2) 
+ Best case : O(n)

## Dizi sıralandıktan sonra 18 sayısı hangi case kapsamına girer? Yazınız. 
***
18 sayısı ortalarda olduğu için Average case kapsamına girer.

## [7,3,5,8,2,9,4,15,6] dizisinin Insertion Sort'a göre ilk 4 adımını yazınız.
***
- [2,3,5,8,7,9,4,15,6]
- [2,3,4,8,7,9,5,15,6]
- [2,3,4,5,7,9,8,15,6]
- [2,3,4,5,6,9,8,15,7]