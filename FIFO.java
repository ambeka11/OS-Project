import java.util.*; //this package contains different utility classes such as array linkedlist and many more.

public class FIFO{
    //static is used so that this method can be called without creating an object of the class.
    //int insuress integer value
    //int[] pages: represents an array of integer
    //int capacity: specifies max no of pages that can fit in memory
    public static int fifopPageReplacement(int[]pages, int capacity){
         //only integers can be stored in this queue and the elements are extracted in the same way they are inserted.
        Queue<Integer> memory = new LinkedList<>();
        int pageFaults = 0; //initilizing the pagefaults as 0

        for(int page: pages){
            //check if page is already in the memory?
            if(!memory.contains(page)){
                pageFaults++;  //page fault will increase
            }
        }
    }
}