document.addEventListener("DOMContentLoaded", function () {
    // Initialize NGL Stage
    var stage = new NGL.Stage("viewport", {
        backgroundColor: "white"
    });
    
    // Load protein structure from RCSB PDB
    stage.loadFile("https://mdb-login.bsc.es/api/pdb/1crn.pdb").then(function (component) {
        // Add different representation styles
        component.addRepresentation("cartoon", {
            color: "secondary structure"
        });
        component.addRepresentation("ball+stick", {
            sele: "hetero",
            color: "element"
        });
        
        // Auto-center and zoom to fit
        component.autoView();
    });
    
    // Handle window resizing
    window.addEventListener("resize", function () {
        stage.handleResize();
    }, false);
});