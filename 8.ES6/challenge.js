class Element {
    constructor(name, buildYear) {
        this.name = name;
        this.buildYear = buildYear;
    }
}

class Parks extends Element {
    constructor(name, buildYear, tree, parkArea, ages) {
        super(name, buildYear);
        this.tree = tree;
        this.parkArea = parkArea;
        this.ages = ages;
    }
    calTreeDensity() {
        const result = this.tree / this.parkArea;
        console.log(`${this.name} has a tree density of ${result} trees per square km`)
    }
}

class Streets extends Element {
    constructor(name, buildYear, length, size = 3) {
        super(name, buildYear);
        this.length = length;
        this.size = size;
    }
    classifyStreet() {
        const classification = new Map();
        classification.set(1, 'tiny');
        classification.set(2, 'small');
        classification.set(3, 'normal');
        classification.set(4, 'big');
        classification.set(4, 'huge');
        console.log(`${this.name} built in ${this.buildYear}`)

    }
}

const allPark = [new Parks('Green', 1997, 0.2, 222), new Parks(
    'sdf', 1111, 223, 4)];

const allStreet = [new Streets('Ocean',
    'Ave', 2002, 2, 2), new Streets('Ocean 2',
    'Ave 2', 1000, 3, 1)];

function calc(arr) {
    
    //[3,5,6]
    //0+3
    //8+6

    const sum = arr.reduce((prev, cur, index) => prev + cur, 0) //the curr value will be 0 (prev)

    // use destructering to return 2 values 
    return [sum, sum/arr.length];

}

function reportPark(p) {
    console.log('this is Park report');

    // Density 
    p.forEach(element => {
        element.calTreeDensity();
    });
    //Average age
    //destrcutering
    const  ages = p.map(el => 2020 - el.buildYear);//return an array which is calculated
    console.log(ages)
    const [totaalAge, avgAge] = calc(ages);
    console.log(`our ${p.length} parks have an averrage of ${avgAge} year`)

    //1000 trees
    const i = p.map(el => el.tree).findIndex(el => el >= 1000);
    console.log(`${p[i].name} has more than 1000 trees`)


}

function reportStreet(s) {
    //total length
    const totalLength = s.reduce((prev,cur,index) => prev + cur,0)
    console.log(`Total length is${totalLength}`);
}

reportStreet(allStreet);
reportPark(allPark);