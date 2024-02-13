#include <stdio.h>
#include <conio.h>

int main() {
    int a, b = 0;
    static int c[10] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};

    clrscr(); // Clear the screen (assuming you're using Turbo C++)

    for (a = 0; a < 10; a++) {
        if (c[a] % 2 == 0) {
            b += c[a]; // Add even numbers to b
        }
    }

    printf("%d", b); // Print the sum of even numbers
    getc(); // Wait for a character input
    return 0;
}
