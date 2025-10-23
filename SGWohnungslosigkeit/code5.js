gdjs.StefanMinigameCode = {};
gdjs.StefanMinigameCode.localVariables = [];
gdjs.StefanMinigameCode.idToCallbackMap = new Map();
gdjs.StefanMinigameCode.GDDiabolost_95228beObjects1= [];
gdjs.StefanMinigameCode.GDDiabolost_95228beObjects2= [];
gdjs.StefanMinigameCode.GDDiabolost_95228beObjects3= [];
gdjs.StefanMinigameCode.GDDiabolost_95228beObjects4= [];
gdjs.StefanMinigameCode.GDDiaboloObjects1= [];
gdjs.StefanMinigameCode.GDDiaboloObjects2= [];
gdjs.StefanMinigameCode.GDDiaboloObjects3= [];
gdjs.StefanMinigameCode.GDDiaboloObjects4= [];
gdjs.StefanMinigameCode.GDNewPanelSpriteObjects1= [];
gdjs.StefanMinigameCode.GDNewPanelSpriteObjects2= [];
gdjs.StefanMinigameCode.GDNewPanelSpriteObjects3= [];
gdjs.StefanMinigameCode.GDNewPanelSpriteObjects4= [];
gdjs.StefanMinigameCode.GDCollectableObjects1= [];
gdjs.StefanMinigameCode.GDCollectableObjects2= [];
gdjs.StefanMinigameCode.GDCollectableObjects3= [];
gdjs.StefanMinigameCode.GDCollectableObjects4= [];
gdjs.StefanMinigameCode.GDNewGame2Objects1= [];
gdjs.StefanMinigameCode.GDNewGame2Objects2= [];
gdjs.StefanMinigameCode.GDNewGame2Objects3= [];
gdjs.StefanMinigameCode.GDNewGame2Objects4= [];
gdjs.StefanMinigameCode.GDNewGameButtonObjects1= [];
gdjs.StefanMinigameCode.GDNewGameButtonObjects2= [];
gdjs.StefanMinigameCode.GDNewGameButtonObjects3= [];
gdjs.StefanMinigameCode.GDNewGameButtonObjects4= [];
gdjs.StefanMinigameCode.GDBackToOverworldObjects1= [];
gdjs.StefanMinigameCode.GDBackToOverworldObjects2= [];
gdjs.StefanMinigameCode.GDBackToOverworldObjects3= [];
gdjs.StefanMinigameCode.GDBackToOverworldObjects4= [];
gdjs.StefanMinigameCode.GDTitelObjects1= [];
gdjs.StefanMinigameCode.GDTitelObjects2= [];
gdjs.StefanMinigameCode.GDTitelObjects3= [];
gdjs.StefanMinigameCode.GDTitelObjects4= [];
gdjs.StefanMinigameCode.GDTitel2Objects1= [];
gdjs.StefanMinigameCode.GDTitel2Objects2= [];
gdjs.StefanMinigameCode.GDTitel2Objects3= [];
gdjs.StefanMinigameCode.GDTitel2Objects4= [];
gdjs.StefanMinigameCode.GDScore2Objects1= [];
gdjs.StefanMinigameCode.GDScore2Objects2= [];
gdjs.StefanMinigameCode.GDScore2Objects3= [];
gdjs.StefanMinigameCode.GDScore2Objects4= [];
gdjs.StefanMinigameCode.GDHighScoreObjects1= [];
gdjs.StefanMinigameCode.GDHighScoreObjects2= [];
gdjs.StefanMinigameCode.GDHighScoreObjects3= [];
gdjs.StefanMinigameCode.GDHighScoreObjects4= [];
gdjs.StefanMinigameCode.GDKollisionmaskObjects1= [];
gdjs.StefanMinigameCode.GDKollisionmaskObjects2= [];
gdjs.StefanMinigameCode.GDKollisionmaskObjects3= [];
gdjs.StefanMinigameCode.GDKollisionmaskObjects4= [];
gdjs.StefanMinigameCode.GDControllsObjects1= [];
gdjs.StefanMinigameCode.GDControllsObjects2= [];
gdjs.StefanMinigameCode.GDControllsObjects3= [];
gdjs.StefanMinigameCode.GDControllsObjects4= [];
gdjs.StefanMinigameCode.GDSpaceKeyDialogueObjects1= [];
gdjs.StefanMinigameCode.GDSpaceKeyDialogueObjects2= [];
gdjs.StefanMinigameCode.GDSpaceKeyDialogueObjects3= [];
gdjs.StefanMinigameCode.GDSpaceKeyDialogueObjects4= [];
gdjs.StefanMinigameCode.GDTransitionObjects1= [];
gdjs.StefanMinigameCode.GDTransitionObjects2= [];
gdjs.StefanMinigameCode.GDTransitionObjects3= [];
gdjs.StefanMinigameCode.GDTransitionObjects4= [];


gdjs.StefanMinigameCode.asyncCallback43301676 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.StefanMinigameCode.localVariables);
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}
gdjs.StefanMinigameCode.localVariables.length = 0;
}
gdjs.StefanMinigameCode.idToCallbackMap.set(43301676, gdjs.StefanMinigameCode.asyncCallback43301676);
gdjs.StefanMinigameCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.StefanMinigameCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1.25), (runtimeScene) => (gdjs.StefanMinigameCode.asyncCallback43301676(runtimeScene, asyncObjectsList)), 43301676, asyncObjectsList);
}
}

}


};gdjs.StefanMinigameCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Diabolo"), gdjs.StefanMinigameCode.GDDiaboloObjects2);
gdjs.copyArray(runtimeScene.getObjects("Diabolostäbe"), gdjs.StefanMinigameCode.GDDiabolost_95228beObjects2);
gdjs.copyArray(runtimeScene.getObjects("HighScore"), gdjs.StefanMinigameCode.GDHighScoreObjects2);
gdjs.copyArray(runtimeScene.getObjects("SpaceKeyDialogue"), gdjs.StefanMinigameCode.GDSpaceKeyDialogueObjects2);
{for(var i = 0, len = gdjs.StefanMinigameCode.GDSpaceKeyDialogueObjects2.length ;i < len;++i) {
    gdjs.StefanMinigameCode.GDSpaceKeyDialogueObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.StefanMinigameCode.GDDiaboloObjects2.length ;i < len;++i) {
    gdjs.StefanMinigameCode.GDDiaboloObjects2[i].getBehavior("Physics2").setStatic();
}
}
{for(var i = 0, len = gdjs.StefanMinigameCode.GDDiaboloObjects2.length ;i < len;++i) {
    gdjs.StefanMinigameCode.GDDiaboloObjects2[i].getBehavior("Physics2").setGravity(0, 1);
}
}
{for(var i = 0, len = gdjs.StefanMinigameCode.GDDiabolost_95228beObjects2.length ;i < len;++i) {
    gdjs.StefanMinigameCode.GDDiabolost_95228beObjects2[i].getBehavior("Animation").setAnimationIndex(1);
}
}
{for(var i = 0, len = gdjs.StefanMinigameCode.GDDiabolost_95228beObjects2.length ;i < len;++i) {
    gdjs.StefanMinigameCode.GDDiabolost_95228beObjects2[i].setAnimationFrame(3);
}
}
{for(var i = 0, len = gdjs.StefanMinigameCode.GDHighScoreObjects2.length ;i < len;++i) {
    gdjs.StefanMinigameCode.GDHighScoreObjects2[i].getBehavior("Text").setText("Highscore: " + gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(7).getChild("StefansGame").getChild("HighScore").getAsNumber()));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BackToOverworld"), gdjs.StefanMinigameCode.GDBackToOverworldObjects1);
gdjs.copyArray(runtimeScene.getObjects("Controlls"), gdjs.StefanMinigameCode.GDControllsObjects1);
gdjs.copyArray(runtimeScene.getObjects("HighScore"), gdjs.StefanMinigameCode.GDHighScoreObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewGame2"), gdjs.StefanMinigameCode.GDNewGame2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewGameButton"), gdjs.StefanMinigameCode.GDNewGameButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("Titel"), gdjs.StefanMinigameCode.GDTitelObjects1);
gdjs.copyArray(runtimeScene.getObjects("Titel2"), gdjs.StefanMinigameCode.GDTitel2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StefanMinigameCode.GDNewGame2Objects1.length;i<l;++i) {
    if ( !(gdjs.StefanMinigameCode.GDNewGame2Objects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.StefanMinigameCode.GDNewGame2Objects1[k] = gdjs.StefanMinigameCode.GDNewGame2Objects1[i];
        ++k;
    }
}
gdjs.StefanMinigameCode.GDNewGame2Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.StefanMinigameCode.GDNewGameButtonObjects1.length;i<l;++i) {
    if ( !(gdjs.StefanMinigameCode.GDNewGameButtonObjects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.StefanMinigameCode.GDNewGameButtonObjects1[k] = gdjs.StefanMinigameCode.GDNewGameButtonObjects1[i];
        ++k;
    }
}
gdjs.StefanMinigameCode.GDNewGameButtonObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.StefanMinigameCode.GDBackToOverworldObjects1.length;i<l;++i) {
    if ( !(gdjs.StefanMinigameCode.GDBackToOverworldObjects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.StefanMinigameCode.GDBackToOverworldObjects1[k] = gdjs.StefanMinigameCode.GDBackToOverworldObjects1[i];
        ++k;
    }
}
gdjs.StefanMinigameCode.GDBackToOverworldObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.StefanMinigameCode.GDTitelObjects1.length;i<l;++i) {
    if ( !(gdjs.StefanMinigameCode.GDTitelObjects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.StefanMinigameCode.GDTitelObjects1[k] = gdjs.StefanMinigameCode.GDTitelObjects1[i];
        ++k;
    }
}
gdjs.StefanMinigameCode.GDTitelObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.StefanMinigameCode.GDTitel2Objects1.length;i<l;++i) {
    if ( !(gdjs.StefanMinigameCode.GDTitel2Objects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.StefanMinigameCode.GDTitel2Objects1[k] = gdjs.StefanMinigameCode.GDTitel2Objects1[i];
        ++k;
    }
}
gdjs.StefanMinigameCode.GDTitel2Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.StefanMinigameCode.GDHighScoreObjects1.length;i<l;++i) {
    if ( !(gdjs.StefanMinigameCode.GDHighScoreObjects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.StefanMinigameCode.GDHighScoreObjects1[k] = gdjs.StefanMinigameCode.GDHighScoreObjects1[i];
        ++k;
    }
}
gdjs.StefanMinigameCode.GDHighScoreObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.StefanMinigameCode.GDControllsObjects1.length;i<l;++i) {
    if ( !(gdjs.StefanMinigameCode.GDControllsObjects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.StefanMinigameCode.GDControllsObjects1[k] = gdjs.StefanMinigameCode.GDControllsObjects1[i];
        ++k;
    }
}
gdjs.StefanMinigameCode.GDControllsObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(0).getAsBoolean();
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Diabolo"), gdjs.StefanMinigameCode.GDDiaboloObjects1);
gdjs.copyArray(runtimeScene.getObjects("SpaceKeyDialogue"), gdjs.StefanMinigameCode.GDSpaceKeyDialogueObjects1);
{for(var i = 0, len = gdjs.StefanMinigameCode.GDDiaboloObjects1.length ;i < len;++i) {
    gdjs.StefanMinigameCode.GDDiaboloObjects1[i].getBehavior("Physics2").setDynamic();
}
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setBoolean(false);
}
{for(var i = 0, len = gdjs.StefanMinigameCode.GDSpaceKeyDialogueObjects1.length ;i < len;++i) {
    gdjs.StefanMinigameCode.GDSpaceKeyDialogueObjects1[i].hide();
}
}
}

}


};gdjs.StefanMinigameCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(7).getChild("StefansGame").getChild("HighScore").getAsNumber() < runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber());
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("HighScore"), gdjs.StefanMinigameCode.GDHighScoreObjects3);
{runtimeScene.getGame().getVariables().getFromIndex(7).getChild("StefansGame").getChild("HighScore").setNumber(runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber());
}
{for(var i = 0, len = gdjs.StefanMinigameCode.GDHighScoreObjects3.length ;i < len;++i) {
    gdjs.StefanMinigameCode.GDHighScoreObjects3[i].getBehavior("Text").setText("Highscore: " + gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(7).getChild("StefansGame").getChild("HighScore").getAsNumber()));
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("BackToOverworld"), gdjs.StefanMinigameCode.GDBackToOverworldObjects3);
gdjs.copyArray(runtimeScene.getObjects("Controlls"), gdjs.StefanMinigameCode.GDControllsObjects3);
gdjs.copyArray(gdjs.StefanMinigameCode.GDDiaboloObjects2, gdjs.StefanMinigameCode.GDDiaboloObjects3);

gdjs.copyArray(runtimeScene.getObjects("HighScore"), gdjs.StefanMinigameCode.GDHighScoreObjects3);
gdjs.copyArray(runtimeScene.getObjects("NewGame2"), gdjs.StefanMinigameCode.GDNewGame2Objects3);
gdjs.copyArray(runtimeScene.getObjects("NewGameButton"), gdjs.StefanMinigameCode.GDNewGameButtonObjects3);
gdjs.copyArray(runtimeScene.getObjects("Score2"), gdjs.StefanMinigameCode.GDScore2Objects3);
gdjs.copyArray(runtimeScene.getObjects("Titel"), gdjs.StefanMinigameCode.GDTitelObjects3);
gdjs.copyArray(runtimeScene.getObjects("Titel2"), gdjs.StefanMinigameCode.GDTitel2Objects3);
{for(var i = 0, len = gdjs.StefanMinigameCode.GDDiaboloObjects3.length ;i < len;++i) {
    gdjs.StefanMinigameCode.GDDiaboloObjects3[i].getBehavior("Physics2").setStatic();
}
}
{for(var i = 0, len = gdjs.StefanMinigameCode.GDDiaboloObjects3.length ;i < len;++i) {
    gdjs.StefanMinigameCode.GDDiaboloObjects3[i].setCenterPositionInScene(gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0) / 2,30);
}
}
{for(var i = 0, len = gdjs.StefanMinigameCode.GDScore2Objects3.length ;i < len;++i) {
    gdjs.StefanMinigameCode.GDScore2Objects3[i].getBehavior("Text").setText("Score: 0");
}
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(0);
}
{for(var i = 0, len = gdjs.StefanMinigameCode.GDNewGame2Objects3.length ;i < len;++i) {
    gdjs.StefanMinigameCode.GDNewGame2Objects3[i].hide(false);
}
for(var i = 0, len = gdjs.StefanMinigameCode.GDNewGameButtonObjects3.length ;i < len;++i) {
    gdjs.StefanMinigameCode.GDNewGameButtonObjects3[i].hide(false);
}
for(var i = 0, len = gdjs.StefanMinigameCode.GDBackToOverworldObjects3.length ;i < len;++i) {
    gdjs.StefanMinigameCode.GDBackToOverworldObjects3[i].hide(false);
}
for(var i = 0, len = gdjs.StefanMinigameCode.GDTitelObjects3.length ;i < len;++i) {
    gdjs.StefanMinigameCode.GDTitelObjects3[i].hide(false);
}
for(var i = 0, len = gdjs.StefanMinigameCode.GDTitel2Objects3.length ;i < len;++i) {
    gdjs.StefanMinigameCode.GDTitel2Objects3[i].hide(false);
}
for(var i = 0, len = gdjs.StefanMinigameCode.GDHighScoreObjects3.length ;i < len;++i) {
    gdjs.StefanMinigameCode.GDHighScoreObjects3[i].hide(false);
}
for(var i = 0, len = gdjs.StefanMinigameCode.GDControllsObjects3.length ;i < len;++i) {
    gdjs.StefanMinigameCode.GDControllsObjects3[i].hide(false);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(1);
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setBoolean(true);
}
}

}


{

gdjs.copyArray(gdjs.StefanMinigameCode.GDDiaboloObjects2, gdjs.StefanMinigameCode.GDDiaboloObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StefanMinigameCode.GDDiaboloObjects3.length;i<l;++i) {
    if ( gdjs.StefanMinigameCode.GDDiaboloObjects3[i].getX() < 0 ) {
        isConditionTrue_0 = true;
        gdjs.StefanMinigameCode.GDDiaboloObjects3[k] = gdjs.StefanMinigameCode.GDDiaboloObjects3[i];
        ++k;
    }
}
gdjs.StefanMinigameCode.GDDiaboloObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(43315268);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.StefanMinigameCode.GDDiaboloObjects3 */
{for(var i = 0, len = gdjs.StefanMinigameCode.GDDiaboloObjects3.length ;i < len;++i) {
    gdjs.StefanMinigameCode.GDDiaboloObjects3[i].getBehavior("Physics2").applyImpulse(-((gdjs.StefanMinigameCode.GDDiaboloObjects3[i].getBehavior("Physics2").getLinearVelocityX())), 0, (gdjs.StefanMinigameCode.GDDiaboloObjects3[i].getCenterXInScene()), (gdjs.StefanMinigameCode.GDDiaboloObjects3[i].getCenterYInScene()));
}
}
}

}


{

/* Reuse gdjs.StefanMinigameCode.GDDiaboloObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StefanMinigameCode.GDDiaboloObjects2.length;i<l;++i) {
    if ( gdjs.StefanMinigameCode.GDDiaboloObjects2[i].getX() > 1280 ) {
        isConditionTrue_0 = true;
        gdjs.StefanMinigameCode.GDDiaboloObjects2[k] = gdjs.StefanMinigameCode.GDDiaboloObjects2[i];
        ++k;
    }
}
gdjs.StefanMinigameCode.GDDiaboloObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(43328940);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.StefanMinigameCode.GDDiaboloObjects2 */
{for(var i = 0, len = gdjs.StefanMinigameCode.GDDiaboloObjects2.length ;i < len;++i) {
    gdjs.StefanMinigameCode.GDDiaboloObjects2[i].getBehavior("Physics2").applyImpulse((gdjs.StefanMinigameCode.GDDiaboloObjects2[i].getBehavior("Physics2").getLinearVelocityX()), 0, (gdjs.StefanMinigameCode.GDDiaboloObjects2[i].getCenterXInScene()), (gdjs.StefanMinigameCode.GDDiaboloObjects2[i].getCenterYInScene()));
}
}
}

}


};gdjs.StefanMinigameCode.mapOfGDgdjs_9546StefanMinigameCode_9546GDDiaboloObjects3Objects = Hashtable.newFrom({"Diabolo": gdjs.StefanMinigameCode.GDDiaboloObjects3});
gdjs.StefanMinigameCode.mapOfGDgdjs_9546StefanMinigameCode_9546GDDiabolost_959595228beObjects3Objects = Hashtable.newFrom({"Diabolostäbe": gdjs.StefanMinigameCode.GDDiabolost_95228beObjects3});
gdjs.StefanMinigameCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Diabolo"), gdjs.StefanMinigameCode.GDDiaboloObjects3);
gdjs.copyArray(runtimeScene.getObjects("Diabolostäbe"), gdjs.StefanMinigameCode.GDDiabolost_95228beObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.StefanMinigameCode.mapOfGDgdjs_9546StefanMinigameCode_9546GDDiaboloObjects3Objects, gdjs.StefanMinigameCode.mapOfGDgdjs_9546StefanMinigameCode_9546GDDiabolost_959595228beObjects3Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.StefanMinigameCode.GDDiaboloObjects3 */
/* Reuse gdjs.StefanMinigameCode.GDDiabolost_95228beObjects3 */
{for(var i = 0, len = gdjs.StefanMinigameCode.GDDiabolost_95228beObjects3.length ;i < len;++i) {
    gdjs.StefanMinigameCode.GDDiabolost_95228beObjects3[i].getBehavior("Animation").setAnimationIndex(0);
}
}
{for(var i = 0, len = gdjs.StefanMinigameCode.GDDiaboloObjects3.length ;i < len;++i) {
    gdjs.StefanMinigameCode.GDDiaboloObjects3[i].returnVariable(gdjs.StefanMinigameCode.GDDiaboloObjects3[i].getVariables().getFromIndex(0)).setBoolean(true);
}
}
}

}


};gdjs.StefanMinigameCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Diabolo"), gdjs.StefanMinigameCode.GDDiaboloObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StefanMinigameCode.GDDiaboloObjects3.length;i<l;++i) {
    if ( gdjs.StefanMinigameCode.GDDiaboloObjects3[i].getVariableBoolean(gdjs.StefanMinigameCode.GDDiaboloObjects3[i].getVariables().getFromIndex(0), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.StefanMinigameCode.GDDiaboloObjects3[k] = gdjs.StefanMinigameCode.GDDiaboloObjects3[i];
        ++k;
    }
}
gdjs.StefanMinigameCode.GDDiaboloObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(43323452);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.StefanMinigameCode.GDDiaboloObjects3 */
/* Reuse gdjs.StefanMinigameCode.GDDiabolost_95228beObjects3 */
{for(var i = 0, len = gdjs.StefanMinigameCode.GDDiabolost_95228beObjects3.length ;i < len;++i) {
    gdjs.StefanMinigameCode.GDDiabolost_95228beObjects3[i].getBehavior("Animation").setAnimationIndex(1);
}
}
{for(var i = 0, len = gdjs.StefanMinigameCode.GDDiaboloObjects3.length ;i < len;++i) {
    gdjs.StefanMinigameCode.GDDiaboloObjects3[i].getBehavior("Physics2").applyPolarImpulse(270 - runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber(), gdjs.randomFloatInRange(0.85, 1), (gdjs.StefanMinigameCode.GDDiaboloObjects3[i].getCenterXInScene()), (gdjs.StefanMinigameCode.GDDiaboloObjects3[i].getCenterYInScene()));
}
}
{for(var i = 0, len = gdjs.StefanMinigameCode.GDDiaboloObjects3.length ;i < len;++i) {
    gdjs.StefanMinigameCode.GDDiaboloObjects3[i].returnVariable(gdjs.StefanMinigameCode.GDDiaboloObjects3[i].getVariables().getFromIndex(0)).setBoolean(false);
}
}
}

}


};gdjs.StefanMinigameCode.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Diabolo"), gdjs.StefanMinigameCode.GDDiaboloObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StefanMinigameCode.GDDiaboloObjects3.length;i<l;++i) {
    if ( gdjs.StefanMinigameCode.GDDiaboloObjects3[i].getVariableBoolean(gdjs.StefanMinigameCode.GDDiaboloObjects3[i].getVariables().getFromIndex(0), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.StefanMinigameCode.GDDiaboloObjects3[k] = gdjs.StefanMinigameCode.GDDiaboloObjects3[i];
        ++k;
    }
}
gdjs.StefanMinigameCode.GDDiaboloObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(43365108);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.StefanMinigameCode.GDDiaboloObjects3 */
/* Reuse gdjs.StefanMinigameCode.GDDiabolost_95228beObjects3 */
{for(var i = 0, len = gdjs.StefanMinigameCode.GDDiabolost_95228beObjects3.length ;i < len;++i) {
    gdjs.StefanMinigameCode.GDDiabolost_95228beObjects3[i].getBehavior("Animation").setAnimationIndex(1);
}
}
{for(var i = 0, len = gdjs.StefanMinigameCode.GDDiaboloObjects3.length ;i < len;++i) {
    gdjs.StefanMinigameCode.GDDiaboloObjects3[i].getBehavior("Physics2").applyPolarImpulse(270 + runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber(), gdjs.randomFloatInRange(0.85, 1), (gdjs.StefanMinigameCode.GDDiaboloObjects3[i].getCenterXInScene()), (gdjs.StefanMinigameCode.GDDiaboloObjects3[i].getCenterYInScene()));
}
}
{for(var i = 0, len = gdjs.StefanMinigameCode.GDDiaboloObjects3.length ;i < len;++i) {
    gdjs.StefanMinigameCode.GDDiaboloObjects3[i].returnVariable(gdjs.StefanMinigameCode.GDDiaboloObjects3[i].getVariables().getFromIndex(0)).setBoolean(false);
}
}
}

}


};gdjs.StefanMinigameCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if (isConditionTrue_0) {

{ //Subevents
gdjs.StefanMinigameCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Diabolo"), gdjs.StefanMinigameCode.GDDiaboloObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StefanMinigameCode.GDDiaboloObjects3.length;i<l;++i) {
    if ( gdjs.StefanMinigameCode.GDDiaboloObjects3[i].getVariableBoolean(gdjs.StefanMinigameCode.GDDiaboloObjects3[i].getVariables().getFromIndex(0), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.StefanMinigameCode.GDDiaboloObjects3[k] = gdjs.StefanMinigameCode.GDDiaboloObjects3[i];
        ++k;
    }
}
gdjs.StefanMinigameCode.GDDiaboloObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.StefanMinigameCode.GDDiaboloObjects3 */
gdjs.copyArray(runtimeScene.getObjects("Diabolostäbe"), gdjs.StefanMinigameCode.GDDiabolost_95228beObjects3);
{for(var i = 0, len = gdjs.StefanMinigameCode.GDDiaboloObjects3.length ;i < len;++i) {
    gdjs.StefanMinigameCode.GDDiaboloObjects3[i].rotate(180, runtimeScene);
}
}
{for(var i = 0, len = gdjs.StefanMinigameCode.GDDiaboloObjects3.length ;i < len;++i) {
    gdjs.StefanMinigameCode.GDDiaboloObjects3[i].setCenterPositionInScene((( gdjs.StefanMinigameCode.GDDiabolost_95228beObjects3.length === 0 ) ? 0 :gdjs.StefanMinigameCode.GDDiabolost_95228beObjects3[0].getPointX("DiaboloP")),(( gdjs.StefanMinigameCode.GDDiabolost_95228beObjects3.length === 0 ) ? 0 :gdjs.StefanMinigameCode.GDDiabolost_95228beObjects3[0].getPointY("DiaboloP")));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Diabolo"), gdjs.StefanMinigameCode.GDDiaboloObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StefanMinigameCode.GDDiaboloObjects3.length;i<l;++i) {
    if ( gdjs.StefanMinigameCode.GDDiaboloObjects3[i].getVariableBoolean(gdjs.StefanMinigameCode.GDDiaboloObjects3[i].getVariables().getFromIndex(0), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.StefanMinigameCode.GDDiaboloObjects3[k] = gdjs.StefanMinigameCode.GDDiaboloObjects3[i];
        ++k;
    }
}
gdjs.StefanMinigameCode.GDDiaboloObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() < 10);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(43320388);
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(3).add(0.05);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Diabolostäbe"), gdjs.StefanMinigameCode.GDDiabolost_95228beObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StefanMinigameCode.GDDiabolost_95228beObjects3.length;i<l;++i) {
    if ( gdjs.StefanMinigameCode.GDDiabolost_95228beObjects3[i].getCenterXInScene() > -(5) + ((gdjs.StefanMinigameCode.GDDiabolost_95228beObjects3[i].getWidth()) / 2) ) {
        isConditionTrue_0 = true;
        gdjs.StefanMinigameCode.GDDiabolost_95228beObjects3[k] = gdjs.StefanMinigameCode.GDDiabolost_95228beObjects3[i];
        ++k;
    }
}
gdjs.StefanMinigameCode.GDDiabolost_95228beObjects3.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.StefanMinigameCode.GDDiabolost_95228beObjects3 */
{for(var i = 0, len = gdjs.StefanMinigameCode.GDDiabolost_95228beObjects3.length ;i < len;++i) {
    gdjs.StefanMinigameCode.GDDiabolost_95228beObjects3[i].addForce(-(150), 0, 0);
}
}

{ //Subevents
gdjs.StefanMinigameCode.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Diabolostäbe"), gdjs.StefanMinigameCode.GDDiabolost_95228beObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StefanMinigameCode.GDDiabolost_95228beObjects3.length;i<l;++i) {
    if ( gdjs.StefanMinigameCode.GDDiabolost_95228beObjects3[i].getCenterXInScene() < 1285 - ((gdjs.StefanMinigameCode.GDDiabolost_95228beObjects3[i].getWidth()) / 2) ) {
        isConditionTrue_0 = true;
        gdjs.StefanMinigameCode.GDDiabolost_95228beObjects3[k] = gdjs.StefanMinigameCode.GDDiabolost_95228beObjects3[i];
        ++k;
    }
}
gdjs.StefanMinigameCode.GDDiabolost_95228beObjects3.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.StefanMinigameCode.GDDiabolost_95228beObjects3 */
{for(var i = 0, len = gdjs.StefanMinigameCode.GDDiabolost_95228beObjects3.length ;i < len;++i) {
    gdjs.StefanMinigameCode.GDDiabolost_95228beObjects3[i].addForce(150, 0, 0);
}
}

{ //Subevents
gdjs.StefanMinigameCode.eventsList5(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Diabolo"), gdjs.StefanMinigameCode.GDDiaboloObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StefanMinigameCode.GDDiaboloObjects2.length;i<l;++i) {
    if ( gdjs.StefanMinigameCode.GDDiaboloObjects2[i].getVariableBoolean(gdjs.StefanMinigameCode.GDDiaboloObjects2[i].getVariables().getFromIndex(0), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.StefanMinigameCode.GDDiaboloObjects2[k] = gdjs.StefanMinigameCode.GDDiaboloObjects2[i];
        ++k;
    }
}
gdjs.StefanMinigameCode.GDDiaboloObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right"));
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left"));
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "a"));
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "d"));
}
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(43366540);
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.StefanMinigameCode.GDDiaboloObjects2 */
gdjs.copyArray(runtimeScene.getObjects("Diabolostäbe"), gdjs.StefanMinigameCode.GDDiabolost_95228beObjects2);
{for(var i = 0, len = gdjs.StefanMinigameCode.GDDiabolost_95228beObjects2.length ;i < len;++i) {
    gdjs.StefanMinigameCode.GDDiabolost_95228beObjects2[i].getBehavior("Animation").setAnimationIndex(1);
}
}
{for(var i = 0, len = gdjs.StefanMinigameCode.GDDiaboloObjects2.length ;i < len;++i) {
    gdjs.StefanMinigameCode.GDDiaboloObjects2[i].getBehavior("Physics2").applyPolarImpulse(gdjs.randomInRange(270 - runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber(), 270 + runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber()), gdjs.randomFloatInRange(0.9, 1.1), (gdjs.StefanMinigameCode.GDDiaboloObjects2[i].getCenterXInScene()), (gdjs.StefanMinigameCode.GDDiaboloObjects2[i].getCenterYInScene()));
}
}
{for(var i = 0, len = gdjs.StefanMinigameCode.GDDiaboloObjects2.length ;i < len;++i) {
    gdjs.StefanMinigameCode.GDDiaboloObjects2[i].returnVariable(gdjs.StefanMinigameCode.GDDiaboloObjects2[i].getVariables().getFromIndex(0)).setBoolean(false);
}
}
}

}


};gdjs.StefanMinigameCode.mapOfEmptyGDCollectableObjects = Hashtable.newFrom({"Collectable": []});
gdjs.StefanMinigameCode.mapOfGDgdjs_9546StefanMinigameCode_9546GDCollectableObjects2Objects = Hashtable.newFrom({"Collectable": gdjs.StefanMinigameCode.GDCollectableObjects2});
gdjs.StefanMinigameCode.eventsList7 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.StefanMinigameCode.GDCollectableObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.StefanMinigameCode.mapOfGDgdjs_9546StefanMinigameCode_9546GDCollectableObjects2Objects, gdjs.randomInRange(100, 1180), gdjs.randomInRange(70, 300), "");
}
}

}


};gdjs.StefanMinigameCode.mapOfGDgdjs_9546StefanMinigameCode_9546GDDiaboloObjects1Objects = Hashtable.newFrom({"Diabolo": gdjs.StefanMinigameCode.GDDiaboloObjects1});
gdjs.StefanMinigameCode.mapOfGDgdjs_9546StefanMinigameCode_9546GDCollectableObjects1Objects = Hashtable.newFrom({"Collectable": gdjs.StefanMinigameCode.GDCollectableObjects1});
gdjs.StefanMinigameCode.eventsList8 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(0).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(43369652);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Collectables");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Collectables") >= 10;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getSceneInstancesCount(runtimeScene, gdjs.StefanMinigameCode.mapOfEmptyGDCollectableObjects) < 3;
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Collectables");
}

{ //Subevents
gdjs.StefanMinigameCode.eventsList7(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Collectable"), gdjs.StefanMinigameCode.GDCollectableObjects1);
gdjs.copyArray(runtimeScene.getObjects("Diabolo"), gdjs.StefanMinigameCode.GDDiaboloObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.StefanMinigameCode.mapOfGDgdjs_9546StefanMinigameCode_9546GDDiaboloObjects1Objects, gdjs.StefanMinigameCode.mapOfGDgdjs_9546StefanMinigameCode_9546GDCollectableObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.StefanMinigameCode.GDCollectableObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Score2"), gdjs.StefanMinigameCode.GDScore2Objects1);
{for(var i = 0, len = gdjs.StefanMinigameCode.GDCollectableObjects1.length ;i < len;++i) {
    gdjs.StefanMinigameCode.GDCollectableObjects1[i].deleteFromScene(runtimeScene);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(1).add(1);
}
{for(var i = 0, len = gdjs.StefanMinigameCode.GDScore2Objects1.length ;i < len;++i) {
    gdjs.StefanMinigameCode.GDScore2Objects1[i].getBehavior("Text").setText("Score: " + runtimeScene.getScene().getVariables().getFromIndex(1).getAsString());
}
}
}

}


};gdjs.StefanMinigameCode.eventsList9 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Diabolo"), gdjs.StefanMinigameCode.GDDiaboloObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StefanMinigameCode.GDDiaboloObjects2.length;i<l;++i) {
    if ( gdjs.StefanMinigameCode.GDDiaboloObjects2[i].getY() > gdjs.evtTools.camera.getCameraBorderBottom(runtimeScene, "", 0) + 20 ) {
        isConditionTrue_0 = true;
        gdjs.StefanMinigameCode.GDDiaboloObjects2[k] = gdjs.StefanMinigameCode.GDDiaboloObjects2[i];
        ++k;
    }
}
gdjs.StefanMinigameCode.GDDiaboloObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(43325404);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.StefanMinigameCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


gdjs.StefanMinigameCode.eventsList6(runtimeScene);
}


{


gdjs.StefanMinigameCode.eventsList8(runtimeScene);
}


};gdjs.StefanMinigameCode.eventsList10 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewGameButton"), gdjs.StefanMinigameCode.GDNewGameButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StefanMinigameCode.GDNewGameButtonObjects1.length;i<l;++i) {
    if ( gdjs.StefanMinigameCode.GDNewGameButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.StefanMinigameCode.GDNewGameButtonObjects1[k] = gdjs.StefanMinigameCode.GDNewGameButtonObjects1[i];
        ++k;
    }
}
gdjs.StefanMinigameCode.GDNewGameButtonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(43356820);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BackToOverworld"), gdjs.StefanMinigameCode.GDBackToOverworldObjects1);
gdjs.copyArray(runtimeScene.getObjects("Controlls"), gdjs.StefanMinigameCode.GDControllsObjects1);
gdjs.copyArray(runtimeScene.getObjects("HighScore"), gdjs.StefanMinigameCode.GDHighScoreObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewGame2"), gdjs.StefanMinigameCode.GDNewGame2Objects1);
/* Reuse gdjs.StefanMinigameCode.GDNewGameButtonObjects1 */
gdjs.copyArray(runtimeScene.getObjects("SpaceKeyDialogue"), gdjs.StefanMinigameCode.GDSpaceKeyDialogueObjects1);
gdjs.copyArray(runtimeScene.getObjects("Titel"), gdjs.StefanMinigameCode.GDTitelObjects1);
gdjs.copyArray(runtimeScene.getObjects("Titel2"), gdjs.StefanMinigameCode.GDTitel2Objects1);
{for(var i = 0, len = gdjs.StefanMinigameCode.GDNewGame2Objects1.length ;i < len;++i) {
    gdjs.StefanMinigameCode.GDNewGame2Objects1[i].hide();
}
for(var i = 0, len = gdjs.StefanMinigameCode.GDNewGameButtonObjects1.length ;i < len;++i) {
    gdjs.StefanMinigameCode.GDNewGameButtonObjects1[i].hide();
}
for(var i = 0, len = gdjs.StefanMinigameCode.GDBackToOverworldObjects1.length ;i < len;++i) {
    gdjs.StefanMinigameCode.GDBackToOverworldObjects1[i].hide();
}
for(var i = 0, len = gdjs.StefanMinigameCode.GDTitelObjects1.length ;i < len;++i) {
    gdjs.StefanMinigameCode.GDTitelObjects1[i].hide();
}
for(var i = 0, len = gdjs.StefanMinigameCode.GDTitel2Objects1.length ;i < len;++i) {
    gdjs.StefanMinigameCode.GDTitel2Objects1[i].hide();
}
for(var i = 0, len = gdjs.StefanMinigameCode.GDHighScoreObjects1.length ;i < len;++i) {
    gdjs.StefanMinigameCode.GDHighScoreObjects1[i].hide();
}
for(var i = 0, len = gdjs.StefanMinigameCode.GDControllsObjects1.length ;i < len;++i) {
    gdjs.StefanMinigameCode.GDControllsObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.StefanMinigameCode.GDSpaceKeyDialogueObjects1.length ;i < len;++i) {
    gdjs.StefanMinigameCode.GDSpaceKeyDialogueObjects1[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BackToOverworld"), gdjs.StefanMinigameCode.GDBackToOverworldObjects1);
gdjs.copyArray(runtimeScene.getObjects("Controlls"), gdjs.StefanMinigameCode.GDControllsObjects1);
gdjs.copyArray(runtimeScene.getObjects("HighScore"), gdjs.StefanMinigameCode.GDHighScoreObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewGame2"), gdjs.StefanMinigameCode.GDNewGame2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewGameButton"), gdjs.StefanMinigameCode.GDNewGameButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("Titel"), gdjs.StefanMinigameCode.GDTitelObjects1);
gdjs.copyArray(runtimeScene.getObjects("Titel2"), gdjs.StefanMinigameCode.GDTitel2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StefanMinigameCode.GDNewGame2Objects1.length;i<l;++i) {
    if ( !(gdjs.StefanMinigameCode.GDNewGame2Objects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.StefanMinigameCode.GDNewGame2Objects1[k] = gdjs.StefanMinigameCode.GDNewGame2Objects1[i];
        ++k;
    }
}
gdjs.StefanMinigameCode.GDNewGame2Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.StefanMinigameCode.GDNewGameButtonObjects1.length;i<l;++i) {
    if ( !(gdjs.StefanMinigameCode.GDNewGameButtonObjects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.StefanMinigameCode.GDNewGameButtonObjects1[k] = gdjs.StefanMinigameCode.GDNewGameButtonObjects1[i];
        ++k;
    }
}
gdjs.StefanMinigameCode.GDNewGameButtonObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.StefanMinigameCode.GDBackToOverworldObjects1.length;i<l;++i) {
    if ( !(gdjs.StefanMinigameCode.GDBackToOverworldObjects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.StefanMinigameCode.GDBackToOverworldObjects1[k] = gdjs.StefanMinigameCode.GDBackToOverworldObjects1[i];
        ++k;
    }
}
gdjs.StefanMinigameCode.GDBackToOverworldObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.StefanMinigameCode.GDTitelObjects1.length;i<l;++i) {
    if ( !(gdjs.StefanMinigameCode.GDTitelObjects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.StefanMinigameCode.GDTitelObjects1[k] = gdjs.StefanMinigameCode.GDTitelObjects1[i];
        ++k;
    }
}
gdjs.StefanMinigameCode.GDTitelObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.StefanMinigameCode.GDTitel2Objects1.length;i<l;++i) {
    if ( !(gdjs.StefanMinigameCode.GDTitel2Objects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.StefanMinigameCode.GDTitel2Objects1[k] = gdjs.StefanMinigameCode.GDTitel2Objects1[i];
        ++k;
    }
}
gdjs.StefanMinigameCode.GDTitel2Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.StefanMinigameCode.GDHighScoreObjects1.length;i<l;++i) {
    if ( !(gdjs.StefanMinigameCode.GDHighScoreObjects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.StefanMinigameCode.GDHighScoreObjects1[k] = gdjs.StefanMinigameCode.GDHighScoreObjects1[i];
        ++k;
    }
}
gdjs.StefanMinigameCode.GDHighScoreObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.StefanMinigameCode.GDControllsObjects1.length;i<l;++i) {
    if ( !(gdjs.StefanMinigameCode.GDControllsObjects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.StefanMinigameCode.GDControllsObjects1[k] = gdjs.StefanMinigameCode.GDControllsObjects1[i];
        ++k;
    }
}
gdjs.StefanMinigameCode.GDControllsObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(43334228);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.StefanMinigameCode.GDBackToOverworldObjects1 */
/* Reuse gdjs.StefanMinigameCode.GDNewGameButtonObjects1 */
{for(var i = 0, len = gdjs.StefanMinigameCode.GDNewGameButtonObjects1.length ;i < len;++i) {
    gdjs.StefanMinigameCode.GDNewGameButtonObjects1[i].Activate(false, null);
}
}
{for(var i = 0, len = gdjs.StefanMinigameCode.GDBackToOverworldObjects1.length ;i < len;++i) {
    gdjs.StefanMinigameCode.GDBackToOverworldObjects1[i].Activate(false, null);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BackToOverworld"), gdjs.StefanMinigameCode.GDBackToOverworldObjects1);
gdjs.copyArray(runtimeScene.getObjects("Controlls"), gdjs.StefanMinigameCode.GDControllsObjects1);
gdjs.copyArray(runtimeScene.getObjects("HighScore"), gdjs.StefanMinigameCode.GDHighScoreObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewGame2"), gdjs.StefanMinigameCode.GDNewGame2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewGameButton"), gdjs.StefanMinigameCode.GDNewGameButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("Titel"), gdjs.StefanMinigameCode.GDTitelObjects1);
gdjs.copyArray(runtimeScene.getObjects("Titel2"), gdjs.StefanMinigameCode.GDTitel2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StefanMinigameCode.GDNewGame2Objects1.length;i<l;++i) {
    if ( gdjs.StefanMinigameCode.GDNewGame2Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.StefanMinigameCode.GDNewGame2Objects1[k] = gdjs.StefanMinigameCode.GDNewGame2Objects1[i];
        ++k;
    }
}
gdjs.StefanMinigameCode.GDNewGame2Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.StefanMinigameCode.GDNewGameButtonObjects1.length;i<l;++i) {
    if ( gdjs.StefanMinigameCode.GDNewGameButtonObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.StefanMinigameCode.GDNewGameButtonObjects1[k] = gdjs.StefanMinigameCode.GDNewGameButtonObjects1[i];
        ++k;
    }
}
gdjs.StefanMinigameCode.GDNewGameButtonObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.StefanMinigameCode.GDBackToOverworldObjects1.length;i<l;++i) {
    if ( gdjs.StefanMinigameCode.GDBackToOverworldObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.StefanMinigameCode.GDBackToOverworldObjects1[k] = gdjs.StefanMinigameCode.GDBackToOverworldObjects1[i];
        ++k;
    }
}
gdjs.StefanMinigameCode.GDBackToOverworldObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.StefanMinigameCode.GDTitelObjects1.length;i<l;++i) {
    if ( gdjs.StefanMinigameCode.GDTitelObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.StefanMinigameCode.GDTitelObjects1[k] = gdjs.StefanMinigameCode.GDTitelObjects1[i];
        ++k;
    }
}
gdjs.StefanMinigameCode.GDTitelObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.StefanMinigameCode.GDTitel2Objects1.length;i<l;++i) {
    if ( gdjs.StefanMinigameCode.GDTitel2Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.StefanMinigameCode.GDTitel2Objects1[k] = gdjs.StefanMinigameCode.GDTitel2Objects1[i];
        ++k;
    }
}
gdjs.StefanMinigameCode.GDTitel2Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.StefanMinigameCode.GDHighScoreObjects1.length;i<l;++i) {
    if ( gdjs.StefanMinigameCode.GDHighScoreObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.StefanMinigameCode.GDHighScoreObjects1[k] = gdjs.StefanMinigameCode.GDHighScoreObjects1[i];
        ++k;
    }
}
gdjs.StefanMinigameCode.GDHighScoreObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.StefanMinigameCode.GDControllsObjects1.length;i<l;++i) {
    if ( gdjs.StefanMinigameCode.GDControllsObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.StefanMinigameCode.GDControllsObjects1[k] = gdjs.StefanMinigameCode.GDControllsObjects1[i];
        ++k;
    }
}
gdjs.StefanMinigameCode.GDControllsObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(43313012);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.StefanMinigameCode.GDBackToOverworldObjects1 */
/* Reuse gdjs.StefanMinigameCode.GDNewGameButtonObjects1 */
{for(var i = 0, len = gdjs.StefanMinigameCode.GDNewGameButtonObjects1.length ;i < len;++i) {
    gdjs.StefanMinigameCode.GDNewGameButtonObjects1[i].Activate(true, null);
}
}
{for(var i = 0, len = gdjs.StefanMinigameCode.GDBackToOverworldObjects1.length ;i < len;++i) {
    gdjs.StefanMinigameCode.GDBackToOverworldObjects1[i].Activate(true, null);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BackToOverworld"), gdjs.StefanMinigameCode.GDBackToOverworldObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StefanMinigameCode.GDBackToOverworldObjects1.length;i<l;++i) {
    if ( gdjs.StefanMinigameCode.GDBackToOverworldObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.StefanMinigameCode.GDBackToOverworldObjects1[k] = gdjs.StefanMinigameCode.GDBackToOverworldObjects1[i];
        ++k;
    }
}
gdjs.StefanMinigameCode.GDBackToOverworldObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Transition"), gdjs.StefanMinigameCode.GDTransitionObjects1);
{for(var i = 0, len = gdjs.StefanMinigameCode.GDTransitionObjects1.length ;i < len;++i) {
    gdjs.StefanMinigameCode.GDTransitionObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.StefanMinigameCode.GDTransitionObjects1.length ;i < len;++i) {
    gdjs.StefanMinigameCode.GDTransitionObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 1, "Circular", "Forward", 255, null);
}
}

{ //Subevents
gdjs.StefanMinigameCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.StefanMinigameCode.eventsList1(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(0).getAsBoolean();
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.StefanMinigameCode.eventsList9(runtimeScene);} //End of subevents
}

}


};

gdjs.StefanMinigameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.StefanMinigameCode.GDDiabolost_95228beObjects1.length = 0;
gdjs.StefanMinigameCode.GDDiabolost_95228beObjects2.length = 0;
gdjs.StefanMinigameCode.GDDiabolost_95228beObjects3.length = 0;
gdjs.StefanMinigameCode.GDDiabolost_95228beObjects4.length = 0;
gdjs.StefanMinigameCode.GDDiaboloObjects1.length = 0;
gdjs.StefanMinigameCode.GDDiaboloObjects2.length = 0;
gdjs.StefanMinigameCode.GDDiaboloObjects3.length = 0;
gdjs.StefanMinigameCode.GDDiaboloObjects4.length = 0;
gdjs.StefanMinigameCode.GDNewPanelSpriteObjects1.length = 0;
gdjs.StefanMinigameCode.GDNewPanelSpriteObjects2.length = 0;
gdjs.StefanMinigameCode.GDNewPanelSpriteObjects3.length = 0;
gdjs.StefanMinigameCode.GDNewPanelSpriteObjects4.length = 0;
gdjs.StefanMinigameCode.GDCollectableObjects1.length = 0;
gdjs.StefanMinigameCode.GDCollectableObjects2.length = 0;
gdjs.StefanMinigameCode.GDCollectableObjects3.length = 0;
gdjs.StefanMinigameCode.GDCollectableObjects4.length = 0;
gdjs.StefanMinigameCode.GDNewGame2Objects1.length = 0;
gdjs.StefanMinigameCode.GDNewGame2Objects2.length = 0;
gdjs.StefanMinigameCode.GDNewGame2Objects3.length = 0;
gdjs.StefanMinigameCode.GDNewGame2Objects4.length = 0;
gdjs.StefanMinigameCode.GDNewGameButtonObjects1.length = 0;
gdjs.StefanMinigameCode.GDNewGameButtonObjects2.length = 0;
gdjs.StefanMinigameCode.GDNewGameButtonObjects3.length = 0;
gdjs.StefanMinigameCode.GDNewGameButtonObjects4.length = 0;
gdjs.StefanMinigameCode.GDBackToOverworldObjects1.length = 0;
gdjs.StefanMinigameCode.GDBackToOverworldObjects2.length = 0;
gdjs.StefanMinigameCode.GDBackToOverworldObjects3.length = 0;
gdjs.StefanMinigameCode.GDBackToOverworldObjects4.length = 0;
gdjs.StefanMinigameCode.GDTitelObjects1.length = 0;
gdjs.StefanMinigameCode.GDTitelObjects2.length = 0;
gdjs.StefanMinigameCode.GDTitelObjects3.length = 0;
gdjs.StefanMinigameCode.GDTitelObjects4.length = 0;
gdjs.StefanMinigameCode.GDTitel2Objects1.length = 0;
gdjs.StefanMinigameCode.GDTitel2Objects2.length = 0;
gdjs.StefanMinigameCode.GDTitel2Objects3.length = 0;
gdjs.StefanMinigameCode.GDTitel2Objects4.length = 0;
gdjs.StefanMinigameCode.GDScore2Objects1.length = 0;
gdjs.StefanMinigameCode.GDScore2Objects2.length = 0;
gdjs.StefanMinigameCode.GDScore2Objects3.length = 0;
gdjs.StefanMinigameCode.GDScore2Objects4.length = 0;
gdjs.StefanMinigameCode.GDHighScoreObjects1.length = 0;
gdjs.StefanMinigameCode.GDHighScoreObjects2.length = 0;
gdjs.StefanMinigameCode.GDHighScoreObjects3.length = 0;
gdjs.StefanMinigameCode.GDHighScoreObjects4.length = 0;
gdjs.StefanMinigameCode.GDKollisionmaskObjects1.length = 0;
gdjs.StefanMinigameCode.GDKollisionmaskObjects2.length = 0;
gdjs.StefanMinigameCode.GDKollisionmaskObjects3.length = 0;
gdjs.StefanMinigameCode.GDKollisionmaskObjects4.length = 0;
gdjs.StefanMinigameCode.GDControllsObjects1.length = 0;
gdjs.StefanMinigameCode.GDControllsObjects2.length = 0;
gdjs.StefanMinigameCode.GDControllsObjects3.length = 0;
gdjs.StefanMinigameCode.GDControllsObjects4.length = 0;
gdjs.StefanMinigameCode.GDSpaceKeyDialogueObjects1.length = 0;
gdjs.StefanMinigameCode.GDSpaceKeyDialogueObjects2.length = 0;
gdjs.StefanMinigameCode.GDSpaceKeyDialogueObjects3.length = 0;
gdjs.StefanMinigameCode.GDSpaceKeyDialogueObjects4.length = 0;
gdjs.StefanMinigameCode.GDTransitionObjects1.length = 0;
gdjs.StefanMinigameCode.GDTransitionObjects2.length = 0;
gdjs.StefanMinigameCode.GDTransitionObjects3.length = 0;
gdjs.StefanMinigameCode.GDTransitionObjects4.length = 0;

gdjs.StefanMinigameCode.eventsList10(runtimeScene);
gdjs.StefanMinigameCode.GDDiabolost_95228beObjects1.length = 0;
gdjs.StefanMinigameCode.GDDiabolost_95228beObjects2.length = 0;
gdjs.StefanMinigameCode.GDDiabolost_95228beObjects3.length = 0;
gdjs.StefanMinigameCode.GDDiabolost_95228beObjects4.length = 0;
gdjs.StefanMinigameCode.GDDiaboloObjects1.length = 0;
gdjs.StefanMinigameCode.GDDiaboloObjects2.length = 0;
gdjs.StefanMinigameCode.GDDiaboloObjects3.length = 0;
gdjs.StefanMinigameCode.GDDiaboloObjects4.length = 0;
gdjs.StefanMinigameCode.GDNewPanelSpriteObjects1.length = 0;
gdjs.StefanMinigameCode.GDNewPanelSpriteObjects2.length = 0;
gdjs.StefanMinigameCode.GDNewPanelSpriteObjects3.length = 0;
gdjs.StefanMinigameCode.GDNewPanelSpriteObjects4.length = 0;
gdjs.StefanMinigameCode.GDCollectableObjects1.length = 0;
gdjs.StefanMinigameCode.GDCollectableObjects2.length = 0;
gdjs.StefanMinigameCode.GDCollectableObjects3.length = 0;
gdjs.StefanMinigameCode.GDCollectableObjects4.length = 0;
gdjs.StefanMinigameCode.GDNewGame2Objects1.length = 0;
gdjs.StefanMinigameCode.GDNewGame2Objects2.length = 0;
gdjs.StefanMinigameCode.GDNewGame2Objects3.length = 0;
gdjs.StefanMinigameCode.GDNewGame2Objects4.length = 0;
gdjs.StefanMinigameCode.GDNewGameButtonObjects1.length = 0;
gdjs.StefanMinigameCode.GDNewGameButtonObjects2.length = 0;
gdjs.StefanMinigameCode.GDNewGameButtonObjects3.length = 0;
gdjs.StefanMinigameCode.GDNewGameButtonObjects4.length = 0;
gdjs.StefanMinigameCode.GDBackToOverworldObjects1.length = 0;
gdjs.StefanMinigameCode.GDBackToOverworldObjects2.length = 0;
gdjs.StefanMinigameCode.GDBackToOverworldObjects3.length = 0;
gdjs.StefanMinigameCode.GDBackToOverworldObjects4.length = 0;
gdjs.StefanMinigameCode.GDTitelObjects1.length = 0;
gdjs.StefanMinigameCode.GDTitelObjects2.length = 0;
gdjs.StefanMinigameCode.GDTitelObjects3.length = 0;
gdjs.StefanMinigameCode.GDTitelObjects4.length = 0;
gdjs.StefanMinigameCode.GDTitel2Objects1.length = 0;
gdjs.StefanMinigameCode.GDTitel2Objects2.length = 0;
gdjs.StefanMinigameCode.GDTitel2Objects3.length = 0;
gdjs.StefanMinigameCode.GDTitel2Objects4.length = 0;
gdjs.StefanMinigameCode.GDScore2Objects1.length = 0;
gdjs.StefanMinigameCode.GDScore2Objects2.length = 0;
gdjs.StefanMinigameCode.GDScore2Objects3.length = 0;
gdjs.StefanMinigameCode.GDScore2Objects4.length = 0;
gdjs.StefanMinigameCode.GDHighScoreObjects1.length = 0;
gdjs.StefanMinigameCode.GDHighScoreObjects2.length = 0;
gdjs.StefanMinigameCode.GDHighScoreObjects3.length = 0;
gdjs.StefanMinigameCode.GDHighScoreObjects4.length = 0;
gdjs.StefanMinigameCode.GDKollisionmaskObjects1.length = 0;
gdjs.StefanMinigameCode.GDKollisionmaskObjects2.length = 0;
gdjs.StefanMinigameCode.GDKollisionmaskObjects3.length = 0;
gdjs.StefanMinigameCode.GDKollisionmaskObjects4.length = 0;
gdjs.StefanMinigameCode.GDControllsObjects1.length = 0;
gdjs.StefanMinigameCode.GDControllsObjects2.length = 0;
gdjs.StefanMinigameCode.GDControllsObjects3.length = 0;
gdjs.StefanMinigameCode.GDControllsObjects4.length = 0;
gdjs.StefanMinigameCode.GDSpaceKeyDialogueObjects1.length = 0;
gdjs.StefanMinigameCode.GDSpaceKeyDialogueObjects2.length = 0;
gdjs.StefanMinigameCode.GDSpaceKeyDialogueObjects3.length = 0;
gdjs.StefanMinigameCode.GDSpaceKeyDialogueObjects4.length = 0;
gdjs.StefanMinigameCode.GDTransitionObjects1.length = 0;
gdjs.StefanMinigameCode.GDTransitionObjects2.length = 0;
gdjs.StefanMinigameCode.GDTransitionObjects3.length = 0;
gdjs.StefanMinigameCode.GDTransitionObjects4.length = 0;


return;

}

gdjs['StefanMinigameCode'] = gdjs.StefanMinigameCode;
