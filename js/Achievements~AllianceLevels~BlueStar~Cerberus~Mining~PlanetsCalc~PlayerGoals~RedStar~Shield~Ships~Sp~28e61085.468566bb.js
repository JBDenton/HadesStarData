(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Achievements~AllianceLevels~BlueStar~Cerberus~Mining~PlanetsCalc~PlayerGoals~RedStar~Shield~Ships~Sp~28e61085"],{"0bfc":function(e,t,r){"use strict";var n=r("176d").charAt;e.exports=function(e,t,r){return t+(r?n(e,t).length:1)}},"0d5a":function(e,t,r){"use strict";var n=r("21cf"),i=r("399e").map,a=r("b518"),o=r("5851"),c=a("map"),_=o("map");n({target:"Array",proto:!0,forced:!c||!_},{map:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}})},1387:function(e,t,r){var n=r("f409"),i=r("7400"),a=r("7e09"),o=r("5ae2").f;e.exports=function(e){var t=n.Symbol||(n.Symbol={});i(t,e)||o(t,e,{value:a.f(e)})}},"14d8":function(e,t,r){},1671:function(e,t,r){"use strict";var n=r("324b"),i=r("e497"),a=RegExp.prototype.exec,o=String.prototype.replace,c=a,_=function(){var e=/a/,t=/b*/g;return a.call(e,"a"),a.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),u=i.UNSUPPORTED_Y||i.BROKEN_CARET,l=void 0!==/()??/.exec("")[1],s=_||l||u;s&&(c=function(e){var t,r,i,c,s=this,T=u&&s.sticky,E=n.call(s),S=s.source,D=0,f=e;return T&&(E=E.replace("y",""),-1===E.indexOf("g")&&(E+="g"),f=String(e).slice(s.lastIndex),s.lastIndex>0&&(!s.multiline||s.multiline&&"\n"!==e[s.lastIndex-1])&&(S="(?: "+S+")",f=" "+f,D++),r=new RegExp("^(?:"+S+")",E)),l&&(r=new RegExp("^"+S+"$(?!\\s)",E)),_&&(t=s.lastIndex),i=a.call(T?r:s,f),T?i?(i.input=i.input.slice(D),i[0]=i[0].slice(D),i.index=s.lastIndex,s.lastIndex+=i[0].length):s.lastIndex=0:_&&i&&(s.lastIndex=s.global?i.index+i[0].length:t),l&&i&&i.length>1&&o.call(i[0],r,(function(){for(c=1;c<arguments.length-2;c++)void 0===arguments[c]&&(i[c]=void 0)})),i}),e.exports=c},"176d":function(e,t,r){var n=r("e297"),i=r("8cc7"),a=function(e){return function(t,r){var a,o,c=String(i(t)),_=n(r),u=c.length;return _<0||_>=u?e?"":void 0:(a=c.charCodeAt(_),a<55296||a>56319||_+1===u||(o=c.charCodeAt(_+1))<56320||o>57343?e?c.charAt(_):a:e?c.slice(_,_+2):o-56320+(a-55296<<10)+65536)}};e.exports={codeAt:a(!1),charAt:a(!0)}},"195d":function(e,t,r){var n=r("0d01"),i=r("0d10");e.exports=function(e,t,r){var a,o;return i&&"function"==typeof(a=t.constructor)&&a!==r&&n(o=a.prototype)&&o!==r.prototype&&i(e,o),e}},1999:function(e,t,r){var n=r("a8f3"),i=r("1671");e.exports=function(e,t){var r=e.exec;if("function"===typeof r){var a=r.call(e,t);if("object"!==typeof a)throw TypeError("RegExp exec method returned something other than an Object or null");return a}if("RegExp"!==n(e))throw TypeError("RegExp#exec called on incompatible receiver");return i.call(e,t)}},"1d2a":function(e,t,r){"use strict";var n=r("21cf"),i=r("e138"),a=r("3d67"),o=r("7edf"),c=r("ff76"),_=r("7a9b"),u=r("b40f"),l=r("26cc"),s=r("7400"),T=r("5bba"),E=r("0d01"),S=r("f0c6"),D=r("4ac9"),f=r("acb3"),I=r("8b81"),d=r("bf76"),R=r("adaa"),p=r("a2ca"),A=r("4cac"),g=r("e5c4"),h=r("be3f"),P=r("61f9"),O=r("5ae2"),L=r("a92a"),v=r("915c"),m=r("727f"),M=r("c44e"),C=r("dd3b"),N=r("f2e6"),y=r("666b"),U=r("b8b3"),b=r("7e09"),H=r("1387"),x=r("6ba8"),w=r("9e60"),B=r("399e").forEach,F=C("hidden"),G="Symbol",Y="prototype",W=U("toPrimitive"),k=w.set,j=w.getterFor(G),$=Object[Y],X=i.Symbol,V=a("JSON","stringify"),J=P.f,K=O.f,q=g.f,z=L.f,Q=M("symbols"),Z=M("op-symbols"),ee=M("string-to-symbol-registry"),te=M("symbol-to-string-registry"),re=M("wks"),ne=i.QObject,ie=!ne||!ne[Y]||!ne[Y].findChild,ae=c&&l((function(){return 7!=R(K({},"a",{get:function(){return K(this,"a",{value:7}).a}})).a}))?function(e,t,r){var n=J($,t);n&&delete $[t],K(e,t,r),n&&e!==$&&K($,t,n)}:K,oe=function(e,t){var r=Q[e]=R(X[Y]);return k(r,{type:G,tag:e,description:t}),c||(r.description=t),r},ce=u?function(e){return"symbol"==typeof e}:function(e){return Object(e)instanceof X},_e=function(e,t,r){e===$&&_e(Z,t,r),S(e);var n=I(t,!0);return S(r),s(Q,n)?(r.enumerable?(s(e,F)&&e[F][n]&&(e[F][n]=!1),r=R(r,{enumerable:d(0,!1)})):(s(e,F)||K(e,F,d(1,{})),e[F][n]=!0),ae(e,n,r)):K(e,n,r)},ue=function(e,t){S(e);var r=f(t),n=p(r).concat(Se(r));return B(n,(function(t){c&&!se.call(r,t)||_e(e,t,r[t])})),e},le=function(e,t){return void 0===t?R(e):ue(R(e),t)},se=function(e){var t=I(e,!0),r=z.call(this,t);return!(this===$&&s(Q,t)&&!s(Z,t))&&(!(r||!s(this,t)||!s(Q,t)||s(this,F)&&this[F][t])||r)},Te=function(e,t){var r=f(e),n=I(t,!0);if(r!==$||!s(Q,n)||s(Z,n)){var i=J(r,n);return!i||!s(Q,n)||s(r,F)&&r[F][n]||(i.enumerable=!0),i}},Ee=function(e){var t=q(f(e)),r=[];return B(t,(function(e){s(Q,e)||s(N,e)||r.push(e)})),r},Se=function(e){var t=e===$,r=q(t?Z:f(e)),n=[];return B(r,(function(e){!s(Q,e)||t&&!s($,e)||n.push(Q[e])})),n};if(_||(X=function(){if(this instanceof X)throw TypeError("Symbol is not a constructor");var e=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,t=y(e),r=function(e){this===$&&r.call(Z,e),s(this,F)&&s(this[F],t)&&(this[F][t]=!1),ae(this,t,d(1,e))};return c&&ie&&ae($,t,{configurable:!0,set:r}),oe(t,e)},m(X[Y],"toString",(function(){return j(this).tag})),m(X,"withoutSetter",(function(e){return oe(y(e),e)})),L.f=se,O.f=_e,P.f=Te,A.f=g.f=Ee,h.f=Se,b.f=function(e){return oe(U(e),e)},c&&(K(X[Y],"description",{configurable:!0,get:function(){return j(this).description}}),o||m($,"propertyIsEnumerable",se,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!_,sham:!_},{Symbol:X}),B(p(re),(function(e){H(e)})),n({target:G,stat:!0,forced:!_},{for:function(e){var t=String(e);if(s(ee,t))return ee[t];var r=X(t);return ee[t]=r,te[r]=t,r},keyFor:function(e){if(!ce(e))throw TypeError(e+" is not a symbol");if(s(te,e))return te[e]},useSetter:function(){ie=!0},useSimple:function(){ie=!1}}),n({target:"Object",stat:!0,forced:!_,sham:!c},{create:le,defineProperty:_e,defineProperties:ue,getOwnPropertyDescriptor:Te}),n({target:"Object",stat:!0,forced:!_},{getOwnPropertyNames:Ee,getOwnPropertySymbols:Se}),n({target:"Object",stat:!0,forced:l((function(){h.f(1)}))},{getOwnPropertySymbols:function(e){return h.f(D(e))}}),V){var De=!_||l((function(){var e=X();return"[null]"!=V([e])||"{}"!=V({a:e})||"{}"!=V(Object(e))}));n({target:"JSON",stat:!0,forced:De},{stringify:function(e,t,r){var n,i=[e],a=1;while(arguments.length>a)i.push(arguments[a++]);if(n=t,(E(t)||void 0!==e)&&!ce(e))return T(t)||(t=function(e,t){if("function"==typeof n&&(t=n.call(this,e,t)),!ce(t))return t}),i[1]=t,V.apply(null,i)}})}X[Y][W]||v(X[Y],W,X[Y].valueOf),x(X,G),N[F]=!0},2459:function(e,t,r){"use strict";t["a"]={MaxHP:"TID_FLEET_HULL_STRENGTH_MAX",MaxShield:"TID_MODULE_SHIELD_STRENGTH_STAT",ShieldRegenPerMinute:"TID_CERBERUS_STATION_SHIELD_REGEN_LABEL",ShieldRegenTimeAfterDamage:"TID_CERBERUS_STATION_SHIELD_REGEN_DELAY",SpawnFleetIntervalSeconds:"TID_CERBERUS_STATION_SPAWNING_IN",AttackRange:"TID_MODULE_ATTACK_RANGE_DESCR",DestinyDisableTimes:"DisableTime",DestinyDisableTimesWS:"DisableTimeWS",CRAsteroidAmt:"TID_CR_ASTEROID_FIELD",EMPResist:"TID_EMP_RESIST",TargetSwitchTicks:"TID_MODULE_DESCR_TARGET_SWITCH_DELAY",ProximityTriggerSec:"TID_MODULE_TRIGGER_TIME",TimeSlowdownFactor:"TID_STAR_TIME_SLOWDOWN",PreparationTimeHours:"TID_WS_PREPARATION_PERIOD",HydrogenForRelic:"TID_PLANET_INFO_HYDRO_PER_RELIC",TicksPerRelic:"TID_PLANET_DESCR_GENERATING_RELIC",RedStarDisplayLevel:"lvl",RedStar:"TID_RED_STAR",YellowStar:"TID_YELLOW_STAR",WhiteStar:"TID_WHITE_STAR",BlueStar:"TID_BLUE_STAR",NumToSpawn:"TID_SPAWNER_NUM_SPAWNED",SpawnDelay:"TID_SPAWNER_DELAY",RadiusMax:"TID_SPAWNER_MAX_RADIUS",alliancelevels:"TID_CORP_LEVELS_LABEL",RelicsRequired:"TID_RELIC_DLG_TITLE",MaxMembers:"TID_CORP_MAX_MEMBERS",PassiveIncomeModifier:"TID_CORP_PASSIVE_INCOME_BONUS",ArtifactYieldBonus:"TID_CORP_ARTIFACT_YIELD_BONUS",MaxFlagshipLevel:"TID_CORP_MAX_FLAGSHIP_LEVEL",achievements:"TID_PLAYER_INFO_DLG_TAB_ACHIEVEMENTS",UnlockAmount:"TID_TRADE_DLG_DESTINATION_COLUMN",PCReward:"TID_HUD_CRYSTALS",XPReward:"XPAward",spacebuildings:"TID_PRODUCTION_DLG_STATIONS",playergoals:"TID_EMPIRE_OBJECTIVES",EMP:"TID_MODULE_EMP",Repair:"TID_MODULE_REPAIR",TimeWarp:"TID_MODULE_TIME_WARP",Fortify:"TID_MODULE_FORTIFY",Supress:"TID_MODULE_SUPRESS",Impulse:"TID_MODULE_IMPULSE",AlphaRocket:"TID_MODULE_ALPHAROCKET",Destiny:"TID_MODULE_DESTINY",Vengeance:"TID_MODULE_VENGEANCE",DeltaRocket:"TID_MODULE_DELTAROCKET",Barrier:"TID_MODULE_BARRIER",AlphaDrone:"TID_SHIP_ALPHA_DRONE",Bond:"TID_MODULE_BOND",OmegaRocket:"TID_MODULE_OMEGAROCKET",Sentinel:"TID_SHIP_CERB_FIGHTER",Guardian:"TID_SHIP_CERB_SECTOR_GUARDIAN",Interceptor:"TID_SHIP_CERB_INTERCEPTOR",Phoenix:"TID_SHIP_CERB_PHOENIX",GoalTarget:"TID_TRADE_DLG_DESTINATION_COLUMN",CRReward:"TID_HUD_CREDITS",FuelReward:"TID_HUD_HYDROGEN",StringParam:"TID_TRADE_DLG_DESTINATION_COLUMN",ShipyardCapacity:"TID_ACHIEVEMENT_FLEETSIZE",ConstructionTime:"UpgradeTime",SectorUnlockCost:"TID_SECTOR_UNLOCK_PRICE",TimeSpeedupFactor:"TID_MODULE_TIME_WARP_STAT",MoveHydrogenCostPerSector:"TID_OBJECT_ACTION_MOVE",CancelBuildRefundPct:"TID_OBJ_ACTION_CANCEL_BUILD",TimeSpeedupMaxSeconds:"TID_TIME_MODULATOR_MAX_TIME",TimeSpeedupRegenPerDay:"TID_TIME_MODULATOR_REGEN",TeleportShipmentsPerHr:"TID_NUM_SHIPMENTS_PER_HR",TeleportShipmentsDurationHr:"TID_RELAY_DURATION",TeleportShipmentActivationFragments:"TID_RELAY_ACTIVATE_PRICE",FragmentCapacity:"TID_RELAY_FRAGMENTS_MAX",TeleportShipmentMaxSectors:"TID_RELAY_MAX_SECTORS",TSHydroCost:"TID_RELAY_ACTIVATE_PRICE",MaxInfluence:"TID_REDSCANNER_MAX_INFLUENCE",RegularInfuenceRange:"TID_REDSCANNER_OPTIMAL_INFLUENCE",MaxBattleshipsPerPlayer:"TID_REDSCANNER_MAX_BATTLESHIPS",HydrogenSearchCost:"TID_SECTOR_UNLOCK_PRICE",DestroyersToSpawn:"TID_SHIP_CERB_DESTROYER",MinBombers:"TID_SHIP_CERBERUS_BOMBER",TimeToLoad:"TID_STATUS_LOADING_ARTIFACT",TimeToResearch:"UnlockTime",Credits:"TID_HUD_CREDITS",Hydrogen:"TID_HUD_HYDROGEN",Lifetime:"TID_MISSIONS_DLG_RED_STAR_SUPERNOVA_TIMER",CreditIncomeModifier:"TID_PLANET_UPG_CREDIT_YIELD",FuelIncomeModifier:"TID_PLANET_UPG_HYDROGEN_YIELD",CreditStorageModifier:"TID_PLANET_UPG_CREDIT_STORE",FuelStorageModifier:"TID_PLANET_UPG_HYDROGEN_STORE",ShipmentsPerHour:"TID_NUM_SHIPMENTS_PER_HR",TID:"TID_LEADERBOARDS_DIALOG_COLUMN_NAME",TID_Description:"TID_CORP_DESCR_LABEL",Name:"TID_CORP_NAME_LABEL",array:"ᅠ ",CreditStorage:"TID_PLANET_UPG_CREDIT_STORE",FuelStorage:"TID_PLANET_UPG_HYDROGEN_STORE",CreditsPerHour:"TID_PLANET_UPG_CREDIT_YIELD",FuelPerHour:"TID_PLANET_UPG_HYDROGEN_YIELD",SectorUnlockTime:"TID_SECTOR_UNLOCK_TIME",Sentinels:"TID_SHIP_CERB_FIGHTER",Guardians:"TID_SHIP_CERB_SECTOR_GUARDIAN",Colossus:"TID_SHIP_CERB_COLOSSUS",desert:"TID_PLANET_DESERT_2",lava:"TID_PLANET_LAVA_2",water:"TID_PLANET_WATER_2",terran:"TID_PLANET_TERRAN_2",gas:"TID_PLANET_GAS_1",ice:"TID_PLANET_ICE",MinScannerLevel:"TID_BUILDING_SHORT_RANGE_SCANNER",AsteroidsMax:"TID_MODULE_GENESIS_MAX_ASTEROIDS",BaseType:"TID_CERB_STATION_HOME2",BSAnomaly:"TID_BLUE_STAR_ANOMALY",DesignUpgradeCost:"UpgradeCost",DesignUpgradeTime:"UpgradeTime",BuildCost:"TID_STAT_SHIP_DESIGN_BUILD_COST",JobCapacity:"TID_TRANSPORT_CAPACITY",FuelUsePer5000Distance:"TID_FLEET_HYDRO_USAGE",JumpFuelCosts:"TID_FLEET_JUMP_HYDRO_USAGE",HealRate:"TID_FLEET_HEAL_RATE",Battery:"TID_MODULE_BATTERY",Recoil:"TID_MODULE_RECOIL",Immolation:"TID_MODULE_IMMOLATION",Stealth:"TID_MODULE_STEALTH",EMPRocket:"TID_MODULE_EMP_ROCKET",NumSectorsToMine:"TID_MINER_AUTO_SECTORS",Trade:"TID_SHIP_MODULE_SLOT_TYPE_0",Support:"TID_SHIP_MODULE_SLOT_TYPE_2",Mining:"TID_SHIP_MODULE_SLOT_TYPE_1",Weapon:"TID_SHIP_MODULE_SLOT_TYPE_3",Shield:"TID_SHIP_MODULE_SLOT_TYPE_4",DualLaser:"TID_MODULE_DUAL_LASER",AutoActivateHealth:"TID_MODULE_HULL_THRESHOLD_STAT",InitialModule:"TID_INSTALLED_MODULES_AREA_TITLE",MaxDPSTime:"TID_MODULE_DESCR_MAX_DPS_TIME",Salvage:"TID_MODULE_SALVAGE",PassiveShield:"TID_MODULE_PASSIVE_SHIELD",InfluencePoints:"TID_PLAYER_INFO_INFLUENCE_TITLE",DockedObjectDestroyTime:"TID_STATUS_DESTROYING_PLANET",ships:"TID_PRODUCTION_DLG_SHIPS",ActivationHydroOnBoard:"TID_REQUIRED_HYDROGEN",TimeToFullyRegen:"TID_MODULE_SHIELD_FULL_REGEN_TIME",ShieldRegenDelay:"TID_MODULE_SHIELD_REGEN_DELAY",ExtraTradeSlots:"TID_SHIP_UPGRADE_EFFECT_TRADE_SLOTS",FuelUseIncrease:"TID_SHIP_UPGRADE_EFFECT_FUEL_INCREASE",BCCost:"TID_MODULE_INSTALL_PRICE_STAT",WaypointShipmentRewardBonus:"TID_SHIP_UPGRADE_EFFECT_BONUS_REWARD",ActivationDelay:"TID_MODULE_COOLDOWN_STAT",JobPayoutIncreasePercent:"TID_SHIP_UPGRADE_EFFECT_JOB_PAYOUT_INCREASE",ActivationFuelCost:"TID_MODULE_DESCR_ACTIVATION_COST",EffectDurationx10:"TID_MODULE_EFFECT_DURATION_DESCR",MiningSpeedModifierPct:"TID_MODULE_MINING_SPEED_STAT",EffectRadius:"TID_MODULE_EFFECT_RANGE_DESCR",RepairHullPointsPerSecond:"TID_MODULE_REPAIR_STAT",ShieldStrength:"TID_FLEET_SHIELD_STRENGTH",SpeedIncrDuringActivation:"TID_MODULE_RUSH_SPEED_INCR",ActivationPrep:"TID_MODULE_ACTIVATION_PREP_TIME",TradeBurstShipmentsStart:"TID_MODULE_TRADEBURST_THRESHOLD",TradeBurstShipmentBonus:"TID_SHIP_UPGRADE_EFFECT_BONUS_REWARD",TeleportShipments:"TID_MODULE_SHIPMENTBEAM_MAX_SHIPMENTS",InstantHydrogenCollected:"TID_MODULE_CRUNCH_MAX_AMOUNT",Speed:"TID_FLEET_SPEED",HP:"TID_FLEET_HULL_STRENGTH",Damage:"TID_MODULE_PROJECTILE_DAMAGE",DamageRange:"TID_MODULE_PROJECTILE_DAMAGERANGE",IncreaseSectorHydroPct:"TID_MODULE_ENRICH_INCREASE",SpeedIncreasePerShipment:"TID_MODULE_RUSH_SPEED_INCR",MaxNewAsteroids:"TID_MODULE_GENESIS_MAX_ASTEROIDS",HydroPerNewAsteroid:"TID_MODULE_GENESIS_MAX_HYDRO",TradeStationDeliverReward:"TID_OFFLOAD_MODULE_PAYOFF",SpawnLifetime:"TID_DRONE_LIFETIME",DPS:"TID_FLEET_DPM",DamageRangeWhenNeutralized:"TID_MODULE_SECONDARY_RANGE",HydrogenCapacity:"TID_HYDRO_CAPACITY",AdditionalDPSPerTargetInRange:"TID_MODULE_DESCR_DPADT",TimeWarpFactor:"TID_MODULE_TIME_WARP_STAT",UnityBoostPercent:"TID_MODULE_DESCR_UNITY",DamageReductionPct:"TID_MODULE_DAMAGE_REDUCTION_PCT",SalvageHullPercent:"TID_MODULE_SALVAGE_HULL_DESCR",AOEDamage:"TID_DESTROYER_AREADAMAGE",DamageWhenNeutralized:"TID_MODULE_SECONDARY_DAMAGE",SpawnCapacity:"TID_TRANSPORT_CAPACITY_TOTAL",DroneShipmentBonus:"TID_MODULE_BONUS_PER_SHIPMENT",APTPIOTTP:"TID_DISPATCH_PREP_TIME",ExtraMineralStorage:"TID_MODULE_MINERAL_STORAGE_STAT",HydroUploadPct:"TID_MODULE_HYDRO_UPLOAD_PERCENT",MiningSpeed:"TID_MINER_MINE_SPEED",MaxDPS:"TID_MODULE_DESCR_MAX_DPS",MaxTargets:"TID_MODULE_MAX_TARGETS",MirrorDamagePct:"TID_MODULE_MIRROR_DAMAGE_STAT",RedStarLifeExtention:"TID_MODULE_RED_STAR_EXTENSION_STAT",FlagshipShieldModule:"TID_MODULE_FLAGSHIP_SHIELD",FlagshipWeaponModule:"TID_MODULE_FLAGSHIP_WEAPON"}},"268d":function(e,t,r){"use strict";var n=r("ff76"),i=r("e138"),a=r("6b80"),o=r("727f"),c=r("7400"),_=r("a8f3"),u=r("195d"),l=r("8b81"),s=r("26cc"),T=r("adaa"),E=r("4cac").f,S=r("61f9").f,D=r("5ae2").f,f=r("a5db").trim,I="Number",d=i[I],R=d.prototype,p=_(T(R))==I,A=function(e){var t,r,n,i,a,o,c,_,u=l(e,!1);if("string"==typeof u&&u.length>2)if(u=f(u),t=u.charCodeAt(0),43===t||45===t){if(r=u.charCodeAt(2),88===r||120===r)return NaN}else if(48===t){switch(u.charCodeAt(1)){case 66:case 98:n=2,i=49;break;case 79:case 111:n=8,i=55;break;default:return+u}for(a=u.slice(2),o=a.length,c=0;c<o;c++)if(_=a.charCodeAt(c),_<48||_>i)return NaN;return parseInt(a,n)}return+u};if(a(I,!d(" 0o1")||!d("0b1")||d("+0x1"))){for(var g,h=function(e){var t=arguments.length<1?0:e,r=this;return r instanceof h&&(p?s((function(){R.valueOf.call(r)})):_(r)!=I)?u(new d(A(t)),r,h):A(t)},P=n?E(d):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),O=0;P.length>O;O++)c(d,g=P[O])&&!c(h,g)&&D(h,g,S(d,g));h.prototype=R,R.constructor=h,o(i,I,h)}},"324b":function(e,t,r){"use strict";var n=r("f0c6");e.exports=function(){var e=n(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},"36cf":function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"3b90":function(e,t,r){},"50dc":function(e,t,r){"use strict";var n=r("21cf"),i=r("17f6"),a=r("acb3"),o=r("0e4f"),c=[].join,_=i!=Object,u=o("join",",");n({target:"Array",proto:!0,forced:_||!u},{join:function(e){return c.call(a(this),void 0===e?",":e)}})},"516f":function(e,t,r){"use strict";var n=r("21cf"),i=r("ff76"),a=r("e138"),o=r("7400"),c=r("0d01"),_=r("5ae2").f,u=r("af42"),l=a.Symbol;if(i&&"function"==typeof l&&(!("description"in l.prototype)||void 0!==l().description)){var s={},T=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),t=this instanceof T?new l(e):void 0===e?l():l(e);return""===e&&(s[t]=!0),t};u(T,l);var E=T.prototype=l.prototype;E.constructor=T;var S=E.toString,D="Symbol(test)"==String(l("test")),f=/^Symbol\((.*)\)[^)]+$/;_(E,"description",{configurable:!0,get:function(){var e=c(this)?this.valueOf():this,t=S.call(e);if(o(s,e))return"";var r=D?t.slice(7,-1):t.replace(f,"$1");return""===r?void 0:r}}),n({global:!0,forced:!0},{Symbol:T})}},"5df5":function(e,t,r){"use strict";function n(e){if(Array.isArray(e))return e}function i(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,i=!1,a=void 0;try{for(var o,c=e[Symbol.iterator]();!(n=(o=c.next()).done);n=!0)if(r.push(o.value),t&&r.length===t)break}catch(_){i=!0,a=_}finally{try{n||null==c["return"]||c["return"]()}finally{if(i)throw a}}return r}}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){if(e){if("string"===typeof e)return a(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(e,t):void 0}}function c(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _(e,t){return n(e)||i(e,t)||o(e,t)||c()}r.d(t,"a",(function(){return _}))},"5e68":function(e,t,r){"use strict";r("8af5");var n=r("727f"),i=r("26cc"),a=r("b8b3"),o=r("1671"),c=r("915c"),_=a("species"),u=!i((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),l=function(){return"$0"==="a".replace(/./,"$0")}(),s=a("replace"),T=function(){return!!/./[s]&&""===/./[s]("a","$0")}(),E=!i((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var r="ab".split(e);return 2!==r.length||"a"!==r[0]||"b"!==r[1]}));e.exports=function(e,t,r,s){var S=a(e),D=!i((function(){var t={};return t[S]=function(){return 7},7!=""[e](t)})),f=D&&!i((function(){var t=!1,r=/a/;return"split"===e&&(r={},r.constructor={},r.constructor[_]=function(){return r},r.flags="",r[S]=/./[S]),r.exec=function(){return t=!0,null},r[S](""),!t}));if(!D||!f||"replace"===e&&(!u||!l||T)||"split"===e&&!E){var I=/./[S],d=r(S,""[e],(function(e,t,r,n,i){return t.exec===o?D&&!i?{done:!0,value:I.call(t,r,n)}:{done:!0,value:e.call(r,t,n)}:{done:!1}}),{REPLACE_KEEPS_$0:l,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:T}),R=d[0],p=d[1];n(String.prototype,e,R),n(RegExp.prototype,S,2==t?function(e,t){return p.call(e,this,t)}:function(e){return p.call(e,this)})}s&&c(RegExp.prototype[S],"sham",!0)}},"776d":function(e,t,r){},"7e09":function(e,t,r){var n=r("b8b3");t.f=n},"81af":function(e,t,r){"use strict";r("776d")},"8af5":function(e,t,r){"use strict";var n=r("21cf"),i=r("1671");n({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},"8d88":function(e,t,r){"use strict";r("14d8")},"97a5":function(e,t,r){"use strict";r("e0c3"),r("2d72");var n=r("2459"),i=(r("be65"),r("8af5"),r("b3b7"),[[["blueprintsSupport"],function(e,t){return"".concat(t.getStr("lvl")," ").concat(e++)}],[["blueprintsCombat","blueprintsUtility"],function(e,t){return"".concat(t.getStr("lvl")," ").concat(e)}],[["WhiteStar"],function(e,t){return/Score\dThresholds/.test(e)?t.getStr("ScoreNThresholds")+" "+e.replace(/Score(\d)Thresholds/,"$1"):t.getStr(e)}]]);t["a"]=function(e,t,r){for(var a=function(t){return t in n["a"]&&(t=n["a"][t]),e(t)},o={getStr:a},c=0;c<i.length;c++)if(i[c][0].includes(t))return i[c][1](r,o);return a(r)}},"9dd7":function(e,t,r){"use strict";var n=r("21cf"),i=r("399e").filter,a=r("b518"),o=r("5851"),c=a("filter"),_=o("filter");n({target:"Array",proto:!0,forced:!c||!_},{filter:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}})},a3ce:function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"table-bg"},[r("div",{staticClass:"wrapper"},[r("stats-info",{attrs:{header:e.statsInfo.header,description:e.statsInfo.description,show:e.statsInfo.show},on:{"update:show":function(t){return e.$set(e.statsInfo,"show",t)}}}),r("table",{staticClass:"table"},[r("thead",[r("tr",[r("th",{staticClass:"level-column"},[e._v(" "+e._s(e.$t(e.lvlColKey))+" ")]),e._l(e.head,(function(t){return r("th",e._g({key:t,class:{"info-mark":e.headStatsInfoData[t].text}},e.headStatsInfoData[t].text?{click:function(r){return e.clickInfo(r,t)}}:{}),[e._v(" "+e._s(e.getFormatHead(t))+" ")])})),e._t("head")],2)]),r("tbody",e._l(e.maxLevel,(function(t,n){return r("tr",{key:t},[r("td",{staticClass:"level-column"},[e._v(" "+e._s(n+e.colLvlStartAt)+" ")]),e._l(e.body,(function(t,i){return null!==t[n].value?r("td",{key:i,attrs:{rowspan:t[n].rowspan},domProps:{innerHTML:e._s(e.getFormatBody(e.head[i],t[n].value))}}):e._e()})),e._t("body",null,{level:n})],2)})),0)])],1)])},i=[],a=(r("1d2a"),r("516f"),r("be65"),r("9507"),r("0d5a"),r("268d"),r("8ec4"),r("dc33")),o=r("97a5"),c=r("fd5d"),_=r("e35d"),u={name:"Table",components:{StatsInfo:_["a"]},props:{mergeCells:{type:Boolean,default:!0},lvlColKey:{type:String,default:"lvl"},colLvlStartAt:{type:Number,default:1},maxLevel:{type:Number,request:!0},objName:String,head:Array,body:Array,iconDir:String},data:function(){return{headStatsInfoData:{},statsInfo:{header:"",description:"",show:!1}}},created:function(){var e=this;this.body.forEach((function(t,r,n){n[r]=l(t,e.mergeCells)})),this.head.forEach((function(t){e.newInfoBlock(t)}))},methods:{getFormatBody:function(){for(var e=this,t=function(t){return e.$t.call(e,t)},r=function(t){return e.$te.call(e,t)},n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return a["a"].apply(void 0,[t,r,this.iconDir].concat(i))},getFormatHead:function(){for(var e=this,t=function(t){return e.$t.call(e,t)},r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return o["a"].apply(void 0,[t,this.objName].concat(n))},newInfoBlock:function(e){var t=this,r=function(e){return t.$t.call(t,e)},n=function(e){return t.$te.call(t,e)},i=Object(c["b"])(r,n,e),a=this.headStatsInfoData[e]={};i&&(a.header=this.getFormatHead(e),a.text=i)},clickInfo:function(e,t){this.statsInfo.header=this.headStatsInfoData[t].header,this.statsInfo.description=this.headStatsInfoData[t].text,this.statsInfo.show=!0}}};function l(e,t){return e.map((function(e,r,n){return e==n[r-1]&&t&&(e=null),{value:e}})).map((function(e,t,r){if(null===e.value){var n=1,i=t;while(null==r[i].value)i--,n++;r[i].rowspan=n}return e}))}var s=u,T=(r("81af"),r("cf6d"),r("6ffd")),E=Object(T["a"])(s,n,i,!1,null,"a9905f9e",null);t["a"]=E.exports},a5db:function(e,t,r){var n=r("8cc7"),i=r("36cf"),a="["+i+"]",o=RegExp("^"+a+a+"*"),c=RegExp(a+a+"*$"),_=function(e){return function(t){var r=String(n(t));return 1&e&&(r=r.replace(o,"")),2&e&&(r=r.replace(c,"")),r}};e.exports={start:_(1),end:_(2),trim:_(3)}},b3b7:function(e,t,r){"use strict";var n=r("5e68"),i=r("f0c6"),a=r("4ac9"),o=r("3fac"),c=r("e297"),_=r("8cc7"),u=r("0bfc"),l=r("1999"),s=Math.max,T=Math.min,E=Math.floor,S=/\$([$&'`]|\d\d?|<[^>]*>)/g,D=/\$([$&'`]|\d\d?)/g,f=function(e){return void 0===e?e:String(e)};n("replace",2,(function(e,t,r,n){var I=n.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,d=n.REPLACE_KEEPS_$0,R=I?"$":"$0";return[function(r,n){var i=_(this),a=void 0==r?void 0:r[e];return void 0!==a?a.call(r,i,n):t.call(String(i),r,n)},function(e,n){if(!I&&d||"string"===typeof n&&-1===n.indexOf(R)){var a=r(t,e,this,n);if(a.done)return a.value}var _=i(e),E=String(this),S="function"===typeof n;S||(n=String(n));var D=_.global;if(D){var A=_.unicode;_.lastIndex=0}var g=[];while(1){var h=l(_,E);if(null===h)break;if(g.push(h),!D)break;var P=String(h[0]);""===P&&(_.lastIndex=u(E,o(_.lastIndex),A))}for(var O="",L=0,v=0;v<g.length;v++){h=g[v];for(var m=String(h[0]),M=s(T(c(h.index),E.length),0),C=[],N=1;N<h.length;N++)C.push(f(h[N]));var y=h.groups;if(S){var U=[m].concat(C,M,E);void 0!==y&&U.push(y);var b=String(n.apply(void 0,U))}else b=p(m,E,M,C,y,n);M>=L&&(O+=E.slice(L,M)+b,L=M+m.length)}return O+E.slice(L)}];function p(e,r,n,i,o,c){var _=n+e.length,u=i.length,l=D;return void 0!==o&&(o=a(o),l=S),t.call(c,l,(function(t,a){var c;switch(a.charAt(0)){case"$":return"$";case"&":return e;case"`":return r.slice(0,n);case"'":return r.slice(_);case"<":c=o[a.slice(1,-1)];break;default:var l=+a;if(0===l)return t;if(l>u){var s=E(l/10);return 0===s?t:s<=u?void 0===i[s-1]?a.charAt(1):i[s-1]+a.charAt(1):t}c=i[l-1]}return void 0===c?"":c}))}}))},c789:function(e,t,r){"use strict";var n=r("5e68"),i=r("e44b"),a=r("f0c6"),o=r("8cc7"),c=r("8b8f"),_=r("0bfc"),u=r("3fac"),l=r("1999"),s=r("1671"),T=r("26cc"),E=[].push,S=Math.min,D=4294967295,f=!T((function(){return!RegExp(D,"y")}));n("split",2,(function(e,t,r){var n;return n="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,r){var n=String(o(this)),a=void 0===r?D:r>>>0;if(0===a)return[];if(void 0===e)return[n];if(!i(e))return t.call(n,e,a);var c,_,u,l=[],T=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),S=0,f=new RegExp(e.source,T+"g");while(c=s.call(f,n)){if(_=f.lastIndex,_>S&&(l.push(n.slice(S,c.index)),c.length>1&&c.index<n.length&&E.apply(l,c.slice(1)),u=c[0].length,S=_,l.length>=a))break;f.lastIndex===c.index&&f.lastIndex++}return S===n.length?!u&&f.test("")||l.push(""):l.push(n.slice(S)),l.length>a?l.slice(0,a):l}:"0".split(void 0,0).length?function(e,r){return void 0===e&&0===r?[]:t.call(this,e,r)}:t,[function(t,r){var i=o(this),a=void 0==t?void 0:t[e];return void 0!==a?a.call(t,i,r):n.call(String(i),t,r)},function(e,i){var o=r(n,e,this,i,n!==t);if(o.done)return o.value;var s=a(e),T=String(this),E=c(s,RegExp),I=s.unicode,d=(s.ignoreCase?"i":"")+(s.multiline?"m":"")+(s.unicode?"u":"")+(f?"y":"g"),R=new E(f?s:"^(?:"+s.source+")",d),p=void 0===i?D:i>>>0;if(0===p)return[];if(0===T.length)return null===l(R,T)?[T]:[];var A=0,g=0,h=[];while(g<T.length){R.lastIndex=f?g:0;var P,O=l(R,f?T:T.slice(g));if(null===O||(P=S(u(R.lastIndex+(f?0:g)),T.length))===A)g=_(T,g,I);else{if(h.push(T.slice(A,g)),h.length===p)return h;for(var L=1;L<=O.length-1;L++)if(h.push(O[L]),h.length===p)return h;g=A=P}}return h.push(T.slice(A)),h}]}),!f)},cf6d:function(e,t,r){"use strict";r("3b90")},dc33:function(e,t,r){"use strict";r("be65"),r("e0c3"),r("2d72");var n=function(e,t){var r="";t=parseInt(t,10);var n=Math.floor(t/86400),i=Math.floor((t-86400*n)/3600),a=Math.floor((t-(3600*i+86400*n))/60),o=t-(86400*n+3600*i+60*a);return n>0&&(r+="".concat(n).concat(e("days"))),i>0&&(r+=" ".concat(i).concat(e("hours"))),a>0&&(r+=" ".concat(a).concat(e("min"))),o>0&&(r+=" ".concat(o).concat(e("sec"))),r||0},i=r("2459"),a=(r("9dd7"),r("50dc"),r("0d5a"),r("30f4"),r("268d"),r("1eb6"),r("8af5"),r("b3b7"),r("c789"),[[["JobPayoutIncreasePercent","DamageReductionPct","TradeStationDeliverReward","DroneShipmentBonus","TradeBurstShipmentBonus","MirrorDamagePct","WaypointShipmentRewardBonus","UnityBoostPercent","IncreaseSectorHydroPct","HydroUploadPct","SpeedIncreasePerShipment","SalvageHullPercent","IncreaseSectorHydroPct","CreditIncomeModifier","FuelIncomeModifier","CreditStorageModifier","FuelStorageModifier","CreditShipmentModifier","FuelShipmentModifier","CancelBuildRefundPct","ArtifactYieldBonus","BlueStar_CRRewardRate","BlueStar_MaxHydroPerDayPct","BlueStar_HydroPctPerPos","DroneShipmentBonusMax","SalvageHullPercentWS","SalvageHullPercentBS","SpeedIncrDuringActivation"],function(e){return e+"%"}],[["UnlockTime","SpawnLifetime","ActivationDelay","ActivationPrep","ActivationPrepBS","RedStarLifeExtention","TimeToFullyRegen","ShieldRegenDelay","EffectDurationx10","EffectDurationx10WS","EffectDurationx10BS","ActivationPrepWS","SpawnLifetime_WS","DesignUpgradeTime","ActivationDelayWS","ActivationDelayBS","MaxDPSTime_BS","MaxDPSTimeWS","MaxDPSTime","APTPIOTTPWS","DockedObjectDestroyTime","DisableTimeWS","SectorUnlockTime","TimeToUpgrade","TimeToResearch","TimeToLoad","Lifetime","ConstructionTime","TeleportShipmentsDurationHr","TimeSpeedupMaxSeconds","TimeSpeedupRegenPerDay","SpawnDelay","MoveUpdateSec","BlueStar_CRRewardWinLimitPeriod","WSLostBSTimeCooldown","WSLostOtherTimeCooldown","WSJumpBSTimeCooldown","WSJumpOtherTimeCooldown","ProximityTriggerSec","EMPResist","ProximityTriggerSecWS","DestinyDisableTimes","DestinyDisableTimesWS","SpawnFleetIntervalSeconds","ShieldRegenTimeAfterDamage","SectorEnrichCooldownSeconds","RelicLoad","RelicLoadWS","ProximityTriggerSecBS","ActivationPrepRS","SpawnLifetime_BS","SpawnLifetimeBS","ActivationDelayWS","ActivationDelayRS","MaxDPSTimeBS","ProximityTriggerSecBS","ProximityTriggerSecRS"],function(e,t){return t.fixTime(e,t)}],[["EffectRadiusWS","EffectRadiusBS","EffectRadius","DamageRange","DamageRangeWhenNeutralized","Speed","AttackRange"],function(e,t){return e+" "+t.getStr("AU")}],[["UnlockBlueprints","UnlockPrice","BCCost","BuildCost","DesignUpgradeCost","HP","WhiteStarScore","BSScore","ActivationFuelCost","AOEDamage","AOEDamage_WS","AOEDamage_BS","Damage","Cost","HydrogenPerDay","CreditStorage","FuelStorage","ShipmentsCRValuePerDay","array","SalvageCRReward","PriceInCrystals","XP","SalvageHydroReward","SectorUnlockCost","TotalShipmentCRPerDay","GoalTarget","CRReward","FuelReward","UnlockAmount","PCReward","XPReward","RelicsRequired","Score1Thresholds","Score2Thresholds","Score3Thresholds","CRAsteroidAmt","MaxHP","MaxShield","ShieldStrength"],function(e){return e.toLocaleString()}],[["MoveHydrogenCostPerSector","TSHydroCost"],function(e,t){return"".concat(e.toLocaleString()," ").concat(t.getStr("hyd"),".")}],[["MiningSpeed"],function(e,t){return e+"/"+t.getStr("min")}],[["FuelUseIncrease","FuelUsePer5000Distance"],function(e,t){return e+"/100"+t.getStr("AU")}],[["TimeWarpFactor","TimeSpeedupFactor","TimeSlowdownFactor","MiningSpeedModifierPct"],function(e){return"x"+e}],[["APTPIOTTP"],function(e,t){return e+" "+t.getStr("sec")}],[["TID","TID_Description","BaseType","TID_Artifact","InitialModule"],function(e,t){return t.getStr(e,t)}],[["PlanetTypes","Name"],function(e,t){return e.split("!").filter((function(e){return" "!==e})).map((function(e){var r=e.split("_");return 1===r.length?r[0]:"".concat(t.getStr(r[0])," ").concat(t.getStr("lvl"),". ").concat(r[1].slice(-1))})).join(", ")}],[["NewModuleSlots"],function(e,t){return e.split("!").map((function(e){return"+ "+t.getStr(e)})).join(", ")}],[["GhostSpawnSecs"],function(e,t){return e.split("!").map((function(e){return t.fixTime(e)})).join(", ")}],[["StringParam","ShipToSpawn"],function(e,t){return t.getStr(e.replace(/Cerberus(.*)/,"$1"))}],[["module"],function(e,t){var r=e.split("!");return"".concat(t.getStr(r[0])," ").concat(r[1])}],[["PassiveIncomeModifier","UnityMaxDamageIncreasePct"],function(e){return"+".concat(e,"%")}],[["Hydrogen","Credits","RegularInfuenceRange","InfluenceAwardThreshold","1","2","3","4","5","6","7","8","9","10","11"],function(e){var t=e.split("!").map((function(e){return" "!==e?Number(e).toLocaleString():null}));return"".concat(t[0]||"","-").concat(t[1]||"")}],[["TicksPerRelic"],function(e,t){return t.fixTime(120*e)}],[["TargetSwitchTicks"],function(e,t){return t.fixTime(e/5)}],[["PreparationTimeHours"],function(e,t){return e+" "+t.getStr("hours")}]]),o=[function(e,t){return Object.keys(e).map((function(r){return"".concat(t.getStr(r),": ").concat(e[r])})).join(", ")}];t["a"]=function(e,t,r,c,_){var u=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return n.apply(void 0,[l].concat(t))},l=function(t){return t in i["a"]&&(t=i["a"][t]),e(t)},s={getStr:l,fixTime:u,iconDir:r};if(void 0!==c&&void 0!==_){if(_.constructor===Object)return o[0](_,s);for(var T=0;T<a.length;T++)if(a[T][0].includes(c))return a[T][1](_,s);return _}console.log("Ошибка в ".concat(c," : ").concat(_))}},e35d:function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.show?r("div",{staticClass:"statsInfo",on:{click:function(t){return t.stopPropagation(),t.target!==t.currentTarget?null:e.swith(t)}}},[r("div",[r("button",{on:{click:e.swith}}),r("p",[e._v(e._s(e.header))]),r("p",{domProps:{innerHTML:e._s(e.description)}})])]):e._e()},i=[],a={props:{header:{type:String},description:{type:String},show:{type:Boolean}},watch:{show:function(e){document.body.style.overflow=e?"hidden":"auto"}},methods:{swith:function(){this.$emit("update:show",!1)}}},o=a,c=(r("8d88"),r("6ffd")),_=Object(c["a"])(o,n,i,!1,null,"b410f01a",null);t["a"]=_.exports},e497:function(e,t,r){"use strict";var n=r("26cc");function i(e,t){return RegExp(e,t)}t.UNSUPPORTED_Y=n((function(){var e=i("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=n((function(){var e=i("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},e5c4:function(e,t,r){var n=r("acb3"),i=r("4cac").f,a={}.toString,o="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(e){try{return i(e)}catch(t){return o.slice()}};e.exports.f=function(e){return o&&"[object Window]"==a.call(e)?c(e):i(n(e))}},fd5d:function(e,t,r){"use strict";r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return a}));r("8af5"),r("b3b7");var n=r("2459");function i(e,t,r,n,i){if(void 0!=n&&!Array.isArray(n)){var a=c(e(n)),o=_(e,t,i||r);return o&&(a+="<br/><br/>"+o),a}function c(e){return e.replace(/(\\n\\n)(.)|(\\n)(.)/g,(function(e,t,r){return"<br/>"+r.toUpperCase()}))}function _(e,t,r){return t(r+"_customDesc")?e(r+"_customDesc"):null}}function a(e,t,r){var a=i(e,t,null,o(r));return a||null;function o(e){for(var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=["_DESCR","_INFO"],a=0,c=i;a<c.length;a++){var _=c[a],u=(r?e:n["a"][e])+_;if(t(u))return u}return r?null:o(e,!0)}}}}]);