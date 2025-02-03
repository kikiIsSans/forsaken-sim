class Clone extends Upgrade {
    constructor(upgradeName, cost, building) {
        super(upgradeName, cost);
        this.building = building;
    }

    purchase() {
        super.purchase();
        clickStrength = 30;
        this.building.doubleUpgrade++;
        this.building.applyDoubleUpgrade();
    }
}