#include <stdio.h>
main(t) {
	for(t = 0; t < 240000; t++)
		putchar(t * (((t >> 12) | (t >> 8)) & (63 & (t >> 4))));
}