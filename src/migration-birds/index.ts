class HackerRank {

    public static sightingViewsOfMigrationBirds(arr: number[]): number {
        const temp: Array<any> = [];
        const birdtypes: Array<any>  = [1,2,3,4,5];
        birdtypes.map((el) => {
            let idx = arr.indexOf(el);
            let sights = 0;
            while(idx !== -1) {
                if(arr[idx] === el) {
                    sights += 1;
                };
                idx = arr.indexOf(el, idx + 1);
            };
            temp.push({
                type:el,
                sights
            });
        });
        const maxSightsType = temp.reduce((prev, current) => {
            return (prev.sights > current.sights || prev.sights === current.sights) ? prev : current;
        });
        return maxSightsType.type;
    }
}

export default HackerRank;
