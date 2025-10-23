gdjs.TrashbinCode = {};
gdjs.TrashbinCode.localVariables = [];
gdjs.TrashbinCode.idToCallbackMap = new Map();
gdjs.TrashbinCode.GDGoSymbolObjects1_1final = [];

gdjs.TrashbinCode.GDTrashbinObjects1= [];
gdjs.TrashbinCode.GDTrashbinObjects2= [];
gdjs.TrashbinCode.GDTrashbinObjects3= [];
gdjs.TrashbinCode.GDTrashbinObjects4= [];
gdjs.TrashbinCode.GDTrashbinObjects5= [];
gdjs.TrashbinCode.GDBackpackObjects1= [];
gdjs.TrashbinCode.GDBackpackObjects2= [];
gdjs.TrashbinCode.GDBackpackObjects3= [];
gdjs.TrashbinCode.GDBackpackObjects4= [];
gdjs.TrashbinCode.GDBackpackObjects5= [];
gdjs.TrashbinCode.GDGoSymbolObjects1= [];
gdjs.TrashbinCode.GDGoSymbolObjects2= [];
gdjs.TrashbinCode.GDGoSymbolObjects3= [];
gdjs.TrashbinCode.GDGoSymbolObjects4= [];
gdjs.TrashbinCode.GDGoSymbolObjects5= [];
gdjs.TrashbinCode.GDBackgroundObjects1= [];
gdjs.TrashbinCode.GDBackgroundObjects2= [];
gdjs.TrashbinCode.GDBackgroundObjects3= [];
gdjs.TrashbinCode.GDBackgroundObjects4= [];
gdjs.TrashbinCode.GDBackgroundObjects5= [];
gdjs.TrashbinCode.GDFlaschenObjects1= [];
gdjs.TrashbinCode.GDFlaschenObjects2= [];
gdjs.TrashbinCode.GDFlaschenObjects3= [];
gdjs.TrashbinCode.GDFlaschenObjects4= [];
gdjs.TrashbinCode.GDFlaschenObjects5= [];
gdjs.TrashbinCode.GDCollitionmaskObjects1= [];
gdjs.TrashbinCode.GDCollitionmaskObjects2= [];
gdjs.TrashbinCode.GDCollitionmaskObjects3= [];
gdjs.TrashbinCode.GDCollitionmaskObjects4= [];
gdjs.TrashbinCode.GDCollitionmaskObjects5= [];
gdjs.TrashbinCode.GDTrashObjects1= [];
gdjs.TrashbinCode.GDTrashObjects2= [];
gdjs.TrashbinCode.GDTrashObjects3= [];
gdjs.TrashbinCode.GDTrashObjects4= [];
gdjs.TrashbinCode.GDTrashObjects5= [];
gdjs.TrashbinCode.GDTransitionObjects1= [];
gdjs.TrashbinCode.GDTransitionObjects2= [];
gdjs.TrashbinCode.GDTransitionObjects3= [];
gdjs.TrashbinCode.GDTransitionObjects4= [];
gdjs.TrashbinCode.GDTransitionObjects5= [];


gdjs.TrashbinCode.mapOfGDgdjs_9546TrashbinCode_9546GDFlaschenObjects4Objects = Hashtable.newFrom({"Flaschen": gdjs.TrashbinCode.GDFlaschenObjects4});
gdjs.TrashbinCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.TrashbinCode.GDFlaschenObjects4 */
{for(var i = 0, len = gdjs.TrashbinCode.GDFlaschenObjects4.length ;i < len;++i) {
    gdjs.TrashbinCode.GDFlaschenObjects4[i].getBehavior("Animation").setAnimationIndex(gdjs.randomInRange(0, 4));
}
}
{for(var i = 0, len = gdjs.TrashbinCode.GDFlaschenObjects4.length ;i < len;++i) {
    gdjs.TrashbinCode.GDFlaschenObjects4[i].setAngle(gdjs.random(360));
}
}
}

}


};gdjs.TrashbinCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(gdjs.randomFloatInRange(0, 2 * gdjs.evtTools.common.pi()));
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(gdjs.randomFloat(1));
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(860 + ((375 * Math.cos(runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber())) * runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber()));
}
{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(380 + ((260 * Math.sin(runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber())) * runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber()));
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.TrashbinCode.GDFlaschenObjects4.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.TrashbinCode.mapOfGDgdjs_9546TrashbinCode_9546GDFlaschenObjects4Objects, runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber(), runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber(), "");
}

{ //Subevents
gdjs.TrashbinCode.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.TrashbinCode.mapOfGDgdjs_9546TrashbinCode_9546GDTrashObjects3Objects = Hashtable.newFrom({"Trash": gdjs.TrashbinCode.GDTrashObjects3});
gdjs.TrashbinCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.TrashbinCode.GDTrashObjects3 */
{for(var i = 0, len = gdjs.TrashbinCode.GDTrashObjects3.length ;i < len;++i) {
    gdjs.TrashbinCode.GDTrashObjects3[i].getBehavior("Animation").setAnimationIndex(gdjs.randomInRange(0, 4));
}
}
{for(var i = 0, len = gdjs.TrashbinCode.GDTrashObjects3.length ;i < len;++i) {
    gdjs.TrashbinCode.GDTrashObjects3[i].setAngle(gdjs.random(360));
}
}
}

}


};gdjs.TrashbinCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(gdjs.randomFloatInRange(0, 2 * gdjs.evtTools.common.pi()));
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(gdjs.randomFloat(1));
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(860 + ((375 * Math.cos(runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber())) * runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber()));
}
{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(380 + ((260 * Math.sin(runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber())) * runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber()));
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.TrashbinCode.GDTrashObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.TrashbinCode.mapOfGDgdjs_9546TrashbinCode_9546GDTrashObjects3Objects, runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber(), runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber(), "");
}

{ //Subevents
gdjs.TrashbinCode.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.TrashbinCode.eventsList4 = function(runtimeScene) {

{


const repeatCount3 = runtimeScene.getGame().getVariables().getFromIndex(7).getChild("TrashBin").getChild("PfandAvailale").getAsNumber();
for (let repeatIndex3 = 0;repeatIndex3 < repeatCount3;++repeatIndex3) {

let isConditionTrue_0 = false;
if (true)
{

{ //Subevents: 
gdjs.TrashbinCode.eventsList1(runtimeScene);} //Subevents end.
}
}

}


{


const repeatCount2 = runtimeScene.getGame().getVariables().getFromIndex(7).getChild("TrashBin").getChild("PfandAvailale").getAsNumber() * 3;
for (let repeatIndex2 = 0;repeatIndex2 < repeatCount2;++repeatIndex2) {

let isConditionTrue_0 = false;
if (true)
{

{ //Subevents: 
gdjs.TrashbinCode.eventsList3(runtimeScene);} //Subevents end.
}
}

}


};gdjs.TrashbinCode.mapOfEmptyGDFlaschenObjects = Hashtable.newFrom({"Flaschen": []});
gdjs.TrashbinCode.mapOfGDgdjs_9546TrashbinCode_9546GDGoSymbolObjects2Objects = Hashtable.newFrom({"GoSymbol": gdjs.TrashbinCode.GDGoSymbolObjects2});
gdjs.TrashbinCode.mapOfGDgdjs_9546TrashbinCode_9546GDFlaschenObjects2Objects = Hashtable.newFrom({"Flaschen": gdjs.TrashbinCode.GDFlaschenObjects2});
gdjs.TrashbinCode.mapOfGDgdjs_9546TrashbinCode_9546GDBackpackObjects2Objects = Hashtable.newFrom({"Backpack": gdjs.TrashbinCode.GDBackpackObjects2});
gdjs.TrashbinCode.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Backpack"), gdjs.TrashbinCode.GDBackpackObjects2);
gdjs.copyArray(runtimeScene.getObjects("Flaschen"), gdjs.TrashbinCode.GDFlaschenObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TrashbinCode.GDFlaschenObjects2.length;i<l;++i) {
    if ( gdjs.TrashbinCode.GDFlaschenObjects2[i].getBehavior("Verschiebbar").wasJustDropped() ) {
        isConditionTrue_0 = true;
        gdjs.TrashbinCode.GDFlaschenObjects2[k] = gdjs.TrashbinCode.GDFlaschenObjects2[i];
        ++k;
    }
}
gdjs.TrashbinCode.GDFlaschenObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.TrashbinCode.mapOfGDgdjs_9546TrashbinCode_9546GDFlaschenObjects2Objects, gdjs.TrashbinCode.mapOfGDgdjs_9546TrashbinCode_9546GDBackpackObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(43634188);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.TrashbinCode.GDBackpackObjects2 */
/* Reuse gdjs.TrashbinCode.GDFlaschenObjects2 */
{runtimeScene.getGame().getVariables().getFromIndex(7).getChild("TrashBin").getChild("PfandCollected").add(1);
}
{for(var i = 0, len = gdjs.TrashbinCode.GDFlaschenObjects2.length ;i < len;++i) {
    gdjs.TrashbinCode.GDFlaschenObjects2[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.TrashbinCode.GDBackpackObjects2.length ;i < len;++i) {
    gdjs.TrashbinCode.GDBackpackObjects2[i].getBehavior("Animation").setAnimationName("BackPackClosed");
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "bottles-automat-69944.mp3", false, 20, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Flaschen"), gdjs.TrashbinCode.GDFlaschenObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TrashbinCode.GDFlaschenObjects2.length;i<l;++i) {
    if ( gdjs.TrashbinCode.GDFlaschenObjects2[i].getBehavior("Verschiebbar").isDragged() ) {
        isConditionTrue_0 = true;
        gdjs.TrashbinCode.GDFlaschenObjects2[k] = gdjs.TrashbinCode.GDFlaschenObjects2[i];
        ++k;
    }
}
gdjs.TrashbinCode.GDFlaschenObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Backpack"), gdjs.TrashbinCode.GDBackpackObjects2);
{for(var i = 0, len = gdjs.TrashbinCode.GDBackpackObjects2.length ;i < len;++i) {
    gdjs.TrashbinCode.GDBackpackObjects2[i].getBehavior("Animation").setAnimationName("BackPackOpended");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Flaschen"), gdjs.TrashbinCode.GDFlaschenObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TrashbinCode.GDFlaschenObjects1.length;i<l;++i) {
    if ( gdjs.TrashbinCode.GDFlaschenObjects1[i].getBehavior("Verschiebbar").wasJustDropped() ) {
        isConditionTrue_0 = true;
        gdjs.TrashbinCode.GDFlaschenObjects1[k] = gdjs.TrashbinCode.GDFlaschenObjects1[i];
        ++k;
    }
}
gdjs.TrashbinCode.GDFlaschenObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Backpack"), gdjs.TrashbinCode.GDBackpackObjects1);
{for(var i = 0, len = gdjs.TrashbinCode.GDBackpackObjects1.length ;i < len;++i) {
    gdjs.TrashbinCode.GDBackpackObjects1[i].getBehavior("Animation").setAnimationName("BackPackClosed");
}
}
}

}


};gdjs.TrashbinCode.mapOfGDgdjs_9546TrashbinCode_9546GDFlaschenObjects2Objects = Hashtable.newFrom({"Flaschen": gdjs.TrashbinCode.GDFlaschenObjects2});
gdjs.TrashbinCode.mapOfGDgdjs_9546TrashbinCode_9546GDCollitionmaskObjects2Objects = Hashtable.newFrom({"Collitionmask": gdjs.TrashbinCode.GDCollitionmaskObjects2});
gdjs.TrashbinCode.mapOfGDgdjs_9546TrashbinCode_9546GDFlaschenObjects2Objects = Hashtable.newFrom({"Flaschen": gdjs.TrashbinCode.GDFlaschenObjects2});
gdjs.TrashbinCode.mapOfGDgdjs_9546TrashbinCode_9546GDBackpackObjects2Objects = Hashtable.newFrom({"Backpack": gdjs.TrashbinCode.GDBackpackObjects2});
gdjs.TrashbinCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.TrashbinCode.GDFlaschenObjects2 */
{for(var i = 0, len = gdjs.TrashbinCode.GDFlaschenObjects2.length ;i < len;++i) {
    gdjs.TrashbinCode.GDFlaschenObjects2[i].setPosition(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber(),runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber());
}
}
{for(var i = 0, len = gdjs.TrashbinCode.GDFlaschenObjects2.length ;i < len;++i) {
    gdjs.TrashbinCode.GDFlaschenObjects2[i].setAngle(gdjs.random(360));
}
}
}

}


};gdjs.TrashbinCode.mapOfGDgdjs_9546TrashbinCode_9546GDTrashObjects1Objects = Hashtable.newFrom({"Trash": gdjs.TrashbinCode.GDTrashObjects1});
gdjs.TrashbinCode.mapOfGDgdjs_9546TrashbinCode_9546GDCollitionmaskObjects1Objects = Hashtable.newFrom({"Collitionmask": gdjs.TrashbinCode.GDCollitionmaskObjects1});
gdjs.TrashbinCode.eventsList7 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.TrashbinCode.GDTrashObjects1 */
{for(var i = 0, len = gdjs.TrashbinCode.GDTrashObjects1.length ;i < len;++i) {
    gdjs.TrashbinCode.GDTrashObjects1[i].setPosition(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber(),runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber());
}
}
{for(var i = 0, len = gdjs.TrashbinCode.GDTrashObjects1.length ;i < len;++i) {
    gdjs.TrashbinCode.GDTrashObjects1[i].setAngle(gdjs.random(360));
}
}
}

}


};gdjs.TrashbinCode.eventsList8 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Backpack"), gdjs.TrashbinCode.GDBackpackObjects2);
gdjs.copyArray(runtimeScene.getObjects("Collitionmask"), gdjs.TrashbinCode.GDCollitionmaskObjects2);
gdjs.copyArray(runtimeScene.getObjects("Flaschen"), gdjs.TrashbinCode.GDFlaschenObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TrashbinCode.GDFlaschenObjects2.length;i<l;++i) {
    if ( gdjs.TrashbinCode.GDFlaschenObjects2[i].getBehavior("Verschiebbar").wasJustDropped() ) {
        isConditionTrue_0 = true;
        gdjs.TrashbinCode.GDFlaschenObjects2[k] = gdjs.TrashbinCode.GDFlaschenObjects2[i];
        ++k;
    }
}
gdjs.TrashbinCode.GDFlaschenObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.TrashbinCode.mapOfGDgdjs_9546TrashbinCode_9546GDFlaschenObjects2Objects, gdjs.TrashbinCode.mapOfGDgdjs_9546TrashbinCode_9546GDCollitionmaskObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.TrashbinCode.mapOfGDgdjs_9546TrashbinCode_9546GDFlaschenObjects2Objects, gdjs.TrashbinCode.mapOfGDgdjs_9546TrashbinCode_9546GDBackpackObjects2Objects, true, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(43638252);
}
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(gdjs.randomFloatInRange(0, 2 * gdjs.evtTools.common.pi()));
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(gdjs.randomFloat(1));
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(860 + ((375 * Math.cos(runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber())) * runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber()));
}
{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(380 + ((260 * Math.sin(runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber())) * runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber()));
}

{ //Subevents
gdjs.TrashbinCode.eventsList6(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Collitionmask"), gdjs.TrashbinCode.GDCollitionmaskObjects1);
gdjs.copyArray(runtimeScene.getObjects("Trash"), gdjs.TrashbinCode.GDTrashObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TrashbinCode.GDTrashObjects1.length;i<l;++i) {
    if ( gdjs.TrashbinCode.GDTrashObjects1[i].getBehavior("Verschiebbar").wasJustDropped() ) {
        isConditionTrue_0 = true;
        gdjs.TrashbinCode.GDTrashObjects1[k] = gdjs.TrashbinCode.GDTrashObjects1[i];
        ++k;
    }
}
gdjs.TrashbinCode.GDTrashObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.TrashbinCode.mapOfGDgdjs_9546TrashbinCode_9546GDTrashObjects1Objects, gdjs.TrashbinCode.mapOfGDgdjs_9546TrashbinCode_9546GDCollitionmaskObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(43640228);
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(gdjs.randomFloatInRange(0, 2 * gdjs.evtTools.common.pi()));
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(gdjs.randomFloat(1));
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(860 + ((375 * Math.cos(runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber())) * runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber()));
}
{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(380 + ((260 * Math.sin(runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber())) * runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber()));
}

{ //Subevents
gdjs.TrashbinCode.eventsList7(runtimeScene);} //End of subevents
}

}


};gdjs.TrashbinCode.eventsList9 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(7).getChild("TrashBin").getChild("PfandCollected").setNumber(0);
}

{ //Subevents
gdjs.TrashbinCode.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.TrashbinCode.GDGoSymbolObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.TrashbinCode.GDGoSymbolObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.object.getSceneInstancesCount(runtimeScene, gdjs.TrashbinCode.mapOfEmptyGDFlaschenObjects) == 0;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(runtimeScene.getObjects("GoSymbol"), gdjs.TrashbinCode.GDGoSymbolObjects2);
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_2) {
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.input.cursorOnObject(gdjs.TrashbinCode.mapOfGDgdjs_9546TrashbinCode_9546GDGoSymbolObjects2Objects, runtimeScene, true, false);
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.TrashbinCode.GDGoSymbolObjects2.length; j < jLen ; ++j) {
        if ( gdjs.TrashbinCode.GDGoSymbolObjects1_1final.indexOf(gdjs.TrashbinCode.GDGoSymbolObjects2[j]) === -1 )
            gdjs.TrashbinCode.GDGoSymbolObjects1_1final.push(gdjs.TrashbinCode.GDGoSymbolObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.TrashbinCode.GDGoSymbolObjects1_1final, gdjs.TrashbinCode.GDGoSymbolObjects1);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}
}

}


{


gdjs.TrashbinCode.eventsList5(runtimeScene);
}


{


gdjs.TrashbinCode.eventsList8(runtimeScene);
}


};

gdjs.TrashbinCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.TrashbinCode.GDTrashbinObjects1.length = 0;
gdjs.TrashbinCode.GDTrashbinObjects2.length = 0;
gdjs.TrashbinCode.GDTrashbinObjects3.length = 0;
gdjs.TrashbinCode.GDTrashbinObjects4.length = 0;
gdjs.TrashbinCode.GDTrashbinObjects5.length = 0;
gdjs.TrashbinCode.GDBackpackObjects1.length = 0;
gdjs.TrashbinCode.GDBackpackObjects2.length = 0;
gdjs.TrashbinCode.GDBackpackObjects3.length = 0;
gdjs.TrashbinCode.GDBackpackObjects4.length = 0;
gdjs.TrashbinCode.GDBackpackObjects5.length = 0;
gdjs.TrashbinCode.GDGoSymbolObjects1.length = 0;
gdjs.TrashbinCode.GDGoSymbolObjects2.length = 0;
gdjs.TrashbinCode.GDGoSymbolObjects3.length = 0;
gdjs.TrashbinCode.GDGoSymbolObjects4.length = 0;
gdjs.TrashbinCode.GDGoSymbolObjects5.length = 0;
gdjs.TrashbinCode.GDBackgroundObjects1.length = 0;
gdjs.TrashbinCode.GDBackgroundObjects2.length = 0;
gdjs.TrashbinCode.GDBackgroundObjects3.length = 0;
gdjs.TrashbinCode.GDBackgroundObjects4.length = 0;
gdjs.TrashbinCode.GDBackgroundObjects5.length = 0;
gdjs.TrashbinCode.GDFlaschenObjects1.length = 0;
gdjs.TrashbinCode.GDFlaschenObjects2.length = 0;
gdjs.TrashbinCode.GDFlaschenObjects3.length = 0;
gdjs.TrashbinCode.GDFlaschenObjects4.length = 0;
gdjs.TrashbinCode.GDFlaschenObjects5.length = 0;
gdjs.TrashbinCode.GDCollitionmaskObjects1.length = 0;
gdjs.TrashbinCode.GDCollitionmaskObjects2.length = 0;
gdjs.TrashbinCode.GDCollitionmaskObjects3.length = 0;
gdjs.TrashbinCode.GDCollitionmaskObjects4.length = 0;
gdjs.TrashbinCode.GDCollitionmaskObjects5.length = 0;
gdjs.TrashbinCode.GDTrashObjects1.length = 0;
gdjs.TrashbinCode.GDTrashObjects2.length = 0;
gdjs.TrashbinCode.GDTrashObjects3.length = 0;
gdjs.TrashbinCode.GDTrashObjects4.length = 0;
gdjs.TrashbinCode.GDTrashObjects5.length = 0;
gdjs.TrashbinCode.GDTransitionObjects1.length = 0;
gdjs.TrashbinCode.GDTransitionObjects2.length = 0;
gdjs.TrashbinCode.GDTransitionObjects3.length = 0;
gdjs.TrashbinCode.GDTransitionObjects4.length = 0;
gdjs.TrashbinCode.GDTransitionObjects5.length = 0;

gdjs.TrashbinCode.eventsList9(runtimeScene);
gdjs.TrashbinCode.GDTrashbinObjects1.length = 0;
gdjs.TrashbinCode.GDTrashbinObjects2.length = 0;
gdjs.TrashbinCode.GDTrashbinObjects3.length = 0;
gdjs.TrashbinCode.GDTrashbinObjects4.length = 0;
gdjs.TrashbinCode.GDTrashbinObjects5.length = 0;
gdjs.TrashbinCode.GDBackpackObjects1.length = 0;
gdjs.TrashbinCode.GDBackpackObjects2.length = 0;
gdjs.TrashbinCode.GDBackpackObjects3.length = 0;
gdjs.TrashbinCode.GDBackpackObjects4.length = 0;
gdjs.TrashbinCode.GDBackpackObjects5.length = 0;
gdjs.TrashbinCode.GDGoSymbolObjects1.length = 0;
gdjs.TrashbinCode.GDGoSymbolObjects2.length = 0;
gdjs.TrashbinCode.GDGoSymbolObjects3.length = 0;
gdjs.TrashbinCode.GDGoSymbolObjects4.length = 0;
gdjs.TrashbinCode.GDGoSymbolObjects5.length = 0;
gdjs.TrashbinCode.GDBackgroundObjects1.length = 0;
gdjs.TrashbinCode.GDBackgroundObjects2.length = 0;
gdjs.TrashbinCode.GDBackgroundObjects3.length = 0;
gdjs.TrashbinCode.GDBackgroundObjects4.length = 0;
gdjs.TrashbinCode.GDBackgroundObjects5.length = 0;
gdjs.TrashbinCode.GDFlaschenObjects1.length = 0;
gdjs.TrashbinCode.GDFlaschenObjects2.length = 0;
gdjs.TrashbinCode.GDFlaschenObjects3.length = 0;
gdjs.TrashbinCode.GDFlaschenObjects4.length = 0;
gdjs.TrashbinCode.GDFlaschenObjects5.length = 0;
gdjs.TrashbinCode.GDCollitionmaskObjects1.length = 0;
gdjs.TrashbinCode.GDCollitionmaskObjects2.length = 0;
gdjs.TrashbinCode.GDCollitionmaskObjects3.length = 0;
gdjs.TrashbinCode.GDCollitionmaskObjects4.length = 0;
gdjs.TrashbinCode.GDCollitionmaskObjects5.length = 0;
gdjs.TrashbinCode.GDTrashObjects1.length = 0;
gdjs.TrashbinCode.GDTrashObjects2.length = 0;
gdjs.TrashbinCode.GDTrashObjects3.length = 0;
gdjs.TrashbinCode.GDTrashObjects4.length = 0;
gdjs.TrashbinCode.GDTrashObjects5.length = 0;
gdjs.TrashbinCode.GDTransitionObjects1.length = 0;
gdjs.TrashbinCode.GDTransitionObjects2.length = 0;
gdjs.TrashbinCode.GDTransitionObjects3.length = 0;
gdjs.TrashbinCode.GDTransitionObjects4.length = 0;
gdjs.TrashbinCode.GDTransitionObjects5.length = 0;


return;

}

gdjs['TrashbinCode'] = gdjs.TrashbinCode;
