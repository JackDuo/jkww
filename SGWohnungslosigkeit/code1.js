gdjs.YouDiedCode = {};
gdjs.YouDiedCode.localVariables = [];
gdjs.YouDiedCode.idToCallbackMap = new Map();
gdjs.YouDiedCode.GDTitelObjects1= [];
gdjs.YouDiedCode.GDTitelObjects2= [];
gdjs.YouDiedCode.GDTitelObjects3= [];
gdjs.YouDiedCode.GDTitel2Objects1= [];
gdjs.YouDiedCode.GDTitel2Objects2= [];
gdjs.YouDiedCode.GDTitel2Objects3= [];
gdjs.YouDiedCode.GDStartButtonObjects1= [];
gdjs.YouDiedCode.GDStartButtonObjects2= [];
gdjs.YouDiedCode.GDStartButtonObjects3= [];
gdjs.YouDiedCode.GDUI_9595ViewObjects1= [];
gdjs.YouDiedCode.GDUI_9595ViewObjects2= [];
gdjs.YouDiedCode.GDUI_9595ViewObjects3= [];
gdjs.YouDiedCode.GDZu_9595StatistikObjects1= [];
gdjs.YouDiedCode.GDZu_9595StatistikObjects2= [];
gdjs.YouDiedCode.GDZu_9595StatistikObjects3= [];
gdjs.YouDiedCode.GDSpaceKeyObjects1= [];
gdjs.YouDiedCode.GDSpaceKeyObjects2= [];
gdjs.YouDiedCode.GDSpaceKeyObjects3= [];
gdjs.YouDiedCode.GDCharSelectHeadlineObjects1= [];
gdjs.YouDiedCode.GDCharSelectHeadlineObjects2= [];
gdjs.YouDiedCode.GDCharSelectHeadlineObjects3= [];
gdjs.YouDiedCode.GDZur_95252ckObjects1= [];
gdjs.YouDiedCode.GDZur_95252ckObjects2= [];
gdjs.YouDiedCode.GDZur_95252ckObjects3= [];
gdjs.YouDiedCode.GDPlayerSelectModelObjects1= [];
gdjs.YouDiedCode.GDPlayerSelectModelObjects2= [];
gdjs.YouDiedCode.GDPlayerSelectModelObjects3= [];
gdjs.YouDiedCode.GDPfeilObjects1= [];
gdjs.YouDiedCode.GDPfeilObjects2= [];
gdjs.YouDiedCode.GDPfeilObjects3= [];
gdjs.YouDiedCode.GDCharSelectTextObjects1= [];
gdjs.YouDiedCode.GDCharSelectTextObjects2= [];
gdjs.YouDiedCode.GDCharSelectTextObjects3= [];
gdjs.YouDiedCode.GDCharSelectNameObjects1= [];
gdjs.YouDiedCode.GDCharSelectNameObjects2= [];
gdjs.YouDiedCode.GDCharSelectNameObjects3= [];
gdjs.YouDiedCode.GDCharSelectAgeObjects1= [];
gdjs.YouDiedCode.GDCharSelectAgeObjects2= [];
gdjs.YouDiedCode.GDCharSelectAgeObjects3= [];
gdjs.YouDiedCode.GDStatHeadlineObjects1= [];
gdjs.YouDiedCode.GDStatHeadlineObjects2= [];
gdjs.YouDiedCode.GDStatHeadlineObjects3= [];
gdjs.YouDiedCode.GDMitwirkendeObjects1= [];
gdjs.YouDiedCode.GDMitwirkendeObjects2= [];
gdjs.YouDiedCode.GDMitwirkendeObjects3= [];
gdjs.YouDiedCode.GDMitwirkendeTextObjects1= [];
gdjs.YouDiedCode.GDMitwirkendeTextObjects2= [];
gdjs.YouDiedCode.GDMitwirkendeTextObjects3= [];
gdjs.YouDiedCode.GDZu_9595MitwirkendenObjects1= [];
gdjs.YouDiedCode.GDZu_9595MitwirkendenObjects2= [];
gdjs.YouDiedCode.GDZu_9595MitwirkendenObjects3= [];
gdjs.YouDiedCode.GDStatistikTextObjects1= [];
gdjs.YouDiedCode.GDStatistikTextObjects2= [];
gdjs.YouDiedCode.GDStatistikTextObjects3= [];
gdjs.YouDiedCode.GDMitwirkendeText2Objects1= [];
gdjs.YouDiedCode.GDMitwirkendeText2Objects2= [];
gdjs.YouDiedCode.GDMitwirkendeText2Objects3= [];
gdjs.YouDiedCode.GDTransitionObjects1= [];
gdjs.YouDiedCode.GDTransitionObjects2= [];
gdjs.YouDiedCode.GDTransitionObjects3= [];


gdjs.YouDiedCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("StatistikText"), gdjs.YouDiedCode.GDStatistikTextObjects1);
{for(var i = 0, len = gdjs.YouDiedCode.GDStatistikTextObjects1.length ;i < len;++i) {
    gdjs.YouDiedCode.GDStatistikTextObjects1[i].getBehavior("Text").setText("Du hast in " + gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(6).getChild("Time").getChild("IngameHoursPlayed").getAsNumber()) + " Stunden, " + gdjs.evtTools.string.newLine() + " also in " + gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(6).getChild("Time").getChild("IngameDaysPlayed").getAsNumber()) + "Tagen: " + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(6).getChild("CountBeg").getAsNumber()) + "x nach Geld gefragt." + gdjs.evtTools.string.newLine() + gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(6).getChild("PfandGesammelt").getAsNumber()) + "x mal Pfand gesammelt." + gdjs.evtTools.string.newLine() + gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(6).getChild("CountPfandAbgegeben").getAsNumber()) + "x Pfand abgegeben." + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(6).getChild("CountEssenGekauft").getChild("Wasser").getAsNumber()) + "x Wasser, " + gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(6).getChild("CountEssenGekauft").getChild("UngesundesEssen").getAsNumber()) + "x ungesundes Essen, " + gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(6).getChild("CountEssenGekauft").getChild("GesundesEssen").getAsNumber()) + "x gesundes Essen und " + gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(6).getChild("CountEssenGekauft").getChild("IKaffee").getAsNumber()) + "x Kaffee gekauft." + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(6).getChild("Sleep").getChild("CountBed").getAsNumber() + runtimeScene.getGame().getVariables().getFromIndex(6).getChild("Sleep").getChild("CountSchlafsack").getAsNumber()) + " mal geschlafen – davon " + gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(6).getChild("Sleep").getChild("CountBed").getAsNumber()) + " mal auf der Straße, " + gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(6).getChild("Sleep").getChild("CountBed").getAsNumber()) + " mal in einer Notunterkunft." + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(6).getChild("Sleep").getChild("CountDiebstahl").getAsNumber()) + " mal beklaut." + gdjs.evtTools.string.newLine() + gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(6).getChild("CountKrankgeworden").getAsNumber()) + " mal Krank geworden." + gdjs.evtTools.string.newLine() + gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(6).getChild("CountGeschlagen").getAsNumber()) + " mal Gewalt erfahren.");
}
}
}

}


};gdjs.YouDiedCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.YouDiedCode.GDZur_95252ckObjects1, gdjs.YouDiedCode.GDZur_95252ckObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.YouDiedCode.GDZur_95252ckObjects2.length;i<l;++i) {
    if ( gdjs.YouDiedCode.GDZur_95252ckObjects2[i].getVariableString(gdjs.YouDiedCode.GDZur_95252ckObjects2[i].getVariables().getFromIndex(0)) == "rechts" ) {
        isConditionTrue_0 = true;
        gdjs.YouDiedCode.GDZur_95252ckObjects2[k] = gdjs.YouDiedCode.GDZur_95252ckObjects2[i];
        ++k;
    }
}
gdjs.YouDiedCode.GDZur_95252ckObjects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.camera.setCameraX(runtimeScene, gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) + (1280), "", 0);
}
}

}


{

/* Reuse gdjs.YouDiedCode.GDZur_95252ckObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.YouDiedCode.GDZur_95252ckObjects1.length;i<l;++i) {
    if ( gdjs.YouDiedCode.GDZur_95252ckObjects1[i].getVariableString(gdjs.YouDiedCode.GDZur_95252ckObjects1[i].getVariables().getFromIndex(0)) == "links" ) {
        isConditionTrue_0 = true;
        gdjs.YouDiedCode.GDZur_95252ckObjects1[k] = gdjs.YouDiedCode.GDZur_95252ckObjects1[i];
        ++k;
    }
}
gdjs.YouDiedCode.GDZur_95252ckObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.camera.setCameraX(runtimeScene, gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) - (1280), "", 0);
}
}

}


};gdjs.YouDiedCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.prioritizeLoadingOfScene(runtimeScene, "Overworld");
}

{ //Subevents
gdjs.YouDiedCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Titel"), gdjs.YouDiedCode.GDTitelObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.YouDiedCode.GDTitelObjects1.length;i<l;++i) {
    if ( gdjs.YouDiedCode.GDTitelObjects1[i].getBehavior("AutoTyping").IsFinished(null) ) {
        isConditionTrue_0 = true;
        gdjs.YouDiedCode.GDTitelObjects1[k] = gdjs.YouDiedCode.GDTitelObjects1[i];
        ++k;
    }
}
gdjs.YouDiedCode.GDTitelObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Titel2"), gdjs.YouDiedCode.GDTitel2Objects1);
{for(var i = 0, len = gdjs.YouDiedCode.GDTitel2Objects1.length ;i < len;++i) {
    gdjs.YouDiedCode.GDTitel2Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.YouDiedCode.GDTitel2Objects1.length ;i < len;++i) {
    gdjs.YouDiedCode.GDTitel2Objects1[i].activateBehavior("AutoTyping", true);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Zurück"), gdjs.YouDiedCode.GDZur_95252ckObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.YouDiedCode.GDZur_95252ckObjects1.length;i<l;++i) {
    if ( gdjs.YouDiedCode.GDZur_95252ckObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.YouDiedCode.GDZur_95252ckObjects1[k] = gdjs.YouDiedCode.GDZur_95252ckObjects1[i];
        ++k;
    }
}
gdjs.YouDiedCode.GDZur_95252ckObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(46071580);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.YouDiedCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Zu_Statistik"), gdjs.YouDiedCode.GDZu_9595StatistikObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.YouDiedCode.GDZu_9595StatistikObjects1.length;i<l;++i) {
    if ( gdjs.YouDiedCode.GDZu_9595StatistikObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.YouDiedCode.GDZu_9595StatistikObjects1[k] = gdjs.YouDiedCode.GDZu_9595StatistikObjects1[i];
        ++k;
    }
}
gdjs.YouDiedCode.GDZu_9595StatistikObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(46073676);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.camera.setCameraX(runtimeScene, gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) - (1280), "", 0);
}
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(4);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Zu_Mitwirkenden"), gdjs.YouDiedCode.GDZu_9595MitwirkendenObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.YouDiedCode.GDZu_9595MitwirkendenObjects1.length;i<l;++i) {
    if ( gdjs.YouDiedCode.GDZu_9595MitwirkendenObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.YouDiedCode.GDZu_9595MitwirkendenObjects1[k] = gdjs.YouDiedCode.GDZu_9595MitwirkendenObjects1[i];
        ++k;
    }
}
gdjs.YouDiedCode.GDZu_9595MitwirkendenObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(46068940);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.camera.setCameraX(runtimeScene, gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) + (1280), "", 0);
}
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(4);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("StartButton"), gdjs.YouDiedCode.GDStartButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.YouDiedCode.GDStartButtonObjects1.length;i<l;++i) {
    if ( gdjs.YouDiedCode.GDStartButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.YouDiedCode.GDStartButtonObjects1[k] = gdjs.YouDiedCode.GDStartButtonObjects1[i];
        ++k;
    }
}
gdjs.YouDiedCode.GDStartButtonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(46065756);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.YouDiedCode.GDStartButtonObjects1 */
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "StartMenu");
}
{for(var i = 0, len = gdjs.YouDiedCode.GDStartButtonObjects1.length ;i < len;++i) {
    gdjs.YouDiedCode.GDStartButtonObjects1[i].removeTimer("StartButtonDelay");
}
}
}

}


};

gdjs.YouDiedCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.YouDiedCode.GDTitelObjects1.length = 0;
gdjs.YouDiedCode.GDTitelObjects2.length = 0;
gdjs.YouDiedCode.GDTitelObjects3.length = 0;
gdjs.YouDiedCode.GDTitel2Objects1.length = 0;
gdjs.YouDiedCode.GDTitel2Objects2.length = 0;
gdjs.YouDiedCode.GDTitel2Objects3.length = 0;
gdjs.YouDiedCode.GDStartButtonObjects1.length = 0;
gdjs.YouDiedCode.GDStartButtonObjects2.length = 0;
gdjs.YouDiedCode.GDStartButtonObjects3.length = 0;
gdjs.YouDiedCode.GDUI_9595ViewObjects1.length = 0;
gdjs.YouDiedCode.GDUI_9595ViewObjects2.length = 0;
gdjs.YouDiedCode.GDUI_9595ViewObjects3.length = 0;
gdjs.YouDiedCode.GDZu_9595StatistikObjects1.length = 0;
gdjs.YouDiedCode.GDZu_9595StatistikObjects2.length = 0;
gdjs.YouDiedCode.GDZu_9595StatistikObjects3.length = 0;
gdjs.YouDiedCode.GDSpaceKeyObjects1.length = 0;
gdjs.YouDiedCode.GDSpaceKeyObjects2.length = 0;
gdjs.YouDiedCode.GDSpaceKeyObjects3.length = 0;
gdjs.YouDiedCode.GDCharSelectHeadlineObjects1.length = 0;
gdjs.YouDiedCode.GDCharSelectHeadlineObjects2.length = 0;
gdjs.YouDiedCode.GDCharSelectHeadlineObjects3.length = 0;
gdjs.YouDiedCode.GDZur_95252ckObjects1.length = 0;
gdjs.YouDiedCode.GDZur_95252ckObjects2.length = 0;
gdjs.YouDiedCode.GDZur_95252ckObjects3.length = 0;
gdjs.YouDiedCode.GDPlayerSelectModelObjects1.length = 0;
gdjs.YouDiedCode.GDPlayerSelectModelObjects2.length = 0;
gdjs.YouDiedCode.GDPlayerSelectModelObjects3.length = 0;
gdjs.YouDiedCode.GDPfeilObjects1.length = 0;
gdjs.YouDiedCode.GDPfeilObjects2.length = 0;
gdjs.YouDiedCode.GDPfeilObjects3.length = 0;
gdjs.YouDiedCode.GDCharSelectTextObjects1.length = 0;
gdjs.YouDiedCode.GDCharSelectTextObjects2.length = 0;
gdjs.YouDiedCode.GDCharSelectTextObjects3.length = 0;
gdjs.YouDiedCode.GDCharSelectNameObjects1.length = 0;
gdjs.YouDiedCode.GDCharSelectNameObjects2.length = 0;
gdjs.YouDiedCode.GDCharSelectNameObjects3.length = 0;
gdjs.YouDiedCode.GDCharSelectAgeObjects1.length = 0;
gdjs.YouDiedCode.GDCharSelectAgeObjects2.length = 0;
gdjs.YouDiedCode.GDCharSelectAgeObjects3.length = 0;
gdjs.YouDiedCode.GDStatHeadlineObjects1.length = 0;
gdjs.YouDiedCode.GDStatHeadlineObjects2.length = 0;
gdjs.YouDiedCode.GDStatHeadlineObjects3.length = 0;
gdjs.YouDiedCode.GDMitwirkendeObjects1.length = 0;
gdjs.YouDiedCode.GDMitwirkendeObjects2.length = 0;
gdjs.YouDiedCode.GDMitwirkendeObjects3.length = 0;
gdjs.YouDiedCode.GDMitwirkendeTextObjects1.length = 0;
gdjs.YouDiedCode.GDMitwirkendeTextObjects2.length = 0;
gdjs.YouDiedCode.GDMitwirkendeTextObjects3.length = 0;
gdjs.YouDiedCode.GDZu_9595MitwirkendenObjects1.length = 0;
gdjs.YouDiedCode.GDZu_9595MitwirkendenObjects2.length = 0;
gdjs.YouDiedCode.GDZu_9595MitwirkendenObjects3.length = 0;
gdjs.YouDiedCode.GDStatistikTextObjects1.length = 0;
gdjs.YouDiedCode.GDStatistikTextObjects2.length = 0;
gdjs.YouDiedCode.GDStatistikTextObjects3.length = 0;
gdjs.YouDiedCode.GDMitwirkendeText2Objects1.length = 0;
gdjs.YouDiedCode.GDMitwirkendeText2Objects2.length = 0;
gdjs.YouDiedCode.GDMitwirkendeText2Objects3.length = 0;
gdjs.YouDiedCode.GDTransitionObjects1.length = 0;
gdjs.YouDiedCode.GDTransitionObjects2.length = 0;
gdjs.YouDiedCode.GDTransitionObjects3.length = 0;

gdjs.YouDiedCode.eventsList2(runtimeScene);
gdjs.YouDiedCode.GDTitelObjects1.length = 0;
gdjs.YouDiedCode.GDTitelObjects2.length = 0;
gdjs.YouDiedCode.GDTitelObjects3.length = 0;
gdjs.YouDiedCode.GDTitel2Objects1.length = 0;
gdjs.YouDiedCode.GDTitel2Objects2.length = 0;
gdjs.YouDiedCode.GDTitel2Objects3.length = 0;
gdjs.YouDiedCode.GDStartButtonObjects1.length = 0;
gdjs.YouDiedCode.GDStartButtonObjects2.length = 0;
gdjs.YouDiedCode.GDStartButtonObjects3.length = 0;
gdjs.YouDiedCode.GDUI_9595ViewObjects1.length = 0;
gdjs.YouDiedCode.GDUI_9595ViewObjects2.length = 0;
gdjs.YouDiedCode.GDUI_9595ViewObjects3.length = 0;
gdjs.YouDiedCode.GDZu_9595StatistikObjects1.length = 0;
gdjs.YouDiedCode.GDZu_9595StatistikObjects2.length = 0;
gdjs.YouDiedCode.GDZu_9595StatistikObjects3.length = 0;
gdjs.YouDiedCode.GDSpaceKeyObjects1.length = 0;
gdjs.YouDiedCode.GDSpaceKeyObjects2.length = 0;
gdjs.YouDiedCode.GDSpaceKeyObjects3.length = 0;
gdjs.YouDiedCode.GDCharSelectHeadlineObjects1.length = 0;
gdjs.YouDiedCode.GDCharSelectHeadlineObjects2.length = 0;
gdjs.YouDiedCode.GDCharSelectHeadlineObjects3.length = 0;
gdjs.YouDiedCode.GDZur_95252ckObjects1.length = 0;
gdjs.YouDiedCode.GDZur_95252ckObjects2.length = 0;
gdjs.YouDiedCode.GDZur_95252ckObjects3.length = 0;
gdjs.YouDiedCode.GDPlayerSelectModelObjects1.length = 0;
gdjs.YouDiedCode.GDPlayerSelectModelObjects2.length = 0;
gdjs.YouDiedCode.GDPlayerSelectModelObjects3.length = 0;
gdjs.YouDiedCode.GDPfeilObjects1.length = 0;
gdjs.YouDiedCode.GDPfeilObjects2.length = 0;
gdjs.YouDiedCode.GDPfeilObjects3.length = 0;
gdjs.YouDiedCode.GDCharSelectTextObjects1.length = 0;
gdjs.YouDiedCode.GDCharSelectTextObjects2.length = 0;
gdjs.YouDiedCode.GDCharSelectTextObjects3.length = 0;
gdjs.YouDiedCode.GDCharSelectNameObjects1.length = 0;
gdjs.YouDiedCode.GDCharSelectNameObjects2.length = 0;
gdjs.YouDiedCode.GDCharSelectNameObjects3.length = 0;
gdjs.YouDiedCode.GDCharSelectAgeObjects1.length = 0;
gdjs.YouDiedCode.GDCharSelectAgeObjects2.length = 0;
gdjs.YouDiedCode.GDCharSelectAgeObjects3.length = 0;
gdjs.YouDiedCode.GDStatHeadlineObjects1.length = 0;
gdjs.YouDiedCode.GDStatHeadlineObjects2.length = 0;
gdjs.YouDiedCode.GDStatHeadlineObjects3.length = 0;
gdjs.YouDiedCode.GDMitwirkendeObjects1.length = 0;
gdjs.YouDiedCode.GDMitwirkendeObjects2.length = 0;
gdjs.YouDiedCode.GDMitwirkendeObjects3.length = 0;
gdjs.YouDiedCode.GDMitwirkendeTextObjects1.length = 0;
gdjs.YouDiedCode.GDMitwirkendeTextObjects2.length = 0;
gdjs.YouDiedCode.GDMitwirkendeTextObjects3.length = 0;
gdjs.YouDiedCode.GDZu_9595MitwirkendenObjects1.length = 0;
gdjs.YouDiedCode.GDZu_9595MitwirkendenObjects2.length = 0;
gdjs.YouDiedCode.GDZu_9595MitwirkendenObjects3.length = 0;
gdjs.YouDiedCode.GDStatistikTextObjects1.length = 0;
gdjs.YouDiedCode.GDStatistikTextObjects2.length = 0;
gdjs.YouDiedCode.GDStatistikTextObjects3.length = 0;
gdjs.YouDiedCode.GDMitwirkendeText2Objects1.length = 0;
gdjs.YouDiedCode.GDMitwirkendeText2Objects2.length = 0;
gdjs.YouDiedCode.GDMitwirkendeText2Objects3.length = 0;
gdjs.YouDiedCode.GDTransitionObjects1.length = 0;
gdjs.YouDiedCode.GDTransitionObjects2.length = 0;
gdjs.YouDiedCode.GDTransitionObjects3.length = 0;


return;

}

gdjs['YouDiedCode'] = gdjs.YouDiedCode;
