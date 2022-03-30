function solve(input) {
        let num = Number(input[0]);
        let rows = 0;
        let columns = 0;
        let j = 0;
        let bypass = 1;

        for (let i = num - 1; columns < num; i+=2, columns++) {
            if (bypass != 1) {
                console.log(i)
                rows = 0;
            }
            bypass++;
            for (j = i; rows < num; rows++) {
                console.log(j)
            }
        }
}
solve(["4"])