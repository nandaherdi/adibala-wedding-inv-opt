tive"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gv(a){return this.f}}
A.yv.prototype={
j(a){var s,r,q,p,o,n,m,l,k=this,j={},i=new A.bz("")
j.a=""
s=k.c
for(r=s.length,q=0,p="",o="";q<r;++q,o=", "){n=s[q]
i.a=p+o
p=i.a+=A.jr(n)
j.a=", "}k.d.W(0,new A.Ot(j,i))
m=A.jr(k.a)
l=i.j(0)
return"NoSuchMethodError: method not found: '"+k.b.a+"'\nReceiver: "+m+"\nArguments: ["+l+"]"}}
A.B0.prototype={
j(a){return"Unsupported operation: "+this.a}}
A.kB.prototype={
j(a){var s=this.a
return s!=null?"UnimplementedError: "+s:"UnimplementedError"}}
A.e9.prototype={
j(a){return"Bad state: "+this.a}}
A.wi.prototype={
j(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.jr(s)+"."}}
A.yE.prototype={
j(a){return"Out of Memory"},
gnj(){return null},
$ib2:1}
A.rb.prototype={
j(a){return"Stack Overflow"},
gnj(){return null},
$ib2:1}
A.CB.prototype={
j(a){var s=this.a
if(s==null)return"Exception"
return"Exception: "+A.f(s)},
$icC:1}
A.hY.prototype={
j(a){var s,r,q,p,o,n,m,l,k,j,i,h=this.a,g=""!==h?"FormatException: "+h:"FormatException",f=this.c,e=this.b
if(typeof e=="string"){if(f!=null)s=f<0||f>e.length
else s=!1
if(s)f=null
if(f==null){if(e.length>78)e=B.d.a7(e,0,75)+"..."
return g+"\n"+e}for(r=1,q=0,p=!1,o=0;o<f;++o){n=e.charCodeAt(o)
if(n===10){if(q!==o||!p)++r
q=o+1
p=!1}else if(n===13){++r
q=o+1
p=!0}}g=r>1?g+(" (at line "+r+", character "+(f-q+1)+")\n"):g+(" (at character "+(f+1)+")\n")
m=e.length
for(o=f;o<m;++o){n=e.charCodeAt(o)
if(n===10||n===13){m=o
break}}if(m-q>78)if(f-q<75){l=q+75
k=q
j=""
i="..."}else{if(m-f<75){k=m-75
l=m
i=""}else{k=f-36
l=f+36
i="..."}j="..."}else{l=m
k=q
j=""
i=""}return g+j+B.d.a7(e,k,l)+i+"\n"+B.d.X(" ",f-k+j.length)+"^\n"}else return f!=null?g+(" (at offset "+A.f(f)+")"):g},
$icC:1}
A.v.prototype={
fS(a,b){return A.ei(this,A.q(this).h("v.E"),b)},
uH(a,b){var s=this,r=A.q(s)
if(r.h("a_<v.E>").b(s))return A.a2T(s,b,r.h("v.E"))
return new A.fQ(s,b,r.h("fQ<v.E>"))},
eo(a,b,c){return A.y6(this,b,A.q(this).h("v.E"),c)},
f2(a,b){return new A.aW(this,b,A.q(this).h("aW<v.E>"))},
t(a,b){var s
for(s=this.gK(this);s.p();)if(J.d(s.gB(),b))return!0
return!1},
W(a,b){var s
for(s=this.gK(this);s.p();)b.$1(s.gB())},
bv(a,b){var s,r,q=this.gK(this)
if(!q.p())return""
s=J.cY(q.gB())
if(!q.p())return s
if(b.length===0){r=s
do r+=J.cY(q.gB())
while(q.p())}else{r=s
do r=r+b+J.cY(q.gB())
while(q.p())}return r.charCodeAt(0)==0?r:r},
v2(a){return this.bv(0,"")},
jT(a,b){var s
for(s=this.gK(this);s.p();)if(b.$1(s.gB()))return!0
return!1},
ck(a,b){return A.a0(this,b,A.q(this).h("v.E"))},
d9(a){return this.ck(0,!0)},
hf(a){return A.dF(this,A.q(this).h("v.E"))},
gv(a){var s,r=this.gK(this)
for(s=0;r.p();)++s
return s},
gL(a){return!this.gK(this).p()},
gaP(a){return!this.gL(this)},
q2(a,b){return A.aeh(this,b,A.q(this).h("v.E"))},
f4(a,b){return A.a4z(this,b,A.q(this).h("v.E"))},
gJ(a){var s=this.gK(this)
if(!s.p())throw A.e(A.bA())
return s.gB()},
gO(a){var s,r=this.gK(this)
if(!r.p())throw A.e(A.bA())
do s=r.gB()
while(r.p())
return s},
UO(a,b){var s,r,q=this.gK(this)
do{if(!q.p())throw A.e(A.bA())
s=q.gB()}while(!b.$1(s))
for(;q.p();){r=q.gB()
if(b.$1(r))s=r}return s},
bo(a,b){var s,r
A.cF(b,"index")
s=this.gK(this)
for(r=b;s.p();){if(r===0)return s.gB();--r}throw A.e(A.xH(b,b-r,this,null,"index"))},
j(a){return A.a3c(this,"(",")")}}
A.tj.prototype={
bo(a,b){A.a37(b,this.a,this,null)
return this.b.$1(b)},
gv(a){return this.a}}
A.be.prototype={
j(a){return"MapEntry("+A.f(this.a)+": "+A.f(this.b)+")"}}
A.aK.prototype={
gq(a){return A.B.prototype.gq.call(this,0)},
j(a){return"null"}}
A.B.prototype={$iB:1,
i(a,b){return this===b},
gq(a){return A.eD(this)},
j(a){return"Instance of '"+A.zg(this)+"'"},
E(a,b){throw A.e(A.a3L(this,b))},
gbQ(a){return A.u(this)},
toString(){return this.j(this)},
$0(){return this.E(this,A.K("call","$0",0,[],[],0))},
$1(a){return this.E(this,A.K("call","$1",0,[a],[],0))},
$2(a,b){return this.E(this,A.K("call","$2",0,[a,b],[],0))},
$1$2$onError(a,b,c){return this.E(this,A.K("call","$1$2$onError",0,[a,b,c],["onError"],1))},
$3(a,b,c){return this.E(this,A.K("call","$3",0,[a,b,c],[],0))},
$4(a,b,c,d){return this.E(this,A.K("call","$4",0,[a,b,c,d],[],0))},
$1$1(a,b){return this.E(this,A.K("call","$1$1",0,[a,b],[],1))},
$1$highContrast(a){return this.E(this,A.K("call","$1$highContrast",0,[a],["highContrast"],0))},
$1$accessibilityFeatures(a){return this.E(this,A.K("call","$1$accessibilityFeatures",0,[a],["accessibilityFeatures"],0))},
$3$replace$state(a,b,c){return this.E(this,A.K("call","$3$replace$state",0,[a,b,c],["replace","state"],0))},
$2$path(a,b){return this.E(this,A.K("call","$2$path",0,[a,b],["path"],0))},
$1$growable(a){return this.E(this,A.K("call","$1$growable",0,[a],["growable"],0))},
$2$params(a,b){return this.E(this,A.K("call","$2$params",0,[a,b],["params"],0))},
$1$accessibleNavigation(a){return this.E(this,A.K("call","$1$accessibleNavigation",0,[a],["accessibleNavigation"],0))},
$1$semanticsEnabled(a){return this.E(this,A.K("call","$1$semanticsEnabled",0,[a],["semanticsEnabled"],0))},
$3$onAction$onChange(a,b,c){return this.E(this,A.K("call","$3$onAction$onChange",0,[a,b,c],["onAction","onChange"],0))},
$1$0(a){return this.E(this,A.K("call","$1$0",0,[a],[],1))},
$1$locales(a){return this.E(this,A.K("call","$1$locales",0,[a],["locales"],0))},
$1$textScaleFactor(a){return this.E(this,A.K("call","$1$textScaleFactor",0,[a],["textScaleFactor"],0))},
$1$platformBrightness(a){return this.E(this,A.K("call","$1$platformBrightness",0,[a],["platformBrightness"],0))},
$13$buttons$change$device$kind$physicalX$physicalY$pressure$pressureMax$scale$signalKind$timeStamp$viewId(a,b,c,d,e,f,g,h,i,j,k,l,m){return this.E(this,A.K("call","$13$buttons$change$device$kind$physicalX$physicalY$pressure$pressureMax$scale$signalKind$timeStamp$viewId",0,[a,b,c,d,e,f,g,h,i,j,k,l,m],["buttons","change","device","kind","physicalX","physicalY","pressure","pressureMax","scale","signalKind","timeStamp","viewId"],0))},
$14$buttons$change$device$kind$physicalX$physicalY$pressure$pressureMax$scrollDeltaX$scrollDeltaY$signalKind$timeStamp$viewId(a,b,c,d,e,f,g,h,i,j,k,l,m,n){return this.E(this,A.K("call","$14$buttons$change$device$kind$physicalX$physicalY$pressure$pressureMax$scrollDeltaX$scrollDeltaY$signalKind$timeStamp$viewId",0,[a,b,c,d,e,f,g,h,i,j,k,l,m,n],["buttons","change","device","kind","physicalX","physicalY","pressure","pressureMax","scrollDeltaX","scrollDeltaY","signalKind","timeStamp","viewId"],0))},
$13$buttons$change$device$kind$physicalX$physicalY$pressure$pressureMax$signalKind$tilt$timeStamp$viewId(a,b,c,d,e,f,g,h,i,j,k,l,m){return this.E(this,A.K("call","$13$buttons$change$device$kind$physicalX$physicalY$pressure$pressureMax$signalKind$tilt$timeStamp$viewId",0,[a,b,c,d,e,f,g,h,i,j,k,l,m],["buttons","change","device","kind","physicalX","physicalY","pressure","pressureMax","signalKind","tilt","timeStamp","viewId"],0))},
$1$hostElementAttributes(a){return this.E(this,A.K("call","$1$hostElementAttributes",0,[a],["hostElementAttributes"],0))},
$1$style(a){return this.E(this,A.K("call","$1$style",0,[a],["style"],0))},
$2$priority$scheduler(a,b){return this.E(this,A.K("call","$2$priority$scheduler",0,[a,b],["priority","scheduler"],0))},
$2$position(a,b){return this.E(this,A.K("call","$2$position",0,[a,b],["position"],0))},
$2$aspect(a,b){return this.E(this,A.K("call","$2$aspect",0,[a,b],["aspect"],0))},
$9$applyTextScaling$color$fill$grade$opacity$opticalSize$shadows$size$weight(a,b,c,d,e,f,g,h,i){return this.E(this,A.K("call","$9$applyTextScaling$color$fill$grade$opacity$opticalSize$shadows$size$weight",0,[a,b,c,d,e,f,g,h,i],["applyTextScaling","color","fill","grade","opacity","opticalSize","shadows","size","weight"],0))},
$8$removeBottomInset$removeBottomPadding$removeLeftPadding$removeRightPadding$removeTopPadding(a,b,c,d,e,f,g,h){return this.E(this,A.K("call","$8$removeBottomInset$removeBottomPadding$removeLeftPadding$removeRightPadding$removeTopPadding",0,[a,b,c,d,e,f,g,h],["removeBottomInset","removeBottomPadding","removeLeftPadding","removeRightPadding","removeTopPadding"],0))},
$7$removeBottomPadding$removeLeftPadding$removeRightPadding$removeTopPadding(a,b,c,d,e,f,g){return this.E(this,A.K("call","$7$removeBottomPadding$removeLeftPadding$removeRightPadding$removeTopPadding",0,[a,b,c,d,e,f,g],["removeBottomPadding","removeLeftPadding","removeRightPadding","removeTopPadding"],0))},
$8$maintainBottomViewPadding$removeBottomPadding$removeLeftPadding$removeRightPadding$removeTopPadding(a,b,c,d,e,f,g,h){return this.E(this,A.K("call","$8$maintainBottomViewPadding$removeBottomPadding$removeLeftPadding$removeRightPadding$removeTopPadding",0,[a,b,c,d,e,f,g,h],["maintainBottomViewPadding","removeBottomPadding","removeLeftPadding","removeRightPadding","removeTopPadding"],0))},
$1$bottom(a){return this.E(this,A.K("call","$1$bottom",0,[a],["bottom"],0))},
$1$range(a){return this.E(this,A.K("call","$1$range",0,[a],["range"],0))},
$2$reversed(a,b){return this.E(this,A.K("call","$2$reversed",0,[a,b],["reversed"],0))},
$3$debugReport(a,b,c){return this.E(this,A.K("call","$3$debugReport",0,[a,b,c],["debugReport"],0))},
$3$cancel$down$reason(a,b,c){return this.E(this,A.K("call","$3$cancel$down$reason",0,[a,b,c],["cancel","down","reason"],0))},
$2$down$up(a,b){return this.E(this,A.K("call","$2$down$up",0,[a,b],["down","up"],0))},
$1$down(a){return this.E(this,A.K("call","$1$down",0,[a],["down"],0))},
$1$floatingActionButtonScale(a){return this.E(this,A.K("call","$1$floatingActionButtonScale",0,[a],["floatingActionButtonScale"],0))},
$1$padding(a){return this.E(this,A.K("call","$1$padding",0,[a],["padding"],0))},
$2$viewInsets$viewPadding(a,b){return this.E(this,A.K("call","$2$viewInsets$viewPadding",0,[a,b],["viewInsets","viewPadding"],0))},
$2$padding$viewPadding(a,b){return this.E(this,A.K("call","$2$padding$viewPadding",0,[a,b],["padding","viewPadding"],0))},
$1$color(a){return this.E(this,A.K("call","$1$color",0,[a],["color"],0))},
$2$textDirection(a,b){return this.E(this,A.K("call","$2$textDirection",0,[a,b],["textDirection"],0))},
$2$color$fontSize(a,b){return this.E(this,A.K("call","$2$color$fontSize",0,[a,b],["color","fontSize"],0))},
$3$textDirection(a,b,c){return this.E(this,A.K("call","$3$textDirection",0,[a,b,c],["textDirection"],0))},
$1$withDelay(a){return this.E(this,A.K("call","$1$withDelay",0,[a],["withDelay"],0))},
$1$findFirstFocus(a){return this.E(this,A.K("call","$1$findFirstFocus",0,[a],["findFirstFocus"],0))},
$2$value(a,b){return this.E(this,A.K("call","$2$value",0,[a,b],["value"],0))},
$1$context(a){return this.E(this,A.K("call","$1$context",0,[a],["context"],0))},
$11$borderRadius$color$containedInkWell$controller$customBorder$onRemoved$position$radius$rectCallback$referenceBox$textDirection(a,b,c,d,e,f,g,h,i,j,k){return this.E(this,A.K("call","$11$borderRadius$color$containedInkWell$controller$customBorder$onRemoved$position$radius$rectCallback$referenceBox$textDirection",0,[a,b,c,d,e,f,g,h,i,j,k],["borderRadius","color","containedInkWell","controller","customBorder","onRemoved","position","radius","rectCallback","referenceBox","textDirection"],0))},
$1$details(a){return this.E(this,A.K("call","$1$details",0,[a],["details"],0))},
$2$minHeight$minWidth(a,b){return this.E(this,A.K("call","$2$minHeight$minWidth",0,[a,b],["minHeight","minWidth"],0))},
$3$foregroundColor$iconSize$overlayColor(a,b,c){return this.E(this,A.K("call","$3$foregroundColor$iconSize$overlayColor",0,[a,b,c],["foregroundColor","iconSize","overlayColor"],0))},
$2$maxWidth$minWidth(a,b){return this.E(this,A.K("call","$2$maxWidth$minWidth",0,[a,b],["maxWidth","minWidth"],0))},
$2$maxHeight$minHeight(a,b){return this.E(this,A.K("call","$2$maxHeight$minHeight",0,[a,b],["maxHeight","minHeight"],0))},
$1$side(a){return this.E(this,A.K("call","$1$side",0,[a],["side"],0))},
$1$textScaler(a){return this.E(this,A.K("call","$1$textScaler",0,[a],["textScaler"],0))},
$1$2$arguments(a,b,c){return this.E(this,A.K("call","$1$2$arguments",0,[a,b,c],["arguments"],1))},
$3$curve$duration(a,b,c){return this.E(this,A.K("call","$3$curve$duration",0,[a,b,c],["curve","duration"],0))},
$2$1(a,b,c){return this.E(this,A.K("call","$2$1",0,[a,b,c],[],2))},
$5(a,b,c,d,e){return this.E(this,A.K("call","$5",0,[a,b,c,d,e],[],0))},
$1$reversed(a){return this.E(this,A.K("call","$1$reversed",0,[a],["reversed"],0))},
$1$2(a,b,c){return this.E(this,A.K("call","$1$2",0,[a,b,c],[],1))},
$6$alignment$alignmentPolicy$curve$duration$targetRenderObject(a,b,c,d,e,f){return this.E(this,A.K("call","$6$alignment$alignmentPolicy$curve$duration$targetRenderObject",0,[a,b,c,d,e,f],["alignment","alignmentPolicy","curve","duration","targetRenderObject"],0))},
$2$alignmentPolicy(a,b){return this.E(this,A.K("call","$2$alignmentPolicy",0,[a,b],["alignmentPolicy"],0))},
$2$ignoreCurrentFocus(a,b){return this.E(this,A.K("call","$2$ignoreCurrentFocus",0,[a,b],["ignoreCurrentFocus"],0))},
$3$alignmentPolicy$forward(a,b,c){return this.E(this,A.K("call","$3$alignmentPolicy$forward",0,[a,b,c],["alignmentPolicy","forward"],0))},
$5$alignment$alignmentPolicy$curve$duration(a,b,c,d,e){return this.E(this,A.K("call","$5$alignment$alignmentPolicy$curve$duration",0,[a,b,c,d,e],["alignment","alignmentPolicy","curve","duration"],0))},
$1$5(a,b,c,d,e,f){return this.E(this,A.K("call","$1$5",0,[a,b,c,d,e,f],[],1))},
$3$bodyColor$decorationColor$displayColor(a,b,c){return this.E(this,A.K("call","$3$bodyColor$decorationColor$displayColor",0,[a,b,c],["bodyColor","decorationColor","displayColor"],0))},
$1$includeChildren(a){return this.E(this,A.K("call","$1$includeChildren",0,[a],["includeChildren"],0))},
$21$background$color$decoration$decorationColor$decorationStyle$decorationThickness$fontFamily$fontFamilyFallback$fontFeatures$fontSize$fontStyle$fontVariations$fontWeight$foreground$height$leadingDistribution$letterSpacing$locale$shadows$textBaseline$wordSpacing(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1){return this.E(this,A.K("call","$21$background$color$decoration$decorationColor$decorationStyle$decorationThickness$fontFamily$fontFamilyFallback$fontFeatures$fontSize$fontStyle$fontVariations$fontWeight$foreground$height$leadingDistribution$letterSpacing$locale$shadows$textBaseline$wordSpacing",0,[a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1],["background","color","decoration","decorationColor","decorationStyle","decorationThickness","fontFamily","fontFamilyFallback","fontFeatures","fontSize","fontStyle","fontVariations","fontWeight","foreground","height","leadingDistribution","letterSpacing","locale","shadows","textBaseline","wordSpacing"],0))},
$12$ellipsis$fontFamily$fontSize$fontStyle$fontWeight$height$locale$maxLines$strutStyle$textAlign$textDirection$textHeightBehavior(a,b,c,d,e,f,g,h,i,j,k,l){return this.E(this,A.K("call","$12$ellipsis$fontFamily$fontSize$fontStyle$fontWeight$height$locale$maxLines$strutStyle$textAlign$textDirection$textHeightBehavior",0,[a,b,c,d,e,f,g,h,i,j,k,l],["ellipsis","fontFamily","fontSize","fontStyle","fontWeight","height","locale","maxLines","strutStyle","textAlign","textDirection","textHeightBehavior"],0))},
$3$code$details$message(a,b,c){return this.E(this,A.K("call","$3$code$details$message",0,[a,b,c],["code","details","message"],0))},
$2$code$message(a,b){return this.E(this,A.K("call","$2$code$message",0,[a,b],["code","message"],0))},
$5$elevationAdjustment$parentPaintClipRect$parentSemanticsClipRect$result$siblingNodes(a,b,c,d,e){return this.E(this,A.K("call","$5$elevationAdjustment$parentPaintClipRect$parentSemanticsClipRect$result$siblingNodes",0,[a,b,c,d,e],["elevationAdjustment","parentPaintClipRect","parentSemanticsClipRect","result","siblingNodes"],0))},
$1$config(a){return this.E(this,A.K("call","$1$config",0,[a],["config"],0))},
$2$descendant$rect(a,b){return this.E(this,A.K("call","$2$descendant$rect",0,[a,b],["descendant","rect"],0))},
$4$boxHeightStyle$boxWidthStyle(a,b,c,d){return this.E(this,A.K("call","$4$boxHeightStyle$boxWidthStyle",0,[a,b,c,d],["boxHeightStyle","boxWidthStyle"],0))},
$2$end$start(a,b){return this.E(this,A.K("call","$2$end$start",0,[a,b],["end","start"],0))},
$1$paragraphWidth(a){return this.E(this,A.K("call","$1$paragraphWidth",0,[a],["paragraphWidth"],0))},
$2$0(a,b){return this.E(this,A.K("call","$2$0",0,[a,b],[],2))},
$1$3$onlyFirst(a,b,c,d){return this.E(this,A.K("call","$1$3$onlyFirst",0,[a,b,c,d],["onlyFirst"],1))},
$3$oldLayer(a,b,c){return this.E(this,A.K("call","$3$oldLayer",0,[a,b,c],["oldLayer"],0))},
$2$oldLayer(a,b){return this.E(this,A.K("call","$2$oldLayer",0,[a,b],["oldLayer"],0))},
$1$oldLayer(a){return this.E(this,A.K("call","$1$oldLayer",0,[a],["oldLayer"],0))},
$3$offset$oldLayer(a,b,c){return this.E(this,A.K("call","$3$offset$oldLayer",0,[a,b,c],["offset","oldLayer"],0))},
$4$isComplexHint$willChangeHint(a,b,c,d){return this.E(this,A.K("call","$4$isComplexHint$willChangeHint",0,[a,b,c,d],["isComplexHint","willChangeHint"],0))},
$3$clipBehavior$oldLayer(a,b,c){return this.E(this,A.K("call","$3$clipBehavior$oldLayer",0,[a,b,c],["clipBehavior","oldLayer"],0))},
$2$doAntiAlias(a,b){return this.E(this,A.K("call","$2$doAntiAlias",0,[a,b],["doAntiAlias"],0))},
$5$borderRadius$shape$textDirection(a,b,c,d,e){return this.E(this,A.K("call","$5$borderRadius$shape$textDirection",0,[a,b,c,d,e],["borderRadius","shape","textDirection"],0))},
$2$parentUsesSize(a,b){return this.E(this,A.K("call","$2$parentUsesSize",0,[a,b],["parentUsesSize"],0))},
$1$maxHeight(a){return this.E(this,A.K("call","$1$maxHeight",0,[a],["maxHeight"],0))},
$1$width(a){return this.E(this,A.K("call","$1$width",0,[a],["width"],0))},
$1$height(a){return this.E(this,A.K("call","$1$height",0,[a],["height"],0))},
$6(a,b,c,d,e,f){return this.E(this,A.K("call","$6",0,[a,b,c,d,e,f],[],0))},
$1$maxWidth(a){return this.E(this,A.K("call","$1$maxWidth",0,[a],["maxWidth"],0))},
$2$bottomNavigationBarTop$floatingActionButtonArea(a,b){return this.E(this,A.K("call","$2$bottomNavigationBarTop$floatingActionButtonArea",0,[a,b],["bottomNavigationBarTop","floatingActionButtonArea"],0))},
k(a,b){return this.E(a,A.K("[]","k",0,[b],[],0))},
EY(){return this.E(this,A.K("toJson","EY",0,[],[],0))},
BC(a){return this.E(this,A.K("_yieldStar","BC",0,[a],[],0))},
th(a){return this.E(this,A.K("_removeAt","th",0,[a],[],0))},
V(a,b){return this.E(a,A.K("-","V",0,[b],[],0))},
X(a,b){return this.E(a,A.K("*","X",0,[b],[],0))},
S(a,b){return this.E(a,A.K("+","S",0,[b],[],0))},
b7(){return this.E(this,A.K("didRegisterListener","b7",0,[],[],0))},
hF(){return this.E(this,A.K("didUnregisterListener","hF",0,[],[],0))},
gv(a){return this.E(a,A.K("length","gv",1,[],[],0))},
gbG(){return this.E(this,A.K("_count","gbG",1,[],[],0))},
geG(){return this.E(this,A.K("_notificationCallStackDepth","geG",1,[],[],0))},
gba(){return this.E(this,A.K("_listeners","gba",1,[],[],0))},
gf8(){return this.E(this,A.K("_reentrantlyRemovedListeners","gf8",1,[],[],0))},
seG(a){return this.E(this,A.K("_notificationCallStackDepth=","seG",2,[a],[],0))},
sba(a){return this.E(this,A.K("_listeners=","sba",2,[a],[],0))},
sf8(a){return this.E(this,A.K("_reentrantlyRemovedListeners=","sf8",2,[a],[],0))},
sbG(a){return this.E(this,A.K("_count=","sbG",2,[a],[],0))}}
A.FP.prototype={
j(a){return""},
$ieK:1}
A.ma.prototype={
gCV(){var s=this.gCX()
if($.nn()===1e6)return s
return s*1000},
gSw(){var s=this.gCX()
if($.nn()===1000)return s
return B.f.bZ(s,1000)},
qv(){var s=this,r=s.b
if(r!=null){s.a=s.a+($.zh.$0()-r)
s.b=null}},
dv(){var s=this.b
this.a=s==null?$.zh.$0():s},
gCX(){var s=this.b
if(s==null)s=$.zh.$0()
return s-this.a}}
A.Qp.prototype={
gB(){return this.d},
p(){var s,r,q,p=this,o=p.b=p.c,n=p.a,m=n.length
if(o===m){p.d=-1
return!1}s=n.charCodeAt(o)
r=o+1
if((s&64512)===55296&&r<m){q=n.charCodeAt(r)
if((q&64512)===56320){p.c=r+1
p.d=A.ag2(s,q)
return!0}}p.c=r
p.d=s
return!0}}
A.bz.prototype={
gv(a){return this.a.length},
n2(a){this.a+=A.f(a)},
bR(a){this.a+=A.cE(a)},
Fe(a){this.a+=A.f(a)+"\n"},
WR(){return this.Fe("")},
j(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
A.T4.prototype={
$2(a,b){throw A.e(A.bx("Illegal IPv4 address, "+a,this.a,b))},
$S:269}
A.T5.prototype={
$2(a,b){throw A.e(A.bx("Illegal IPv6 address, "+a,this.a,b))},
$S:272}
A.T6.prototype={
$2(a,b){var s
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
s=A.fB(B.d.a7(this.b,a,b),16)
if(s<0||s>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return s},
$S:304}
A.uy.prototype={
glz(){var s,r,q,p,o=this,n=o.w
if(n===$){s=o.a
r=s.length!==0?""+s+":":""
q=o.c
p=q==null
if(!p||s==="file"){s=r+"//"
r=o.b
if(r.length!==0)s=s+r+"@"
if(!p)s+=q
r=o.d
if(r!=null)s=s+":"+A.f(r)}else s=r
s+=o.e
r=o.f
if(r!=null)s=s+"?"+r
r=o.r
if(r!=null)s=s+"#"+r
n!==$&&A.a3()
n=o.w=s.charCodeAt(0)==0?s:s}return n},
gpJ(){var s,r,q=this,p=q.x
if(p===$){s=q.e
if(s.length!==0&&s.charCodeAt(0)===47)s=B.d.f7(s,1)
r=s.length===0?B.iQ:A.xZ(new A.ag(A.a(s.split("/"),t.s),A.ahz(),t.nf),t.N)
q.x!==$&&A.a3()
p=q.x=r}return p},
gq(a){var s,r=this,q=r.y
if(q===$){s=B.d.gq(r.glz())
r.y!==$&&A.a3()
r.y=s
q=s}return q},
ghc(){var s,r,q=this,p=q.Q
if(p===$){s=q.f
r=A.afE(s==null?"":s)
q.Q!==$&&A.a3()
q.Q=r
p=r}return p},
gFa(){return this.b},
guU(){var s=this.c
if(s==null)return""
if(B.d.bK(s,"["))return B.d.a7(s,1,s.length-1)
return s},
gvI(){var s=this.d
return s==null?A.a5u(this.a):s},
gvN(){var s=this.f
return s==null?"":s},
gfo(){var s=this.r
return s==null?"":s},
gDA(){return this.a.length!==0},
gDx(){return this.c!=null},
gDz(){return this.f!=null},
gDy(){return this.r!=null},
j(a){return this.glz()},
i(a,b){var s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(t.eP.b(b))if(q.a===b.gkR())if(q.c!=null===b.gDx())if(q.b===b.gFa())if(q.guU()===b.guU())if(q.gvI()===b.gvI())if(q.e===b.ger()){s=q.f
r=s==null
if(!r===b.gDz()){if(r)s=""
if(s===b.gvN()){s=q.r
r=s==null
if(!r===b.gDy()){if(r)s=""
s=s===b.gfo()}else s=!1}else s=!1}else s=!1}else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
return s},
$iB1:1,
gkR(){return this.a},
ger(){return this.e}}
A.Xm.prototype={
$2(a,b){var s=this.b,r=this.a
s.a+=r.a
r.a="&"
r=s.a+=A.Gx(B.d2,a,B.J,!0)
if(b!=null&&b.length!==0){s.a=r+"="
s.a+=A.Gx(B.d2,b,B.J,!0)}},
$S:315}
A.Xl.prototype={
$2(a,b){var s,r
if(b==null||typeof b=="string")this.a.$2(a,b)
else for(s=J.ao(b),r=this.a;s.p();)r.$2(a,s.gB())},
$S:56}
A.Xo.prototype={
$3(a,b,c){var s,r,q,p
if(a===c)return
s=this.a
r=this.b
if(b<0){q=A.n9(s,a,c,r,!0)
p=""}else{q=A.n9(s,a,b,r,!0)
p=A.n9(s,b+1,c,r,!0)}J.ee(this.c.bj(q,A.ahA()),p)},
$S:316}
A.T3.prototype={
ghh(){var s,r,q,p,o=this,n=null,m=o.c
if(m==null){m=o.a
s=o.b[0]+1
r=B.d.pk(m,"?",s)
q=m.length
if(r>=0){p=A.uz(m,r+1,q,B.d4,!1,!1)
q=r}else p=n
m=o.c=new A.Ca("data","",n,n,A.uz(m,s,q,B.iN,!1,!1),p,n)}return m},
j(a){var s=this.a
return this.b[0]===-1?"data:"+s:s}}
A.XW.prototype={
$2(a,b){var s=this.a[a]
B.R.ST(s,0,96,b)
return s},
$S:330}
A.XX.prototype={
$3(a,b,c){var s,r
for(s=b.length,r=0;r<s;++r)a[b.charCodeAt(r)^96]=c},
$S:107}
A.XY.prototype={
$3(a,b,c){var s,r
for(s=b.charCodeAt(0),r=b.charCodeAt(1);s<=r;++s)a[(s^96)>>>0]=c},
$S:107}
A.FH.prototype={
gDA(){return this.b>0},
gDx(){return this.c>0},
gTZ(){return this.c>0&&this.d+1<this.e},
gDz(){return this.f<this.r},
gDy(){return this.r<this.a.length},
gkR(){var s=this.w
return s==null?this.w=this.Kx():s},
Kx(){var s,r=this,q=r.b
if(q<=0)return""
s=q===4
if(s&&B.d.bK(r.a,"http"))return"http"
if(q===5&&B.d.bK(r.a,"https"))return"https"
if(s&&B.d.bK(r.a,"file"))return"file"
if(q===7&&B.d.bK(r.a,"package"))return"package"
return B.d.a7(r.a,0,q)},
gFa(){var s=this.c,r=this.b+3
return s>r?B.d.a7(this.a,r,s-1):""},
guU(){var s=this.c
return s>0?B.d.a7(this.a,s,this.d):""},
gvI(){var s,r=this
if(r.gTZ())return A.fB(B.d.a7(r.a,r.d+1,r.e),null)
s=r.b
if(s===4&&B.d.bK(r.a,"http"))return 80
if(s===5&&B.d.bK(r.a,"https"))return 443
return 0},
ger(){return B.d.a7(this.a,this.e,this.f)},
gvN(){var s=this.f,r=this.r
return s<r?B.d.a7(this.a,s+1,r):""},
gfo(){var s=this.r,r=this.a
return s<r.length?B.d.f7(r,s+1):""},
gpJ(){var s,r,q=this.e,p=this.f,o=this.a
if(B.d.cK(o,"/",q))++q
if(q===p)return B.iQ
s=A.a([],t.s)
for(r=q;r<p;++r)if(o.charCodeAt(r)===47){s.push(B.d.a7(o,q,r))
q=r+1}s.push(B.d.a7(o,q,p))
return A.xZ(s,t.N)},
ghc(){if(this.f>=this.r)return B.nN
var s=A.a5I(this.gvN())
s.F2(A.a6P())
return A.ZK(s,t.N,t.E4)},
gq(a){var s=this.x
return s==null?this.x=B.d.gq(this.a):s},
i(a,b){if(b==null)return!1
if(this===b)return!0
return t.eP.b(b)&&this.a===b.j(0)},
j(a){return this.a},
$iB1:1}
A.Ca.prototype={}
A.oG.prototype={
k(a,b){if(A.kU(b)||typeof b=="number"||typeof b=="string"||b instanceof A.eS)A.js(b)
return this.a.get(b)},
l(a,b,c){if(b instanceof A.eS)A.js(b)
this.a.set(b,c)},
j(a){return"Expando:null"}}
A.is.prototype={}
A.FR.prototype={
gzy(){var s,r=this,q=r.e
if(q===$){s=A.afQ(r.c)
r.e!==$&&A.a3()
r.e=s
q=s}return q}}
A.YZ.prototype={
$1(a){var s,r,q,p
if(A.a6i(a))return a
s=this.a
if(s.T(a))return s.k(0,a)
if(t.mE.b(a)){r={}
s.l(0,a,r)
for(s=a.gb1(),s=s.gK(s);s.p();){q=s.gB()
r[q]=this.$1(a.k(0,q))}return r}else if(t.bN.b(a)){p=[]
s.l(0,a,p)
B.b.G(p,J.vo(a,this,t.z))
return p}else return a},
$S:64}
A.Z6.prototype={
$1(a){return this.a.e7(a)},
$S:20}
A.Z7.prototype={
$1(a){if(a==null)return this.a.oE(new A.yw(a===undefined))
return this.a.oE(a)},
$S:20}
A.Yy.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i,h
if(A.a6h(a))return a
s=this.a
a.toString
if(s.T(a))return s.k(0,a)
if(a instanceof Date){r=a.getTime()
if(Math.abs(r)<=864e13)s=!1
else s=!0
if(s)A.ae(A.cc("DateTime is outside valid range: "+r,null))
A.dR(!0,"isUtc",t.y)
return new A.hV(r,!0)}if(a instanceof RegExp)throw A.e(A.cc("structured clone of RegExp",null))
if(typeof Promise!="undefined"&&a instanceof Promise)return A.hO(a,t.X)
q=Object.getPrototypeOf(a)
if(q===Object.prototype||q===null){p=t.X
o=A.y(p,p)
s.l(0,a,o)
n=Object.keys(a)
m=[]
for(s=J.bG(n),p=s.gK(n);p.p();)m.push(A.a0I(p.gB()))
for(l=0;l<s.gv(n);++l){k=s.k(n,l)
j=m[l]
if(k!=null)o.l(0,j,this.$1(a[k]))}return o}if(a instanceof Array){i=a
o=[]
s.l(0,a,o)
h=a.length
for(s=J.b4(i),l=0;l<h;++l)o.push(this.$1(s.k(i,l)))
return o}return a},
$S:64}
A.yw.prototype={
j(a){return"Promise was rejected with a value of `"+(this.a?"undefined":"null")+"`."},
$icC:1}
A.x0.prototype={}
A.w2.prototype={
D(){return"ClipOp."+this.b}}
A.yZ.prototype={
D(){return"PathFillType."+this.b}}
A.Ub.prototype={
el(a,b){A.aih(this.a,this.b,a,b)}}
A.ui.prototype={
d4(a){A.j0(this.b,this.c,a)}}
A.ht.prototype={
gv(a){return this.a.gv(0)},
VH(a){var s,r,q=this
if(!q.d&&q.e!=null){q.e.el(a.a,a.gDH())
return!1}s=q.c
if(s<=0)return!0
r=q.yJ(s-1)
q.a.dW(a)
return r},
yJ(a){var s,r,q
for(s=this.a,r=!1;(s.c-s.b&s.a.length-1)>>>0>a;r=!0){q=s.mP()
A.j0(q.b,q.c,null)}return r},
Ld(){var s=this,r=s.a
if(!r.gL(0)&&s.e!=null){r=r.mP()
s.e.el(r.a,r.gDH())
A.fD(s.gyI())}else s.d=!1}}
A.IJ.prototype={
VI(a,b,c){this.a.bj(a,new A.IK()).VH(new A.ui(b,c,$.a6))},
G8(a,b){var s=this.a.bj(a,new A.IL()),r=s.e
s.e=new A.Ub(b,$.a6)
if(r==null&&!s.d){s.d=!0
A.fD(s.gyI())}},
Tp(a){var s,r,q,p,o,n,m,l="Invalid arguments for 'resize' method sent to dev.flutter/channel-buffers (arguments must be a two-element list, channel name and new capacity)",k="Invalid arguments for 'overflow' method sent to dev.flutter/channel-buffers (arguments must be a two-element list, channel name and flag state)",j=A.d3(a.buffer,a.byteOffset,a.byteLength)
if(j[0]===7){s=j[1]
if(s>=254)throw A.e(A.bL("Unrecognized message sent to dev.flutter/channel-buffers (method name too long)"))
r=2+s
q=B.J.e9(B.R.b6(j,2,r))
switch(q){case"resize":if(j[r]!==12)throw A.e(A.bL(l))
p=r+1
if(j[p]<2)throw A.e(A.bL(l));++p
if(j[p]!==7)throw A.e(A.bL("Invalid arguments for 'resize' method sent to dev.flutter/channel-buffers (first argument must be a string)"));++p
o=j[p]
if(o>=254)throw A.e(A.bL("Invalid arguments for 'resize' method sent to dev.flutter/channel-buffers (channel name must be less than 254 characters long)"));++p
r=p+o
n=B.J.e9(B.R.b6(j,p,r))
if(j[r]!==3)throw A.e(A.bL("Invalid arguments for 'resize' method sent to dev.flutter/channel-buffers (second argument must be an integer in the range 0 to 2147483647)"))
this.EK(n,a.getUint32(r+1,B.P===$.cb()))
break
case"overflow":if(j[r]!==12)throw A.e(A.bL(k))
p=r+1
if(j[p]<2)throw A.e(A.bL(k));++p
if(j[p]!==7)throw A.e(A.bL("Invalid arguments for 'overflow' method sent to dev.flutter/channel-buffers (first argument must be a string)"));++p
o=j[p]
if(o>=254)throw A.e(A.bL("Invalid arguments for 'overflow' method sent to dev.flutter/channel-buffers (channel name must be less than 254 characters long)"));++p
r=p+o
B.J.e9(B.R.b6(j,p,r))
r=j[r]
if(r!==1&&r!==2)throw A.e(A.bL("Invalid arguments for 'overflow' method sent to dev.flutter/channel-buffers (second argument must be a boolean)"))
break
default:throw A.e(A.bL("Unrecognized method '"+q+"' sent to dev.flutter/channel-buffers"))}}else{m=A.a(B.J.e9(j).split("\r"),t.s)
if(m.length===3&&J.d(m[0],"resize"))this.EK(m[1],A.fB(m[2],null))
else throw A.e(A.bL("Unrecognized message "+A.f(m)+" sent to dev.flutter/channel-buffers."))}},
EK(a,b){var s=this.a,r=s.k(0,a)
if(r==null)s.l(0,a,new A.ht(A.i9(b,t.mt),b))
else{r.c=b
r.yJ(b)}}}
A.IK.prototype={
$0(){return new A.ht(A.i9(1,t.mt),1)},
$S:88}
A.IL.prototype={
$0(){return new A.ht(A.i9(1,t.mt),1)},
$S:88}
A.yy.prototype={
i(a,b){if(b==null)return!1
return b instanceof A.yy&&b.a===this.a&&b.b===this.b},
gq(a){return A.G(this.a,this.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
j(a){return"OffsetBase("+B.c.P(this.a,1)+", "+B.c.P(this.b,1)+")"}}
A.z.prototype={
gc7(){var s=this.a,r=this.b
return Math.sqrt(s*s+r*r)},
goU(){var s=this.a,r=this.b
return s*s+r*r},
V(a,b){return new A.z(this.a-b.a,this.b-b.b)},
S(a,b){return new A.z(this.a+b.a,this.b+b.b)},
X(a,b){return new A.z(this.a*b,this.b*b)},
ey(a,b){return new A.z(this.a/b,this.b/b)},
i(a,b){if(b==null)return!1
return b instanceof A.z&&b.a===this.a&&b.b===this.b},
gq(a){return A.G(this.a,this.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
j(a){return"Offset("+B.c.P(this.a,1)+", "+B.c.P(this.b,1)+")"}}
A.U.prototype={
gL(a){return this.a<=0||this.b<=0},
V(a,b){var s=this
if(b instanceof A.U)return new A.z(s.a-b.a,s.b-b.b)
if(b instanceof A.z)return new A.U(s.a-b.a,s.b-b.b)
throw A.e(A.cc(b,null))},
S(a,b){return new A.U(this.a+b.a,this.b+b.b)},
X(a,b){return new A.U(this.a*b,this.b*b)},
ey(a,b){return new A.U(this.a/b,this.b/b)},
fe(a){return new A.z(a.a+this.a/2,a.b+this.b/2)},
C1(a){return new A.z(a.a+this.a,a.b+this.b)},
t(a,b){var s=b.a
if(s>=0)if(s<this.a){s=b.b
s=s>=0&&s<this.b}else s=!1
else s=!1
return s},
i(a,b){if(b==null)return!1
return b instanceof A.U&&b.a===this.a&&b.b===this.b},
gq(a){return A.G(this.a,this.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
j(a){return"Size("+B.c.P(this.a,1)+", "+B.c.P(this.b,1)+")"}}
A.D.prototype={
gDK(a){var s=this
return isFinite(s.a)&&isFinite(s.b)&&isFinite(s.c)&&isFinite(s.d)},
gL(a){var s=this
return s.a>=s.c||s.b>=s.d},
cn(a){var s=this,r=a.a,q=a.b
return new A.D(s.a+r,s.b+q,s.c+r,s.d+q)},
ai(a,b){var s=this
return new A.D(s.a+a,s.b+b,s.c+a,s.d+b)},
d2(a){var s=this
return new A.D(s.a-a,s.b-a,s.c+a,s.d+a)},
cW(a){var s=this
return new A.D(Math.max(s.a,a.a),Math.max(s.b,a.b),Math.min(s.c,a.c),Math.min(s.d,a.d))},
p0(a){var s=this
return new A.D(Math.min(s.a,a.a),Math.min(s.b,a.b),Math.max(s.c,a.c),Math.max(s.d,a.d))},
vB(a){var s=this
if(s.c<=a.a||a.c<=s.a)return!1
if(s.d<=a.b||a.d<=s.b)return!1
return!0},
geC(){var s=this
return Math.min(Math.abs(s.c-s.a),Math.abs(s.d-s.b))},
gaz(){var s=this,r=s.a,q=s.b
return new A.z(r+(s.c-r)/2,q+(s.d-q)/2)},
t(a,b){var s=this,r=b.a
if(r>=s.a)if(r<s.c){r=b.b
r=r>=s.b&&r<s.d}else r=!1
else r=!1
return r},
i(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(A.u(s)!==J.I(b))return!1
return b instanceof A.D&&b.a===s.a&&b.b===s.b&&b.c===s.c&&b.d===s.d},
gq(a){var s=this
return A.G(s.a,s.b,s.c,s.d,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
j(a){var s=this
return"Rect.fromLTRB("+B.c.P(s.a,1)+", "+B.c.P(s.b,1)+", "+B.c.P(s.c,1)+", "+B.c.P(s.d,1)+")"}}
A.as.prototype={
e6(a,b){return new A.as(A.V(this.a,b.a,1/0),A.V(this.b,b.b,1/0))},
V(a,b){return new A.as(this.a-b.a,this.b-b.b)},
S(a,b){return new A.as(this.a+b.a,this.b+b.b)},
X(a,b){return new A.as(this.a*b,this.b*b)},
i(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(A.u(s)!==J.I(b))return!1
return b instanceof A.as&&b.a===s.a&&b.b===s.b},
gq(a){return A.G(this.a,this.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
j(a){var s=this.a,r=this.b
return s===r?"Radius.circular("+B.c.P(s,1)+")":"Radius.elliptical("+B.c.P(s,1)+", "+B.c.P(r,1)+")"}}
A.eE.prototype={
cn(a){var s=this,r=a.a,q=a.b
return new A.eE(s.a+r,s.b+q,s.c+r,s.d+q,s.e,s.f,s.r,s.w,s.x,s.y,s.z,s.Q,!1)},
d2(a){var s=this,r=Math.max(0,s.e+a),q=Math.max(0,s.f+a),p=Math.max(0,s.r+a),o=Math.max(0,s.w+a),n=Math.max(0,s.z+a),m=Math.max(0,s.Q+a)
return new A.eE(s.a-a,s.b-a,s.c+a,s.d+a,r,q,p,o,Math.max(0,s.x+a),Math.max(0,s.y+a),n,m,!1)},
nG(a,b,c,d){var s=b+c
if(s>d&&s!==0)return Math.min(a,d/s)
return a},
n9(){var s=this,r=s.c,q=s.a,p=Math.abs(r-q),o=s.d,n=s.b,m=Math.abs(o-n),l=s.Q,k=s.f,j=s.e,i=s.r,h=s.w,g=s.y,f=s.x,e=s.z,d=s.nG(s.nG(s.nG(s.nG(1,l,k,m),j,i,p),h,g,m),f,e,p)
if(d<1)return new A.eE(q,n,r,o,j*d,k*d,i*d,h*d,f*d,g*d,e*d,l*d,!1)
return new A.eE(q,n,r,o,j,k,i,h,f,g,e,l,!1)},
t(a,b){var s,r,q,p,o,n,m=this,l=b.a,k=m.a
if(!(l<k))if(!(l>=m.c)){s=b.b
s=s<m.b||s>=m.d}else s=!0
else s=!0
if(s)return!1
r=m.n9()
q=r.e
if(l<k+q&&b.b<m.b+r.f){p=l-k-q
o=r.f
n=b.b-m.b-o}else{s=m.c
q=r.r
if(l>s-q&&b.b<m.b+r.w){p=l-s+q
o=r.w
n=b.b-m.b-o}else{q=r.x
if(l>s-q&&b.b>m.d-r.y){p=l-s+q
o=r.y
n=b.b-m.d+o}else{q=r.z
if(l<k+q&&b.b>m.d-r.Q){p=l-k-q
o=r.Q
n=b.b-m.d+o}else return!0}}}p/=q
n/=o
if(p*p+n*n>1)return!1
return!0},
i(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(A.u(s)!==J.I(b))return!1
return b instanceof A.eE&&b.a===s.a&&b.b===s.b&&b.c===s.c&&b.d===s.d&&b.e===s.e&&b.f===s.f&&b.r===s.r&&b.w===s.w&&b.z===s.z&&b.Q===s.Q&&b.x===s.x&&b.y===s.y},
gq(a){var s=this
return A.G(s.a,s.b,s.c,s.d,s.e,s.f,s.r,s.w,s.z,s.Q,s.x,s.y,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
j(a){var s,r,q=this,p=B.c.P(q.a,1)+", "+B.c.P(q.b,1)+", "+B.c.P(q.c,1)+", "+B.c.P(q.d,1),o=q.e,n=q.f,m=q.r,l=q.w
if(new A.as(o,n).i(0,new A.as(m,l))){s=q.x
r=q.y
s=new A.as(m,l).i(0,new A.as(s,r))&&new A.as(s,r).i(0,new A.as(q.z,q.Q))}else s=!1
if(s){if(o===n)return"RRect.fromLTRBR("+p+", "+B.c.P(o,1)+")"
return"RRect.fromLTRBXY("+p+", "+B.c.P(o,1)+", "+B.c.P(n,1)+")"}return"RRect.fromLTRBAndCorners("+p+", topLeft: "+new A.as(o,n).j(0)+", topRight: "+new A.as(m,l).j(0)+", bottomRight: "+new A.as(q.x,q.y).j(0)+", bottomLeft: "+new A.as(q.z,q.Q).j(0)+")"}}
A.pi.prototype={
D(){return"KeyEventType."+this.b},
gv4(){switch(this.a){case 0:var s="Key Down"
break
case 1:s="Key Up"
break
case 2:s="Key Repeat"
break
default:s=null}return s}}
A.Ne.prototype={
D(){return"KeyEventDeviceType."+this.b}}
A.df.prototype={
NP(){var s=this.e
return"0x"+B.f.i4(s,16)+new A.Nc(B.c.cT(s/4294967296)).$0()},
Lo(){var s=this.f
if(s==null)return"<none>"
switch(s){case"\n":return'"\\n"'
case"\t":return'"\\t"'
case"\r":return'"\\r"'
case"\b":return'"\\b"'
case"\f":return'"\\f"'
default:return'"'+s+'"'}},
P2(){var s=this.f
if(s==null)return""
return" (0x"+new A.ag(new A.ji(s),new A.Nd(),t.sU.h("ag<am.E,x>")).bv(0," ")+")"},
j(a){var s=this,r=s.b.gv4(),q=B.f.i4(s.d,16),p=s.NP(),o=s.Lo(),n=s.P2(),m=s.r?", synthesized":""
return"KeyData("+r+", physical: 0x"+q+", logical: "+p+", character: "+o+n+m+")"}}
A.Nc.prototype={
$0(){switch(this.a){case 0:return" (Unicode)"
case 1:return" (Unprintable)"
case 2:return" (Flutter)"
case 17:return" (Android)"
case 18:return" (Fuchsia)"
case 19:return" (iOS)"
case 20:return" (macOS)"
case 21:return" (GTK)"
case 22:return" (Windows)"
case 23:return" (Web)"
case 24:return" (GLFW)"}return""},
$S:27}
A.Nd.prototype={
$1(a){return B.d.mH(B.f.i4(a,16),2,"0")},
$S:113}
A.r.prototype={
i(a,b){if(b==null)return!1
if(this===b)return!0
if(J.I(b)!==A.u(this))return!1
return b instanceof A.r&&b.gn()===this.gn()},
gq(a){return B.f.gq(this.gn())},
j(a){return"Color(0x"+B.d.mH(B.f.i4(this.gn(),16),8,"0")+")"},
gn(){return this.a}}
A.RN.prototype={
D(){return"StrokeCap."+this.b}}
A.RO.prototype={
D(){return"StrokeJoin."+this.b}}
A.yX.prototype={
D(){return"PaintingStyle."+this.b}}
A.nJ.prototype={
D(){return"BlendMode."+this.b}}
A.le.prototype={
D(){return"Clip."+this.b}}
A.Il.prototype={
D(){return"BlurStyle."+this.b}}
A.pw.prototype={
i(a,b){if(b==null)return!1
return b instanceof A.pw&&b.a===this.a&&b.b===this.b},
gq(a){return A.G(this.a,this.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
j(a){return"MaskFilter.blur("+this.a.j(0)+", "+B.c.P(this.b,1)+")"}}
A.L4.prototype={
D(){return"FilterQuality."+this.b}}
A.it.prototype={
al(a){return new A.it(this.a,this.b.X(0,a),this.c*a)},
i(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
return b instanceof A.it&&b.a.i(0,s.a)&&b.b.i(0,s.b)&&b.c===s.c},
gq(a){return A.G(this.a,this.b,this.c,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
j(a){return"TextShadow("+this.a.j(0)+", "+this.b.j(0)+", "+A.f(this.c)+")"}}
A.P6.prototype={}
A.hZ.prototype={
j(a){var s,r=A.u(this).j(0),q=this.a,p=A.co(q[2],0),o=q[1],n=A.co(o,0),m=q[4],l=A.co(m,0),k=A.co(q[3],0)
o=A.co(o,0)
s=q[0]
return r+"(buildDuration: "+(A.f((p.a-n.a)*0.001)+"ms")+", rasterDuration: "+(A.f((l.a-k.a)*0.001)+"ms")+", vsyncOverhead: "+(A.f((o.a-A.co(s,0).a)*0.001)+"ms")+", totalSpan: "+(A.f((A.co(m,0).a-A.co(s,0).a)*0.001)+"ms")+", layerCacheCount: "+q[6]+", layerCacheBytes: "+q[7]+", pictureCacheCount: "+q[8]+", pictureCacheBytes: "+q[9]+", frameNumber: "+B.b.gO(q)+")"}}
A.f_.prototype={
D(){return"AppLifecycleState."+this.b}}
A.nD.prototype={
D(){return"AppExitResponse."+this.b}}
A.ia.prototype={
gkz(){var s=this.a,r=B.ap.k(0,s)
return r==null?s:r},
goI(){var s=this.c,r=B.aA.k(0,s)
return r==null?s:r},
i(a,b){var s
if(b==null)return!1
if(this===b)return!0
if(b instanceof A.ia)if(b.gkz()===this.gkz())s=b.goI()==this.goI()
else s=!1
else s=!1
return s},
gq(a){return A.G(this.gkz(),null,this.goI(),B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
j(a){return this.P3("_")},
P3(a){var s=this.gkz()
if(this.c!=null)s+=a+A.f(this.goI())
return s.charCodeAt(0)==0?s:s}}
A.Jq.prototype={
D(){return"DartPerformanceMode."+this.b}}
A.m4.prototype={
j(a){return"SemanticsActionEvent("+this.a.j(0)+", view: "+this.b+", node: "+this.c+")"}}
A.h8.prototype={
D(){return"PointerChange."+this.b}}
A.fk.prototype={
D(){return"PointerDeviceKind."+this.b}}
A.lW.prototype={
D(){return"PointerSignalKind."+this.b}}
A.eC.prototype={
j(a){return"PointerData(x: "+A.f(this.x)+", y: "+A.f(this.y)+")"}}
A.ij.prototype={}
A.bD.prototype={
j(a){return"SemanticsAction."+this.b}}
A.bq.prototype={
j(a){return"SemanticsFlag."+this.b}}
A.Rk.prototype={}
A.ii.prototype={
D(){return"PlaceholderAlignment."+this.b}}
A.dY.prototype={
j(a){var s=B.AW.k(0,this.a)
s.toString
return s}}
A.fb.prototype={
i(a,b){if(b==null)return!1
if(J.I(b)!==A.u(this))return!1
return b instanceof A.fb&&b.a===this.a&&b.b===this.b},
gq(a){return A.G(this.a,this.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
j(a){return"FontVariation('"+this.a+"', "+A.f(this.b)+")"}}
A.jF.prototype={
i(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
return b instanceof A.jF&&s.a.i(0,b.a)&&s.b.i(0,b.b)&&s.c===b.c},
gq(a){return A.G(this.a,this.b,this.c,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
j(a){return"Glyph("+this.a.j(0)+", textRange: "+this.b.j(0)+", direction: "+this.c.j(0)+")"}}
A.hl.prototype={
D(){return"TextAlign."+this.b}}
A.rh.prototype={
D(){return"TextBaseline."+this.b}}
A.rk.prototype={
i(a,b){if(b==null)return!1
return b instanceof A.rk&&b.a===this.a},
gq(a){return B.f.gq(this.a)},
j(a){var s,r=this.a
if(r===0)return"TextDecoration.none"
s=A.a([],t.s)
if((r&1)!==0)s.push("underline")
if((r&2)!==0)s.push("overline")
if((r&4)!==0)s.push("lineThrough")
if(s.length===1)return"TextDecoration."+s[0]
return"TextDecoration.combine(["+B.b.bv(s,", ")+"])"}}
A.S7.prototype={
D(){return"TextDecorationStyle."+this.b}}
A.AJ.prototype={
D(){return"TextLeadingDistribution."+this.b}}
A.AG.prototype={
i(a,b){var s
if(b==null)return!1
if(J.I(b)!==A.u(this))return!1
if(b instanceof A.AG)s=b.c===this.c
else s=!1
return s},
gq(a){return A.G(!0,!0,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
j(a){return"TextHeightBehavior(applyHeightToFirstAscent: true, applyHeightToLastDescent: true, leadingDistribution: "+this.c.j(0)+")"}}
A.iu.prototype={
D(){return"TextDirection."+this.b}}
A.cP.prototype={
i(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.I(b)!==A.u(s))return!1
return b instanceof A.cP&&b.a===s.a&&b.b===s.b&&b.c===s.c&&b.d===s.d&&b.e===s.e},
gq(a){var s=this
return A.G(s.a,s.b,s.c,s.d,s.e,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
j(a){var s=this
return"TextBox.fromLTRBD("+B.c.P(s.a,1)+", "+B.c.P(s.b,1)+", "+B.c.P(s.c,1)+", "+B.c.P(s.d,1)+", "+s.e.j(0)+")"}}
A.S6.prototype={
D(){return"TextAffinity."+this.b}}
A.AL.prototype={
i(a,b){if(b==null)return!1
if(J.I(b)!==A.u(this))return!1
return b instanceof A.AL&&b.a===this.a&&!0},
gq(a){return A.G(this.a,B.bA,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
j(a){return A.u(this).j(0)+"(offset: "+this.a+", affinity: "+B.bA.j(0)+")"}}
A.dm.prototype={
giO(){return this.a>=0&&this.b>=0},
i(a,b){if(b==null)return!1
if(this===b)return!0
return b instanceof A.dm&&b.a===this.a&&b.b===this.b},
gq(a){return A.G(B.f.gq(this.a),B.f.gq(this.b),B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
j(a){return"TextRange(start: "+this.a+", end: "+this.b+")"}}
A.k2.prototype={
i(a,b){if(b==null)return!1
if(J.I(b)!==A.u(this))return!1
return b instanceof A.k2&&b.a===this.a},
gq(a){return B.c.gq(this.a)},
j(a){return A.u(this).j(0)+"(width: "+A.f(this.a)+")"}}
A.In.prototype={
D(){return"BoxHeightStyle."+this.b}}
A.Io.prototype={
D(){return"BoxWidthStyle."+this.b}}
A.AP.prototype={
D(){return"TileMode."+this.b}}
A.JU.prototype={}
A.vL.prototype={
D(){return"Brightness."+this.b}}
A.Iz.prototype={
i(a,b){if(b==null)return!1
return this===b},
gq(a){return A.B.prototype.gq.call(this,0)}}
A.xu.prototype={
i(a,b){var s
if(b==null)return!1
if(J.I(b)!==A.u(this))return!1
if(b instanceof A.xu)s=!0
else s=!1
return s},
gq(a){return A.G(null,null,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
j(a){return"GestureSettings(physicalTouchSlop: null, physicalDoubleTapSlop: null)"}}
A.I8.prototype={
n3(a){var s,r,q
if(A.kD(a).gDA())return A.Gx(B.eS,a,B.J,!1)
s=this.b
if(s==null){s=A.h(self.window.document,"querySelector",["meta[name=assetBase]"])
r=s==null?null:s.content
s=r==null
if(!s)A.h(self.window.console,"warn",["The `assetBase` meta tag is now deprecated.\nUse engineInitializer.initializeEngine(config) instead.\nSee: https://docs.flutter.dev/development/platform-integration/web/initialization"])
q=this.b=s?"":r
s=q}return A.Gx(B.eS,s+"assets/"+a,B.J,!1)}}
A.Ys.prototype={
$1(a){return this.Fm(a)},
$0(){return this.$1(null)},
$C:"$1",
$R:0,
$D(){return[null]},
Fm(a){var s=0,r=A.Q(t.H)
var $async$$1=A.R(function(b,c){if(b===1)return A.N(c,r)
while(true)switch(s){case 0:s=2
return A.W(A.YS(a),$async$$1)
case 2:return A.O(null,r)}})
return A.P($async$$1,r)},
$S:114}
A.Yt.prototype={
$0(){var s=0,r=A.Q(t.P),q=this
var $async$$0=A.R(function(a,b){if(a===1)return A.N(b,r)
while(true)switch(s){case 0:q.a.$0()
s=2
return A.W(A.a0Q(),$async$$0)
case 2:q.b.$0()
return A.O(null,r)}})
return A.P($async$$0,r)},
$S:43}
A.Ir.prototype={
wy(a){return $.a6k.bj(a,new A.Is(a))}}
A.Is.prototype={
$0(){return t.g.a(A.aU(this.a))},
$S:46}
A.Mi.prototype={
tR(a){var s=new A.Ml(a)
A.bo(self.window,"popstate",B.hi.wy(s),null)
return new A.Mk(this,s)},
FF(){var s=self.window.location.hash
if(s.length===0||s==="#")return"/"
return B.d.f7(s,1)},
wB(){return A.a2o(self.window.history)},
Ei(a){var s,r=a.length===0||a==="/"?"":"#"+a,q=self.window.location.pathname
if(q==null)q=null
q.toString
s=self.window.location.search
if(s==null)s=null
s.toString
return q+s+r},
Eu(a,b,c){var s=this.Ei(c),r=self.window.history,q=A.T(a)
if(q==null)q=t.K.a(q)
A.h(r,"pushState",[q,b,s])},
j1(a,b,c){var s,r=this.Ei(c),q=self.window.history
if(a==null)s=null
else{s=A.T(a)
if(s==null)s=t.K.a(s)}A.h(q,"replaceState",[s,b,r])},
n7(a){A.h(self.window.history,"go",[a])
return this.QC()},
QC(){var s=new A.af($.a6,t.D),r=A.bv("unsubscribe")
r.b=this.tR(new A.Mj(r,new A.bu(s,t.m)))
return s}}
A.Ml.prototype={
$1(a){var s=t.e.a(a).state
if(s==null)s=null
else{s=A.a0I(s)
s.toString}this.a.$1(s)},
$S:115}
A.Mk.prototype={
$0(){var s=this.b
A.dW(self.window,"popstate",B.hi.wy(s),null)
$.a6k.A(0,s)
return null},
$S:0}
A.Mj.prototype={
$1(a){this.a.aX().$0()
this.b.fg()},
$S:4}
A.wC.prototype={
dL(a,b){return J.d(a,b)}}
A.xY.prototype={
dL(a,b){var s,r,q,p,o
if(a===b)return!0
s=J.b4(a)
r=s.gv(a)
q=J.b4(b)
if(r!==q.gv(b))return!1
for(p=this.a,o=0;o<r;++o)if(!p.dL(s.k(a,o),q.k(b,o)))return!1
return!0}}
A.iU.prototype={
dL(a,b){var s,r,q,p,o
if(a===b)return!0
s=this.a
r=A.e_(s.gSI(),s.gU0(),s.gUJ(),A.q(this).h("iU.E"),t.S)
for(s=J.ao(a),q=0;s.p();){p=s.gB()
o=r.k(0,p)
r.l(0,p,(o==null?0:o)+1);++q}for(s=J.ao(b);s.p();){p=s.gB()
o=r.k(0,p)
if(o==null||o===0)return!1
r.l(0,p,o-1);--q}return q===0},
eW(a){var s,r,q
for(s=J.ao(a),r=this.a,q=0;s.p();)q=q+r.eW(s.gB())&2147483647
q=q+(q<<3>>>0)&2147483647
q^=q>>>11
return q+(q<<15>>>0)&2147483647}}
A.mv.prototype={}
A.m6.prototype={}
A.mU.prototype={
gq(a){var s=this.a
return 3*s.a.eW(this.b)+7*s.b.eW(this.c)&2147483647},
i(a,b){var s
if(b==null)return!1
if(b instanceof A.mU){s=this.a
s=s.a.dL(this.b,b.b)&&s.b.dL(this.c,b.c)}else s=!1
return s}}
A.pu.prototype={
dL(a,b){var s,r,q,p,o
if(a===b)return!0
if(a.gv(a)!==b.gv(b))return!1
s=A.e_(null,null,null,t.pJ,t.S)
for(r=a.gb1(),r=r.gK(r);r.p();){q=r.gB()
p=new A.mU(this,q,a.k(0,q))
o=s.k(0,p)
s.l(0,p,(o==null?0:o)+1)}for(r=b.gb1(),r=r.gK(r);r.p();){q=r.gB()
p=new A.mU(this,q,b.k(0,q))
o=s.k(0,p)
if(o==null||o===0)return!1
s.l(0,p,o-1)}return!0},
eW(a){var s,r,q,p,o,n,m,l
for(s=a.gb1(),s=s.gK(s),r=this.a,q=this.b,p=this.$ti.y[1],o=0;s.p();){n=s.gB()
m=r.eW(n)
l=a.k(0,n)
o=o+3*m+7*q.eW(l==null?p.a(l):l)&2147483647}o=o+(o<<3>>>0)&2147483647
o^=o>>>11
return o+(o<<15>>>0)&2147483647}}
A.wA.prototype={
dL(a,b){var s,r=this,q=t.io
if(q.b(a))return q.b(b)&&new A.m6(r,t.iq).dL(a,b)
q=t.f
if(q.b(a))return q.b(b)&&new A.pu(r,r,t.Ec).dL(a,b)
q=t.eT
if(q.b(a)){s=t.j
if(s.b(a)!==s.b(b))return!1
return q.b(b)&&new A.mv(r,t.AF).dL(a,b)}return J.d(a,b)},
eW(a){var s=this
if(t.io.b(a))return new A.m6(s,t.iq).eW(a)
if(t.f.b(a))return new A.pu(s,s,t.Ec).eW(a)
if(t.eT.b(a))return new A.mv(s,t.AF).eW(a)
return J.l(a)},
UK(a){return!0}}
A.xy.prototype={
nA(a){var s=this.b[a]
if(s==null){this.$ti.c.a(null)
s=null}return s},
gv(a){return this.c},
j(a){var s=this.b
return A.a3c(A.dl(s,0,A.dR(this.c,"count",t.S),A.X(s).c),"(",")")},
JP(a,b){var s,r,q,p,o,n,m,l,k,j=this,i=b*2+2
for(s=j.a,r=j.$ti.c;q=j.c,i<q;b=l){p=i-1
q=j.b
o=q[p]
if(o==null){r.a(null)
o=null}n=q[i]
if(n==null){r.a(null)
n=null}if(s.$2(o,n)<0){m=o
l=p}else{m=n
l=i}if(s.$2(a,m)<=0){j.b[b]=a
return}j.b[b]=m
i=l*2+2}p=i-1
if(p<q){k=j.nA(p)
if(s.$2(a,k)>0){j.b[b]=k
b=p}}j.b[b]=a}}
A.eZ.prototype={
D(){return"AnimationStatus."+this.b}}
A.bI.prototype={
j(a){return"<optimized out>#"+A.b9(this)+"("+this.q5()+")"},
q5(){switch(this.gam().a){case 1:var s="\u25b6"
break
case 2:s="\u25c0"
break
case 3:s="\u23ed"
break
case 0:s="\u23ee"
break
default:s=null}return s}}
A.Bl.prototype={
D(){return"_AnimationDirection."+this.b}}
A.I_.prototype={
D(){return"AnimationBehavior."+this.b}}
A.nv.prototype={
gn(){var s=this.x
s===$&&A.c()
return s},
sn(a){var s=this
s.jj()
s.zs(a)
s.aL()
s.nv()},
zs(a){var s=this,r=s.x=A.V(a,0,1)
if(r===0)s.Q=B.B
else if(r===1)s.Q=B.T
else s.Q=s.z===B.aD?B.aF:B.af},
gam(){var s=this.Q
s===$&&A.c()
return s},
T6(a){this.z=B.aD
if(a!=null)this.sn(a)
return this.xN(1)},
cU(){return this.T6(null)},
EP(a){this.z=B.fZ
return this.xN(0)},
kJ(){return this.EP(null)},
l7(a,b,c){var s,r,q,p,o,n=this,m=$.a_L.D6$
m===$&&A.c()
if((m.a&4)!==0){switch(0){case 0:break}s=0.05}else s=1
if(c==null){if(isFinite(1)){m=n.x
m===$&&A.c()
r=Math.abs(a-m)/1}else r=1
if(n.z===B.fZ&&n.f!=null){m=n.f
m.toString
q=m}else{m=n.e
m.toString
q=m}p=new A.aS(B.c.bx(q.a*r))}else{m=n.x
m===$&&A.c()
p=a===m?B.t:c}n.jj()
m=p.a
if(m===B.t.a){m=n.x
m===$&&A.c()
if(m!==a){n.x=A.V(a,0,1)
n.aL()}n.Q=n.z===B.aD?B.T:B.B
n.nv()
return A.a_Z()}o=n.x
o===$&&A.c()
return n.Q1(new A.Vz(m*s/1e6,o,a,b,B.IJ))},
xN(a){return this.l7(a,B.ag,null)},
Q1(a){var s,r,q,p=this
p.w=a
p.x=A.V(a.Ff(0),0,1)
s=p.r
s.a=new A.kx(new A.bu(new A.af($.a6,t.D),t.m))
if(!s.b)r=s.e==null
else r=!1
if(r){r=$.cr
r.toString
s.e=r.na(s.gtv(),!1)}r=$.cr
q=r.rx$.a
if(q>0&&q<4){r=r.y1$
r.toString
s.c=r}s=s.a
s.toString
p.Q=p.z===B.aD?B.aF:B.af
p.nv()
return s},
nl(a){this.w=null
this.r.nl(a)},
jj(){return this.nl(!0)},
m(){var s=this
s.r.m()
s.r=null
s.bD$.F(0)
s.bU$.F(0)
s.qC()},
nv(){var s=this,r=s.Q
r===$&&A.c()
if(s.as!==r){s.as=r
s.mF(r)}},
JG(a){var s=this,r=a.a/1e6
s.x=A.V(s.w.Ff(r),0,1)
if(s.w.UD(r)){s.Q=s.z===B.aD?B.T:B.B
s.nl(!1)}s.aL()
s.nv()},
q5(){var s,r=this.r,q=r==null,p=!q&&r.a!=null?"":"; paused"
if(q)s="; DISPOSED"
else s=r.b?"; silenced":""
r=this.qB()
q=this.x
q===$&&A.c()
return r+" "+B.c.P(q,3)+p+s}}
A.Vz.prototype={
Ff(a){var s,r,q=this,p=A.V(a/q.b,0,1)
if(p===0)return q.c
else{s=q.d
if(p===1)return s
else{r=q.c
return r+(s-r)*q.e.a0(p)}}},
UD(a){return a>this.b}}
A.Bi.prototype={}
A.Bj.prototype={}
A.Bk.prototype={}
A.vu.prototype={
i(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(J.I(b)!==A.u(r))return!1
if(b instanceof A.vu){s=b.b
if(s.a===r.b.a){s=b.d
s=s.a===r.d.a}else s=!1}else s=!1
return s},
gq(a){return A.G(null,this.b,null,this.d,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)}}
A.Bm.prototype={}
A.Bd.prototype={
a6(a){},
M(a){},
dk(a){},
bY(a){},
gam(){return B.T},
gn(){return 1},
j(a){return"kAlwaysCompleteAnimation"}}
A.Be.prototype={
a6(a){},
M(a){},
dk(a){},
bY(a){},
gam(){return B.B},
gn(){return 0},
j(a){return"kAlwaysDismissedAnimation"}}
A.nz.prototype={
a6(a){return this.gbP().a6(a)},
M(a){return this.gbP().M(a)},
dk(a){return this.gbP().dk(a)},
bY(a){return this.gbP().bY(a)},
gam(){return this.gbP().gam()}}
A.qj.prototype={
sbP(a){var s,r=this,q=r.c
if(a==q)return
if(q!=null){r.a=q.gam()
r.b=r.c.gn()
if(r.hI$>0)r.oQ()}r.c=a
if(a!=null){if(r.hI$>0)r.oP()
q=r.b
s=r.c.gn()
if(q==null?s!=null:q!==s)r.aL()
if(r.a!==r.c.gam())r.mF(r.c.gam())
r.b=r.a=null}},
oP(){var s=this,r=s.c
if(r!=null){r.a6(s.gh8())
s.c.dk(s.gE5())}},
oQ(){var s=this,r=s.c
if(r!=null){r.M(s.gh8())
s.c.bY(s.gE5())}},
gam(){var s=this.c
if(s!=null)s=s.gam()
else{s=this.a
s.toString}return s},
gn(){var s=this.c
if(s!=null)s=s.gn()
else{s=this.b
s.toString}return s},
j(a){var s=this.c
if(s==null)return"ProxyAnimation(null; "+this.qB()+" "+B.c.P(this.gn(),3)+")"
return s.j(0)+"\u27a9ProxyAnimation"}}
A.eG.prototype={
a6(a){this.b7()
this.a.a6(a)},
M(a){this.a.M(a)
this.hF()},
oP(){this.a.dk(this.gjN())},
oQ(){this.a.bY(this.gjN())},
od(a){this.mF(this.Ak(a))},
gam(){return this.Ak(this.a.gam())},
gn(){return 1-this.a.gn()},
Ak(a){var s
switch(a.a){case 1:s=B.af
break
case 2:s=B.aF
break
case 3:s=B.B
break
case 0:s=B.T
break
default:s=null}return s},
j(a){return this.a.j(0)+"\u27aaReverseAnimation"}}
A.o5.prototype={
Bf(a){var s=this
switch(a.a){case 0:case 3:s.d=null
break
case 1:if(s.d==null)s.d=B.aF
break
case 2:if(s.d==null)s.d=B.af
break}},
gBu(){if(this.c!=null){var s=this.d
s=(s==null?this.a.gam():s)!==B.af}else s=!0
return s},
m(){this.a.bY(this.gBe())},
gn(){var s=this,r=s.gBu()?s.b:s.c,q=s.a.gn()
if(r==null)return q
if(q===0||q===1)return q
return r.a0(q)},
j(a){var s=this,r=s.c
if(r==null)return s.a.j(0)+"\u27a9"+s.b.j(0)
if(s.gBu())return s.a.j(0)+"\u27a9"+s.b.j(0)+"\u2092\u2099/"+r.j(0)
return s.a.j(0)+"\u27a9"+s.b.j(0)+"/"+r.j(0)+"\u2092\u2099"},
gbP(){return this.a}}
A.Ga.prototype={
D(){return"_TrainHoppingMode."+this.b}}
A.kz.prototype={
od(a){if(a!==this.e){this.aL()
this.e=a}},
gam(){return this.a.gam()},
QB(){var s,r,q=this,p=q.b
if(p!=null){switch(q.c.a){case 0:s=p.gn()<=q.a.gn()
break
case 1:s=p.gn()>=q.a.gn()
break
default:s=!1}if(s){p=q.a
r=q.gjN()
p.bY(r)
p.M(q.gtH())
p=q.b
q.a=p
q.b=null
p.dk(r)
q.od(q.a.gam())}}else s=!1
p=q.a.gn()
if(p!==q.f){q.aL()
q.f=p}if(s&&q.d!=null)q.d.$0()},
gn(){return this.a.gn()},
m(){var s,r,q=this
q.a.bY(q.gjN())
s=q.gtH()
q.a.M(s)
q.a=null
r=q.b
if(r!=null)r.M(s)
q.b=null
q.bU$.F(0)
q.bD$.F(0)
q.qC()},
j(a){var s=this
if(s.b!=null)return A.f(s.a)+"\u27a9TrainHoppingAnimation(next: "+A.f(s.b)+")"
return A.f(s.a)+"\u27a9TrainHoppingAnimation(no next)"}}
A.lh.prototype={
oP(){var s,r=this,q=r.a,p=r.gzH()
q.a6(p)
s=r.gzI()
q.dk(s)
q=r.b
q.a6(p)
q.dk(s)},
oQ(){var s,r=this,q=r.a,p=r.gzH()
q.M(p)
s=r.gzI()
q.bY(s)
q=r.b
q.M(p)
q.bY(s)},
gam(){var s=this.b
if(s.gam()===B.aF||s.gam()===B.af)return s.gam()
return this.a.gam()},
j(a){return"CompoundAnimation("+this.a.j(0)+", "+this.b.j(0)+")"},
O_(a){var s=this
if(s.gam()!==s.c){s.c=s.gam()
s.mF(s.gam())}},
NZ(){var s=this
if(!J.d(s.gn(),s.d)){s.d=s.gn()
s.aL()}}}
A.ny.prototype={
gn(){var s=this.a.gn(),r=this.b.gn()
return Math.min(A.v7(s),A.v7(r))}}
A.rW.prototype={}
A.rX.prototype={}
A.rY.prototype={}
A.C7.prototype={}
A.EI.prototype={}
A.EJ.prototype={}
A.EK.prototype={}
A.Fh.prototype={}
A.Fi.prototype={}
A.G7.prototype={}
A.G8.prototype={}
A.G9.prototype={}
A.q6.prototype={
a0(a){return this.j4(a)},
j4(a){throw A.e(A.c7(null))},
j(a){return"ParametricCurve"}}
A.dx.prototype={
a0(a){if(a===0||a===1)return a
return this.Hn(a)}}
A.ts.prototype={
j4(a){return a}}
A.fe.prototype={
j4(a){var s=this.a
a=A.V((a-s)/(this.b-s),0,1)
if(a===0||a===1)return a
return this.c.a0(a)},
j(a){var s=this,r=s.c
if(!(r instanceof A.ts))return"Interval("+A.f(s.a)+"\u22ef"+A.f(s.b)+")\u27a9"+r.j(0)
return"Interval("+A.f(s.a)+"\u22ef"+A.f(s.b)+")"}}
A.AO.prototype={
j4(a){return a<0.5?0:1}}
A.da.prototype={
yP(a,b,c){var s=1-c
return 3*a*s*s*c+3*b*s*c*c+c*c*c},
j4(a){var s,r,q,p,o,n,m=this
for(s=m.a,r=m.c,q=0,p=1;!0;){o=(q+p)/2
n=m.yP(s,r,o)
if(Math.abs(a-n)<0.001)return m.yP(m.b,m.d,o)
if(n<a)q=o
else p=o}},
j(a){var s=this
return"Cubic("+B.c.P(s.a,2)+", "+B.c.P(s.b,2)+", "+B.c.P(s.c,2)+", "+B.c.P(s.d,2)+")"}}
A.AN.prototype={
j4(a){var s=a<0.198,r=s?0.198:0.802,q=s?0.541:0.45899999999999996,p=(a-(s?0:0.198))/r
if(s)return new A.da(0.056/r,0.024/q,0.108/r,0.3085/q).a0(p)*q
else return new A.da(0.16749999999999998/r,0.45899999999999996/q,0.3485/r,0.44799999999999995/q).a0(p)*q+0.541},
j(a){return"ThreePointCubic("+B.BQ.j(0)+", "+B.BL.j(0)+", "+B.BR.j(0)+", "+B.BN.j(0)+", "+B.BO.j(0)+") "}}
A.lr.prototype={
j4(a){return 1-this.a.a0(1-a)},
j(a){return"FlippedCurve("+this.a.j(0)+")"}}
A.nx.prototype={
b7(){if(this.hI$===0)this.oP();++this.hI$},
hF(){if(--this.hI$===0)this.oQ()}}
A.nw.prototype={
b7(){},
hF(){},
m(){}}
A.j6.prototype={
a6(a){var s
this.b7()
s=this.bU$
s.b=!0
s.a.push(a)},
M(a){if(this.bU$.A(0,a))this.hF()},
aL(){var s,r,q,p,o,n,m,l,k=this.bU$,j=k.a,i=J.lH(j.slice(0),A.X(j).c)
for(j=i.length,p=0;p<i.length;i.length===j||(0,A.C)(i),++p){o={}
s=i[p]
o.a=null
try{if(k.t(0,s))s.$0()}catch(n){r=A.ah(n)
q=A.aI(n)
m=A.bb("while notifying listeners for "+A.u(this).j(0))
o=o.a
l=$.eW()
if(l!=null)l.$1(new A.bm(r,q,"animation library",m,o,!1))}}}}
A.hP.prototype={
dk(a){var s
this.b7()
s=this.bD$
s.b=!0
s.a.push(a)},
bY(a){if(this.bD$.A(0,a))this.hF()},
mF(a){var s,r,q,p,o,n,m,l=this.bD$,k=l.a,j=J.lH(k.slice(0),A.X(k).c)
for(k=j.length,p=0;p<j.length;j.length===k||(0,A.C)(j),++p){s=j[p]
try{if(l.t(0,s))s.$1(a)}catch(o){r=A.ah(o)
q=A.aI(o)
n=A.bb("while notifying status listeners for "+A.u(this).j(0))
m=$.eW()
if(m!=null)m.$1(new A.bm(r,q,"animation library",n,null,!1))}}}}
A.aj.prototype={
ff(a){return new A.eQ(a,this,A.q(this).h("eQ<aj.T>"))}}
A.aL.prototype={
gn(){return this.b.a0(this.a.gn())},
j(a){var s=this.a,r=this.b
return s.j(0)+"\u27a9"+r.j(0)+"\u27a9"+A.f(r.a0(s.gn()))},
q5(){return this.qB()+" "+this.b.j(0)},
gbP(){return this.a}}
A.eQ.prototype={
a0(a){return this.b.a0(this.a.a0(a))},
j(a){return this.a.j(0)+"\u27a9"+this.b.j(0)}}
A.ax.prototype={
cX(a){var s=this.a
return A.q(this).h("ax.T").a(J.a9q(s,J.a9r(J.a9s(this.b,s),a)))},
a0(a){var s,r=this
if(a===0){s=r.a
return s==null?A.q(r).h("ax.T").a(s):s}if(a===1){s=r.b
return s==null?A.q(r).h("ax.T").a(s):s}return r.cX(a)},
j(a){return"Animatable("+A.f(this.a)+" \u2192 "+A.f(this.b)+")"},
su_(a){return this.a=a},
ske(a){return this.b=a}}
A.qK.prototype={
cX(a){return this.c.cX(1-a)}}
A.f3.prototype={
cX(a){return A.n(this.a,this.b,a)}}
A.qt.prototype={
cX(a){return A.adp(this.a,this.b,a)}}
A.i2.prototype={
cX(a){var s,r=this.a
r.toString
s=this.b
s.toString
return B.c.bx(r+(s-r)*a)}}
A.fK.prototype={
a0(a){if(a===0||a===1)return a
return this.a.a0(a)},
j(a){return"CurveTween(curve: "+this.a.j(0)+")"}}
A.uL.prototype={}
A.rA.prototype={
Jq(a,b){var s,r,q,p,o,n,m,l=this.a
B.b.G(l,a)
for(s=l.length,r=0,q=0;q<s;++q)r+=l[q].b
for(s=this.b,p=0,o=0;n=l.length,o<n;++o,p=m){m=o===n-1?1:p+l[o].b/r
s.push(new A.Df(p,m))}},
Lp(a,b){var s=this.a[b],r=this.b[b],q=r.a
return s.a.a0((a-q)/(r.b-q))},
a0(a){var s,r,q,p,o,n,m=this
if(a===1)return m.Lp(a,m.a.length-1)
for(s=m.a,r=s.length,q=m.b,p=0;p<r;++p){o=q[p]
n=o.a
if(a>=n&&a<o.b)return s[p].a.a0((a-n)/(o.b-n))}throw A.e(A.az("TweenSequence.evaluate() could not find an interval for "+A.f(a)))},
j(a){return"TweenSequence("+this.a.length+" items)"}}
A.mr.prototype={}
A.Df.prototype={
j(a){return"<"+A.f(this.a)+", "+A.f(this.b)+">"}}
A.em.prototype={
gn(){return this.b.a},
gll(){var s=this
return!s.e.i(0,s.f)||!s.x.i(0,s.y)||!s.r.i(0,s.w)||!s.z.i(0,s.Q)},
glj(){var s=this
return!s.e.i(0,s.r)||!s.f.i(0,s.w)||!s.x.i(0,s.z)||!s.y.i(0,s.Q)},
glk(){var s=this
return!s.e.i(0,s.x)||!s.f.i(0,s.y)||!s.r.i(0,s.z)||!s.w.i(0,s.Q)},
Wb(a){var s,r,q,p,o,n=this,m=null
if(n.gll()){s=a.aa(t.by)
r=s==null?m:s.f.c.glN()
if(r==null){r=A.di(a,B.tX)
r=r==null?m:r.e
q=r}else q=r
if(q==null)q=B.L}else q=B.L
if(n.glj()){r=A.di(a,B.tU)
r=r==null?m:r.as
p=r===!0}else p=!1
if(n.glk())A.aat(a)
switch(q.a){case 1:switch(0){case 0:o=p?n.r:n.e
break}break
case 0:switch(0){case 0:o=p?n.w:n.f
break}break
default:o=m}return new A.em(o,n.c,m,n.e,n.f,n.r,n.w,n.x,n.y,n.z,n.Q,0)},
i(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.I(b)!==A.u(s))return!1
return b instanceof A.em&&b.b.a===s.b.a&&b.e.i(0,s.e)&&b.f.i(0,s.f)&&b.r.i(0,s.r)&&b.w.i(0,s.w)&&b.x.i(0,s.x)&&b.y.i(0,s.y)&&b.z.i(0,s.z)&&b.Q.i(0,s.Q)},
gq(a){var s=this
return A.G(s.b.a,s.e,s.f,s.r,s.x,s.y,s.w,s.Q,s.z,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
j(a){var s=this,r=new A.Ji(s),q=A.a([r.$2("color",s.e)],t.s)
if(s.gll())q.push(r.$2("darkColor",s.f))
if(s.glj())q.push(r.$2("highContrastColor",s.r))
if(s.gll()&&s.glj())q.push(r.$2("darkHighContrastColor",s.w))
if(s.glk())q.push(r.$2("elevatedColor",s.x))
if(s.gll()&&s.glk())q.push(r.$2("darkElevatedColor",s.y))
if(s.glj()&&s.glk())q.push(r.$2("highContrastElevatedColor",s.z))
if(s.gll()&&s.glj()&&s.glk())q.push(r.$2("darkHighContrastElevatedColor",s.Q))
r=s.c
if(r==null)r="CupertinoDynamicColor"
q=B.b.bv(q,", ")
return r+"("+q+", resolved by: UNRESOLVED)"}}
A.Ji.prototype={
$2(a,b){var s=b.i(0,this.a.b)?"*":""
return s+a+" = "+b.j(0)+s},
$S:110}
A.C2.prototype={}
A.wn.prototype={
U(a){var s=this.f,r=A.aap(s,a)
return J.d(r,s)?this:this.fj(r)},
lW(a,b,c,d,e,f,g,h,i){var s=this,r=h==null?s.a:h,q=c==null?s.b:c,p=i==null?s.c:i,o=d==null?s.d:d,n=f==null?s.e:f,m=b==null?s.f:b,l=e==null?s.gd6():e,k=g==null?s.w:g
return A.a20(a==null?s.x:a,m,q,o,l,n,k,r,p)},
fj(a){var s=null
return this.lW(s,a,s,s,s,s,s,s,s)}}
A.C3.prototype={}
A.C4.prototype={
v0(a){return a.gkz()==="en"},
hX(a){return new A.c_(B.ux,t.yK)},
qt(a){return!1},
j(a){return"DefaultCupertinoLocalizations.delegate(en_US)"}}
A.wB.prototype={$iJj:1}
A.Jk.prototype={
$0(){return A.aaq(this.a)},
$S:84}
A.Jl.prototype={
$0(){var s=this.a,r=s.a
r.toString
s=s.ay
s.toString
r.Sn()
return new A.t1(s,r)},
$S(){return this.b.h("t1<0>()")}}
A.wo.prototype={
N(a){var s,r=this,q=a.aa(t.I)
q.toString
s=q.w
q=r.e
return A.a4A(A.a4A(new A.wx(q,r.f,q,null),r.c,s,!0),r.d,s,!1)}}
A.mE.prototype={
ao(){return new A.mF(B.p,this.$ti.h("mF<1>"))},
Sz(){return this.d.$0()},
Vt(){return this.e.$0()}}
A.mF.prototype={
aZ(){var s,r=this
r.bl()
s=A.a30(r,null)
s.ch=r.gMt()
s.CW=r.gMv()
s.cx=r.gMr()
s.cy=r.gMp()
r.e=s},
m(){var s=this,r=s.e
r===$&&A.c()
r.p1.F(0)
r.l0()
if(s.d!=null)$.b_.p4$.push(new A.Ui(s))
s.aW()},
Mu(a){this.d=this.a.Vt()},
Mw(a){var s,r,q=this.d
q.toString
s=a.c
s.toString
s=this.yu(s/this.c.gH().a)
q=q.a
r=q.x
r===$&&A.c()
q.sn(r-s)},
Ms(a){var s=this,r=s.d
r.toString
r.CQ(s.yu(a.a.a.a/s.c.gH().a))
s.d=null},
Mq(){var s=this.d
if(s!=null)s.CQ(0)
this.d=null},
Pu(a){var s
if(this.a.Sz()){s=this.e
s===$&&A.c()
s.BJ(a)}},
yu(a){var s=this.c.aa(t.I)
s.toString
switch(s.w.a){case 0:return-a
case 1:return a}},
N(a){var s,r,q=null,p=a.aa(t.I)
p.toString
s=t.w
r=p.w===B.o?A.d1(a,B.cz,s).w.r.a:A.d1(a,B.cz,s).w.r.c
r=Math.max(r,20)
return A.a_R(B.ha,A.a([this.a.c,new A.zc(0,0,0,r,A.NE(B.bX,q,q,this.gPt(),q,q),q)],t.nA),B.Eh)}}
A.Ui.prototype={
$1(a){var s=this.a,r=s.d,q=r==null,p=q?null:r.b.c!=null
if(p===!0)if(!q)r.b.m6()
s.d=null},
$S:3}
A.t1.prototype={
CQ(a){var s,r,q,p,o=this
if(Math.abs(a)>=1)s=a<=0
else{r=o.a.x
r===$&&A.c()
s=r>0.5}if(s){r=o.a
q=r.x
q===$&&A.c()
q=A.F(800,0,q)
q.toString
q=A.co(0,Math.min(B.c.cT(q),300))
r.z=B.aD
r.l7(1,B.ik,q)}else{o.b.es()
r=o.a
q=r.r
if(q!=null&&q.a!=null){q=r.x
q===$&&A.c()
q=A.F(0,800,q)
q.toString
q=A.co(0,B.c.cT(q))
r.z=B.fZ
r.l7(0,B.ik,q)}}q=r.r
if(q!=null&&q.a!=null){p=A.bv("animationStatusCallback")
p.b=new A.Uh(o,p)
q=p.aX()
r.b7()
r=r.bD$
r.b=!0
r.a.push(q)}else o.b.m6()}}
A.Uh.prototype={
$1(a){var s=this.a
s.b.m6()
s.a.bY(this.b.aX())},
$S:2}
A.eR.prototype={
bW(a,b){var s
if(a instanceof A.eR){s=A.Uj(a,this,b)
s.toString
return s}s=A.Uj(null,this,b)
s.toString
return s},
bX(a,b){var s
if(a instanceof A.eR){s=A.Uj(this,a,b)
s.toString
return s}s=A.Uj(this,null,b)
s.toString
return s},
Cr(a){return new A.Um(this,a)},
i(a,b){var s,r
if(b==null)return!1
if(J.I(b)!==A.u(this))return!1
if(b instanceof A.eR){s=b.a
r=this.a
r=s==null?r==null:s===r
s=r}else s=!1
return s},
gq(a){return J.l(this.a)}}
A.Uk.prototype={
$1(a){var s=A.n(null,a,this.a)
s.toString
return s},
$S:65}
A.Ul.prototype={
$1(a){var s=A.n(null,a,1-this.a)
s.toString
return s},
$S:65}
A.Um.prototype={
vC(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=this.b.a
if(h==null)return
s=c.e
r=s.a
q=0.05*r
p=s.b
o=q/(h.length-1)
switch(c.d.a){case 0:n=b.a+r
m=1
break
case 1:n=b.a
m=-1
break
default:n=null
m=null}for(s=b.b,r=s+p,l=0,k=0;k<q;++k){if(B.f.js(k,o)!==l)++l
j=$.ai().bb()
i=A.n(h[l],h[l+1],B.f.bS(k,o)/o)
i.toString
j.saf(i)
i=n+m*k-1
a.cf(new A.D(i,s,i+1,r),j)}}}
A.wq.prototype={
i(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(J.I(b)!==A.u(r))return!1
if(b instanceof A.wq)if(b.a.i(0,r.a))if(b.b.i(0,r.b))s=!0
else s=!1
else s=!1
else s=!1
return s},
gq(a){var s=this
return A.G(s.a,s.b,s.c,s.d,s.e,s.f,s.r,s.w,s.x,s.y,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)}}
A.FY.prototype={
i(a,b){if(b==null)return!1
if(this===b)return!0
if(J.I(b)!==A.u(this))return!1
return b instanceof A.FY&&B.cL.i(0,B.cL)&&B.cK.i(0,B.cK)},
gq(a){return A.G(B.cL,B.cK,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)}}
A.C5.prototype={}
A.wr.prototype={
N(a){var s=null
return new A.tm(this,A.a_f(this.d,A.a20(s,this.c.gkF(),s,s,s,s,s,s,s),s),s)}}
A.tm.prototype={
bq(a){return!this.f.c.i(0,a.f.c)}}
A.o4.prototype={
gkF(){var s=this.b
return s==null?B.wP:s},
gpR(){var s=this.c
return s==null?B.im:s},
gw2(){var s=null,r=this.d
return r==null?new A.Ut(B.cL,B.cK,B.vH,this.gkF(),s,s,s,s,s,s,s,s):r},
gtZ(){var s=this.e
return s==null?B.wQ:s},
gn8(){var s=this.f
return s==null?B.im:s},
gtX(){var s=this.r
return s==null?!1:s},
i(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(J.I(b)!==A.u(r))return!1
if(b instanceof A.o4)if(b.glN()==r.glN())if(b.gkF().i(0,r.gkF()))if(b.gpR().i(0,r.gpR()))if(b.gw2().i(0,r.gw2()))if(b.gtZ().i(0,r.gtZ()))if(b.gn8().i(0,r.gn8())){b.gtX()
r.gtX()
s=!0}else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
return s},
gq(a){var s=this,r=s.glN(),q=s.gkF(),p=s.gpR(),o=s.gw2(),n=s.gtZ(),m=s.gn8()
s.gtX()
return A.G(r,q,p,o,n,m,!1,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)}}
A.yu.prototype={
glN(){return this.a}}
A.Uo.prototype={}
A.Un.prototype={}
A.Ut.prototype={}
A.C6.prototype={}
A.Yo.prototype={
$0(){return null},
$S:128}
A.XN.prototype={
$0(){var s=self,r=s.window.navigator.platform.toLowerCase()
if(B.d.bK(r,"mac"))return B.aN
if(B.d.bK(r,"win"))return B.ba
if(B.d.t(r,"iphone")||B.d.t(r,"ipad")||B.d.t(r,"ipod"))return B.at
if(B.d.t(r,"android"))return B.al
if(s.window.matchMedia("only screen and (pointer: fine)").matches)return B.b9
return B.al},
$S:129}
A.iE.prototype={
mW(a,b){var s=A.db.prototype.gn.call(this)
s.toString
return J.a1x(s)},
j(a){return this.mW(0,B.a3)}}
A.lp.prototype={}
A.x7.prototype={}
A.x6.prototype={}
A.bm.prototype={
SL(){var s,r,q,p,o,n,m,l=this.a
if(t.hK.b(l)){s=l.gE1()
r=l.j(0)
if(typeof s=="string"&&s!==r){q=r.length
p=J.b4(s)
if(q>p.gv(s)){o=B.d.v5(r,s)
if(o===q-p.gv(s)&&o>2&&B.d.a7(r,o-2,o)===": "){n=B.d.a7(r,0,o-2)
m=B.d.hT(n," Failed assertion:")
if(m>=0)n=B.d.a7(n,0,m)+"\n"+B.d.f7(n,m+1)
l=p.w9(s)+"\n"+n}else l=null}else l=null}else l=null
if(l==null)l=r}else if(!(typeof l=="string"))l=t.yt.b(l)||t.A2.b(l)?J.cY(l):"  "+A.f(l)
l=B.d.w9(l)
return l.length===0?"  <no message available>":l},
gGy(){return A.aaH(new A.Ll(this).$0(),!0,B.ez)},
bB(){return"Exception caught by "+this.c},
j(a){A.aeY(null,B.x3,this)
return""}}
A.Ll.prototype={
$0(){return J.a9G(this.a.SL().split("\n")[0])},
$S:27}
A.lt.prototype={
gE1(){return this.j(0)},
bB(){return"FlutterError"},
j(a){var s,r=new A.hr(this.a,t.dw)
if(!r.gL(0)){s=r.gJ(0)
s=A.db.prototype.gn.call(s)
s.toString
s=J.a1x(s)}else s="FlutterError"
return s},
$ij7:1}
A.Lm.prototype={
$1(a){return A.bb(a)},
$S:130}
A.Ln.prototype={
$1(a){return a+1},
$S:49}
A.Lo.prototype={
$1(a){return a+1},
$S:49}
A.Yz.prototype={
$1(a){return B.d.t(a,"StackTrace.current")||B.d.t(a,"dart-sdk/lib/_internal")||B.d.t(a,"dart:sdk_internal")},
$S:39}
A.CJ.prototype={}
A.CL.prototype={}
A.CK.prototype={}
A.vE.prototype={
d3(){},
iK(){},
UY(a){var s;++this.c
s=a.$0()
s.j6(new A.Ii(this))
return s},
wb(){},
j(a){return"<BindingBase>"}}
A.Ii.prototype={
$0(){var s,r,q,p=this.a
if(--p.c<=0)try{p.IS()
if(p.k3$.c!==0)p.yM()}catch(q){s=A.ah(q)
r=A.aI(q)
p=A.bb("while handling pending events")
A.d_(new A.bm(s,r,"foundation",p,null,!1))}},
$S:41}
A.ad.prototype={}
A.dT.prototype={
a6(a){var s,r,q,p,o=this
if(o.gbG()===o.gba().length){s=t.xR
if(o.gbG()===0)o.sba(A.aZ(1,null,!1,s))
else{r=A.aZ(o.gba().length*2,null,!1,s)
for(q=0;q<o.gbG();++q)r[q]=o.gba()[q]
o.sba(r)}}s=o.gba()
p=o.gbG()
o.sbG(p+1)
s[p]=a},
th(a){var s,r,q,p=this
p.sbG(p.gbG()-1)
if(p.gbG()*2<=p.gba().length){s=A.aZ(p.gbG(),null,!1,t.xR)
for(r=0;r<a;++r)s[r]=p.gba()[r]
for(r=a;r<p.gbG();r=q){q=r+1
s[r]=p.gba()[q]}p.sba(s)}else{for(r=a;r<p.gbG();r=q){q=r+1
p.gba()[r]=p.gba()[q]}p.gba()[p.gbG()]=null}},
M(a){var s,r=this
for(s=0;s<r.gbG();++s)if(J.d(r.gba()[s],a)){if(r.geG()>0){r.gba()[s]=null
r.sf8(r.gf8()+1)}else r.th(s)
break}},
m(){this.sba($.aD())
this.sbG(0)},
aL(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
if(f.gbG()===0)return
f.seG(f.geG()+1)
p=f.gbG()
for(s=0;s<p;++s)try{o=f.gba()[s]
if(o!=null)o.$0()}catch(n){r=A.ah(n)
q=A.aI(n)
o=A.bb("while dispatching notifications for "+A.u(f).j(0))
m=$.eW()
if(m!=null)m.$1(new A.bm(r,q,"foundation library",o,new A.II(f),!1))}f.seG(f.geG()-1)
if(f.geG()===0&&f.gf8()>0){l=f.gbG()-f.gf8()
if(l*2<=f.gba().length){k=A.aZ(l,null,!1,t.xR)
for(j=0,s=0;s<f.gbG();++s){i=f.gba()[s]
if(i!=null){h=j+1
k[j]=i
j=h}}f.sba(k)}else for(s=0;s<l;++s)if(f.gba()[s]==null){g=s+1
for(;f.gba()[g]==null;)++g
f.gba()[s]=f.gba()[g]
f.gba()[g]=null}f.sf8(0)
f.sbG(l)}},
$iad:1,
gbG(){return this.dx$},
gba(){return this.dy$},
geG(){return this.fr$},
gf8(){return this.fx$},
sbG(a){return this.dx$=a},
sba(a){return this.dy$=a},
seG(a){return this.fr$=a},
sf8(a){return this.fx$=a}}
A.II.prototype={
$0(){var s=null,r=this.a
return A.a([A.f5("The "+A.u(r).j(0)+" sending notification was",r,!0,B.ah,s,!1,s,s,B.a3,s,!1,!0,!0,B.ay,s,t.ig)],t.p)},
$S:10}
A.DG.prototype={
a6(a){var s,r,q
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.C)(s),++q)s[q].a6(a)},
M(a){var s,r,q
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.C)(s),++q)s[q].M(a)},
j(a){return"Listenable.merge(["+B.b.bv(this.a,", ")+"])"}}
A.dO.prototype={
gn(){return this.a},
sn(a){if(J.d(this.a,a))return
this.a=a
this.aL()},
j(a){return"<optimized out>#"+A.b9(this)+"("+A.f(this.a)+")"}}
A.of.prototype={
D(){return"DiagnosticLevel."+this.b}}
A.f6.prototype={
D(){return"DiagnosticsTreeStyle."+this.b}}
A.W0.prototype={}
A.cu.prototype={
mW(a,b){return this.bf(0)},
j(a){return this.mW(0,B.a3)}}
A.db.prototype={
gn(){this.NY()
return this.at},
NY(){return}}
A.og.prototype={}
A.wK.prototype={}
A.S.prototype={
bB(){return"<optimized out>#"+A.b9(this)},
mW(a,b){var s=this.bB()
return s},
j(a){return this.mW(0,B.a3)}}
A.JC.prototype={
bB(){return"<optimized out>#"+A.b9(this)}}
A.en.prototype={
j(a){return this.EW(B.ez).bf(0)},
bB(){return"<optimized out>#"+A.b9(this)},
Wn(a,b){return A.ZP(a,b,this)},
EW(a){return this.Wn(null,a)}}
A.wL.prototype={}
A.Cj.prototype={}
A.ew.prototype={}
A.y1.prototype={}
A.rB.prototype={
j(a){return"[#"+A.b9(this)+"]"}}
A.rE.prototype={
i(a,b){if(b==null)return!1
if(J.I(b)!==A.u(this))return!1
return this.$ti.b(b)&&b.a===this.a},
gq(a){return A.G(A.u(this),this.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
j(a){var s=this.$ti,r=s.c,q=this.a,p=A.br(r)===B.Jb?"<'"+q.j(0)+"'>":"<"+q.j(0)+">"
if(A.u(this)===A.br(s))return"["+p+"]"
return"["+A.br(r).j(0)+" "+p+"]"}}
A.a0f.prototype={}
A.e2.prototype={}
A.pn.prototype={}
A.b0.prototype={
go_(){var s,r=this,q=r.c
if(q===$){s=A.cf(r.$ti.c)
r.c!==$&&A.a3()
r.c=s
q=s}return q},
A(a,b){this.b=!0
this.go_().F(0)
return B.b.A(this.a,b)},
F(a){this.b=!1
B.b.F(this.a)
this.go_().F(0)},
t(a,b){var s=this,r=s.a
if(r.length<3)return B.b.t(r,b)
if(s.b){s.go_().G(0,r)
s.b=!1}return s.go_().t(0,b)},
gK(a){var s=this.a
return new J.bj(s,s.length,A.X(s).h("bj<1>"))},
gL(a){return this.a.length===0},
gaP(a){return this.a.length!==0},
ck(a,b){var s=this.a,r=A.X(s)
return b?A.a(s.slice(0),r):J.lH(s.slice(0),r.c)},
d9(a){return this.ck(0,!0)}}
A.i_.prototype={
A(a,b){var s=this.a,r=s.k(0,b)
if(r==null)return!1
if(r===1)s.A(0,b)
else s.l(0,b,r-1)
return!0},
t(a,b){return this.a.T(b)},
gK(a){var s=this.a
return A.i8(s,s.r)},
gL(a){return this.a.a===0},
gaP(a){return this.a.a!==0}}
A.qd.prototype={
VL(a,b){var s=this.a,r=s==null?$.vk():s,q=r.fz(0,a,A.eD(a),b)
if(q===s)return this
return new A.qd(q)},
k(a,b){var s=this.a
if(s==null)return null
return s.kM(0,b,J.l(b))}}
A.Xh.prototype={}
A.CT.prototype={
fz(a,b,c,d){var s,r,q,p,o=B.f.jM(c,a)&31,n=this.a,m=n[o]
if(m==null)m=$.vk()
s=m.fz(a+5,b,c,d)
if(s===m)n=this
else{r=n.length
q=A.aZ(r,null,!1,t.X)
for(p=0;p<r;++p)q[p]=n[p]
q[o]=s
n=new A.CT(q)}return n},
kM(a,b,c){var s=this.a[B.f.jM(c,a)&31]
return s==null?null:s.kM(a+5,b,c)}}
A.iB.prototype={
fz(a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=null,a=B.f.jM(a6,a4)&31,a0=1<<a>>>0,a1=c.a,a2=(a1&a0-1)>>>0,a3=a2-(a2>>>1&1431655765)
a3=(a3&858993459)+(a3>>>2&858993459)
a3=a3+(a3>>>4)&252645135
a3+=a3>>>8
s=a3+(a3>>>16)&63
if((a1&a0)>>>0!==0){a=c.b
a2=2*s
r=a[a2]
q=a2+1
p=a[q]
if(r==null){o=p.fz(a4+5,a5,a6,a7)
if(o===p)return c
a2=a.length
n=A.aZ(a2,b,!1,t.X)
for(m=0;m<a2;++m)n[m]=a[m]
n[q]=o
return new A.iB(a1,n)}if(J.d(a5,r)){if(a7==null?p==null:a7===p)a=c
else{a2=a.length
n=A.aZ(a2,b,!1,t.X)
for(m=0;m<a2;++m)n[m]=a[m]
n[q]=a7
a=new A.iB(a1,n)}return a}l=a4+5
k=J.l(r)
if(k===a6){j=A.aZ(4,b,!1,t.X)
j[0]=r
j[1]=p
j[2]=a5
j[3]=a7
o=new A.tk(a6,j)}else o=$.vk().fz(l,r,k,p).fz(l,a5,a6,a7)
l=a.length
n=A.aZ(l,b,!1,t.X)
for(m=0;m<l;++m)n[m]=a[m]
n[a2]=null
n[q]=o
return new A.iB(a1,n)}else{a3=a1-(a1>>>1&1431655765)
a3=(a3&858993459)+(a3>>>2&858993459)
a3=a3+(a3>>>4)&252645135
a3+=a3>>>8
i=a3+(a3>>>16)&63
if(i>=16){a1=c.Nr(a4)
a1.a[a]=$.vk().fz(a4+5,a5,a6,a7)
return a1}else{h=2*s
g=2*i
f=A.aZ(g+2,b,!1,t.X)
for(a=c.b,e=0;e<h;++e)f[e]=a[e]
f[h]=a5
f[h+1]=a7
for(d=h+2,e=h;e<g;++e,++d)f[d]=a[e]
return new A.iB((a1|a0)>>>0,f)}}},
kM(a,b,c){var s,r,q,p,o=1<<(B.f.jM(c,a)&31)>>>0,n=this.a
if((n&o)>>>0===0)return null
n=(n&o-1)>>>0
s=n-(n>>>1&1431655765)
s=(s&858993459)+(s>>>2&858993459)
s=s+(s>>>4)&252645135
s+=s>>>8
n=this.b
r=2*(s+(s>>>16)&63)
q=n[r]
p=n[r+1]
if(q==null)return p.kM(a+5,b,c)
if(b===q)return p
return null},
Nr(a){var s,r,q,p,o,n,m,l=A.aZ(32,null,!1,t.X)
for(s=this.a,r=a+5,q=this.b,p=0,o=0;o<32;++o)if((B.f.jM(s,o)&1)!==0){n=q[p]
m=p+1
if(n==null)l[o]=q[m]
else l[o]=$.vk().fz(r,n,J.l(n),q[m])
p+=2}return new A.CT(l)}}
A.tk.prototype={
fz(a,b,c,d){var s,r,q,p,o,n,m,l,k,j=this,i=j.a
if(c===i){s=j.zl(b)
if(s!==-1){i=j.b
r=s+1
q=i[r]
if(q==null?d==null:q===d)i=j
else{q=i.length
p=A.aZ(q,null,!1,t.X)
for(o=0;o<q;++o)p[o]=i[o]
p[r]=d
i=new A.tk(c,p)}return i}i=j.b
n=i.length
m=A.aZ(n+2,null,!1,t.X)
for(l=0;l<n;++l)m[l]=i[l]
m[n]=b
m[n+1]=d
return new A.tk(c,m)}i=B.f.jM(i,a)
k=A.aZ(2,null,!1,t.X)
k[1]=j
return new A.iB(1<<(i&31)>>>0,k).fz(a,b,c,d)},
kM(a,b,c){var s=this.zl(b)
return s<0?null:this.b[s+1]},
zl(a){var s,r,q=this.b,p=q.length
for(s=J.eV(a),r=0;r<p;r+=2)if(s.i(a,q[r]))return r
return-1}}
A.cy.prototype={
D(){return"TargetPlatform."+this.b}}
A.Ti.prototype={
cw(a){var s,r,q=this
if(q.b===q.a.length)q.Pk()
s=q.a
r=q.b
s[r]=a
q.b=r+1},
ie(a){var s=this,r=a.length,q=s.b+r
if(q>=s.a.length)s.tn(q)
B.R.de(s.a,s.b,q,a)
s.b+=r},
lv(a,b,c){var s=this,r=c==null?s.e.length:c,q=s.b+(r-b)
if(q>=s.a.length)s.tn(q)
B.R.de(s.a,s.b,q,a)
s.b=q},
PE(a){return this.lv(a,0,null)},
tn(a){var s=this.a,r=s.length,q=a==null?0:a,p=Math.max(q,r*2),o=new Uint8Array(p)
B.R.de(o,0,r,s)
this.a=o},
Pk(){return this.tn(null)},
f9(a){var s=B.f.bS(this.b,a)
if(s!==0)this.lv($.a8d(),0,a-s)},
hG(){var s,r=this
if(r.c)throw A.e(A.az("done() must not be called more than once on the same "+A.u(r).j(0)+"."))
s=A.lP(r.a.buffer,0,r.b)
r.a=new Uint8Array(0)
r.c=!0
return s}}
A.qs.prototype={
j9(a){return this.a.getUint8(this.b++)},
qe(a){var s=this.b,r=$.cb()
B.dq.wv(this.a,s,r)},
ja(a){var s=this.a,r=A.d3(s.buffer,s.byteOffset+this.b,a)
this.b+=a
return r},
qf(a){var s
this.f9(8)
s=this.a
B.nW.BX(s.buffer,s.byteOffset+this.b,a)},
f9(a){var s=this.b,r=B.f.bS(s,a)
if(r!==0)this.b=s+(a-r)}}
A.eJ.prototype={
gq(a){var s=this
return A.G(s.b,s.d,s.f,s.r,s.w,s.x,s.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a,b){var s=this
if(b==null)return!1
if(J.I(b)!==A.u(s))return!1
return b instanceof A.eJ&&b.b===s.b&&b.d===s.d&&b.f===s.f&&b.r===s.r&&b.w===s.w&&b.x===s.x&&b.a===s.a},
j(a){var s=this
return"StackFrame(#"+s.b+", "+s.c+":"+s.d+"/"+s.e+":"+s.f+":"+s.r+", className: "+s.w+", method: "+s.x+")"}}
A.RB.prototype={
$1(a){return a.length!==0},
$S:39}
A.c_.prototype={
f0(a,b,c){var s=a.$1(this.a)
if(c.h("a8<0>").b(s))return s
return new A.c_(s,c.h("c_<0>"))},
bk(a,b){return this.f0(a,null,b)},
j6(a){var s,r,q,p,o,n=this
try{s=a.$0()
if(t.o0.b(s)){p=s.bk(new A.RW(n),n.$ti.c)
return p}return n}catch(o){r=A.ah(o)
q=A.aI(o)
p=A.a_a(r,q,n.$ti.c)
return p}},
$ia8:1}
A.RW.prototype={
$1(a){return this.a.a},
$S(){return this.a.$ti.h("1(@)")}}
A.xt.prototype={
D(){return"GestureDisposition."+this.b}}
A.ce.prototype={}
A.xr.prototype={}
A.mN.prototype={
j(a){var s=this,r=s.a
r=r.length===0?""+"<empty>":""+new A.ag(r,new A.V9(s),A.X(r).h("ag<1,x>")).bv(0,", ")
if(s.b)r+=" [open]"
if(s.c)r+=" [held]"
if(s.d)r+=" [hasPendingSweep]"
return r.charCodeAt(0)==0?r:r}}
A.V9.prototype={
$1(a){if(a===this.a.e)return a.j(0)+" (eager winner)"
return a.j(0)},
$S:133}
A.LV.prototype={
tL(a,b,c){this.a.bj(b,new A.LX(this,b)).a.push(c)
return new A.xr(this,b,c)},
Rv(a){var s=this.a.k(0,a)
if(s==null)return
s.b=!1
this.B3(a,s)},
xw(a){var s,r=this.a,q=r.k(0,a)
if(q==null)return
if(q.c){q.d=!0
return}r.A(0,a)
r=q.a
if(r.length!==0){B.b.gJ(r).eI(a)
for(s=1;s<r.length;++s)r[s].fA(a)}},
Ua(a){var s=this.a.k(0,a)
if(s==null)return
s.c=!0},
W_(a){var s=this.a.k(0,a)
if(s==null)return
s.c=!1
if(s.d)this.xw(a)},
jI(a,b,c){var s=this.a.k(0,a)
if(s==null)return
if(c===B.X){B.b.A(s.a,b)
b.fA(a)
if(!s.b)this.B3(a,s)}else if(s.b){if(s.e==null)s.e=b}else this.Ai(a,s,b)},
B3(a,b){var s=b.a.length
if(s===1)A.fD(new A.LW(this,a,b))
else if(s===0)this.a.A(0,a)
else{s=b.e
if(s!=null)this.Ai(a,b,s)}},
Pp(a,b){var s=this.a
if(!s.T(a))return
s.A(0,a)
B.b.gJ(b.a).eI(a)},
Ai(a,b,c){var s,r,q,p
this.a.A(0,a)
for(s=b.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.C)(s),++q){p=s[q]
if(p!==c)p.fA(a)}c.eI(a)}}
A.LX.prototype={
$0(){return new A.mN(A.a([],t.ia))},
$S:134}
A.LW.prototype={
$0(){return this.a.Pp(this.b,this.c)},
$S:0}
A.Wz.prototype={
jj(){var s,r,q,p,o,n=this
for(s=n.a,r=s.gau(),q=A.q(r),q=q.h("@<1>").Z(q.y[1]),r=new A.b7(J.ao(r.a),r.b,q.h("b7<1,2>")),p=n.r,q=q.y[1];r.p();){o=r.a;(o==null?q.a(o):o).WZ(p)}s.F(0)
n.c=B.t
s=n.y
if(s!=null)s.b3()}}
A.lx.prototype={
MV(a){var s,r,q,p,o=this
try{o.bs$.G(0,A.acT(a.a,o.gL1()))
if(o.c<=0)o.rz()}catch(q){s=A.ah(q)
r=A.aI(q)
p=A.bb("while handling a pointer data packet")
A.d_(new A.bm(s,r,"gestures library",p,null,!1))}},
L2(a){var s
if($.a9().gbF().b.k(0,a)==null)s=null
else{s=$.bc().d
if(s==null){s=self.window.devicePixelRatio
if(s===0)s=1}}return s},
Rh(a){var s=this.bs$
if(s.b===s.c&&this.c<=0)A.fD(this.gLH())
s.oq(A.a3V(0,0,0,0,0,B.dw,!1,0,a,B.h,1,1,0,0,0,0,0,0,B.t,0))},
rz(){for(var s=this.bs$;!s.gL(0);)this.uO(s.mP())},
uO(a){this.gAg().jj()
this.zg(a)},
zg(a){var s,r,q=this,p=!t.c.b(a)
if(!p||t.zs.b(a)||t.hV.b(a)||t.EL.b(a)){s=A.a_e()
q.pj(s,a.gb5(),a.gkL())
if(!p||t.EL.b(a))q.bH$.l(0,a.gaT(),s)
p=s}else if(t.Cs.b(a)||t.AJ.b(a)||t.zv.b(a)){s=q.bH$.A(0,a.gaT())
p=s}else p=a.goV()||t.l.b(a)?q.bH$.k(0,a.gaT()):null
if(p!=null||t.ye.b(a)||t.yg.b(a)){r=q.as$
r.toString
r.WG(a,t.d.b(a)?null:p)
q.H1(a,p)}},
pj(a,b,c){a.C(0,new A.fR(this,t.Cq))},
So(a,b){var s,r,q,p,o,n,m,l,k,j,i="gesture library"
if(b==null){try{this.bt$.ER(a)}catch(p){s=A.ah(p)
r=A.aI(p)
A.d_(A.abA(A.bb("while dispatching a non-hit-tested pointer event"),a,s,null,new A.LY(a),i,r))}return}for(n=b.a,m=n.length,l=0;l<n.length;n.length===m||(0,A.C)(n),++l){q=n[l]
try{q.a.hR(a.ab(q.b),q)}catch(s){p=A.ah(s)
o=A.aI(s)
k=A.bb("while dispatching a pointer event")
j=$.eW()
if(j!=null)j.$1(new A.oP(p,o,i,k,new A.LZ(a,q),!1))}}},
hR(a,b){var s=this
s.bt$.ER(a)
if(t.c.b(a)||t.EL.b(a))s.bp$.Rv(a.gaT())
else if(t.Cs.b(a)||t.zv.b(a))s.bp$.xw(a.gaT())
else if(t.zs.b(a))s.bN$.U(a)},
Na(){if(this.c<=0)this.gAg().jj()},
gAg(){var s=this,r=s.dO$
if(r===$){$.nn()
r!==$&&A.a3()
r=s.dO$=new A.Wz(A.y(t.S,t.d0),B.t,new A.ma(),B.t,B.t,s.gMY(),s.gN9(),B.xc)}return r},
$iaa:1}
A.LY.prototype={
$0(){var s=null
return A.a([A.f5("Event",this.a,!0,B.ah,s,!1,s,s,B.a3,s,!1,!0,!0,B.ay,s,t.cL)],t.p)},
$S:10}
A.LZ.prototype={
$0(){var s=null
return A.a([A.f5("Event",this.a,!0,B.ah,s,!1,s,s,B.a3,s,!1,!0,!0,B.ay,s,t.cL),A.f5("Target",this.b.a,!0,B.ah,s,!1,s,s,B.a3,s,!1,!0,!0,B.ay,s,t.kZ)],t.p)},
$S:10}
A.oP.prototype={}
A.Pd.prototype={
$1(a){return a.f!==B.CI},
$S:138}
A.Pe.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j=a.a,i=this.a.$1(j)
if(i==null)return null
s=new A.z(a.x,a.y).ey(0,i)
r=new A.z(a.z,a.Q).ey(0,i)
q=a.dy/i
p=a.dx/i
o=a.fr/i
n=a.fx/i
m=a.c
l=a.e
k=a.f
switch((k==null?B.dy:k).a){case 0:switch(a.d.a){case 1:return A.acP(a.r,a.cx,a.cy,0,l,!1,a.fy,s,a.CW,a.ch,n,o,a.go,m,j)
case 3:return A.acV(a.as,r,a.r,a.cx,a.cy,0,l,!1,a.fy,s,a.CW,a.ch,p,n,o,q,a.db,a.ax,a.go,m,j)
case 4:return A.acR(A.a6x(a.as,l),a.r,a.cy,0,l,!1,a.fy,a.w,s,a.ay,a.CW,a.ch,p,n,o,q,a.db,a.go,m,j)
case 5:return A.acW(A.a6x(a.as,l),r,a.r,a.cy,0,l,!1,a.fy,a.id,a.w,s,a.ay,a.CW,a.ch,p,n,o,q,a.db,a.ax,a.go,m,j)
case 6:return A.ad3(a.as,a.r,a.cx,a.cy,0,l,!1,a.fy,a.w,s,a.ay,a.CW,a.ch,p,n,o,q,a.db,a.go,m,j)
case 0:return A.a3V(a.as,a.r,a.cx,a.cy,0,l,!1,a.fy,a.w,s,a.CW,a.ch,p,n,o,q,a.db,a.go,m,j)
case 2:return A.ad_(a.r,a.cy,0,l,!1,s,a.CW,a.ch,n,o,m,j)
case 7:return A.acY(a.r,0,a.w,s,a.ax,m,j)
case 8:return A.acZ(a.r,0,new A.z(0,0).ey(0,i),new A.z(0,0).ey(0,i),a.w,s,0,a.p2,a.ax,m,j)
case 9:return A.acX(a.r,0,a.w,s,a.ax,m,j)}break
case 1:k=a.k1
if(!isFinite(k)||!isFinite(a.k2)||i<=0)return null
return A.ad1(a.r,0,l,s,new A.z(k,a.k2).ey(0,i),m,j)
case 2:return A.ad2(a.r,0,l,s,m,j)
case 3:return A.ad0(a.r,0,l,s,a.p2,m,j)
case 4:throw A.e(A.az("Unreachable"))}},
$S:139}
A.jp.prototype={
j(a){return"DragDownDetails("+this.a.j(0)+")"}}
A.fM.prototype={
j(a){return"DragStartDetails("+this.b.j(0)+")"}}
A.fN.prototype={
j(a){return"DragUpdateDetails("+this.b.j(0)+")"}}
A.dX.prototype={
j(a){return"DragEndDetails("+this.a.j(0)+")"}}
A.au.prototype={
gcH(){return this.r},
gDT(){return this.w},
gkL(){return this.a},
gf1(){return this.c},
gaT(){return this.d},
gd5(){return this.e},
geb(){return this.f},
gb5(){return this.r},
gm0(){return this.w},
gcp(){return this.x},
goV(){return this.y},
gmG(){return this.z},
gEj(){return this.Q},
gpP(){return this.as},
gmM(){return this.at},
gc7(){return this.ax},
guu(){return this.ay},
gH(){return this.ch},
gvO(){return this.CW},
gvR(){return this.cx},
gvQ(){return this.cy},
gvP(){return this.db},
gvA(){return this.dx},
gw6(){return this.dy},
gl3(){return this.fx},
gaU(){return this.fy}}
A.c8.prototype={$iau:1}
A.B8.prototype={$iau:1}
A.Gf.prototype={
gf1(){return this.gaB().c},
gaT(){return this.gaB().d},
gd5(){return this.gaB().e},
geb(){return this.gaB().f},
gb5(){return this.gaB().r},
gm0(){return this.gaB().w},
gcp(){return this.gaB().x},
goV(){return this.gaB().y},
gmG(){this.gaB()
return!1},
gEj(){return this.gaB().Q},
gpP(){return this.gaB().as},
gmM(){return this.gaB().at},
gc7(){return this.gaB().ax},
guu(){return this.gaB().ay},
gH(){return this.gaB().ch},
gvO(){return this.gaB().CW},
gvR(){return this.gaB().cx},
gvQ(){return this.gaB().cy},
gvP(){return this.gaB().db},
gvA(){return this.gaB().dx},
gw6(){return this.gaB().dy},
gl3(){return this.gaB().fx},
gcH(){var s,r=this,q=r.a
if(q===$){s=A.Pg(r.gaU(),r.gaB().r)
r.a!==$&&A.a3()
r.a=s
q=s}return q},
gDT(){var s,r,q,p,o=this,n=o.b
if(n===$){s=o.gaU()
r=o.gaB()
q=o.gaB()
p=A.Pf(s,o.gcH(),r.w,q.r)
o.b!==$&&A.a3()
o.b=p
n=p}return n},
gkL(){return this.gaB().a}}
A.BN.prototype={}
A.k6.prototype={
ab(a){if(a==null||a.i(0,this.fy))return this
return new A.Gb(this,a)}}
A.Gb.prototype={
ab(a){return this.c.ab(a)},
$ik6:1,
gaB(){return this.c},
gaU(){return this.d}}
A.BX.prototype={}
A.kc.prototype={
ab(a){if(a==null||a.i(0,this.fy))return this
return new A.Gm(this,a)}}
A.Gm.prototype={
ab(a){return this.c.ab(a)},
$ikc:1,
gaB(){return this.c},
gaU(){return this.d}}
A.BS.prototype={}
A.k8.prototype={
ab(a){if(a==null||a.i(0,this.fy))return this
return new A.Gh(this,a)}}
A.Gh.prototype={
ab(a){return this.c.ab(a)},
$ik8:1,
gaB(){return this.c},
gaU(){return this.d}}
A.BQ.prototype={}
A.ik.prototype={
ab(a){if(a==null||a.i(0,this.fy))return this
return new A.Ge(this,a)}}
A.Ge.prototype={
ab(a){return this.c.ab(a)},
$iik:1,
gaB(){return this.c},
gaU(){return this.d}}
A.BR.prototype={}
A.il.prototype={
ab(a){if(a==null||a.i(0,this.fy))return this
return new A.Gg(this,a)}}
A.Gg.prototype={
ab(a){return this.c.ab(a)},
$iil:1,
gaB(){return this.c},
gaU(){return this.d}}
A.BP.prototype={}
A.h9.prototype={
ab(a){if(a==null||a.i(0,this.fy))return this
return new A.Gd(this,a)}}
A.Gd.prototype={
ab(a){return this.c.ab(a)},
$ih9:1,
gaB(){return this.c},
gaU(){return this.d}}
A.BT.prototype={}
A.k9.prototype={
ab(a){if(a==null||a.i(0,this.fy))return this
return new A.Gi(this,a)}}
A.Gi.prototype={
ab(a){return this.c.ab(a)},
$ik9:1,
gaB(){return this.c},
gaU(){return this.d}}
A.C0.prototype={}
A.kd.prototype={
ab(a){if(a==null||a.i(0,this.fy))return this
return new A.Gq(this,a)}}
A.Gq.prototype={
ab(a){return this.c.ab(a)},
$ikd:1,
gaB(){return this.c},
gaU(){return this.d}}
A.dj.prototype={}
A.BZ.prototype={}
A.za.prototype={
ab(a){if(a==null||a.i(0,this.fy))return this
return new A.Go(this,a)}}
A.Go.prototype={
ab(a){return this.c.ab(a)},
$idj:1,
gaB(){return this.c},
gaU(){return this.d}}
A.C_.prototype={}
A.zb.prototype={
ab(a){if(a==null||a.i(0,this.fy))return this
return new A.Gp(this,a)}}
A.Gp.prototype={
ab(a){return this.c.ab(a)},
$idj:1,
gaB(){return this.c},
gaU(){return this.d}}
A.BY.prototype={}
A.z9.prototype={
ab(a){if(a==null||a.i(0,this.fy))return this
return new A.Gn(this,a)}}
A.Gn.prototype={
ab(a){return this.c.ab(a)},
$idj:1,
gaB(){return this.c},
gaU(){return this.d}}
A.BV.prototype={}
A.ha.prototype={
ab(a){if(a==null||a.i(0,this.fy))return this
return new A.Gk(this,a)}}
A.Gk.prototype={
ab(a){return this.c.ab(a)},
$iha:1,
gaB(){return this.c},
gaU(){return this.d}}
A.BW.prototype={}
A.kb.prototype={
gv7(){return this.id},
gDU(){return this.k1},
ab(a){if(a==null||a.i(0,this.fy))return this
return new A.Gl(this,a)},
gvG(){return this.id},
gEd(){return this.k1}}
A.Gl.prototype={
gvG(){return this.e.id},
gv7(){var s,r=this,q=r.c
if(q===$){s=A.Pg(r.f,r.e.id)
r.c!==$&&A.a3()
r.c=s
q=s}return q},
gEd(){return this.e.k1},
gDU(){var s,r,q=this,p=q.d
if(p===$){s=q.e
r=A.Pf(q.f,q.gv7(),s.k1,s.id)
q.d!==$&&A.a3()
q.d=r
p=r}return p},
ab(a){return this.e.ab(a)},
$ikb:1,
gaB(){return this.e},
gaU(){return this.f}}
A.BU.prototype={}
A.ka.prototype={
ab(a){if(a==null||a.i(0,this.fy))return this
return new A.Gj(this,a)}}
A.Gj.prototype={
ab(a){return this.c.ab(a)},
$ika:1,
gaB(){return this.c},
gaU(){return this.d}}
A.BO.prototype={}
A.k7.prototype={
ab(a){if(a==null||a.i(0,this.fy))return this
return new A.Gc(this,a)}}
A.Gc.prototype={
ab(a){return this.c.ab(a)},
$ik7:1,
gaB(){return this.c},
gaU(){return this.d}}
A.Ea.prototype={}
A.Eb.prototype={}
A.Ec.prototype={}
A.Ed.prototype={}
A.Ee.prototype={}
A.Ef.prototype={}
A.Eg.prototype={}
A.Eh.prototype={}
A.Ei.prototype={}
A.Ej.prototype={}
A.Ek.prototype={}
A.El.prototype={}
A.Em.prototype={}
A.En.prototype={}
A.Eo.prototype={}
A.Ep.prototype={}
A.Eq.prototype={}
A.Er.prototype={}
A.Es.prototype={}
A.Et.prototype={}
A.Eu.prototype={}
A.Ev.prototype={}
A.Ew.prototype={}
A.Ex.prototype={}
A.Ey.prototype={}
A.Ez.prototype={}
A.EA.prototype={}
A.EB.prototype={}
A.EC.prototype={}
A.ED.prototype={}
A.EE.prototype={}
A.GY.prototype={}
A.GZ.prototype={}
A.H_.prototype={}
A.H0.prototype={}
A.H1.prototype={}
A.H2.prototype={}
A.H3.prototype={}
A.H4.prototype={}
A.H5.prototype={}
A.H6.prototype={}
A.H7.prototype={}
A.H8.prototype={}
A.H9.prototype={}
A.Ha.prototype={}
A.Hb.prototype={}
A.Hc.prototype={}
A.Hd.prototype={}
A.mK.prototype={
D(){return"_ForceState."+this.b}}
A.et.prototype={
fd(a){var s=this
if(a.gmM()<=1)s.U(B.X)
else{s.qJ(a)
if(s.dy===B.h_){s.dy=B.dW
s.db=new A.e6(a.gcH(),a.gb5())}}},
hQ(a){var s,r=this
if(t.d.b(a)||t.c.b(a)){s=A.a2V(a.gpP(),a.gmM(),a.gEj())
r.db=new A.e6(a.gcH(),a.gb5())
r.dx=s
if(r.dy===B.dW)if(s>0.4){r.dy=B.tR
r.U(B.aI)}else if(a.gm0().goU()>A.v8(a.gd5(),r.b))r.U(B.X)
if(s>0.4&&r.dy===B.tQ)r.dy=B.tR}r.x_(a)},
eI(a){if(this.dy===B.dW)this.dy=B.tQ},
oR(a){if(this.dy===B.dW){this.U(B.X)
return}this.dy=B.h_},
fA(a){this.f6(a)
this.oR(a)}}
A.wJ.prototype={
gq(a){return A.G(this.a,23,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a,b){if(b==null)return!1
if(J.I(b)!==A.u(this))return!1
return b instanceof A.wJ&&b.a==this.a},
j(a){return"DeviceGestureSettings(touchSlop: "+A.f(this.a)+")"}}
A.fR.prototype={
j(a){return"<optimized out>#"+A.b9(this)+"("+this.a.j(0)+")"}}
A.n7.prototype={}
A.DB.prototype={
cc(a){return this.a.px(a)}}
A.DX.prototype={
cc(a){var s,r,q,p,o=new Float64Array(16),n=new A.aX(o)
n.aD(a)
s=this.a
r=s.a
q=s.b
s=o[0]
p=o[3]
o[0]=s+r*p
o[1]=o[1]+q*p
o[2]=o[2]+0*p
o[3]=p
p=o[4]
s=o[7]
o[4]=p+r*s
o[5]=o[5]+q*s
o[6]=o[6]+0*s
o[7]=s
s=o[8]
p=o[11]
o[8]=s+r*p
o[9]=o[9]+q*p
o[10]=o[10]+0*p
o[11]=p
p=o[12]
s=o[15]
o[12]=p+r*s
o[13]=o[13]+q*s
o[14]=o[14]+0*s
o[15]=s
return n}}
A.i0.prototype={
M5(){var s,r,q,p,o=this.c
if(o.length===0)return
s=this.b
r=B.b.gO(s)
for(q=o.length,p=0;p<o.length;o.length===q||(0,A.C)(o),++p){r=o[p].cc(r)
s.push(r)}B.b.F(o)},
C(a,b){this.M5()
b.b=B.b.gO(this.b)
this.a.push(b)},
Eg(){var s=this.c
if(s.length!==0)s.pop()
else this.b.pop()},
j(a){var s=this.a
return"HitTestResult("+(s.length===0?"<empty path>":B.b.bv(s,", "))+")"}}
A.ex.prototype={
hW(a){var s,r=this
switch(a.gcp()){case 1:if(r.p1==null)if(r.p2==null)s=r.R8==null
else s=!1
else s=!1
if(s)return!1
break
case 2:s=!0
if(s)return!1
break
case 4:s=!0
if(s)return!1
break
default:return!1}return r.l_(a)},
uo(){var s,r=this
r.U(B.aI)
r.k2=!0
s=r.CW
s.toString
r.xl(s)
r.Kb()},
Dt(a){var s,r=this
if(!a.gl3()){if(t.c.b(a)){s=new A.kE(a.gd5(),A.aZ(20,null,!1,t.pa))
r.be=s
s.lG(a.gf1(),a.gcH())}if(t.d.b(a)){s=r.be
s.toString
s.lG(a.gf1(),a.gcH())}}if(t.Cs.b(a)){if(r.k2)r.K9(a)
else r.U(B.X)
r.tm()}else if(t.AJ.b(a)){r.y0()
r.tm()}else if(t.c.b(a)){r.k3=new A.e6(a.gcH(),a.gb5())
r.k4=a.gcp()
r.K8(a)}else if(t.d.b(a))if(a.gcp()!==r.k4&&!r.k2){r.U(B.X)
s=r.CW
s.toString
r.f6(s)}else if(r.k2)r.Ka(a)},
K8(a){this.k3.toString
this.e.k(0,a.gaT()).toString
switch(this.k4){case 1:break
case 2:break
case 4:break}},
y0(){var s,r=this
if(r.ch===B.cP)switch(r.k4){case 1:s=r.p1
if(s!=null)r.cE("onLongPressCancel",s)
break
case 2:break
case 4:break}},
Kb(){switch(this.k4){case 1:var s=this.p2
if(s!=null)this.cE("onLongPress",s)
break
case 2:break
case 4:break}},
Ka(a){a.gb5()
a.gcH()
a.gb5().V(0,this.k3.b)
a.gcH().V(0,this.k3.a)
switch(this.k4){case 1:break
case 2:break
case 4:break}},
K9(a){var s,r=this
r.be.wC()
a.gb5()
a.gcH()
r.be=null
switch(r.k4){case 1:s=r.R8
if(s!=null)r.cE("onLongPressUp",s)
break
case 2:break
case 4:break}},
tm(){var s=this
s.k2=!1
s.be=s.k4=s.k3=null},
U(a){var s=this
if(a===B.X)if(s.k2)s.tm()
else s.y0()
s.xd(a)},
eI(a){}}
A.hC.prototype={
k(a,b){return this.c[b+this.a]},
X(a,b){var s,r,q,p,o,n,m
for(s=this.b,r=this.c,q=this.a,p=b.c,o=b.a,n=0,m=0;m<s;++m)n+=r[m+q]*p[m+o]
return n}}
A.a0b.prototype={}
A.Pm.prototype={
j(a){var s=this.a,r=A.ca(s).h("ag<am.E,x>"),q=A.lG(A.a0(new A.ag(s,new A.Pn(),r),!0,r.h("ap.E")),"[","]")
r=this.b
r===$&&A.c()
return"PolynomialFit("+q+", confidence: "+B.c.P(r,3)+")"}}
A.Pn.prototype={
$1(a){return B.c.Wt(a,3)},
$S:140}
A.xW.prototype={
wY(a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=this.a,a5=a4.length
if(a6>a5)return null
s=a6+1
r=new A.Pm(new Float64Array(s))
q=s*a5
p=new Float64Array(q)
for(o=this.c,n=0*a5,m=0;m<a5;++m){p[n+m]=o[m]
for(l=1;l<s;++l)p[l*a5+m]=p[(l-1)*a5+m]*a4[m]}q=new Float64Array(q)
n=new Float64Array(s*s)
for(k=0;k<s;++k){for(j=k*a5,m=0;m<a5;++m){i=j+m
q[i]=p[i]}for(l=0;l<k;++l){i=l*a5
h=new A.hC(j,a5,q).X(0,new A.hC(i,a5,q))
for(m=0;m<a5;++m){g=j+m
q[g]=q[g]-h*q[i+m]}}i=new A.hC(j,a5,q)
f=Math.sqrt(i.X(0,i))
if(f<1e-10)return null
e=1/f
for(m=0;m<a5;++m){i=j+m
q[i]=q[i]*e}for(i=k*s,l=0;l<s;++l){g=l<k?0:new A.hC(j,a5,q).X(0,new A.hC(l*a5,a5,p))
n[i+l]=g}}p=new Float64Array(a5)
d=new A.hC(0,a5,p)
for(j=this.b,m=0;m<a5;++m)p[m]=j[m]*o[m]
for(l=s-1,p=r.a,c=l;c>=0;--c){p[c]=new A.hC(c*a5,a5,q).X(0,d)
for(i=c*s,k=l;k>c;--k)p[c]=p[c]-n[i+k]*p[k]
p[c]=p[c]/n[i+c]}for(b=0,m=0;m<a5;++m)b+=j[m]
b/=a5
for(a=0,a0=0,m=0;m<a5;++m){q=j[m]
a1=q-p[0]
for(a2=1,l=1;l<s;++l){a2*=a4[m]
a1-=a2*p[l]}n=o[m]
n*=n
a+=n*a1*a1
a3=q-b
a0+=n*a3*a3}r.b=a0<=1e-10?1:1-a/a0
return r}}
A.ta.prototype={
D(){return"_DragState."+this.b}}
A.om.prototype={
hW(a){var s=this
if(s.k2==null){if(s.ay==null&&s.ch==null&&s.CW==null&&s.cx==null&&s.cy==null)return!1}else if(a.gcp()!==s.k2)return!1
return s.l_(a)},
xG(a){var s,r=this
r.p1.l(0,a.gaT(),A.a2E(a))
s=r.fy
if(s===B.bb){r.fy=B.JW
s=a.gb5()
r.go=new A.e6(a.gcH(),s)
r.id=B.nY
r.k4=0
r.k1=a.gf1()
r.k3=a.gaU()
r.K6()}else if(s===B.dV)r.U(B.aI)},
fd(a){var s=this
s.qJ(a)
if(s.fy===B.bb)s.k2=a.gcp()
s.xG(a)},
tN(a){var s=this
s.H3(a)
s.nk(a.gaT(),a.gaU())
if(s.fy===B.bb)s.k2=1
s.xG(a)},
PR(a){var s,r
switch(0){case 0:s=this.p2
r=s.length<=1||a===B.b.gO(s)
break}return r},
hQ(a){var s,r,q,p,o,n,m,l,k,j=this
if(!a.gl3())s=t.c.b(a)||t.d.b(a)||t.EL.b(a)||t.l.b(a)
else s=!1
if(s){s=j.p1.k(0,a.gaT())
s.toString
if(t.EL.b(a))s.lG(a.gf1(),B.h)
else if(t.l.b(a))s.lG(a.gf1(),a.gvG())
else s.lG(a.gf1(),a.gcH())}s=t.d.b(a)
if(s&&a.gcp()!==j.k2){j.rI(a.gaT())
return}if((s||t.l.b(a))&&j.PR(a.gaT())){r=s?a.gm0():t.l.a(a).gEd()
q=s?a.gDT():t.l.a(a).gDU()
p=s?a.gb5():a.gb5().S(0,t.l.a(a).gvG())
o=s?a.gcH():a.gcH().S(0,t.l.a(a).gv7())
if(j.fy===B.dV){s=a.gf1()
j.y6(j.lf(q),p,o,j.lg(q),s)}else{s=j.id
s===$&&A.c()
j.id=s.S(0,new A.e6(q,r))
j.k1=a.gf1()
j.k3=a.gaU()
n=j.lf(q)
if(a.gaU()==null)m=null
else{s=a.gaU()
s.toString
m=A.NW(s)}s=j.k4
s===$&&A.c()
l=A.Pf(m,null,n,o).gc7()
k=j.lg(n)
j.k4=s+l*J.l1(k==null?1:k)
s=a.gd5()
l=j.b
if(j.rT(s,l==null?null:l.a)){j.ok=!0
if(B.b.t(j.p2,a.gaT()))j.y_(a.gaT())
else j.U(B.aI)}}}if(t.Cs.b(a)||t.AJ.b(a)||t.zv.b(a))j.rI(a.gaT())},
eI(a){var s=this
s.p2.push(a)
if(!s.fr||s.ok)s.y_(a)},
fA(a){this.rI(a)},
oR(a){var s,r=this
switch(r.fy.a){case 0:break
case 1:r.U(B.X)
s=r.cy
if(s!=null)r.cE("onCancel",s)
break
case 2:r.K7(a)
break}r.ok=!1
r.p1.F(0)
r.k2=null
r.fy=B.bb},
rI(a){var s,r
this.f6(a)
if(!B.b.A(this.p2,a)){s=this.f
r=s.k(0,a)
if(r!=null){s.A(0,a)
r.a.jI(r.b,r.c,B.X)}}},
K6(){var s,r=this
if(r.ay!=null){s=r.go
s===$&&A.c()
r.cE("onDown",new A.K4(r,new A.jp(s.b)))}},
y_(a){var s,r,q,p,o,n,m,l,k=this
if(k.fy===B.dV)return
k.fy=B.dV
s=k.id
s===$&&A.c()
r=k.k1
q=k.k3
switch(k.at.a){case 1:p=k.go
p===$&&A.c()
k.go=p.S(0,s)
o=B.h
break
case 0:o=k.lf(s.a)
break
default:o=null}k.id=B.nY
k.k3=k.k1=null
k.Kc(r,a)
if(!J.d(o,B.h)&&k.CW!=null){n=q!=null?A.NW(q):null
s=k.go
s===$&&A.c()
m=A.Pf(n,null,o,s.a.S(0,o))
l=k.go.S(0,new A.e6(o,m))
k.y6(o,l.b,l.a,k.lg(o),r)}k.U(B.aI)},
Kc(a,b){var s,r=this
if(r.ch!=null){s=r.go
s===$&&A.c()
r.e.k(0,b).toString
r.cE("onStart",new A.K9(r,new A.fM(s.b)))}},
y6(a,b,c,d,e){if(this.CW!=null)this.cE("onUpdate",new A.Ka(this,new A.fN(a,d,b)))},
K7(a){var s,r,q,p,o,n=this,m={}
if(n.cx==null)return
s=n.p1.k(0,a)
r=s.wC()
m.a=null
if(r==null){q=new A.K5()
p=null}else{o=m.a=n.ra(r,s.a)
q=o!=null?new A.K6(m,r):new A.K7(r)
p=o}if(p==null)m.a=new A.dX(B.cy)
n.Uv("onEnd",new A.K8(m,n),q)},
m(){this.p1.F(0)
this.l0()}}
A.K4.prototype={
$0(){return this.a.ay.$1(this.b)},
$S:0}
A.K9.prototype={
$0(){return this.a.ch.$1(this.b)},
$S:0}
A.Ka.prototype={
$0(){return this.a.CW.$1(this.b)},
$S:0}
A.K5.prototype={
$0(){return"Could not estimate velocity."},
$S:27}
A.K6.prototype={
$0(){return this.b.j(0)+"; fling at "+this.a.a.a.j(0)+"."},
$S:27}
A.K7.prototype={
$0(){return this.a.j(0)+"; judged to not be a fling."},
$S:27}
A.K8.prototype={
$0(){var s,r=this.b.cx
r.toString
s=this.a.a
s.toString
return r.$1(s)},
$S:0}
A.eP.prototype={
ra(a,b){var s=A.v8(b,this.b),r=a.a.b
if(!(Math.abs(r)>50&&Math.abs(a.d.b)>s))return null
return new A.dX(new A.eO(new A.z(0,A.V(r,-8000,8000))))},
rT(a,b){var s=this.k4
s===$&&A.c()
return Math.abs(s)>A.v8(a,this.b)},
lf(a){return new A.z(0,a.b)},
lg(a){return a.b}}
A.ev.prototype={
ra(a,b){var s=A.v8(b,this.b),r=a.a.a
if(!(Math.abs(r)>50&&Math.abs(a.d.a)>s))return null
return new A.dX(new A.eO(new A.z(A.V(r,-8000,8000),0)))},
rT(a,b){var s=this.k4
s===$&&A.c()
return Math.abs(s)>A.v8(a,this.b)},
lf(a){return new A.z(a.a,0)},
lg(a){return a.a}}
A.eA.prototype={
ra(a,b){var s=A.v8(b,this.b),r=a.a
if(!(r.goU()>2500&&a.d.goU()>s*s))return null
return new A.dX(new A.eO(r).Rm(50,8000))},
rT(a,b){var s=this.k4
s===$&&A.c()
return Math.abs(s)>A.ahs(a,this.b)},
lf(a){return a},
lg(a){return null}}
A.C1.prototype={
Oo(){this.a=!0}}
A.n5.prototype={
f6(a){if(this.r){this.r=!1
$.dd.bt$.EF(this.b,a)}},
DP(a,b){return a.gb5().V(0,this.d).gc7()<=b}}
A.eq.prototype={
hW(a){var s,r=this
if(r.y==null)if(r.r==null&&!0)return!1
s=r.l_(a)
if(!s)r.ik()
return s},
fd(a){var s=this,r=s.y
if(r!=null)if(!r.DP(a,100))return
else{r=s.y
if(!r.f.a||a.gcp()!==r.e){s.ik()
return s.B2(a)}}s.B2(a)},
B2(a){var s,r,q,p,o,n,m=this
m.AL()
s=$.dd.bp$.tL(0,a.gaT(),m)
r=a.gaT()
q=a.gb5()
p=a.gcp()
o=new A.C1()
A.bH(B.xe,o.gOn())
n=new A.n5(r,s,q,p,o)
m.z.l(0,a.gaT(),n)
o=a.gaU()
if(!n.r){n.r=!0
$.dd.bt$.BL(r,m.gnY(),o)}},
O4(a){var s,r=this,q=r.z,p=q.k(0,a.gaT())
p.toString
if(t.Cs.b(a)){s=r.y
if(s==null){if(r.x==null)r.x=A.bH(B.bk,r.gO5())
s=p.b
$.dd.bp$.Ua(s)
p.f6(r.gnY())
q.A(0,s)
r.yb()
r.y=p}else{s=s.c
s.a.jI(s.b,s.c,B.aI)
s=p.c
s.a.jI(s.b,s.c,B.aI)
p.f6(r.gnY())
q.A(0,p.b)
q=r.r
if(q!=null)r.cE("onDoubleTap",q)
r.ik()}}else if(t.d.b(a)){if(!p.DP(a,18))r.lt(p)}else if(t.AJ.b(a))r.lt(p)},
eI(a){},
fA(a){var s,r=this,q=r.z.k(0,a)
if(q==null){s=r.y
s=s!=null&&s.b===a}else s=!1
if(s)q=r.y
if(q!=null)r.lt(q)},
lt(a){var s,r=this,q=r.z
q.A(0,a.b)
s=a.c
s.a.jI(s.b,s.c,B.X)
a.f6(r.gnY())
s=r.y
if(s!=null)if(a===s)r.ik()
else{r.xZ()
if(q.a===0)r.ik()}},
m(){this.ik()
this.x9()},
ik(){var s,r=this
r.AL()
if(r.y!=null){if(r.z.a!==0)r.xZ()
s=r.y
s.toString
r.y=null
r.lt(s)
$.dd.bp$.W_(s.b)}r.yb()},
yb(){var s=this.z.gau()
B.b.W(A.a0(s,!0,A.q(s).h("v.E")),this.gP8())},
AL(){var s=this.x
if(s!=null){s.b3()
this.x=null}},
xZ(){}}
A.Ph.prototype={
BL(a,b,c){this.a.bj(a,new A.Pj()).l(0,b,c)},
EF(a,b){var s=this.a,r=s.k(0,a)
r.toString
r.A(0,b)
if(r.gL(r))s.A(0,a)},
L7(a,b,c){var s,r,q,p
try{b.$1(a.ab(c))}catch(q){s=A.ah(q)
r=A.aI(q)
p=A.bb("while routing a pointer event")
A.d_(new A.bm(s,r,"gesture library",p,null,!1))}},
ER(a){var s=this,r=s.a.k(0,a.gaT()),q=s.b,p=t.yd,o=t.rY,n=A.lL(q,p,o)
if(r!=null)s.yE(a,r,A.lL(r,p,o))
s.yE(a,q,n)},
yE(a,b,c){c.W(0,new A.Pi(this,b,a))}}
A.Pj.prototype={
$0(){return A.y(t.yd,t.rY)},
$S:142}
A.Pi.prototype={
$2(a,b){if(this.b.T(a))this.a.L7(this.c,a,b)},
$S:143}
A.Pk.prototype={
U(a){return}}
A.Kb.prototype={
D(){return"DragStartBehavior."+this.b}}
A.Oi.prototype={
D(){return"MultitouchDragStrategy."+this.b}}
A.c1.prototype={
tN(a){},
BJ(a){var s=this
s.e.l(0,a.gaT(),a.gd5())
if(s.hW(a))s.fd(a)
else s.mn(a)},
fd(a){},
mn(a){},
hW(a){var s=this.c
return(s==null||s.t(0,a.gd5()))&&this.d.$1(a.gcp())},
UI(a){var s=this.c
return s==null||s.t(0,a.gd5())},
m(){},
DI(a,b,c){var s,r,q,p,o=null
try{o=b.$0()}catch(q){s=A.ah(q)
r=A.aI(q)
p=A.bb("while handling a gesture")
A.d_(new A.bm(s,r,"gesture",p,null,!1))}return o},
cE(a,b){return this.DI(a,b,null,t.z)},
Uv(a,b,c){return this.DI(a,b,c,t.z)}}
A.q0.prototype={
fd(a){this.nk(a.gaT(),a.gaU())},
mn(a){this.U(B.X)},
eI(a){},
fA(a){},
U(a){var s,r,q=this.f,p=A.a0(q.gau(),!0,t.DP)
q.F(0)
for(q=p.length,s=0;s<q;++s){r=p[s]
r.a.jI(r.b,r.c,a)}},
m(){var s,r,q,p,o,n,m,l=this
l.U(B.X)
for(s=l.r,r=A.q(s),q=new A.dp(s,s.jx(),r.h("dp<1>")),r=r.c;q.p();){p=q.d
if(p==null)p=r.a(p)
o=$.dd.bt$
n=l.gml()
o=o.a
m=o.k(0,p)
m.toString
m.A(0,n)
if(m.gL(m))o.A(0,p)}s.F(0)
l.x9()},
JA(a){return $.dd.bp$.tL(0,a,this)},
nk(a,b){var s=this
$.dd.bt$.BL(a,s.gml(),b)
s.r.C(0,a)
s.f.l(0,a,s.JA(a))},
f6(a){var s=this.r
if(s.t(0,a)){$.dd.bt$.EF(a,this.gml())
s.A(0,a)
if(s.a===0)this.oR(a)}},
x_(a){if(t.Cs.b(a)||t.AJ.b(a)||t.zv.b(a))this.f6(a.gaT())}}
A.oY.prototype={
D(){return"GestureRecognizerState."+this.b}}
A.lX.prototype={
fd(a){var s=this
s.qJ(a)
if(s.ch===B.bm){s.ch=B.cP
s.CW=a.gaT()
s.cx=new A.e6(a.gcH(),a.gb5())
s.db=A.bH(s.at,new A.Pr(s,a))}},
mn(a){if(!this.cy)this.Hi(a)},
hQ(a){var s,r,q,p=this
if(p.ch===B.cP&&a.gaT()===p.CW){if(!p.cy)s=p.z0(a)>18
else s=!1
if(p.cy){r=p.ay
q=r!=null&&p.z0(a)>r}else q=!1
if(t.d.b(a))r=s||q
else r=!1
if(r){p.U(B.X)
r=p.CW
r.toString
p.f6(r)}else p.Dt(a)}p.x_(a)},
uo(){},
eI(a){if(a===this.CW){this.jO()
this.cy=!0}},
fA(a){var s=this
if(a===s.CW&&s.ch===B.cP){s.jO()
s.ch=B.xC}},
oR(a){var s=this
s.jO()
s.ch=B.bm
s.cx=null
s.cy=!1},
m(){this.jO()
this.l0()},
jO(){var s=this.db
if(s!=null){s.b3()
this.db=null}},
z0(a){return a.gb5().V(0,this.cx.b).gc7()}}
A.Pr.prototype={
$0(){this.a.uo()
return null},
$S:0}
A.e6.prototype={
S(a,b){return new A.e6(this.a.S(0,b.a),this.b.S(0,b.b))},
V(a,b){return new A.e6(this.a.V(0,b.a),this.b.V(0,b.b))},
j(a){return"OffsetPair(local: "+this.a.j(0)+", global: "+this.b.j(0)+")"}}
A.CW.prototype={}
A.mg.prototype={}
A.mh.prototype={}
A.vD.prototype={
fd(a){var s=this
if(s.ch===B.bm){if(s.k4!=null&&s.ok!=null)s.ly()
s.k4=a}if(s.k4!=null)s.Hq(a)},
nk(a,b){this.Hj(a,b)},
Dt(a){var s,r=this
if(t.Cs.b(a)){r.ok=a
r.y5()}else if(t.AJ.b(a)){r.U(B.X)
if(r.k2){s=r.k4
s.toString
r.pi(a,s,"")}r.ly()}else if(a.gcp()!==r.k4.gcp()){r.U(B.X)
s=r.CW
s.toString
r.f6(s)}},
U(a){var s,r=this
if(r.k3&&a===B.X){s=r.k4
s.toString
r.pi(null,s,"spontaneous")
r.ly()}r.xd(a)},
uo(){this.AS()},
eI(a){var s=this
s.xl(a)
if(a===s.CW){s.AS()
s.k3=!0
s.y5()}},
fA(a){var s,r=this
r.Hr(a)
if(a===r.CW){if(r.k2){s=r.k4
s.toString
r.pi(null,s,"forced")}r.ly()}},
AS(){var s,r=this
if(r.k2)return
s=r.k4
s.toString
r.Dv(s)
r.k2=!0},
y5(){var s,r,q=this
if(!q.k3||q.ok==null)return
s=q.k4
s.toString
r=q.ok
r.toString
q.Dw(s,r)
q.ly()},
ly(){var s=this
s.k3=s.k2=!1
s.k4=s.ok=null}}
A.eM.prototype={
hW(a){var s=this
switch(a.gcp()){case 1:if(s.aK==null&&s.bi==null&&s.aA==null&&s.a9==null)return!1
break
case 2:if(s.be==null&&s.I==null&&s.ap==null&&s.aH==null)return!1
break
case 4:return!1
break
default:return!1}return s.l_(a)},
Dv(a){var s,r=this,q=a.gb5()
a.gcH()
r.e.k(0,a.gaT()).toString
s=new A.mg(q)
switch(a.gcp()){case 1:if(r.aK!=null)r.cE("onTapDown",new A.S_(r,s))
break
case 2:if(r.I!=null)r.cE("onSecondaryTapDown",new A.S0(r,s))
break
case 4:break}},
Dw(a,b){var s,r,q=this
b.gd5()
b.gb5()
b.gcH()
s=new A.mh()
switch(a.gcp()){case 1:if(q.aA!=null)q.cE("onTapUp",new A.S1(q,s))
r=q.bi
if(r!=null)q.cE("onTap",r)
break
case 2:if(q.ap!=null)q.cE("onSecondaryTapUp",new A.S2(q,s))
if(q.be!=null)q.cE("onSecondaryTap",new A.S3(q))
break
case 4:break}},
pi(a,b,c){var s,r=this,q=c===""?c:c+" "
switch(b.gcp()){case 1:s=r.a9
if(s!=null)r.cE(q+"onTapCancel",s)
break
case 2:s=r.aH
if(s!=null)r.cE(q+"onSecondaryTapCancel",s)
break
case 4:break}}}
A.S_.prototype={
$0(){return this.a.aK.$1(this.b)},
$S:0}
A.S0.prototype={
$0(){return this.a.I.$1(this.b)},
$S:0}
A.S1.prototype={
$0(){return this.a.aA.$1(this.b)},
$S:0}
A.S2.prototype={
$0(){return this.a.ap.$1(this.b)},
$S:0}
A.S3.prototype={
$0(){return this.a.be.$0()},
$S:0}
A.eO.prototype={
V(a,b){return new A.eO(this.a.V(0,b.a))},
S(a,b){return new A.eO(this.a.S(0,b.a))},
Rm(a,b){var s=this.a,r=s.goU()
if(r>b*b)return new A.eO(s.ey(0,s.gc7()).X(0,b))
if(r<a*a)return new A.eO(s.ey(0,s.gc7()).X(0,a))
return this},
i(a,b){if(b==null)return!1
return b instanceof A.eO&&b.a.i(0,this.a)},
gq(a){var s=this.a
return A.G(s.a,s.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
j(a){var s=this.a
return"Velocity("+B.c.P(s.a,1)+", "+B.c.P(s.b,1)+")"}}
A.rF.prototype={
j(a){var s=this,r=s.a
return"VelocityEstimate("+B.c.P(r.a,1)+", "+B.c.P(r.b,1)+"; offset: "+s.d.j(0)+", duration: "+s.c.j(0)+", confidence: "+B.c.P(s.b,1)+")"}}
A.E9.prototype={
j(a){return"_PointAtTime("+this.b.j(0)+" at "+this.a.j(0)+")"}}
A.kE.prototype={
gtt(){var s=this.b
if(s==null){$.dd.toString
$.nn()
s=this.b=new A.ma()}return s},
lG(a,b){var s,r=this
r.gtt().qv()
r.gtt().dv()
s=++r.d
if(s===20)s=r.d=0
r.c[s]=new A.E9(a,b)},
wC(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
if(this.gtt().gSw()>40)return B.JH
s=t.n
r=A.a([],s)
q=A.a([],s)
p=A.a([],s)
o=A.a([],s)
n=this.d
s=this.c
m=s[n]
if(m==null)return null
l=m.a.a
k=m
j=k
i=0
do{h=s[n]
if(h==null)break
g=h.a.a
f=(l-g)/1000
if(f>100||Math.abs(g-j.a.a)/1000>40)break
e=h.b
r.push(e.a)
q.push(e.b)
p.push(1)
o.push(-f)
n=(n===0?20:n)-1;++i
if(i<20){k=h
j=k
continue}else{k=h
break}}while(!0)
if(i>=3){d=new A.xW(o,r,p).wY(2)
if(d!=null){c=new A.xW(o,q,p).wY(2)
if(c!=null){s=d.a[1]
g=c.a[1]
b=d.b
b===$&&A.c()
a=c.b
a===$&&A.c()
return new A.rF(new A.z(s*1000,g*1000),b*a,new A.aS(l-k.a.a),m.b.V(0,k.b))}}}return new A.rF(B.h,1,new A.aS(l-k.a.a),m.b.V(0,k.b))}}
A.B9.prototype={
N(a){var s=this
return new A.xE(s.c,null,new A.Tk(s,a),s.rH(a),s.f,null)}}
A.Tk.prototype={
$0(){this.a.t9(this.b)},
$S:0}
A.mx.prototype={
N(a){var s,r,q,p
a.aa(t.tH)
s=A.aG(a)
r=this.c.$1(s.R8)
if(r!=null)return r.$1(a)
q=this.d.$1(a)
switch(A.j_().a){case 0:s=A.y2(a,B.cx,t.z4)
s.toString
p=this.e.$1(s)
break
case 1:case 3:case 5:case 2:case 4:p=null
break
default:p=null}return new A.lA(q,p,null)}}
A.vC.prototype={
N(a){return new A.mx(new A.Ib(),new A.Ic(),new A.Id(),null)}}
A.Ib.prototype={
$1(a){return a==null?null:a.a},
$S:50}
A.Ic.prototype={
$1(a){return B.xF},
$S:51}
A.Id.prototype={
$1(a){return"Back"},
$S:52}
A.vB.prototype={
t9(a){return A.acE(a)},
rH(a){A.y2(a,B.cx,t.z4).toString
return"Back"}}
A.wX.prototype={
N(a){return new A.mx(new A.Kc(),new A.Kd(),new A.Ke(),null)}}
A.Kc.prototype={
$1(a){return a==null?null:a.c},
$S:50}
A.Kd.prototype={
$1(a){return B.iy},
$S:51}
A.Ke.prototype={
$1(a){return"Open navigation menu"},
$S:52}
A.wW.prototype={
t9(a){var s,r,q=A.qR(a),p=q.e
if(p.gbc()!=null){s=q.x
r=s.y
s=r==null?A.q(s).h("by.T").a(r):r}else s=!1
if(s)p.gbc().av()
q=q.d.gbc()
if(q!=null)q.Vw()
return null},
rH(a){A.y2(a,B.cx,t.z4).toString
return"Open navigation menu"}}
A.x_.prototype={
N(a){return new A.mx(new A.Ku(),new A.Kv(),new A.Kw(),null)}}
A.Ku.prototype={
$1(a){return a==null?null:a.d},
$S:50}
A.Kv.prototype={
$1(a){return B.iy},
$S:51}
A.Kw.prototype={
$1(a){return"Open navigation menu"},
$S:52}
A.wZ.prototype={
t9(a){var s,r,q=A.qR(a),p=q.d
if(p.gbc()!=null){s=q.w
r=s.y
s=r==null?A.q(s).h("by.T").a(r):r}else s=!1
if(s)p.gbc().av()
q=q.e.gbc()
if(q!=null)q.Vw()
return null},
rH(a){A.y2(a,B.cx,t.z4).toString
return"Open navigation menu"}}
A.l2.prototype={
gq(a){var s=this
return A.bs([s.a,s.b,s.c,s.d])},
i(a,b){var s
if(b==null)return!1
if(this===b)return!0
if(J.I(b)!==A.u(this))return!1
if(b instanceof A.l2)s=!0
else s=!1
return s}}
A.Bb.prototype={}
A.SM.prototype={
D(){return"ThemeMode."+this.b}}
A.pz.prototype={
ao(){return new A.tw(B.p)}}
A.NN.prototype={
$2(a,b){return new A.lM(a,b)},
$S:147}
A.NR.prototype={}
A.tw.prototype={
aZ(){this.bl()
this.d=A.ach()},
m(){var s=this.d
s===$&&A.c()
s.m()
this.aW()},
gNO(){var s=A.a([],t.wv)
this.a.toString
s.push(B.vE)
s.push(B.vz)
return s},
NE(a,b){return A.a2N(B.xK,!0,b,null)},
NW(a,b){var s,r,q,p,o,n,m,l,k,j=this,i=null
j.a.toString
s=A.di(a,B.tX)
r=s==null?i:s.e
if(r==null)r=B.L
q=r===B.a2
s=A.di(a,B.tU)
s=s==null?i:s.as
p=s===!0
if(q)if(p)j.a.toString
if(q)j.a.toString
if(p)j.a.toString
o=j.a.db
s=o.hO
n=s.b
if(n==null){m=o.ay.b
n=A.Y(102,m.gn()>>>16&255,m.gn()>>>8&255,m.gn()&255)}l=s.a
if(l==null)l=o.ay.b
k=b==null?B.fQ:b
j.a.toString
$.a7x()
k=new A.nt(o,k,B.ag,B.a6,i,i)
return new A.qQ(A.ZO(k,l,i,i,n),i)},
JY(a){var s,r,q=this,p=null,o=q.a,n=o.db
n=n.fx
s=n
if(s==null)s=B.dg
n=o.e
o=o.cx
r=q.gNO()
q.a.toString
return new A.rH(p,p,p,new A.VL(),p,p,p,p,p,n,B.B7,p,p,p,B.z3,q.gNV(),o,p,B.F9,s,p,r,p,p,B.iJ,!1,!1,!1,!1,q.gND(),!0,p,p,p,new A.jE(q,t.By))},
N(a){var s,r=null,q=A.xj(!1,!1,this.JY(a),r,r,r,r,!0,r,r,r,new A.VM(),r,r)
this.a.toString
s=this.d
s===$&&A.c()
return new A.A8(B.v4,new A.jH(s,q,r),r)}}
A.VL.prototype={
$1$2(a,b,c){var s=null,r=A.a([],t.F8),q=$.a6,p=A.zj(B.bP),o=A.a([],t.tD),n=$.aD(),m=$.a6,l=c.h("af<0?>"),k=c.h("bu<0?>")
return new A.ey(b,!1,!0,!1,r,A.aw(t.ii),new A.cg(s,c.h("cg<kL<0>>")),new A.cg(s,t.DU),new A.OK(),s,0,new A.bu(new A.af(q,c.h("af<0?>")),c.h("bu<0?>")),p,o,a,new A.dO(s,n),new A.bu(new A.af(m,l),k),new A.bu(new A.af(m,l),k),c.h("ey<0>"))},
$2(a,b){return this.$1$2(a,b,t.z)},
$S:150}
A.VM.prototype={
$2(a,b){if(!(b instanceof A.fX)&&!(b instanceof A.lJ)||!b.b.i(0,B.c8))return B.bZ
return A.aeB()?B.bY:B.bZ},
$S:102}
A.Xe.prototype={
wr(a){return a.w4(this.b)},
qg(a){return new A.U(a.b,this.b)},
wz(a,b){return new A.z(0,a.b-b.b)},
kV(a){return this.b!==a.b}}
A.EG.prototype={}
A.nC.prototype={
LT(a){var s=new A.I0(this,a).$0()
return s},
ao(){return new A.rO(B.p)},
Vj(a){return A.aiF().$1(a)}}
A.I0.prototype={
$0(){switch(this.b.w.a){case 0:case 1:case 3:case 5:return!1
case 2:case 4:return!0}},
$S:84}
A.rO.prototype={
bd(){var s,r=this
r.dC()
s=r.d
if(s!=null)s.M(r.grP())
s=r.c.aa(t.dT)
s=s==null?null:s.f
r.d=s
if(s!=null){s=s.d
s.rV(s.c,new A.iL(r.grP()),!1)}},
m(){var s=this,r=s.d
if(r!=null){r.M(s.grP())
s.d=null}s.aW()},
Nb(a){var s,r=this.a.Vj(a)
if(r){s=a.gXn()
switch(s.goy()){case B.aP:this.e=s.gXd().FQ(0,0)
break
case B.aQ:this.e=s.gXe().FQ(0,0)
break
case B.be:case B.bf:break}}},
N(b6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8=this,a9=null,b0=A.aG(b6),b1=A.a33(b6),b2=A.aG(b6).RG,b3=new A.Tu(b6,a9,a9,0,3,a9,a9,a9,a9,a9,a9,16,64,a9,a9,a9),b4=b6.pa(t.yp),b5=A.O5(b6,t.X)
b6.aa(t.Ct)
s=A.aw(t.BD)
r=b4==null
if(r)q=a9
else{b4.a.toString
q=!1}if(r)b4=a9
else{b4.a.toString
b4=!1}r=a8.a
r.toString
p=b2.Q
if(p==null)p=56
o=b3.gby()
n=t._
r=A.jU(r.ax,s,n)
if(r==null)r=A.jU(b2.a,s,n)
if(r==null)r=A.jU(o,s,t.G)
a8.a.toString
m=b2.b
l=m==null?b3.gbV():m
a8.a.toString
k=b2.c
if(k==null){o=b3.c
o.toString
k=o}if(s.t(0,B.Bd)){a8.a.toString
s=b2.d
if(s==null)s=b3.d
j=s==null?k:s}else j=k
a8.a.toString
i=b2.w
h=i==null?b3.gkv().fj(l):i
a8.a.toString
s=b2.x
if(s==null)s=a9
if(s==null)s=i
if(s==null){s=b3.gjP().fj(m)
g=s}else g=s
if(g==null)g=h
a8.a.toString
f=b2.as
if(f==null){s=b3.gmX()
f=s==null?a9:s.fj(l)}a8.a.toString
e=b2.at
if(e==null){s=b3.gmU()
e=s==null?a9:s.fj(l)}a8.a.toString
if(q===!0){s=h.a
d=new A.wW(B.x7,a9,A.p3(a9,a9,a9,a9,a9,a9,a9,a9,a9,s==null?24:s,a9,a9,a9,a9),a9)}else{if(b5==null)s=a9
else s=b5.guS()||b5.iC$>0
if(s===!0)d=B.u6
else d=a9}if(d!=null){if(h.i(0,b3.gkv()))c=b1
else{b=A.p3(a9,a9,a9,a9,a9,a9,h.f,a9,a9,h.a,a9,a9,a9,a9)
s=b1.a
c=new A.jI(s==null?a9:s.Cp(b.c,b.as,b.d))}d=A.a32(d,c)
a8.a.toString
d=new A.el(A.nP(a9,56),d,a9)}a=a8.a.e
a0=new A.Bp(a,a9)
a1=b0.w
$label0$0:{if(B.al===a1||B.bz===a1||B.b9===a1||B.ba===a1){s=!0
break $label0$0}if(B.at===a1||B.aN===a1){s=a9
break $label0$0}throw A.e(A.fl(u.d))}a=A.d4(a9,a0,!1,a9,!1,a9,a9,!0,a9,s,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9)
e.toString
a=A.acq(A.wG(a,a9,B.cw,!1,e,a9,a9,B.aC),1.34)
if(b4===!0){b4=h.a
a2=new A.wZ(B.xp,a9,A.p3(a9,a9,a9,a9,a9,a9,a9,a9,a9,b4==null?24:b4,a9,a9,a9,a9),a9)}else a2=a9
if(a2!=null){if(g.i(0,b3.gjP()))a3=b1
else{a4=A.p3(a9,a9,a9,a9,a9,a9,g.f,a9,a9,g.a,a9,a9,a9,a9)
b4=b1.a
a3=new A.jI(b4==null?a9:b4.Cp(a4.c,a4.as,a4.d))}a2=A.a32(A.xF(a2,g),a3)}b4=a8.a.LT(b0)
a8.a.toString
s=b2.z
if(s==null)s=16
f.toString
b4=A.xF(A.wG(new A.ys(d,a,a2,b4,s,a9),a9,B.cv,!0,f,a9,a9,B.aC),h)
a5=A.ady(!1,new A.w8(B.aH,new A.o8(new A.Xe(p),b4,a9),a9),!0)
b4=A.SK(r)
a6=b4===B.a2?B.Ep:B.Eq
a7=new A.fn(a9,a9,a9,a9,B.Q,a6.f,a6.r,a6.w)
a8.a.toString
b4=b2.e
if(b4==null)b4=b3.gbJ()
a8.a.toString
s=b2.f
if(s==null)s=b3.gc4()
a8.a.toString
q=b2.r
if(q==null)q=b3.r
return A.d4(a9,new A.nA(a7,A.NM(B.a6,A.d4(a9,new A.j4(B.u2,a9,a9,a5,a9),!1,a9,!0,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9),B.M,r,j,a9,b4,q,s,a9,B.dn),a9,t.qC),!0,a9,!1,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9)}}
A.Bp.prototype={
ah(a){var s=a.aa(t.I)
s.toString
s=new A.F_(B.a9,s.w,null,A.ak())
s.aj()
s.sag(null)
return s},
aC(a,b){var s=a.aa(t.I)
s.toString
b.scd(s.w)}}
A.F_.prototype={
c6(a){var s=a.Ck(1/0)
return a.bh(this.db$.hj(s))},
bI(){var s=this,r=A.L.prototype.gaw.call(s).Ck(1/0)
s.db$.cF(r,!0)
s.id=A.L.prototype.gaw.call(s).bh(s.db$.gH())
s.tT()}}
A.Tu.prototype={
gAX(){var s,r=this,q=r.ch
if(q===$){s=A.aG(r.ay)
r.ch!==$&&A.a3()
r.ch=s
q=s}return q},
gl8(){var s,r=this,q=r.CW
if(q===$){s=r.gAX()
r.CW!==$&&A.a3()
q=r.CW=s.ay}return q},
gAW(){var s,r=this,q=r.cx
if(q===$){s=r.gAX()
r.cx!==$&&A.a3()
q=r.cx=s.p3}return q},
gby(){return this.gl8().cy},
gbV(){return this.gl8().db},
gbJ(){return B.Q},
gc4(){var s=this.gl8(),r=s.k3
return r==null?s.b:r},
gkv(){var s=null
return new A.bN(24,s,s,s,s,this.gl8().db,s,s,s)},
gjP(){var s=null,r=this.gl8(),q=r.dy
return new A.bN(24,s,s,s,s,q==null?r.db:q,s,s,s)},
gmX(){return this.gAW().z},
gmU(){return this.gAW().r}}
A.l5.prototype={
gq(a){var s=this
return A.G(s.gby(),s.gbV(),s.c,s.d,s.gbJ(),s.gc4(),s.r,s.gkv(),s.gjP(),s.y,s.z,s.Q,s.gmX(),s.gmU(),s.ax,B.a,B.a,B.a,B.a,B.a)},
i(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.I(b)!==A.u(s))return!1
return b instanceof A.l5&&J.d(b.gby(),s.gby())&&J.d(b.gbV(),s.gbV())&&b.c==s.c&&b.d==s.d&&J.d(b.gbJ(),s.gbJ())&&J.d(b.gc4(),s.gc4())&&J.d(b.r,s.r)&&J.d(b.gkv(),s.gkv())&&J.d(b.gjP(),s.gjP())&&b.z==s.z&&b.Q==s.Q&&J.d(b.gmX(),s.gmX())&&J.d(b.gmU(),s.gmU())&&!0},
gby(){return this.a},
gbV(){return this.b},
gbJ(){return this.e},
gc4(){return this.f},
gkv(){return this.w},
gjP(){return this.x},
gmX(){return this.as},
gmU(){return this.at}}
A.Bo.prototype={}
A.pC.prototype={
fP(){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.a
f.toString
s=g.b
s.toString
r=s.V(0,f)
q=Math.abs(r.a)
p=Math.abs(r.b)
o=r.gc7()
n=s.a
m=f.b
l=new A.z(n,m)
k=new A.NP(g,o)
if(q>2&&p>2){j=o*o
i=f.a
h=s.b
if(q<p){f=j/l.V(0,f).gc7()/2
g.e=f
g.d=new A.z(n+f*J.l1(i-n),h)
if(i<n){g.f=k.$0()*J.l1(m-h)
g.r=0}else{g.f=3.141592653589793+k.$0()*J.l1(h-m)
g.r=3.141592653589793}}else{g.e=j/l.V(0,s).gc7()/2
f=J.l1(h-m)
s=g.e
s.toString
g.d=new A.z(i,m+f*s)
if(m<h){g.f=-1.5707963267948966
g.r=-1.5707963267948966+k.$0()*J.l1(n-i)}else{g.f=1.5707963267948966
g.r=1.5707963267948966+k.$0()*J.l1(i-n)}}}else g.r=g.f=null
g.c=!1},
gaz(){var s=this
if(s.a==null||s.b==null)return null
if(s.c)s.fP()
return s.d},
gVM(){var s=this
if(s.a==null||s.b==null)return null
if(s.c)s.fP()
return s.e},
gR2(){var s=this
if(s.a==null||s.b==null)return null
if(s.c)s.fP()
return s.f},
gSC(){var s=this
if(s.a==null||s.b==null)return null
if(s.c)s.fP()
return s.f},
su_(a){if(!J.d(a,this.a)){this.a=a
this.c=!0}},
ske(a){if(!J.d(a,this.b)){this.b=a
this.c=!0}},
cX(a){var s,r,q,p,o=this
if(o.c)o.fP()
if(a===0){s=o.a
s.toString
return s}if(a===1){s=o.b
s.toString
return s}s=o.f
if(s==null||o.r==null){s=A.pZ(o.a,o.b,a)
s.toString
return s}s=A.F(s,o.r,a)
s.toString
r=Math.cos(s)
q=o.e
q.toString
s=Math.sin(s)
p=o.e
p.toString
return o.d.S(0,new A.z(r*q,s*p))},
j(a){var s=this
return"MaterialPointArcTween("+A.f(s.a)+" \u2192 "+A.f(s.b)+"; center="+A.f(s.gaz())+", radius="+A.f(s.gVM())+", beginAngle="+A.f(s.gR2())+", endAngle="+A.f(s.gSC())+")"}}
A.NP.prototype={
$0(){var s=this.a.e
s.toString
return 2*Math.asin(this.b/(2*s))},
$S:153}
A.mD.prototype={
D(){return"_CornerId."+this.b}}
A.hu.prototype={}
A.lM.prototype={
fP(){var s,r,q=this,p=A.agT(B.yV,new A.NQ(q,q.b.gaz().V(0,q.a.gaz()))),o=q.a
o.toString
s=p.a
o=q.jz(o,s)
r=q.b
r.toString
q.f=new A.pC(o,q.jz(r,s))
s=q.a
s.toString
r=p.b
s=q.jz(s,r)
o=q.b
o.toString
q.r=new A.pC(s,q.jz(o,r))
q.e=!1},
jz(a,b){switch(b.a){case 0:return new A.z(a.a,a.b)
case 1:return new A.z(a.c,a.b)
case 2:return new A.z(a.a,a.d)
case 3:return new A.z(a.c,a.d)}},
gR3(){var s,r=this
if(r.a==null)return null
if(r.e)r.fP()
s=r.f
s===$&&A.c()
return s},
gSD(){var s,r=this
if(r.b==null)return null
if(r.e)r.fP()
s=r.r
s===$&&A.c()
return s},
su_(a){if(!J.d(a,this.a)){this.a=a
this.e=!0}},
ske(a){if(!J.d(a,this.b)){this.b=a
this.e=!0}},
cX(a){var s,r,q=this
if(q.e)q.fP()
if(a===0){s=q.a
s.toString
return s}if(a===1){s=q.b
s.toString
return s}s=q.f
s===$&&A.c()
s=s.cX(a)
r=q.r
r===$&&A.c()
return A.ado(s,r.cX(a))},
j(a){var s=this
return"MaterialRectArcTween("+A.f(s.a)+" \u2192 "+A.f(s.b)+"; beginArc="+A.f(s.gR3())+", endArc="+A.f(s.gSD())+")"}}
A.NQ.prototype={
$1(a){var s,r,q,p=this.a,o=this.b,n=p.a
n.toString
n=p.jz(n,a.b)
s=p.a
s.toString
r=n.V(0,p.jz(s,a.a))
q=r.gc7()
return o.a*r.a/q+o.b*r.b/q},
$S:154}
A.nI.prototype={
gq(a){var s=this
return A.G(s.a,s.b,s.c,s.d,s.e,s.f,s.r,s.w,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.I(b)!==A.u(s))return!1
return b instanceof A.nI&&J.d(b.a,s.a)&&J.d(b.b,s.b)&&b.c==s.c&&b.d==s.d&&J.d(b.e,s.e)&&J.d(b.f,s.f)&&J.d(b.r,s.r)&&J.d(b.w,s.w)}}
A.Bu.prototype={}
A.pA.prototype={
gq(a){var s=this
return A.G(s.a,s.b,s.c,s.d,s.e,s.f,s.r,s.w,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.I(b)!==A.u(s))return!1
return b instanceof A.pA&&J.d(b.a,s.a)&&J.d(b.b,s.b)&&J.d(b.c,s.c)&&J.d(b.d,s.d)&&J.d(b.e,s.e)&&b.f==s.f&&J.d(b.r,s.r)&&J.d(b.w,s.w)}}
A.Dw.prototype={}
A.nL.prototype={
gq(a){var s=this
return A.G(s.a,s.b,s.c,s.d,s.e,s.f,s.r,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.I(b)!==A.u(s))return!1
return b instanceof A.nL&&J.d(b.a,s.a)&&b.b==s.b&&b.d==s.d&&J.d(b.e,s.e)&&J.d(b.f,s.f)&&J.d(b.r,s.r)}}
A.Bz.prototype={}
A.nM.prototype={
gq(a){var s=this
return A.G(s.a,s.b,s.c,s.d,s.e,s.f,s.r,s.w,s.x,s.y,s.z,s.Q,s.as,s.at,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(J.I(b)!==A.u(r))return!1
if(b instanceof A.nM)if(J.d(b.a,r.a))if(b.b==r.b)if(J.d(b.c,r.c))if(J.d(b.d,r.d))if(J.d(b.e,r.e))if(J.d(b.f,r.f))if(J.d(b.r,r.r))if(J.d(b.w,r.w))s=!0
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
return s}}
A.BA.prototype={}
A.nN.prototype={
gq(a){var s=this
return A.G(s.gby(),s.gc4(),s.c,s.d,s.e,s.gbJ(),s.r,s.w,s.x,s.guv(),s.guw(),s.Q,s.gaw(),B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(J.I(b)!==A.u(r))return!1
if(b instanceof A.nN)if(J.d(b.gby(),r.gby()))if(J.d(b.gc4(),r.gc4()))if(b.c==r.c)if(J.d(b.d,r.d))if(J.d(b.gbJ(),r.gbJ()))if(J.d(b.e,r.e))if(b.r==r.r)if(J.d(b.w,r.w))if(J.d(b.guv(),r.guv()))if(J.d(b.guw(),r.guw()))s=J.d(b.gaw(),r.gaw())
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
return s},
gby(){return this.a},
gc4(){return this.b},
gbJ(){return this.f},
guv(){return this.y},
guw(){return this.z},
gaw(){return this.as}}
A.BB.prototype={}
A.qr.prototype={
ao(){return new A.EO(A.aw(t.BD),B.p)}}
A.EO.prototype={
aZ(){this.bl()
this.a.toString
this.pY(B.G)},
aS(a){var s,r=this
r.br(a)
r.a.toString
r.pY(B.G)
s=r.kj$
if(s.t(0,B.G)&&s.t(0,B.K))r.pY(B.K)},
gLh(){var s=this,r=s.kj$
if(r.t(0,B.G))return s.a.ch
if(r.t(0,B.K))return s.a.ay
if(r.t(0,B.Z))return s.a.at
if(r.t(0,B.a_))return s.a.ax
return s.a.as},
N(a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=null,a2=a0.a.r,a3=a0.kj$,a4=A.jU(a2.b,a3,t._),a5=A.jU(a0.a.db,a3,t.uD)
a0.a.toString
s=new A.z(0,0).X(0,4)
r=B.bD.CT(a0.a.cy)
a2=a0.a.f
q=A.jU(a2,a3,t.EA)
a0.a.toString
a2=s.a
a3=s.b
p=B.aX.C(0,new A.bd(a2,a3,a2,a3)).hD(0,B.aX,B.tY)
o=a0.gLh()
n=a0.a.r.fj(a4)
m=a0.a.w
A.aG(a6)
l=A.aG(a6)
k=a0.a
j=k.go
k=k.fx
i=a0.F4(B.a_)
a0.a.toString
h=a0.F5(B.K,a1)
g=a0.a
f=g.Q
e=g.x
g=g.y
d=a0.F4(B.Z)
c=a0.a
b=c.c
n=A.NM(B.a6,A.a38(!1,!0,A.xF(A.a1Z(a1,A.IH(c.dy,1,1),a1,a1,a1,a1,p,a1),new A.bN(a1,a1,a1,a1,a1,a4,a1,a1,a1)),a5,!0,e,k,a1,g,q,i,h,d,a1,b,a1,f,a1,a1),j,m,o,a1,l.k2,a5,a1,n,B.fj)
switch(c.fr.a){case 0:a=new A.U(48+a2,48+a3)
break
case 1:a=B.I
break
default:a=a1}return A.d4(!0,new A.Db(a,new A.el(r,n,a1),a1),!0,!0,!1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1)}}
A.Db.prototype={
ah(a){var s=new A.F5(this.e,null,A.ak())
s.aj()
s.sag(null)
return s},
aC(a,b){b.svf(this.e)}}
A.F5.prototype={
svf(a){if(this.u.i(0,a))return
this.u=a
this.a4()},
xV(a,b){var s,r,q=this.db$
if(q!=null){s=b.$2(q,a)
q=s.a
r=this.u
return a.bh(new A.U(Math.max(q,r.a),Math.max(s.b,r.b)))}return B.I},
c6(a){return this.xV(a,A.vb())},
bI(){var s,r=this
r.id=r.xV(A.L.prototype.gaw.call(r),A.vc())
s=r.db$
if(s!=null){s=s.b
s.toString
t.q.a(s).a=B.a9.jS(t.uu.a(r.gH().V(0,r.db$.gH())))}},
bE(a,b){var s
if(this.fK(a,b))return!0
s=this.db$.gH().fe(B.h)
return a.tS(new A.Wv(this,s),s,A.a3z(s))}}
A.Wv.prototype={
$2(a,b){return this.a.db$.bE(a,this.b)},
$S:16}
A.GR.prototype={}
A.nR.prototype={
gq(a){var s=this
return A.G(s.a,s.b,s.c,s.d,s.e,s.f,s.r,s.w,s.x,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(J.I(b)!==A.u(r))return!1
if(b instanceof A.nR)if(b.d==r.d)if(b.e==r.e)if(J.d(b.f,r.f))s=!0
else s=!1
else s=!1
else s=!1
else s=!1
return s}}
A.BC.prototype={}
A.aM.prototype={
Co(a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4){var s=this,r=c3==null?s.a:c3,q=a5==null?s.gby():a5,p=a9==null?s.gbV():a9,o=b5==null?s.gfv():b5,n=b7==null?s.gbJ():b7,m=c1==null?s.gc4():c1,l=a6==null?s.gcQ():a6,k=b6==null?s.gci():b6,j=b3==null?s.gft():b3,i=a8==null?s.y:a8,h=b2==null?s.gfs():b2,g=b0==null?s.Q:b0,f=b1==null?s.gcV():b1,e=b9==null?s.gf3():b9,d=b8==null?s.gbT():b8,c=b4==null?s.gfu():b4,b=c4==null?s.gfE():c4,a=c2==null?s.gfB():c2,a0=a4==null?s.cx:a4,a1=a7==null?s.cy:a7,a2=a3==null?s.db:a3
return A.ZC(a2,a0,q,l,a1,i,p,g,f,h,j,c,o,k,n,d,e,c0==null?s.gf5():c0,m,a,r,b)},
Cp(a,b,c){var s=null
return this.Co(s,s,s,s,s,s,a,s,b,s,s,s,c,s,s,s,s,s,s,s,s,s)},
bw(a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=this,a3=a2.a
if(a3==null)a3=a4.a
s=a2.gby()
if(s==null)s=a4.b
r=a2.gbV()
if(r==null)r=a4.c
q=a2.gfv()
if(q==null)q=a4.d
p=a2.gbJ()
if(p==null)p=a4.e
o=a2.gc4()
if(o==null)o=a4.f
n=a2.gcQ()
if(n==null)n=a4.r
m=a2.gci()
if(m==null)m=a4.w
l=a2.gft()
if(l==null)l=a4.x
k=a2.y
if(k==null)k=a4.y
j=a2.gfs()
if(j==null)j=a4.z
i=a2.Q
if(i==null)i=a4.Q
h=a2.gcV()
if(h==null)h=a4.as
g=a2.gf3()
if(g==null)g=a4.at
f=a2.gbT()
if(f==null)f=a4.ax
e=a2.gfu()
if(e==null)e=a4.ay
d=a2.gfE()
if(d==null)d=a4.ch
c=a2.gfB()
if(c==null)c=a4.CW
b=a2.cx
if(b==null)b=a4.cx
a=a2.cy
if(a==null)a=a4.cy
a0=a2.db
if(a0==null)a0=a4.db
a1=a2.gf5()
return a2.Co(a0,b,s,n,a,k,r,i,h,j,l,e,q,m,p,f,g,a1==null?a4.dx:a1,o,c,a3,d)},
gq(a){var s=this
return A.bs([s.a,s.gby(),s.gbV(),s.gfv(),s.gbJ(),s.gc4(),s.gcQ(),s.gci(),s.gft(),s.y,s.gfs(),s.Q,s.gcV(),s.gf3(),s.gbT(),s.gfu(),s.gfE(),s.gfB(),s.cx,s.cy,s.db,s.gf5()])},
i(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.I(b)!==A.u(s))return!1
return b instanceof A.aM&&b.a==s.a&&b.gby()==s.gby()&&b.gbV()==s.gbV()&&b.gfv()==s.gfv()&&b.gbJ()==s.gbJ()&&b.gc4()==s.gc4()&&b.gcQ()==s.gcQ()&&b.gci()==s.gci()&&b.gft()==s.gft()&&b.y==s.y&&b.gfs()==s.gfs()&&b.Q==s.Q&&b.gcV()==s.gcV()&&b.gf3()==s.gf3()&&b.gbT()==s.gbT()&&b.gfu()==s.gfu()&&J.d(b.gfE(),s.gfE())&&b.gfB()==s.gfB()&&J.d(b.cx,s.cx)&&b.cy==s.cy&&J.d(b.db,s.db)&&b.gf5()==s.gf5()},
gby(){return this.b},
gbV(){return this.c},
gfv(){return this.d},
gbJ(){return this.e},
gc4(){return this.f},
gcQ(){return this.r},
gci(){return this.w},
gft(){return this.x},
gfs(){return this.z},
gcV(){return this.as},
gf3(){return this.at},
gbT(){return this.ax},
gfu(){return this.ay},
gfE(){return this.ch},
gfB(){return this.CW},
gf5(){return this.dx}}
A.Do.prototype={
U(a){var s,r=this,q=r.a,p=q==null?null:q.U(a)
q=r.b
s=q==null?null:q.U(a)
q=p==null
if(q&&s==null)return null
if(q){q=s.a.a
return A.a5(new A.bk(A.Y(0,q>>>16&255,q>>>8&255,q&255),0,B.F,-1),s,r.c)}if(s==null){q=p.a.a
return A.a5(p,new A.bk(A.Y(0,q>>>16&255,q>>>8&255,q&255),0,B.F,-1),r.c)}return A.a5(p,s,r.c)},
$iaO:1}
A.BD.prototype={}
A.nS.prototype={
ao(){return new A.rS(null,null,B.p)}}
A.rS.prototype={
uQ(){this.aE(new A.U8())},
gce(){var s=this.a.z
return s},
mp(){var s,r=this
r.a.toString
s=r.gce()
r.a.toString
s.ew(B.G,!1)
r.gce().a6(r.giH())},
aZ(){this.bl()
this.mp()},
aS(a){var s,r=this
r.br(a)
s=a.z
if(r.a.z!==s){s.M(r.giH())
r.a.toString
s=r.r
if(s!=null){s.dy$=$.aD()
s.dx$=0}r.r=null
r.mp()}r.a.toString},
m(){var s,r=this
r.gce().M(r.giH())
s=r.r
if(s!=null){s.dy$=$.aD()
s.dx$=0}s=r.d
if(s!=null)s.m()
r.J1()},
N(c5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0=this,c1=null,c2=c0.a,c3=new A.U5(c2.r,c2.Wm(c5),c0.a.Sf(c5)),c4=new A.U6(c0,c3)
c2=t.u6
s=c4.$1$1(new A.TJ(),c2)
r=c4.$1$1(new A.TK(),t.w8)
q=t._
p=c4.$1$1(new A.TL(),q)
o=c4.$1$1(new A.TW(),q)
n=c4.$1$1(new A.TZ(),q)
m=c4.$1$1(new A.U_(),q)
l=c4.$1$1(new A.U0(),t.DS)
k=t.xB
j=c4.$1$1(new A.U1(),k)
i=c4.$1$1(new A.U2(),k)
h=c4.$1$1(new A.U3(),k)
g=c4.$1$1(new A.U4(),q)
f=c4.$1$1(new A.TM(),c2)
e=c4.$1$1(new A.TN(),t.Fn)
d=c4.$1$1(new A.TO(),t.yX)
c=c3.$1$1(new A.TP(),t.vW)
b=c3.$1$1(new A.TQ(),t.c1)
a=c3.$1$1(new A.TR(),t.ya)
a0=c3.$1$1(new A.TS(),t.y)
a1=c3.$1$1(new A.TT(),t.bX)
a2=new A.z(c.a,c.b).X(0,4)
a3=c3.$1$1(new A.TU(),t.zQ)
c2=j.a
q=j.b
a4=c.CT(new A.aJ(c2,h.a,q,h.b))
if(i!=null){a5=a4.bh(i)
c2=a5.a
if(isFinite(c2))a4=a4.RW(c2,c2)
c2=a5.b
if(isFinite(c2))a4=a4.RV(c2,c2)}a6=a2.b
c2=a2.a
a7=Math.max(0,c2)
a8=l.C(0,new A.bd(a7,a6,a7,a6)).hD(0,B.aX,B.tY)
if(a.a>0){q=c0.e
if(q!=null){k=c0.f
q=k!=null&&q!==s&&k.gn()!==p.gn()&&(c0.f.gn()>>>24&255)/255===1&&(p.gn()>>>24&255)/255<1&&s===0}else q=!1}else q=!1
if(q){q=c0.d
if(!J.d(q==null?c1:q.e,a)){q=c0.d
if(q!=null)q.m()
q=A.dS(c1,a,c1,c1,c0)
q.b7()
k=q.bD$
k.b=!0
k.a.push(new A.TV(c0))
c0.d=q}p=c0.f
c0.d.sn(0)
c0.d.cU()}c0.e=s
c0.f=p
s.toString
q=r==null?c1:r.fj(o)
k=d.it(e)
a9=p==null?B.dp:B.fj
b0=c0.a
b1=b0.w
b2=b0.c
b3=b0.d
b4=b0.e
b5=b0.x
b0=b0.f
b6=d.it(e)
b7=c0.gce()
b8=g==null?o:g
a1.toString
a9=A.NM(a,A.a38(!1,!0,A.xF(new A.ie(a8,new A.j4(a1,1,1,c0.a.as,c1),c1),new A.bN(f,c1,c1,c1,c1,b8,c1,c1,c1)),b6,a0,c1,b5,B.Q,c1,new A.DJ(new A.TX(c3)),b0,c1,b4,b3,b2,new A.bS(new A.TY(c3),t.T),c1,a3,b7),b1,p,s,c1,n,k,m,q,a9)
switch(b.a){case 0:b9=new A.U(48+c2,48+a6)
break
case 1:b9=B.I
break
default:b9=c1}return A.d4(!0,new A.Dc(b9,new A.el(a4,a9,c1),c1),!0,!0,!1,c1,c1,c1,c1,c1,c1,c1,c1,c1,c1,c1,c1,c1,c1,c1)}}
A.U8.prototype={
$0(){},
$S:0}
A.U5.prototype={
$1$1(a,b){var s=a.$1(this.a),r=a.$1(this.b),q=a.$1(this.c),p=s==null?r:s
return p==null?q:p},
$1(a){return this.$1$1(a,t.z)},
$S:156}
A.U6.prototype={
$1$1(a,b){return this.b.$1$1(new A.U7(this.a,a,b),b)},
$1(a){return this.$1$1(a,t.z)},
$S:157}
A.U7.prototype={
$1(a){var s=this.b.$1(a)
return s==null?null:s.U(this.a.gce().a)},
$S(){return this.c.h("0?(aM?)")}}
A.TJ.prototype={
$1(a){var s=a.gcQ()
return s},
$S:63}
A.TK.prototype={
$1(a){return a.a},
$S:159}
A.TL.prototype={
$1(a){var s=a.gby()
return s},
$S:30}
A.TW.prototype={
$1(a){var s=a.gbV()
return s},
$S:30}
A.TZ.prototype={
$1(a){var s=a.gbJ()
return s},
$S:30}
A.U_.prototype={
$1(a){var s=a.gc4()
return s},
$S:30}
A.U0.prototype={
$1(a){var s=a.gci()
return s},
$S:161}
A.U1.prototype={
$1(a){var s=a.gft()
return s},
$S:53}
A.U2.prototype={
$1(a){return a.y},
$S:53}
A.U3.prototype={
$1(a){var s=a.gfs()
return s},
$S:53}
A.U4.prototype={
$1(a){return a.Q},
$S:30}
A.TM.prototype={
$1(a){var s=a.gcV()
return s},
$S:63}
A.TN.prototype={
$1(a){var s=a.gf3()
return s},
$S:163}
A.TO.prototype={
$1(a){var s=a.gbT()
return s},
$S:164}
A.TX.prototype={
$1(a){return this.a.$1$1(new A.TH(a),t.oR)},
$S:165}
A.TH.prototype={
$1(a){var s=a.gfu()
s=s==null?null:s.U(this.a)
return s},
$S:166}
A.TY.prototype={
$1(a){return this.a.$1$1(new A.TG(a),t.G)},
$S:167}
A.TG.prototype={
$1(a){var s=a.gfv()
s=s==null?null:s.U(this.a)
return s},
$S:168}
A.TP.prototype={
$1(a){var s=a.gfE()
return s},
$S:169}
A.TQ.prototype={
$1(a){var s=a.gfB()
return s},
$S:170}
A.TR.prototype={
$1(a){return a.cx},
$S:171}
A.TS.prototype={
$1(a){return a.cy},
$S:172}
A.TT.prototype={
$1(a){return a.db},
$S:173}
A.TU.prototype={
$1(a){var s=a.gf5()
return s},
$S:174}
A.TV.prototype={
$1(a){if(a===B.T)this.a.aE(new A.TI())},
$S:2}
A.TI.prototype={
$0(){},
$S:0}
A.DJ.prototype={
U(a){var s=this.a.$1(a)
s.toString
return s},
glZ(){return"ButtonStyleButton_MouseCursor"}}
A.Dc.prototype={
ah(a){var s=new A.F6(this.e,null,A.ak())
s.aj()
s.sag(null)
return s},
aC(a,b){b.svf(this.e)}}
A.F6.prototype={
svf(a){if(this.u.i(0,a))return
this.u=a
this.a4()},
yn(a,b){var s,r,q=this.db$
if(q!=null){s=b.$2(q,a)
q=s.a
r=this.u
return a.bh(new A.U(Math.max(q,r.a),Math.max(s.b,r.b)))}return B.I},
c6(a){return this.yn(a,A.vb())},
bI(){var s,r=this
r.id=r.yn(A.L.prototype.gaw.call(r),A.vc())
s=r.db$
if(s!=null){s=s.b
s.toString
t.q.a(s).a=B.a9.jS(t.uu.a(r.gH().V(0,r.db$.gH())))}},
bE(a,b){var s
if(this.fK(a,b))return!0
s=this.db$.gH().fe(B.h)
return a.tS(new A.Ww(this,s),s,A.a3z(s))}}
A.Ww.prototype={
$2(a,b){return this.a.db$.bE(a,this.b)},
$S:16}
A.uM.prototype={
c5(){this.fN()
this.e1()
this.hB()},
m(){var s=this,r=s.aO$
if(r!=null)r.M(s.gfQ())
s.aO$=null
s.aW()}}
A.Iw.prototype={
D(){return"ButtonTextTheme."+this.b}}
A.vM.prototype={
gci(){switch(0){case 0:case 1:return B.xi}},
gbT(){switch(0){case 0:case 1:return B.CT}},
i(a,b){var s=this
if(b==null)return!1
if(J.I(b)!==A.u(s))return!1
return b instanceof A.vM&&b.gci().i(0,s.gci())&&b.gbT().i(0,s.gbT())&&J.d(b.w,s.w)&&J.d(b.y,s.y)&&J.d(b.z,s.z)&&J.d(b.at,s.at)&&b.ax==s.ax},
gq(a){var s=this
return A.G(B.ur,88,36,s.gci(),s.gbT(),!1,s.w,s.x,s.y,s.z,s.Q,s.as,s.at,s.ax,B.a,B.a,B.a,B.a,B.a,B.a)}}
A.BE.prototype={}
A.nU.prototype={
gq(a){var s=this
return A.G(s.a,s.b,s.c,s.d,s.e,s.f,s.r,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.I(b)!==A.u(s))return!1
return b instanceof A.nU&&J.d(b.b,s.b)&&J.d(b.c,s.c)&&J.d(b.d,s.d)&&b.e==s.e&&J.d(b.f,s.f)&&J.d(b.r,s.r)}}
A.BF.prototype={}
A.nV.prototype={
gq(a){var s=this
return A.G(s.a,s.b,s.c,s.d,s.e,s.f,s.r,s.w,s.x,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.I(b)!==A.u(s))return!1
return b instanceof A.nV&&b.b==s.b&&b.c==s.c&&b.d==s.d&&b.e==s.e&&J.d(b.w,s.w)&&J.d(b.x,s.x)}}
A.BG.prototype={}
A.nX.prototype={
gq(a){var s=this
return A.bs([s.a,s.b,s.c,s.d,s.e,s.f,s.r,s.w,s.x,s.y,s.z,s.Q,s.as,s.at,s.ax,s.ay,s.ch,s.CW,s.cx,s.cy,s.db])},
i(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.I(b)!==A.u(s))return!1
return b instanceof A.nX&&b.a==s.a&&J.d(b.b,s.b)&&J.d(b.c,s.c)&&J.d(b.d,s.d)&&J.d(b.e,s.e)&&J.d(b.f,s.f)&&J.d(b.r,s.r)&&J.d(b.w,s.w)&&J.d(b.x,s.x)&&b.y==s.y&&J.d(b.z,s.z)&&J.d(b.Q,s.Q)&&J.d(b.as,s.as)&&J.d(b.at,s.at)&&J.d(b.ax,s.ax)&&J.d(b.ay,s.ay)&&J.d(b.ch,s.ch)&&b.CW==s.CW&&b.cx==s.cx&&b.cy==s.cy&&J.d(b.db,s.db)}}
A.BI.prototype={}
A.lf.prototype={
i(a,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this
if(a0==null)return!1
if(b===a0)return!0
if(J.I(a0)!==A.u(b))return!1
if(a0 instanceof A.lf)if(a0.a===b.a){s=a0.b
r=b.b
if(s.i(0,r)){q=a0.c
p=b.c
if(q.i(0,p)){o=a0.d
if(o==null)o=s
n=b.d
if(o.i(0,n==null?r:n)){o=a0.e
if(o==null)o=q
n=b.e
if(o.i(0,n==null?p:n)){o=a0.f
n=b.f
if(o.i(0,n)){m=a0.r
l=b.r
if(m.i(0,l)){k=a0.w
if(k==null)k=o
j=b.w
if(k.i(0,j==null?n:j)){k=a0.x
if(k==null)k=m
j=b.x
if(k.i(0,j==null?l:j)){k=a0.y
j=k==null
i=j?o:k
h=b.y
g=h==null
if(i.i(0,g?n:h)){i=a0.z
f=i==null
e=f?m:i
d=b.z
c=d==null
if(e.i(0,c?l:d)){e=a0.Q
if(e==null)o=j?o:k
else o=e
k=b.Q
if(k==null)n=g?n:h
else n=k
if(o.i(0,n)){o=a0.as
if(o==null)o=f?m:i
n=b.as
if(n==null)n=c?l:d
if(o.i(0,n)){o=a0.at
n=b.at
if(o.i(0,n)){m=a0.ax
l=b.ax
if(m.i(0,l)){k=a0.ay
o=k==null?o:k
k=b.ay
if(o.i(0,k==null?n:k)){o=a0.ch
if(o==null)o=m
n=b.ch
if(o.i(0,n==null?l:n))if(a0.CW.i(0,b.CW)){o=a0.cx
n=b.cx
if(o.i(0,n)){m=a0.cy
l=b.cy
if(m.i(0,l)){k=a0.db
j=b.db
if(k.i(0,j)){i=a0.dx
if(i==null)i=m
h=b.dx
if(i.i(0,h==null?l:h)){i=a0.dy
if(i==null)i=k
h=b.dy
if(i.i(0,h==null?j:h)){i=a0.fr
if(i==null)i=o
h=b.fr
if(i.i(0,h==null?n:h)){i=a0.fx
o=i==null?o:i
i=b.fx
if(o.i(0,i==null?n:i)){o=a0.fy
if(o==null)o=B.l
n=b.fy
if(o.i(0,n==null?B.l:n)){o=a0.go
if(o==null)o=B.l
n=b.go
if(o.i(0,n==null?B.l:n)){o=a0.id
if(o==null)o=k
n=b.id
if(o.i(0,n==null?j:n)){o=a0.k1
if(o==null)o=m
n=b.k1
if(o.i(0,n==null?l:n)){o=a0.k2
q=o==null?q:o
o=b.k2
if(q.i(0,o==null?p:o)){q=a0.k3
s=q==null?s:q
q=b.k3
s=s.i(0,q==null?r:q)}else s=!1}else s=!1}else s=!1}else s=!1}else s=!1}else s=!1}else s=!1}else s=!1}else s=!1}else s=!1}else s=!1}else s=!1}else s=!1
else s=!1}else s=!1}else s=!1}else s=!1}else s=!1}else s=!1}else s=!1}else s=!1}else s=!1}else s=!1}else s=!1}else s=!1}else s=!1}else s=!1}else s=!1}else s=!1}else s=!1
else s=!1
return s},
gq(b1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=a7.b,a9=a7.c,b0=a7.d
if(b0==null)b0=a8
s=a7.e
if(s==null)s=a9
r=a7.f
q=a7.r
p=a7.w
if(p==null)p=r
o=a7.x
if(o==null)o=q
n=a7.y
m=n==null
l=m?r:n
k=a7.z
j=k==null
i=j?q:k
h=a7.Q
if(h==null){if(m)n=r}else n=h
m=a7.as
if(m==null)m=j?q:k
k=a7.at
j=a7.ax
h=a7.ay
if(h==null)h=k
g=a7.ch
if(g==null)g=j
f=a7.cx
e=a7.cy
d=a7.db
c=a7.dx
if(c==null)c=e
b=a7.dy
if(b==null)b=d
a=a7.fr
if(a==null)a=f
a0=a7.fx
if(a0==null)a0=f
a1=a7.fy
if(a1==null)a1=B.l
a2=a7.go
if(a2==null)a2=B.l
a3=a7.id
if(a3==null)a3=d
a4=a7.k1
if(a4==null)a4=e
a5=a7.k2
if(a5==null)a5=a9
a6=a7.k3
return A.G(a7.a,a8,a9,b0,s,r,q,p,o,l,i,n,m,k,j,h,g,a7.CW,f,A.G(e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6==null?a8:a6,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a))}}
A.BJ.prototype={}
A.pB.prototype={}
A.o9.prototype={
gq(a){var s=this
return A.G(s.a,s.b,s.c,s.d,s.e,s.f,s.r,s.w,s.x,s.y,s.z,s.Q,s.as,s.at,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(J.I(b)!==A.u(r))return!1
if(b instanceof A.o9)if(J.d(b.a,r.a))if(b.b==r.b)if(b.c==r.c)if(b.d==r.d)if(J.d(b.e,r.e))if(b.f==r.f)if(b.r==r.r)if(J.d(b.w,r.w))if(b.x==r.x)if(b.y==r.y)if(b.z==r.z)if(b.Q==r.Q)s=!0
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
return s}}
A.C9.prototype={}
A.oa.prototype={
gq(a){var s=this
return A.bs([s.a,s.b,s.c,s.d,s.e,s.f,s.r,s.w,s.x,s.y,s.z,s.Q,s.as,s.at,s.ax,s.ay,s.ch,s.CW,s.cx,s.cy,s.db,s.dx,s.dy,s.fr,s.fx,s.fy,s.go,s.id,s.k1,s.k2,s.k3,s.k4,s.ok,s.p1,s.p2,s.p3])},
i(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
return b instanceof A.oa&&J.d(b.a,s.a)&&b.b==s.b&&J.d(b.c,s.c)&&J.d(b.d,s.d)&&J.d(b.e,s.e)&&J.d(b.f,s.f)&&J.d(b.r,s.r)&&J.d(b.w,s.w)&&J.d(b.x,s.x)&&J.d(b.y,s.y)&&J.d(b.z,s.z)&&b.Q==s.Q&&b.as==s.as&&b.at==s.at&&b.ax==s.ax&&b.ay==s.ay&&J.d(b.ch,s.ch)&&J.d(b.CW,s.CW)&&b.cx==s.cx&&b.cy==s.cy&&b.db==s.db&&J.d(b.dx,s.dx)&&b.dy==s.dy&&J.d(b.fr,s.fr)&&J.d(b.fx,s.fx)&&J.d(b.fy,s.fy)&&J.d(b.go,s.go)&&J.d(b.id,s.id)&&J.d(b.k1,s.k1)&&J.d(b.k2,s.k2)&&J.d(b.k3,s.k3)&&b.k4==s.k4&&J.d(b.ok,s.ok)&&J.d(b.p2,s.p2)&&J.d(b.p3,s.p3)}}
A.Cb.prototype={}
A.oh.prototype={
gq(a){return J.l(this.e)},
i(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.I(b)!==A.u(s))return!1
return b instanceof A.oh&&J.d(b.a,s.a)&&b.b==s.b&&J.d(b.c,s.c)&&J.d(b.d,s.d)&&J.d(b.e,s.e)&&J.d(b.f,s.f)&&J.d(b.y,s.y)&&J.d(b.r,s.r)&&J.d(b.w,s.w)&&J.d(b.x,s.x)}}
A.Ck.prototype={}
A.oi.prototype={
gq(a){var s=this
return A.G(s.gaf(),s.b,s.c,s.d,s.e,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.I(b)!==A.u(s))return!1
return b instanceof A.oi&&J.d(b.gaf(),s.gaf())&&b.b==s.b&&b.c==s.c&&b.d==s.d&&b.e==s.e},
gaf(){return this.a}}
A.Co.prototype={}
A.oo.prototype={
gq(a){var s=this
return A.G(s.a,s.b,s.c,s.d,s.e,s.f,s.r,s.w,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.I(b)!==A.u(s))return!1
return b instanceof A.oo&&J.d(b.a,s.a)&&J.d(b.b,s.b)&&b.c==s.c&&J.d(b.d,s.d)&&J.d(b.e,s.e)&&J.d(b.f,s.f)&&J.d(b.r,s.r)&&b.w==s.w}}
A.Ct.prototype={}
A.op.prototype={
gq(a){return A.G(this.a,this.b,this.c,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(J.I(b)!==A.u(r))return!1
if(b instanceof A.op)if(J.d(b.a,r.a))s=J.d(b.c,r.c)
else s=!1
else s=!1
return s}}
A.Cu.prototype={}
A.ou.prototype={
gq(a){return J.l(this.a)},
i(a,b){if(b==null)return!1
if(this===b)return!0
if(J.I(b)!==A.u(this))return!1
return b instanceof A.ou&&J.d(b.a,this.a)}}
A.Cx.prototype={}
A.hv.prototype={}
A.oH.prototype={
gq(a){var s=this
return A.G(s.a,s.b,s.c,s.d,s.e,s.f,s.r,s.w,s.x,s.y,s.z,s.Q,s.as,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(J.I(b)!==A.u(r))return!1
if(b instanceof A.oH)if(J.d(b.a,r.a))if(J.d(b.b,r.b))if(J.d(b.c,r.c))if(J.d(b.d,r.d))if(J.d(b.e,r.e))if(J.d(b.f,r.f))if(J.d(b.r,r.r))if(J.d(b.w,r.w))if(J.d(b.x,r.x))if(J.d(b.y,r.y))if(J.d(b.z,r.z))s=!0
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
return s}}
A.CD.prototype={}
A.oM.prototype={
gq(a){return J.l(this.a)},
i(a,b){if(b==null)return!1
if(this===b)return!0
if(J.I(b)!==A.u(this))return!1
return b instanceof A.oM&&J.d(b.a,this.a)}}
A.CF.prototype={}
A.oO.prototype={
bq(a){var s,r=this
if(r.f===a.f)if(r.r===a.r)if(r.w===a.w)if(r.x===a.x)s=!1
else s=!0
else s=!0
else s=!0
else s=!0
return s}}
A.Uu.prototype={
j(a){return"<default FloatingActionButton tag>"}}
A.tg.prototype={
D(){return"_FloatingActionButtonType."+this.b}}
A.xe.prototype={
N(a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=null,a1=A.aG(a6),a2=a1.b0,a3=a.k1,a4=new A.UH(a6,a3,!0,a0,a0,a0,a0,a0,6,6,8,a0,6,a0,!0,a0,B.ul,B.uk,B.um,B.un,8,a0,a0,a0),a5=a2.a
if(a5==null)a5=a4.gbV()
s=a2.b
if(s==null)s=a4.gby()
r=a2.c
if(r==null)r=a4.gmg()
q=a2.d
if(q==null)q=a4.gmo()
p=a2.e
if(p==null)p=a4.gkX()
o=a2.f
if(o==null){n=a4.f
n.toString
o=n}m=a2.r
if(m==null){n=a4.r
n.toString
m=n}l=a2.w
if(l==null){n=a4.w
n.toString
l=n}n=a2.x
k=n==null?a4.x:n
if(k==null)k=o
j=a2.y
if(j==null){n=a4.y
n.toString
j=n}i=a2.Q
if(i==null){n=a4.Q
n.toString
i=n}h=a2.as
if(h==null){n=a4.gcV()
n.toString
h=n}n=a2.cy
if(n==null){n=a4.gmd()
n.toString}g=n.fj(a5)
f=a2.z
if(f==null){n=a4.gbT()
n.toString
f=n}n=a.c
e=A.xF(n,new A.bN(h,a0,a0,a0,a0,a0,a0,a0,a0))
switch(a3.a){case 0:d=a2.at
if(d==null){a3=a4.at
a3.toString
d=a3}break
case 1:d=a2.ax
if(d==null){a3=a4.ax
a3.toString
d=a3}break
case 2:d=a2.ay
if(d==null){a3=a4.ay
a3.toString
d=a3}break
case 3:d=a2.ch
if(d==null){a3=a4.ch
a3.toString
d=a3}c=a2.cx
if(c==null)c=a4.gmc()
a3=A.a([],t.nA)
a3.push(n)
e=new A.BH(new A.ie(c,A.adv(a3,B.ih,B.AT),a0),a0)
break
default:d=a0}b=new A.qr(a.z,new A.Cw(a0,a2.db),g,s,r,q,p,o,l,m,j,k,d,f,e,a1.f,a0,!1,B.M,i,a0)
a3=a.d
if(a3!=null)b=A.a4P(b,a3)
return new A.yh(new A.jG(B.vB,b,a0),a0)}}
A.Cw.prototype={
U(a){var s=A.jU(this.a,a,t.EA)
if(s==null)s=null
return s==null?B.hU.U(a):s},
glZ(){return"MaterialStateMouseCursor(FloatActionButton)"}}
A.BH.prototype={
ah(a){var s=a.aa(t.I)
s.toString
s=new A.F0(B.a9,s.w,null,A.ak())
s.aj()
s.sag(null)
return s},
aC(a,b){var s=a.aa(t.I)
s.toString
b.scd(s.w)}}
A.F0.prototype={
c6(a){var s,r=this.db$,q=a.a,p=a.b,o=a.c,n=a.d
if(r!=null){s=r.hj(B.bK)
return new A.U(Math.max(q,Math.min(p,s.a)),Math.max(o,Math.min(n,s.b)))}else return new A.U(A.V(1/0,q,p),A.V(1/0,o,n))},
bI(){var s=this,r=A.L.prototype.gaw.call(s),q=s.db$,p=r.a,o=r.b,n=r.c,m=r.d
if(q!=null){q.cF(B.bK,!0)
s.id=new A.U(Math.max(p,Math.min(o,s.db$.gH().a)),Math.max(n,Math.min(m,s.db$.gH().b)))
s.tT()}else s.id=new A.U(A.V(1/0,p,o),A.V(1/0,n,m))}}
A.UH.prototype={
glb(){var s,r=this,q=r.fx
if(q===$){s=A.aG(r.dx)
r.fx!==$&&A.a3()
q=r.fx=s.ay}return q},
gbV(){var s=this.glb(),r=s.e
return r==null?s.c:r},
gby(){var s=this.glb(),r=s.d
return r==null?s.b:r},
gkX(){var s=this.glb(),r=s.e
s=(r==null?s.c:r).a
return A.Y(31,s>>>16&255,s>>>8&255,s&255)},
gmg(){var s=this.glb(),r=s.e
s=(r==null?s.c:r).a
return A.Y(31,s>>>16&255,s>>>8&255,s&255)},
gmo(){var s=this.glb(),r=s.e
s=(r==null?s.c:r).a
return A.Y(20,s>>>16&255,s>>>8&255,s&255)},
gbT(){switch(this.dy.a){case 0:return B.rM
case 1:return B.CR
case 2:return B.CS
case 3:return B.rM}},
gcV(){switch(this.dy.a){case 0:return 24
case 1:return 24
case 2:return 36
case 3:return 24}},
gmc(){return new A.dz(this.fr&&this.dy===B.K5?16:20,0,20,0)},
gmd(){var s,r=this,q=r.fy
if(q===$){s=A.aG(r.dx)
r.fy!==$&&A.a3()
q=r.fy=s.p3}return q.as}}
A.Ld.prototype={
j(a){return"FloatingActionButtonLocation"}}
A.RC.prototype={
UF(){return!1},
ww(a){var s=this.UF()?4:0
return new A.z(this.FA(a,s),this.FB(a,s))}}
A.L_.prototype={
FB(a,b){var s=a.c,r=a.b.b,q=a.a.b,p=a.w.b,o=s-q-Math.max(16,a.f.d-(a.r.b-s)+16)
if(p>0)o=Math.min(o,s-p-q-16)
return(r>0?Math.min(o,s-r-q/2):o)+b}}
A.KZ.prototype={
FA(a,b){switch(a.y.a){case 0:return 16+a.e.a-b
case 1:return A.ae8(a,b)}}}
A.UF.prototype={
j(a){return"FloatingActionButtonLocation.endFloat"}}
A.Lc.prototype={
j(a){return"FloatingActionButtonAnimator"}}
A.WV.prototype={
Fz(a,b,c){if(c<0.5)return a
else return b}}
A.rN.prototype={
gn(){var s=this,r=s.w.x
r===$&&A.c()
return r<s.x?s.a.gn():s.b.gn()}}
A.GH.prototype={}
A.GI.prototype={}
A.ls.prototype={
gq(a){var s=this
return A.G(s.gbV(),s.gby(),s.gmg(),s.gmo(),s.gkX(),s.f,s.r,s.w,s.x,s.y,s.gbT(),s.Q,s.gcV(),s.at,s.ax,s.ay,s.ch,s.CW,s.gmc(),A.G(s.gmd(),s.db,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a))},
i(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.I(b)!==A.u(s))return!1
return b instanceof A.ls&&J.d(b.gbV(),s.gbV())&&J.d(b.gby(),s.gby())&&J.d(b.gmg(),s.gmg())&&J.d(b.gmo(),s.gmo())&&J.d(b.gkX(),s.gkX())&&b.f==s.f&&b.r==s.r&&b.w==s.w&&b.x==s.x&&b.y==s.y&&J.d(b.gbT(),s.gbT())&&b.Q==s.Q&&b.gcV()==s.gcV()&&J.d(b.at,s.at)&&J.d(b.ax,s.ax)&&J.d(b.ay,s.ay)&&J.d(b.ch,s.ch)&&b.CW==s.CW&&J.d(b.gmc(),s.gmc())&&J.d(b.gmd(),s.gmd())&&!0},
gbV(){return this.a},
gby(){return this.b},
gmg(){return this.c},
gmo(){return this.d},
gkX(){return this.e},
gbT(){return this.z},
gcV(){return this.as},
gmc(){return this.cx},
gmd(){return this.cy}}
A.CI.prototype={}
A.Vn.prototype={
D(){return"_IconButtonVariant."+this.b}}
A.xE.prototype={
N(a){var s,r,q,p=this,o=null
A.aG(a)
s=A.p3(o,o,o,o,o,o,p.z,o,o,o,o,o,o,o)
r=p.dx
if(r!=null)s=r.bw(s)
q=A.a4P(p.w,p.cx)
return new A.ud(o,s,o,B.K6,!1,p.ax,q,o)}}
A.ud.prototype={
ao(){return new A.Ft(B.p)}}
A.Ft.prototype={
aZ(){var s,r=this
r.bl()
r.a.toString
s=A.a3v(null)
r.d!==$&&A.ck()
r.d=s},
aS(a){var s
this.br(a)
this.a.toString
s=this.d
s===$&&A.c()
if(J.HF(s.a,B.V))s.ew(B.V,!1)
return},
N(a){var s,r=null,q=this.a
q.toString
s=this.d
s===$&&A.c()
return new A.D5(q.f,!1,q.w,r,r,r,q.d,B.M,q.e,!1,s,A.d4(r,q.x,!1,r,!1,r,r,r,r,r,r,r,r,r,r,q.c,r,r,r,r),r)},
m(){var s=this.d
s===$&&A.c()
s.dy$=$.aD()
s.dx$=0
this.aW()}}
A.D5.prototype={
Sf(a){var s=null
switch(this.ax.a){case 1:return new A.CG(a,this.ay,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,B.a6,!0,B.a9,s)
case 2:return new A.CH(a,this.ay,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,B.a6,!0,B.a9,s)
case 3:return new A.E_(a,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,B.a6,!0,B.a9,s)
case 0:return new A.D4(a,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,B.a6,!0,B.a9,s)}},
Wm(a){var s,r=null,q=A.a35(a),p=q.f,o=q.a
if(new A.Vm(A.aG(a).ay.a===B.a2).$1(p))p=r
s=A.p3(r,r,r,r,r,r,p,r,r,o===24?r:o,r,r,r,r)
p=A.a33(a).a
p=p==null?r:p.bw(s)
return p==null?s:p}}
A.Vm.prototype={
$1(a){if(this.a)return a===$.a1s()
return a===$.a1r()},
$S:175}
A.D1.prototype={
U(a){if(a.t(0,B.G))return this.b
return this.a},
j(a){return"{disabled: "+A.f(this.b)+", otherwise: "+A.f(this.a)+"}"}}
A.D3.prototype={
U(a){var s,r,q=this,p=null
if(a.t(0,B.V)){if(a.t(0,B.K)){s=q.d
r=q.a
s=r==null?p:A.Y(31,r.gn()>>>16&255,r.gn()>>>8&255,r.gn()&255)
return s}if(a.t(0,B.Z)){s=q.c
r=q.a
s=r==null?p:A.Y(20,r.gn()>>>16&255,r.gn()>>>8&255,r.gn()&255)
return s}if(a.t(0,B.a_)){s=q.b
r=q.a
s=r==null?p:A.Y(31,r.gn()>>>16&255,r.gn()>>>8&255,r.gn()&255)
return s}}if(a.t(0,B.K)){s=q.d
r=q.a
s=r==null?p:A.Y(31,r.gn()>>>16&255,r.gn()>>>8&255,r.gn()&255)
return s}if(a.t(0,B.Z)){s=q.c
r=q.a
s=r==null?p:A.Y(20,r.gn()>>>16&255,r.gn()>>>8&255,r.gn()&255)
return s}if(a.t(0,B.a_)){s=q.b
r=q.a
s=r==null?p:A.Y(20,r.gn()>>>16&255,r.gn()>>>8&255,r.gn()&255)
return s}return p},
j(a){return"{hovered: "+A.f(this.c)+", focused: "+A.f(this.b)+", pressed: "+A.f(this.d)+", otherwise: null}"}}
A.D2.prototype={
U(a){if(a.t(0,B.G))return this.b
return this.a}}
A.D4.prototype={
ga2(){var s,r=this,q=r.fx
if(q===$){s=A.aG(r.dy)
r.fx!==$&&A.a3()
q=r.fx=s.ay}return q},
gby(){return B.Bc},
gbV(){return new A.bS(new A.Vj(this),t.T)},
gfv(){return new A.bS(new A.Vl(this),t.T)},
gcQ(){return B.dh},
gbJ(){return B.aM},
gc4(){return B.aM},
gci(){return B.dl},
gft(){return B.dj},
gfs(){return B.dm},
gcV(){return B.di},
gf3(){return null},
gbT(){return B.dk},
gfu(){return new A.bS(new A.Vk(),t.EC)},
gfE(){return B.bD},
gfB(){return A.aG(this.dy).f},
gf5(){return A.aG(this.dy).y}}
A.Vj.prototype={
$1(a){var s,r
if(a.t(0,B.G)){s=this.a.ga2().db.a
return A.Y(97,s>>>16&255,s>>>8&255,s&255)}if(a.t(0,B.V))return this.a.ga2().b
s=this.a.ga2()
r=s.dy
return r==null?s.db:r},
$S:6}
A.Vl.prototype={
$1(a){var s,r,q=this
if(a.t(0,B.V)){if(a.t(0,B.K)){s=q.a.ga2().b
return A.Y(31,s.gn()>>>16&255,s.gn()>>>8&255,s.gn()&255)}if(a.t(0,B.Z)){s=q.a.ga2().b
return A.Y(20,s.gn()>>>16&255,s.gn()>>>8&255,s.gn()&255)}if(a.t(0,B.a_)){s=q.a.ga2().b
return A.Y(31,s.gn()>>>16&255,s.gn()>>>8&255,s.gn()&255)}}if(a.t(0,B.K)){s=q.a.ga2()
r=s.dy
s=(r==null?s.db:r).a
return A.Y(31,s>>>16&255,s>>>8&255,s&255)}if(a.t(0,B.Z)){s=q.a.ga2()
r=s.dy
s=(r==null?s.db:r).a
return A.Y(20,s>>>16&255,s>>>8&255,s&255)}if(a.t(0,B.a_)){s=q.a.ga2()
r=s.dy
s=(r==null?s.db:r).a
return A.Y(31,s>>>16&255,s>>>8&255,s&255)}return B.Q},
$S:6}
A.Vk.prototype={
$1(a){if(a.t(0,B.G))return B.b8
return B.cu},
$S:34}
A.CG.prototype={
ga2(){var s,r=this,q=r.fx
if(q===$){s=A.aG(r.dy)
r.fx!==$&&A.a3()
q=r.fx=s.ay}return q},
gby(){return new A.bS(new A.UI(this),t.T)},
gbV(){return new A.bS(new A.UJ(this),t.T)},
gfv(){return new A.bS(new A.UL(this),t.T)},
gcQ(){return B.dh},
gbJ(){return B.aM},
gc4(){return B.aM},
gci(){return B.dl},
gft(){return B.dj},
gfs(){return B.dm},
gcV(){return B.di},
gf3(){return null},
gbT(){return B.dk},
gfu(){return new A.bS(new A.UK(),t.EC)},
gfE(){return B.bD},
gfB(){return A.aG(this.dy).f},
gf5(){return A.aG(this.dy).y}}
A.UI.prototype={
$1(a){var s,r
if(a.t(0,B.G)){s=this.a.ga2().db.a
return A.Y(31,s>>>16&255,s>>>8&255,s&255)}if(a.t(0,B.V))return this.a.ga2().b
s=this.a
if(s.fr){s=s.ga2()
r=s.dx
return r==null?s.cy:r}return s.ga2().b},
$S:6}
A.UJ.prototype={
$1(a){var s
if(a.t(0,B.G)){s=this.a.ga2().db.a
return A.Y(97,s>>>16&255,s>>>8&255,s&255)}if(a.t(0,B.V))return this.a.ga2().c
s=this.a
if(s.fr)return s.ga2().b
return s.ga2().c},
$S:6}
A.UL.prototype={
$1(a){var s,r=this
if(a.t(0,B.V)){if(a.t(0,B.K)){s=r.a.ga2().c.a
return A.Y(31,s>>>16&255,s>>>8&255,s&255)}if(a.t(0,B.Z)){s=r.a.ga2().c.a
return A.Y(20,s>>>16&255,s>>>8&255,s&255)}if(a.t(0,B.a_)){s=r.a.ga2().c.a
return A.Y(31,s>>>16&255,s>>>8&255,s&255)}}s=r.a
if(s.fr){if(a.t(0,B.K)){s=s.ga2().b
return A.Y(31,s.gn()>>>16&255,s.gn()>>>8&255,s.gn()&255)}if(a.t(0,B.Z)){s=s.ga2().b
return A.Y(20,s.gn()>>>16&255,s.gn()>>>8&255,s.gn()&255)}if(a.t(0,B.a_)){s=s.ga2().b
return A.Y(31,s.gn()>>>16&255,s.gn()>>>8&255,s.gn()&255)}}if(a.t(0,B.K)){s=s.ga2().c.a
return A.Y(31,s>>>16&255,s>>>8&255,s&255)}if(a.t(0,B.Z)){s=s.ga2().c.a
return A.Y(20,s>>>16&255,s>>>8&255,s&255)}if(a.t(0,B.a_)){s=s.ga2().c.a
return A.Y(31,s>>>16&255,s>>>8&255,s&255)}return B.Q},
$S:6}
A.UK.prototype={
$1(a){if(a.t(0,B.G))return B.b8
return B.cu},
$S:34}
A.CH.prototype={
ga2(){var s,r=this,q=r.fx
if(q===$){s=A.aG(r.dy)
r.fx!==$&&A.a3()
q=r.fx=s.ay}return q},
gby(){return new A.bS(new A.UM(this),t.T)},
gbV(){return new A.bS(new A.UN(this),t.T)},
gfv(){return new A.bS(new A.UP(this),t.T)},
gcQ(){return B.dh},
gbJ(){return B.aM},
gc4(){return B.aM},
gci(){return B.dl},
gft(){return B.dj},
gfs(){return B.dm},
gcV(){return B.di},
gf3(){return null},
gbT(){return B.dk},
gfu(){return new A.bS(new A.UO(),t.EC)},
gfE(){return B.bD},
gfB(){return A.aG(this.dy).f},
gf5(){return A.aG(this.dy).y}}
A.UM.prototype={
$1(a){var s,r
if(a.t(0,B.G)){s=this.a.ga2().db.a
return A.Y(31,s>>>16&255,s>>>8&255,s&255)}if(a.t(0,B.V)){s=this.a.ga2()
r=s.w
return r==null?s.f:r}s=this.a
if(s.fr){s=s.ga2()
r=s.dx
return r==null?s.cy:r}s=s.ga2()
r=s.w
return r==null?s.f:r},
$S:6}
A.UN.prototype={
$1(a){var s,r
if(a.t(0,B.G)){s=this.a.ga2().db.a
return A.Y(97,s>>>16&255,s>>>8&255,s&255)}if(a.t(0,B.V)){s=this.a.ga2()
r=s.x
return r==null?s.r:r}s=this.a
if(s.fr){s=s.ga2()
r=s.dy
return r==null?s.db:r}s=s.ga2()
r=s.x
return r==null?s.r:r},
$S:6}
A.UP.prototype={
$1(a){var s,r,q=this
if(a.t(0,B.V)){if(a.t(0,B.K)){s=q.a.ga2()
r=s.x
s=(r==null?s.r:r).a
return A.Y(31,s>>>16&255,s>>>8&255,s&255)}if(a.t(0,B.Z)){s=q.a.ga2()
r=s.x
s=(r==null?s.r:r).a
return A.Y(20,s>>>16&255,s>>>8&255,s&255)}if(a.t(0,B.a_)){s=q.a.ga2()
r=s.x
s=(r==null?s.r:r).a
return A.Y(31,s>>>16&255,s>>>8&255,s&255)}}s=q.a
if(s.fr){if(a.t(0,B.K)){s=s.ga2()
r=s.dy
s=(r==null?s.db:r).a
return A.Y(31,s>>>16&255,s>>>8&255,s&255)}if(a.t(0,B.Z)){s=s.ga2()
r=s.dy
s=(r==null?s.db:r).a
return A.Y(20,s>>>16&255,s>>>8&255,s&255)}if(a.t(0,B.a_)){s=s.ga2()
r=s.dy
s=(r==null?s.db:r).a
return A.Y(31,s>>>16&255,s>>>8&255,s&255)}}if(a.t(0,B.K)){s=s.ga2()
r=s.x
s=(r==null?s.r:r).a
return A.Y(31,s>>>16&255,s>>>8&255,s&255)}if(a.t(0,B.Z)){s=s.ga2()
r=s.x
s=(r==null?s.r:r).a
return A.Y(20,s>>>16&255,s>>>8&255,s&255)}if(a.t(0,B.a_)){s=s.ga2()
r=s.x
s=(r==null?s.r:r).a
return A.Y(31,s>>>16&255,s>>>8&255,s&255)}return B.Q},
$S:6}
A.UO.prototype={
$1(a){if(a.t(0,B.G))return B.b8
return B.cu},
$S:34}
A.E_.prototype={
ga2(){var s,r=this,q=r.fx
if(q===$){s=A.aG(r.dy)
r.fx!==$&&A.a3()
q=r.fx=s.ay}return q},
gby(){return new A.bS(new A.W2(this),t.T)},
gbV(){return new A.bS(new A.W3(this),t.T)},
gfv(){return new A.bS(new A.W5(this),t.T)},
gcQ(){return B.dh},
gbJ(){return B.aM},
gc4(){return B.aM},
gci(){return B.dl},
gft(){return B.dj},
gfs(){return B.dm},
gcV(){return B.di},
gf3(){return new A.bS(new A.W6(this),t.aq)},
gbT(){return B.dk},
gfu(){return new A.bS(new A.W4(),t.EC)},
gfE(){return B.bD},
gfB(){return A.aG(this.dy).f},
gf5(){return A.aG(this.dy).y}}
A.W2.prototype={
$1(a){var s,r
if(a.t(0,B.G)){if(a.t(0,B.V)){s=this.a.ga2().db.a
return A.Y(31,s>>>16&255,s>>>8&255,s&255)}return B.Q}if(a.t(0,B.V)){s=this.a.ga2()
r=s.id
return r==null?s.db:r}return B.Q},
$S:6}
A.W3.prototype={
$1(a){var s,r
if(a.t(0,B.G)){s=this.a.ga2().db.a
return A.Y(97,s>>>16&255,s>>>8&255,s&255)}if(a.t(0,B.V)){s=this.a.ga2()
r=s.k1
return r==null?s.cy:r}s=this.a.ga2()
r=s.dy
return r==null?s.db:r},
$S:6}
A.W5.prototype={
$1(a){var s,r,q=this
if(a.t(0,B.V)){if(a.t(0,B.K)){s=q.a.ga2()
r=s.k1
s=(r==null?s.cy:r).a
return A.Y(31,s>>>16&255,s>>>8&255,s&255)}if(a.t(0,B.Z)){s=q.a.ga2()
r=s.k1
s=(r==null?s.cy:r).a
return A.Y(20,s>>>16&255,s>>>8&255,s&255)}if(a.t(0,B.a_)){s=q.a.ga2()
r=s.k1
s=(r==null?s.cy:r).a
return A.Y(20,s>>>16&255,s>>>8&255,s&255)}}if(a.t(0,B.K)){s=q.a.ga2().db.a
return A.Y(31,s>>>16&255,s>>>8&255,s&255)}if(a.t(0,B.Z)){s=q.a.ga2()
r=s.dy
s=(r==null?s.db:r).a
return A.Y(20,s>>>16&255,s>>>8&255,s&255)}if(a.t(0,B.a_)){s=q.a.ga2()
r=s.dy
s=(r==null?s.db:r).a
return A.Y(20,s>>>16&255,s>>>8&255,s&255)}return B.Q},
$S:6}
A.W6.prototype={
$1(a){var s,r
if(a.t(0,B.V))return null
else{if(a.t(0,B.G)){s=this.a.ga2().db.a
return new A.bk(A.Y(31,s>>>16&255,s>>>8&255,s&255),1,B.F,-1)}s=this.a.ga2()
r=s.fr
return new A.bk(r==null?s.cx:r,1,B.F,-1)}},
$S:178}
A.W4.prototype={
$1(a){if(a.t(0,B.G))return B.b8
return B.cu},
$S:34}
A.GK.prototype={}
A.jI.prototype={
gq(a){return J.l(this.a)},
i(a,b){if(b==null)return!1
if(this===b)return!0
if(J.I(b)!==A.u(this))return!1
return b instanceof A.jI&&J.d(b.a,this.a)}}
A.p2.prototype={
bq(a){return!this.w.i(0,a.w)}}
A.D6.prototype={}
A.i1.prototype={
M9(a){var s
if(a===B.B&&!this.CW){s=this.ch
s===$&&A.c()
s.m()
this.hn()}},
m(){var s=this.ch
s===$&&A.c()
s.m()
this.hn()},
zR(a,b,c){var s,r,q=this
a.c3()
s=q.f
if(s!=null)a.eL(s.ez(b,q.ax))
switch(q.z.a){case 1:s=b.gaz()
r=q.Q
a.fW(s,r==null?35:r,c)
break
case 0:s=q.as
if(!s.i(0,B.W))a.cC(A.Pw(b,s.c,s.d,s.a,s.b),c)
else a.cf(b,c)
break}a.bA()},
vF(a,b){var s,r,q=this,p=$.ai().bb(),o=q.e,n=q.ay
n===$&&A.c()
p.saf(A.Y(n.b.a0(n.a.gn()),o.gn()>>>16&255,o.gn()>>>8&255,o.gn()&255))
s=A.a_t(b)
o=q.at
if(o!=null)r=o.$0()
else{o=q.b.gH()
r=new A.D(0,0,0+o.a,0+o.b)}if(s==null){a.c3()
a.a0(b.a)
q.zR(a,r,p)
a.bA()}else q.zR(a,r.cn(s),p)}}
A.Y5.prototype={
$0(){var s=this.a.gH()
return new A.D(0,0,0+s.a,0+s.b)},
$S:68}
A.Vx.prototype={
Cq(a,b,c,d,e,f,g,a0,a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h=null
if(a0==null){if(a1!=null){s=a1.$0()
r=new A.U(s.c-s.a,s.d-s.b)}else r=a2.gH()
s=Math.max(r.C1(B.h).gc7(),new A.z(0+r.a,0).V(0,new A.z(0,0+r.b)).gc7())/2}else s=a0
q=new A.p8(g,B.W,s,A.agu(a2,c,a1),a3,b,e,d,a2,f)
p=d.u
o=A.dS(h,B.eB,h,h,p)
n=d.gdu()
o.b7()
m=o.bU$
m.b=!0
m.a.push(n)
o.cU()
q.cx=o
m=b.gn()
l=t.v
k=t.xD
q.CW=new A.aL(l.a(o),new A.i2(0,m>>>24&255),k.h("aL<aj.T>"))
m=A.dS(h,B.eA,h,h,p)
m.b7()
o=m.bU$
o.b=!0
o.a.push(n)
m.cU()
q.ch=m
o=t.a7
j=$.a7I()
i=o.h("eQ<aj.T>")
q.ay=new A.aL(l.a(m),new A.eQ(j,new A.ax(s*0.3,s+5,o),i),i.h("aL<aj.T>"))
p=A.dS(h,B.ir,h,h,p)
p.b7()
i=p.bU$
i.b=!0
i.a.push(n)
p.b7()
n=p.bD$
n.b=!0
n.a.push(q.gNx())
q.db=p
n=b.gn()
i=$.a7J()
k=k.h("eQ<aj.T>")
q.cy=new A.aL(l.a(p),new A.eQ(i,new A.i2(n>>>24&255,0),k),k.h("aL<aj.T>"))
d.tP(q)
return q}}
A.p8.prototype={
lS(){var s=this.ch
s===$&&A.c()
s.e=B.xd
s.cU()
s=this.cx
s===$&&A.c()
s.cU()
s=this.db
s===$&&A.c()
s.z=B.aD
s.l7(1,B.ag,B.ir)},
b3(){var s,r=this,q=r.cx
q===$&&A.c()
q.jj()
q=r.cx.x
q===$&&A.c()
s=1-q
q=r.db
q===$&&A.c()
q.sn(s)
if(s<1){q=r.db
q.z=B.aD
q.l7(1,B.ag,B.eB)}},
Ny(a){if(a===B.T)this.m()},
m(){var s=this,r=s.ch
r===$&&A.c()
r.m()
r=s.cx
r===$&&A.c()
r.m()
r=s.db
r===$&&A.c()
r.m()
s.hn()},
vF(a,b){var s,r,q,p,o,n=this,m=n.cx
m===$&&A.c()
m=m.r
if(m!=null&&m.a!=null){m=n.CW
m===$&&A.c()
s=m.b.a0(m.a.gn())}else{m=n.cy
m===$&&A.c()
s=m.b.a0(m.a.gn())}r=$.ai().bb()
m=n.e
r.saf(A.Y(s,m.gn()>>>16&255,m.gn()>>>8&255,m.gn()&255))
m=n.at
if(m!=null)q=m.$0()
else q=null
p=q!=null?q.gaz():n.b.gH().fe(B.h)
o=n.ch
o===$&&A.c()
o=o.x
o===$&&A.c()
o=A.pZ(n.z,p,B.bj.a0(o))
o.toString
p=n.ay
p===$&&A.c()
p=p.b.a0(p.a.gn())
n.Ec(n.Q,a,o,m,n.f,r,p,n.ax,b)}}
A.Y4.prototype={
$0(){var s=this.a.gH()
return new A.D(0,0,0+s.a,0+s.b)},
$S:68}
A.Vy.prototype={
Cq(a,b,c,d,e,f,g,h,i,j,k){var s,r,q=null,p=h==null?A.agx(j,c,i,g):h,o=new A.p9(g,B.W,p,A.agt(j,c,i),!c,k,b,e,d,j,f),n=d.u,m=A.dS(q,B.eA,q,q,n),l=d.gdu()
m.b7()
s=m.bU$
s.b=!0
s.a.push(l)
m.cU()
o.CW=m
s=t.a7
r=t.v
o.ch=new A.aL(r.a(m),new A.ax(0,p,s),s.h("aL<aj.T>"))
n=A.dS(q,B.a6,q,q,n)
n.b7()
s=n.bU$
s.b=!0
s.a.push(l)
n.b7()
l=n.bD$
l.b=!0
l.a.push(o.gNz())
o.cy=n
l=b.gn()
o.cx=new A.aL(r.a(n),new A.i2(l>>>24&255,0),t.xD.h("aL<aj.T>"))
d.tP(o)
return o}}
A.p9.prototype={
lS(){var s=B.c.cT(this.as/1),r=this.CW
r===$&&A.c()
r.e=A.co(0,s)
r.cU()
this.cy.cU()},
b3(){var s=this.cy
if(s!=null)s.cU()},
NA(a){if(a===B.T)this.m()},
m(){var s=this,r=s.CW
r===$&&A.c()
r.m()
s.cy.m()
s.cy=null
s.hn()},
vF(a,b){var s,r=this,q=$.ai().bb(),p=r.e,o=r.cx
o===$&&A.c()
q.saf(A.Y(o.b.a0(o.a.gn()),p.gn()>>>16&255,p.gn()>>>8&255,p.gn()&255))
s=r.z
if(r.ax){p=r.b.gH().fe(B.h)
o=r.CW
o===$&&A.c()
o=o.x
o===$&&A.c()
s=A.pZ(s,p,o)}s.toString
p=r.ch
p===$&&A.c()
p=p.b.a0(p.a.gn())
r.Ec(r.Q,a,s,r.at,r.f,q,p,r.ay,b)}}
A.i3.prototype={
lS(){},
b3(){},
saf(a){if(a.i(0,this.e))return
this.e=a
this.a.ae()},
suh(a){if(J.d(a,this.f))return
this.f=a
this.a.ae()},
Ec(a,b,c,d,e,f,g,h,i){var s,r=A.a_t(i)
b.c3()
if(r==null)b.a0(i.a)
else b.ai(r.a,r.b)
if(d!=null){s=d.$0()
if(e!=null)b.eL(e.ez(s,h))
else if(!a.i(0,B.W))b.ir(A.Pw(s,a.c,a.d,a.a,a.b))
else b.jX(s)}b.fW(c,g,f)
b.bA()}}
A.lF.prototype={}
A.tO.prototype={
bq(a){return this.f!==a.f}}
A.p7.prototype={
FH(a){return null},
N(a){var s=this,r=a.aa(t.AD),q=r==null?null:r.f
return new A.tp(s.c,s.d,s.e,s.f,s.r,s.w,s.x,s.y,s.Q,s.z,s.as,s.at,s.ax,s.ay,s.ch,s.CW,s.cx,s.cy,s.db,s.dx,s.dy,s.fr,s.fx,s.fy,s.go,s.id,!1,s.k2,!1,s.k4,s.ok,q,s.gFG(),s.gS6(),s.p1,s.p2,null)},
S7(a){return!0}}
A.tp.prototype={
ao(){return new A.to(A.y(t.uR,t.ED),new A.b0(A.a([],t.hL),t.fR),null,B.p)}}
A.iH.prototype={
D(){return"_HighlightType."+this.b}}
A.to.prototype={
gU6(){var s=this.r.gau()
return!new A.aW(s,new A.Vv(),A.q(s).h("aW<v.E>")).gL(0)},
va(a,b){var s,r=this.y,q=r.a,p=q.length
if(b){r.b=!0
q.push(a)}else r.A(0,a)
s=q.length!==0
if(s!==(p!==0)){r=this.a.p1
if(r!=null)r.va(this,s)}},
QK(a){var s=this,r=s.z
if(r!=null)r.b3()
s.z=null
r=s.c
r.toString
s.AI(r)
r=s.e
if(r!=null)r.lS()
s.e=null
r=s.a
if(r.id){r=s.c
r.toString
A.L3(r)}s.a.d.$0()
s.z=A.bH(B.aW,new A.Vr(s))},
wV(a){var s=this.c
s.toString
this.AI(s)
this.Du()},
Gk(){return this.wV(null)},
uQ(){this.aE(new A.Vu())},
gce(){var s=this.a.p4
if(s==null){s=this.x
s.toString}return s},
mp(){var s,r,q=this
if(q.a.p4==null)q.x=A.a3v(null)
s=q.gce()
r=q.a
r.toString
s.ew(B.G,!(q.dF(r)||q.dG(r)))
q.gce().a6(q.giH())},
aZ(){var s,r,q
this.J4()
this.mp()
s=this.gDq()
r=$.b_.a9$.f.a.f.a
q=r.k(0,s)
r.l(0,s,(q==null?0:q)+1)},
aS(a){var s,r,q,p,o=this
o.br(a)
s=a.p4
if(o.a.p4!=s){if(s!=null)s.M(o.giH())
if(o.a.p4!=null){s=o.x
if(s!=null){s.dy$=$.aD()
s.dx$=0}o.x=null}o.mp()}s=o.a
if(s.cx!=a.cx||s.CW!==a.CW||!1){s=o.r
r=s.k(0,B.bE)
if(r!=null){q=r.ch
q===$&&A.c()
q.m()
r.hn()
o.wg(B.bE,!1,o.f)}p=s.k(0,B.tS)
if(p!=null){s=p.ch
s===$&&A.c()
s.m()
p.hn()}}if(!J.d(o.a.db,a.db))o.Qh()
s=o.a
s.toString
s=o.dF(s)||o.dG(s)
if(s!==(o.dF(a)||o.dG(a))){s=o.gce()
q=o.a
q.toString
s.ew(B.G,!(o.dF(q)||o.dG(q)))
s=o.a
s.toString
if(!(o.dF(s)||o.dG(s))){o.gce().ew(B.K,!1)
r=o.r.k(0,B.bE)
if(r!=null){s=r.ch
s===$&&A.c()
s.m()
r.hn()}}o.wg(B.bE,!1,o.f)}o.wf()},
m(){var s,r=this
$.b_.a9$.f.a.f.A(0,r.gDq())
r.gce().M(r.giH())
s=r.x
if(s!=null){s.dy$=$.aD()
s.dx$=0}s=r.z
if(s!=null)s.b3()
r.z=null
r.aW()},
gwl(){if(!this.gU6()){var s=this.d
s=s!=null&&s.a!==0}else s=!0
return s},
Fw(a){switch(a.a){case 0:return B.a6
case 1:case 2:this.a.toString
return B.xf}},
wg(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.r,e=f.k(0,a),d=a.a
switch(d){case 0:h.gce().ew(B.K,c)
break
case 1:if(b)h.gce().ew(B.Z,c)
break
case 2:break}if(a===B.bd){s=h.a.p1
if(s!=null)s.va(h,c)}s=e==null
if(c===(!s&&e.CW))return
if(c)if(s){s=h.a.fx
if(s==null)r=g
else{q=h.gce().a
r=s.a.$1(q)}if(r==null){s=h.c
s.toString
p=A.aG(s)
switch(d){case 0:r=h.a.fr
if(r==null)r=p.db
break
case 2:r=h.a.dx
if(r==null)r=p.cy
break
case 1:r=h.a.dy
if(r==null)r=p.dy
break}}s=h.c.ga5()
s.toString
t.BS.a(s)
q=h.c
q.toString
q=A.a3t(q,t.xT)
q.toString
o=h.a
o.toString
o=h.dF(o)||h.dG(o)?r:A.Y(0,r.gn()>>>16&255,r.gn()>>>8&255,r.gn()&255)
n=h.a
m=n.CW
l=n.cx
k=n.db
n=n.p2.$1(s)
j=h.c.aa(t.I)
j.toString
i=h.Fw(a)
s=new A.i1(m,l,B.W,n,j.w,o,k,q,s,new A.Vw(h,a))
i=A.dS(g,i,g,g,q.u)
i.b7()
o=i.bU$
o.b=!0
o.a.push(q.gdu())
i.b7()
o=i.bD$
o.b=!0
o.a.push(s.gM8())
i.cU()
s.ch=i
o=s.e.gn()
s.ay=new A.aL(t.v.a(i),new A.i2(0,o>>>24&255),t.xD.h("aL<aj.T>"))
q.tP(s)
f.l(0,a,s)
h.q9()}else{e.CW=!0
f=e.ch
f===$&&A.c()
f.cU()}else{e.CW=!1
f=e.ch
f===$&&A.c()
f.kJ()}switch(d){case 0:f=h.a.at
if(f!=null)f.$1(c)
break
case 1:if(b){f=h.a.ax
if(f!=null)f.$1(c)}break
case 2:break}},
hg(a,b){return this.wg(a,!0,b)},
Qh(){var s,r,q,p=this
for(s=p.r.gau(),r=A.q(s),r=r.h("@<1>").Z(r.y[1]),s=new A.b7(J.ao(s.a),s.b,r.h("b7<1,2>")),r=r.y[1];s.p();){q=s.a
if(q==null)q=r.a(q)
if(q!=null)q.suh(p.a.db)}s=p.e
if(s!=null)s.suh(p.a.db)
s=p.d
if(s!=null&&s.a!==0)for(r=A.q(s),s=new A.dp(s,s.jx(),r.h("dp<1>")),r=r.c;s.p();){q=s.d
if(q==null)q=r.a(q)
q.suh(p.a.db)}},
KT(a){var s,r,q,p,o,n,m,l,k,j,i=this,h={},g=i.c
g.toString
g=A.a3t(g,t.xT)
g.toString
s=i.c.ga5()
s.toString
t.BS.a(s)
r=s.FO(a)
q=i.a.fx
if(q==null)q=null
else{p=i.gce().a
p=q.a.$1(p)
q=p}o=q==null?i.a.fy:q
if(o==null){q=i.c
q.toString
o=A.aG(q).k3}q=i.a
n=q.ch?q.p2.$1(s):null
q=i.a
m=q.cy
l=q.db
h.a=null
q=q.go
if(q==null){q=i.c
q.toString
q=A.aG(q).y}p=i.a
k=p.ch
p=p.cx
j=i.c.aa(t.I)
j.toString
return h.a=q.Cq(m,o,k,g,l,new A.Vq(h,i),r,p,n,s,j.w)},
Tf(a){if(this.c==null)return
this.aE(new A.Vt(this))},
gPQ(){var s,r=this,q=r.c
q.toString
q=A.di(q,B.tV)
s=q==null?null:q.ch
switch((s==null?B.fl:s).a){case 0:q=r.a
q.toString
return(r.dF(q)||r.dG(q))&&r.Q
case 1:return r.Q}},
wf(){var s,r=$.b_.a9$.f.a.b
switch((r==null?A.CZ():r).a){case 0:s=!1
break
case 1:s=this.gPQ()
break
default:s=null}this.hg(B.tS,s)},
Th(a){var s,r=this
r.Q=a
r.gce().ew(B.a_,a)
r.wf()
s=r.a.k2
if(s!=null)s.$1(a)},
Dm(a){if(this.y.a.length!==0)return
this.Q0(a)},
TT(a){this.Dm(a)
this.a.toString},
TV(a){this.a.toString},
TK(a){this.Dm(a)
this.a.toString},
TM(a){this.a.toString},
AJ(a,b){var s,r,q,p,o=this
if(a!=null){s=a.ga5()
s.toString
t.BS.a(s)
r=s.gH()
r=new A.D(0,0,0+r.a,0+r.b).gaz()
q=A.fg(s.eA(null),r)}else q=b.a
o.gce().ew(B.K,!0)
p=o.KT(q)
s=o.d;(s==null?o.d=A.cf(t.nv):s).C(0,p)
s=o.e
if(s!=null)s.b3()
o.e=p
o.q9()
o.hg(B.bd,!0)},
AI(a){return this.AJ(a,null)},
Q0(a){return this.AJ(null,a)},
Du(){var s=this,r=s.e
if(r!=null)r.lS()
s.e=null
s.hg(B.bd,!1)
r=s.a
if(r.id){r=s.c
r.toString
A.L3(r)}s.a.d.$0()},
TR(){var s=this,r=s.e
if(r!=null)r.b3()
s.e=null
s.a.toString
s.hg(B.bd,!1)},
TG(){var s=this,r=s.e
if(r!=null)r.lS()
s.e=null
s.hg(B.bd,!1)
s.a.toString},
TI(){var s=this,r=s.e
if(r!=null)r.b3()
s.e=null
s.a.toString
s.hg(B.bd,!1)},
cq(){var s,r,q,p,o,n,m,l=this,k=l.d
if(k!=null){l.d=null
for(s=A.q(k),k=new A.dp(k,k.jx(),s.h("dp<1>")),s=s.c;k.p();){r=k.d;(r==null?s.a(r):r).m()}l.e=null}for(k=l.r,s=A.i8(k,k.r);s.p();){r=s.d
q=k.k(0,r)
if(q!=null){p=q.ch
p===$&&A.c()
p.r.m()
p.r=null
o=p.bD$
o.b=!1
B.b.F(o.a)
n=o.c
if(n===$){m=A.cf(o.$ti.c)
o.c!==$&&A.a3()
o.c=m
n=m}if(n.a>0){n.b=n.c=n.d=n.e=null
n.a=0}o=p.bU$
o.b=!1
B.b.F(o.a)
n=o.c
if(n===$){m=A.cf(o.$ti.c)
o.c!==$&&A.a3()
o.c=m
n=m}if(n.a>0){n.b=n.c=n.d=n.e=null
n.a=0}p.qC()
q.hn()}k.l(0,r,null)}k=l.a.p1
if(k!=null)k.va(l,!1)
l.J3()},
dF(a){return!0},
dG(a){return!1},
Ts(a){var s=this,r=s.f=!0,q=s.a
q.toString
if(!s.dF(q)?s.dG(q):r)s.hg(B.bE,s.f)},
Tu(a){this.f=!1
this.hg(B.bE,!1)},
gK4(){var s,r=this,q=r.c
q.toString
q=A.di(q,B.tV)
s=q==null?null:q.ch
switch((s==null?B.fl:s).a){case 0:q=r.a
q.toString
return(r.dF(q)||r.dG(q))&&r.a.ok
case 1:return!0}},
N(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null
e.GE(a)
s=new A.Vs(e,a)
for(r=e.r,q=A.i8(r,r.r);q.p();){p=q.d
o=r.k(0,p)
if(o!=null)o.saf(s.$1(p))}r=e.e
if(r!=null){q=e.a.fx
if(q==null)q=d
else{p=e.gce().a
p=q.a.$1(p)
q=p}if(q==null)q=e.a.fy
r.saf(q==null?A.aG(a).k3:q)}r=e.a.ay
if(r==null)r=B.hU
n=A.jU(r,e.gce().a,t.oR)
m=e.w
if(m===$){r=e.gQJ()
q=t.B8
p=t.dc
l=A.aC([B.IN,new A.jd(r,new A.b0(A.a([],q),p),t.ei),B.IO,new A.jd(r,new A.b0(A.a([],q),p),t.wV)],t.u,t.nT)
e.w!==$&&A.a3()
e.w=l
m=l}r=e.a.k4
q=e.gK4()
p=e.a
p.toString
p=e.dF(p)?e.gTS():d
o=e.a
o.toString
o=e.dF(o)?e.gTU():d
k=e.a
k.toString
k=e.dF(k)?e.gTP():d
j=e.a
j.toString
j=e.dF(j)?e.gTQ():d
i=e.a
i.toString
i=e.dG(i)?e.gTJ():d
h=e.a
h.toString
h=e.dG(h)?e.gTL():d
g=e.a
g.toString
g=e.dG(g)?e.gTF():d
f=e.a
f.toString
f=e.dG(f)?e.gTH():d
return new A.tO(e,A.HR(m,A.xj(!1,q,A.a3C(A.aaD(A.d4(d,A.a2X(B.a7,e.a.c,B.bU,!0,d,d,d,d,d,d,d,d,d,d,g,f,i,h,k,j,p,o),!1,d,!1,d,d,d,d,d,d,d,e.gGj(),d,d,d,d,d,d,d),n),n,e.gTr(),e.gTt()),d,d,d,r,!0,d,e.gTg(),d,d,d,d)),d)},
$ia0c:1}
A.Vv.prototype={
$1(a){return a!=null},
$S:189}
A.Vr.prototype={
$0(){this.a.hg(B.bd,!1)},
$S:0}
A.Vu.prototype={
$0(){},
$S:0}
A.Vw.prototype={
$0(){var s=this.a
s.r.l(0,this.b,null)
s.q9()},
$S:0}
A.Vq.prototype={
$0(){var s,r=this.b,q=r.d
if(q!=null){s=this.a
q.A(0,s.a)
if(r.e==s.a)r.e=null
r.q9()}},
$S:0}
A.Vt.prototype={
$0(){this.a.wf()},
$S:0}
A.Vs.prototype={
$1(a){var s,r,q=this,p=A.aG(q.b)
switch(a.a){case 0:s=q.a
r=s.a.fx
r=r==null?null:r.a.$1(B.DM)
s=r==null?s.a.fr:r
return s==null?p.db:s
case 2:s=q.a
r=s.a.fx
r=r==null?null:r.a.$1(B.DI)
s=r==null?s.a.dx:r
return s==null?p.cy:s
case 1:s=q.a
r=s.a.fx
r=r==null?null:r.a.$1(B.DD)
s=r==null?s.a.dy:r
return s==null?p.dy:s}},
$S:190}
A.xJ.prototype={}
A.uP.prototype={
aZ(){this.bl()
if(this.gwl())this.ro()},
cq(){var s=this.iB$
if(s!=null){s.aL()
s.fI()
this.iB$=null}this.qM()}}
A.Le.prototype={
D(){return"FloatingLabelBehavior."+this.b}}
A.xf.prototype={
gq(a){return B.f.gq(-1)},
i(a,b){if(b==null)return!1
if(this===b)return!0
if(J.I(b)!==A.u(this))return!1
return b instanceof A.xf&&!0},
j(a){return A.abv(-1)}}
A.xK.prototype={
gq(a){var s=null
return A.G(s,s,s,s,s,s,s,B.xv,B.ei,!1,s,!1,s,s,s,s,s,s,!1,A.G(s,s,s,s,s,s,s,s,s,s,s,!1,s,s,B.a,B.a,B.a,B.a,B.a,B.a))},
i(a,b){var s
if(b==null)return!1
if(this===b)return!0
if(J.I(b)!==A.u(this))return!1
if(b instanceof A.xK)if(B.ei.i(0,B.ei))s=!0
else s=!1
else s=!1
return s}}
A.Da.prototype={}
A.pq.prototype={
gq(a){var s=this
return A.G(s.a,s.b,s.c,s.d,s.e,s.f,s.r,s.w,s.x,s.y,s.z,s.Q,s.as,s.at,s.ax,s.ay,s.ch,s.CW,s.cx,B.a)},
i(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(J.I(b)!==A.u(r))return!1
if(b instanceof A.pq)if(J.d(b.b,r.b))if(b.c==r.c)if(J.d(b.d,r.d))if(J.d(b.e,r.e))if(J.d(b.r,r.r))if(J.d(b.w,r.w))if(J.d(b.x,r.x))if(J.d(b.f,r.f))if(J.d(b.y,r.y))if(J.d(b.z,r.z))if(J.d(b.Q,r.Q))if(b.as==r.as)if(b.at==r.at)if(b.ax==r.ax)s=!0
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
return s}}
A.Ds.prototype={}
A.ib.prototype={
D(){return"MaterialType."+this.b}}
A.py.prototype={
ao(){return new A.Dz(new A.cg("ink renderer",t.DU),null,null,B.p)}}
A.Dz.prototype={
LO(a){var s=A.aG(a),r=this.a,q=r.f
if(q==null)switch(r.d.a){case 0:q=s.at
break
case 1:q=s.ax
break
case 3:case 2:case 4:break}return q},
N(a){var s,r,q,p,o,n,m,l=this,k=null,j=A.aG(a),i=l.LO(a),h=l.a,g=h.r
if(g==null){s=j.ay.fy
if(s==null)s=B.l
g=s}r=h.e
q=h.c
s=h.x
if(s==null){h=A.aG(a).p3.z
h.toString}else h=s
s=l.a
q=new A.nr(q,h,B.ag,s.as,k,k)
h=s
s=h.d
q=new A.dJ(new A.VR(l),new A.D9(i,l,s!==B.dp,q,l.d),k,t.am)
if(s===B.dn&&h.y==null&&!0){A.aG(a)
i.toString
h=l.a
p=A.a2H(i,h.w,h.e)
h=l.a
s=h.as
return new A.ns(q,B.bg,h.Q,r,p,!1,g,B.bT,s,k,k)}o=l.M2()
h=l.a
if(h.d===B.dp)return A.aab(new A.ue(q,o,!0,k),h.Q,new A.kr(o,A.dy(a)))
s=h.as
n=h.Q
m=h.e
i.toString
return new A.tx(q,o,!0,n,m,i,g,h.w,B.bT,s,k,k)},
M2(){var s=this.a,r=s.y
if(r!=null)return r
s=s.d
switch(s.a){case 0:case 4:return B.CQ
case 1:case 3:s=B.B5.k(0,s)
s.toString
return new A.bY(s,B.q)
case 2:return B.vP}}}
A.VR.prototype={
$1(a){var s,r=$.b_.a9$.z.k(0,this.a.d).ga5()
r.toString
t.xT.a(r)
s=r.bu
s=s==null?null:s.length!==0
if(s===!0)r.ae()
return!1},
$S:191}
A.tY.prototype={
tP(a){var s=this.bu;(s==null?this.bu=A.a([],t.pW):s).push(a)
this.ae()},
iJ(a){return this.a_},
aQ(a,b){var s,r,q,p,o,n=this.bu
if(n!=null&&n.length!==0){s=a.gbg()
s.c3()
s.ai(b.a,b.b)
r=this.gH()
s.jX(new A.D(0,0,0+r.a,0+r.b))
for(r=n.length,q=0;q<n.length;n.length===r||(0,A.C)(n),++q){p=n[q]
o=A.abZ(p.a,p.b)
if(o!=null)p.vF(s,o)}s.bA()}this.fM(a,b)}}
A.D9.prototype={
ah(a){var s=new A.tY(this.f,this.r,null,A.ak())
s.aj()
s.sag(null)
return s},
aC(a,b){b.a_=this.r}}
A.fU.prototype={
m(){var s=this.a,r=s.bu
r.toString
B.b.A(r,this)
s.ae()
this.c.$0()},
j(a){return"<optimized out>#"+A.b9(this)}}
A.ks.prototype={
cX(a){return A.bZ(this.a,this.b,a)}}
A.tx.prototype={
ao(){return new A.Dx(null,null,B.p)}}
A.Dx.prototype={
mi(a){var s,r,q=this
q.CW=t.nr.a(a.$3(q.CW,q.a.z,new A.VN()))
s=q.a
r=t.mo
s=r.a(a.$3(q.cy,s.as,new A.VO()))
q.cy=s
s=q.a.at
q.cx=s!=null?r.a(a.$3(q.cx,s,new A.VP())):null
q.db=t.AE.a(a.$3(q.db,q.a.w,new A.VQ()))},
N(a){var s,r,q,p,o,n=this,m=null,l=n.db
l.toString
l=l.a0(n.gdT().gn())
l.toString
s=n.CW
s.toString
r=s.a0(n.gdT().gn())
A.aG(a)
s=n.a.Q
q=n.cx
p=A.a2H(s,q==null?m:q.a0(n.gdT().gn()),r)
n.a.toString
s=n.cy
o=s==null?m:s.a0(n.gdT().gn())
if(o==null)o=B.Q
s=A.dy(a)
q=n.a
return new A.z4(new A.kr(l,s),q.y,r,p,o,new A.ue(q.r,l,!0,m),m)}}
A.VN.prototype={
$1(a){return new A.ax(A.a0l(a),null,t.a7)},
$S:73}
A.VO.prototype={
$1(a){return new A.f3(t.G.a(a),null)},
$S:32}
A.VP.prototype={
$1(a){return new A.f3(t.G.a(a),null)},
$S:32}
A.VQ.prototype={
$1(a){return new A.ks(t.mD.a(a),null)},
$S:194}
A.ue.prototype={
N(a){var s=A.dy(a)
return A.aav(this.c,new A.Fz(this.d,s,null),null)}}
A.Fz.prototype={
aQ(a,b){this.b.fw(a,new A.D(0,0,0+b.a,0+b.b),this.c)},
kW(a){return!a.b.i(0,this.b)}}
A.GL.prototype={
c5(){this.fN()
this.e1()
this.hB()},
m(){var s=this,r=s.aO$
if(r!=null)r.M(s.gfQ())
s.aO$=null
s.aW()}}
A.Dy.prototype={
v0(a){return a.gkz()==="en"},
hX(a){return new A.c_(B.uz,t.zU)},
qt(a){return!1},
j(a){return"DefaultMaterialLocalizations.delegate(en_US)"}}
A.wD.prototype={$ijT:1}
A.c2.prototype={
D(){return"MaterialState."+this.b}}
A.y8.prototype={$iaO:1}
A.DA.prototype={
U(a){return this.c.$1(a)}}
A.ya.prototype={
oJ(a){return this.U(A.aw(t.BD)).oJ(a)},
$iaO:1}
A.Cy.prototype={
U(a){if(a.t(0,B.G))return B.b8
return B.cu},
glZ(){return"MaterialStateMouseCursor(clickable)"}}
A.aO.prototype={}
A.tr.prototype={
U(a){var s,r=this,q=r.a,p=q==null?null:q.U(a)
q=r.b
s=q==null?null:q.U(a)
return r.d.$3(p,s,r.c)},
$iaO:1}
A.bS.prototype={
U(a){return this.a.$1(a)},
$iaO:1}
A.ch.prototype={
U(a){return this.a},
j(a){var s="MaterialStatePropertyAll(",r=this.a
if(typeof r=="number")return s+A.fz(r)+")"
else return s+A.f(r)+")"},
$iaO:1}
A.yb.prototype={
ew(a,b){var s=this.a,r=J.bG(s)
if(b?r.C(s,a):r.A(s,a))this.aL()}}
A.y9.prototype={
F5(a,b){return new A.NU(this,a,b)},
F4(a){return this.F5(a,null)},
QP(a){if(this.kj$.C(0,a))this.aE(new A.NS())},
pY(a){if(this.kj$.A(0,a))this.aE(new A.NT())}}
A.NU.prototype={
$1(a){var s=this.a,r=this.b
if(s.kj$.t(0,r)===a)return
if(a)s.QP(r)
else s.pY(r)},
$S:18}
A.NS.prototype={
$0(){},
$S:0}
A.NT.prototype={
$0(){},
$S:0}
A.yf.prototype={}
A.pF.prototype={
gq(a){return J.l(this.a)},
i(a,b){if(b==null)return!1
if(this===b)return!0
if(J.I(b)!==A.u(this))return!1
return b instanceof A.pF&&J.d(b.a,this.a)}}
A.DD.prototype={}
A.yg.prototype={
gq(a){var s=this
return A.bs([s.a,s.b,s.c,s.d,s.e,s.f,s.r,s.w,s.x,s.y,s.z,s.Q,s.as])},
i(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(J.I(b)!==A.u(r))return!1
if(b instanceof A.yg)if(b.a==r.a)if(b.b==r.b)if(b.c==r.c)if(b.d==r.d)if(b.e==r.e)if(b.f==r.f)if(b.r==r.r)if(b.w==r.w)if(b.x===r.x)if(b.y==r.y)s=J.d(b.as,r.as)
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
return s}}
A.Dq.prototype={
U(a){var s,r=this,q=r.a,p=q==null?null:q.U(a)
q=r.b
s=q==null?null:q.U(a)
q=p==null
if(q&&s==null)return null
if(q){q=s.a.a
return A.a5(new A.bk(A.Y(0,q>>>16&255,q>>>8&255,q&255),0,B.F,-1),s,r.c)}if(s==null){q=p.a.a
return A.a5(p,new A.bk(A.Y(0,q>>>16&255,q>>>8&255,q&255),0,B.F,-1),r.c)}return A.a5(p,s,r.c)},
$iaO:1}
A.DE.prototype={}
A.lO.prototype={
gq(a){return J.l(this.a)},
i(a,b){if(b==null)return!1
if(this===b)return!0
if(J.I(b)!==A.u(this))return!1
return b instanceof A.lO&&J.d(b.a,this.a)}}
A.DF.prototype={}
A.pT.prototype={
gq(a){var s=this
return A.G(s.a,s.b,s.c,s.d,s.e,s.f,s.r,s.w,s.x,s.y,s.z,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(J.I(b)!==A.u(r))return!1
if(b instanceof A.pT)if(b.a==r.a)if(J.d(b.b,r.b))if(b.c==r.c)if(J.d(b.d,r.d))if(J.d(b.e,r.e))if(J.d(b.f,r.f))if(J.d(b.r,r.r))if(b.w==r.w)if(b.x==r.x)s=b.z==r.z
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
return s}}
A.DO.prototype={}
A.pU.prototype={
gq(a){var s=this
return A.G(s.a,s.b,s.c,s.d,s.e,s.f,s.r,s.w,s.x,s.y,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.I(b)!==A.u(s))return!1
return b instanceof A.pU&&b.a==s.a&&J.d(b.b,s.b)&&b.c==s.c&&J.d(b.d,s.d)&&J.d(b.e,s.e)&&J.d(b.f,s.f)&&J.d(b.r,s.r)&&J.d(b.w,s.w)&&b.x==s.x&&b.y==s.y}}
A.DP.prototype={}
A.pV.prototype={
gq(a){var s=this
return A.G(s.a,s.b,s.c,s.d,s.e,s.f,s.r,s.w,s.x,s.y,s.z,s.Q,s.as,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.I(b)!==A.u(s))return!1
return b instanceof A.pV&&J.d(b.a,s.a)&&b.b==s.b&&J.d(b.c,s.c)&&J.d(b.d,s.d)&&J.d(b.e,s.e)&&J.d(b.f,s.f)&&b.r==s.r&&J.d(b.y,s.y)&&J.d(b.z,s.z)&&b.Q==s.Q&&b.as==s.as}}
A.DQ.prototype={}
A.q1.prototype={
gq(a){return J.l(this.a)},
i(a,b){if(b==null)return!1
if(this===b)return!0
if(J.I(b)!==A.u(this))return!1
return b instanceof A.q1&&J.d(b.a,this.a)}}
A.DZ.prototype={}
A.ey.prototype={}
A.y7.prototype={}
A.ty.prototype={}
A.GF.prototype={
N(a){var s=this
return new A.ll(s.c,new A.XF(s),new A.XG(s),new A.ll(new A.eG(s.d,new A.b0(A.a([],t.A),t.U),0),new A.XH(s),new A.XI(s),s.f,null),null)}}
A.XF.prototype={
$3(a,b,c){return new A.iV(b,c,this.a.e&&!0,!1,null)},
$C:"$3",
$R:3,
$S:75}
A.XG.prototype={
$3(a,b,c){return new A.iW(b,this.a.e,!0,c,null)},
$C:"$3",
$R:3,
$S:76}
A.XH.prototype={
$3(a,b,c){return new A.iV(b,c,this.a.e&&!0,!0,null)},
$C:"$3",
$R:3,
$S:75}
A.XI.prototype={
$3(a,b,c){return new A.iW(b,this.a.e,!1,c,null)},
$C:"$3",
$R:3,
$S:76}
A.iV.prototype={
ao(){return new A.GD(new A.ra($.aD()),$,$,B.p)}}
A.GD.prototype={
gwi(){return!1},
lq(){var s,r=this,q=r.a,p=q.f
if(p)s=B.bO
else{s=$.a8s()
s=new A.aL(q.c,s,s.$ti.h("aL<aj.T>"))}r.fY$=s
p=p?$.a8t():$.a8u()
q=q.c
r.hK$=new A.aL(q,p,p.$ti.h("aL<aj.T>"))
q.a6(r.gkD())
r.a.c.dk(r.gkC())},
aZ(){var s,r,q,p,o=this
o.lq()
s=o.a
r=s.f
q=o.fY$
q===$&&A.c()
p=o.hK$
p===$&&A.c()
o.d=A.a5N(s.c,q,r,p)
o.bl()},
aS(a){var s,r,q,p=this,o=p.a
if(a.f!==o.f||a.c!==o.c){o=a.c
o.M(p.gkD())
o.bY(p.gkC())
p.lq()
o=p.d
o===$&&A.c()
o.m()
o=p.a
s=o.f
r=p.fY$
r===$&&A.c()
q=p.hK$
q===$&&A.c()
p.d=A.a5N(o.c,r,s,q)}p.br(a)},
m(){var s,r=this
r.a.c.M(r.gkD())
r.a.c.bY(r.gkC())
s=r.d
s===$&&A.c()
s.m()
r.Ja()},
N(a){var s=this.d
s===$&&A.c()
return A.a4B(!0,this.a.d,this.hJ$,B.tu,s)}}
A.iW.prototype={
ao(){return new A.GE(new A.ra($.aD()),$,$,B.p)}}
A.GE.prototype={
gwi(){return!1},
lq(){var s,r=this,q=r.a,p=q.e
if(p){s=$.a8w()
s=new A.aL(q.c,s,s.$ti.h("aL<aj.T>"))}else s=B.bO
r.fY$=s
p=p?$.a8x():$.a8y()
q=q.c
r.hK$=new A.aL(q,p,p.$ti.h("aL<aj.T>"))
q.a6(r.gkD())
r.a.c.dk(r.gkC())},
aZ(){var s,r,q,p,o=this
o.lq()
s=o.a
r=s.e
q=o.fY$
q===$&&A.c()
p=o.hK$
p===$&&A.c()
o.d=A.a5O(s.c,q,r,p)
o.bl()},
aS(a){var s,r,q,p=this,o=p.a
if(a.e!==o.e||a.c!==o.c){o=a.c
o.M(p.gkD())
o.bY(p.gkC())
p.lq()
o=p.d
o===$&&A.c()
o.m()
o=p.a
s=o.e
r=p.fY$
r===$&&A.c()
q=p.hK$
q===$&&A.c()
p.d=A.a5O(o.c,r,s,q)}p.br(a)},
m(){var s,r=this
r.a.c.M(r.gkD())
r.a.c.bY(r.gkC())
s=r.d
s===$&&A.c()
s.m()
r.Jb()},
N(a){var s=this.d
s===$&&A.c()
return A.a4B(!0,this.a.f,this.hJ$,B.tu,s)}}
A.h6.prototype={}
A.B7.prototype={
C4(a,b,c,d,e){return new A.GF(c,d,!0,e,!0,null)}}
A.wp.prototype={
C4(a,b,c,d,e,f){return A.aar(a,b,c,d,e,f)}}
A.yG.prototype={
qU(a){var s=t.sW
return A.a0(new A.ag(B.zk,new A.OL(a),s),!0,s.h("ap.E"))},
i(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(J.I(b)!==A.u(r))return!1
s=b instanceof A.yG
if(s&&!0)return!0
return s&&A.cz(r.qU(B.de),r.qU(B.de))},
gq(a){return A.bs(this.qU(B.de))}}
A.OL.prototype={
$1(a){return this.a.k(0,a)},
$S:197}
A.nb.prototype={
Vl(){var s,r=this,q=r.hK$
q===$&&A.c()
if(J.d(q.b.a0(q.a.gn()),1)){q=r.fY$
q===$&&A.c()
q=J.d(q.gn(),0)||J.d(r.fY$.gn(),1)}else q=!1
s=r.hJ$
if(q)s.sow(!1)
else{r.gwi()
s.sow(!1)}},
Vk(a){switch(a.a){case 0:case 3:this.hJ$.sow(!1)
break
case 1:case 2:this.gwi()
this.hJ$.sow(!1)
break}}}
A.uJ.prototype={
tb(a){this.aL()},
Le(a,b,c){var s,r,q,p,o
if(!this.r&&this.w.gam()!==B.T){s=$.a8v().a0(this.w.gn())
s.toString
r=s}else r=0
if(r>0){s=a.gbg()
q=b.a
p=b.b
o=$.ai().bb()
o.saf(A.Y(B.c.bx(255*r),0,0,0))
s.cf(new A.D(q,p,q+c.a,p+c.b),o)}},
pF(a,b,c,d){var s,r,q=this
switch(q.w.gam().a){case 3:case 0:return d.$2(a,b)
case 1:case 2:break}q.Le(a,b,c)
s=q.z
r=q.x
A.a6A(s,r.b.a0(r.a.gn()),c)
r=q.as
r.saF(a.vM(!0,b,s,new A.XD(q,d),r.a))},
m(){var s=this,r=s.w,q=s.gh8()
r.M(q)
r.bY(s.glp())
s.x.a.M(q)
s.y.M(q)
s.Q.saF(null)
s.as.saF(null)
s.fI()},
kW(a){var s,r,q=this
if(a.r===q.r)if(J.d(a.w.gn(),q.w.gn())){s=a.x
r=q.x
s=!J.d(s.b.a0(s.a.gn()),r.b.a0(r.a.gn()))||!J.d(a.y.gn(),q.y.gn())}else s=!0
else s=!0
return s}}
A.XD.prototype={
$2(a,b){var s=this.a,r=s.Q
r.saF(a.Et(b,B.c.bx(s.y.gn()*255),this.b,r.a))},
$S:17}
A.uK.prototype={
tb(a){this.aL()},
pF(a,b,c,d){var s,r,q=this
switch(q.y.gam().a){case 3:case 0:return d.$2(a,b)
case 1:case 2:break}s=q.z
r=q.w
A.a6A(s,r.b.a0(r.a.gn()),c)
r=q.as
r.saF(a.vM(!0,b,s,new A.XE(q,d),r.a))},
kW(a){var s,r
if(a.r===this.r)if(J.d(a.x.gn(),this.x.gn())){s=a.w
r=this.w
r=!J.d(s.b.a0(s.a.gn()),r.b.a0(r.a.gn()))
s=r}else s=!0
else s=!0
return s},
m(){var s,r=this
r.Q.saF(null)
r.as.saF(null)
s=r.gh8()
r.w.a.M(s)
r.x.M(s)
r.y.bY(r.glp())
r.fI()}}
A.XE.prototype={
$2(a,b){var s=this.a,r=s.Q
r.saF(a.Et(b,B.c.bx(s.x.gn()*255),this.b,r.a))},
$S:17}
A.E4.prototype={}
A.uS.prototype={
m(){var s=this.hJ$
s.dy$=$.aD()
s.dx$=0
this.aW()}}
A.uT.prototype={
m(){var s=this.hJ$
s.dy$=$.aD()
s.dx$=0
this.aW()}}
A.qg.prototype={
gq(a){var s=this
return A.G(s.a,s.b,s.c,s.d,s.e,s.f,s.r,s.w,s.x,s.y,s.z,s.Q,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.I(b)!==A.u(s))return!1
return b instanceof A.qg&&J.d(b.a,s.a)&&J.d(b.b,s.b)&&b.c==s.c&&J.d(b.d,s.d)&&J.d(b.e,s.e)&&J.d(b.f,s.f)&&b.r==s.r&&J.d(b.z,s.z)&&b.Q==s.Q}}
A.EF.prototype={}
A.qi.prototype={
gq(a){var s=this
return A.G(s.a,s.b,s.c,s.d,s.e,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.I(b)!==A.u(s))return!1
return b instanceof A.qi&&J.d(b.a,s.a)&&J.d(b.b,s.b)&&b.c==s.c&&J.d(b.d,s.d)&&J.d(b.e,s.e)}}
A.EH.prototype={}
A.ql.prototype={
gq(a){var s=this
return A.G(s.a,s.b,s.c,s.d,s.e,s.f,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(J.I(b)!==A.u(r))return!1
if(b instanceof A.ql)if(b.b==r.b)if(b.c==r.c)if(b.d==r.d)s=!0
else s=!1
else s=!1
else s=!1
else s=!1
return s}}
A.EL.prototype={}
A.dr.prototype={
D(){return"_ScaffoldSlot."+this.b}}
A.qQ.prototype={
ao(){var s=null
return new A.A6(A.fZ(t.yp),A.i9(s,t.tT),A.i9(s,t.Ew),s,s,B.p)}}
A.A6.prototype={
bd(){var s,r=this,q=r.c
q.toString
s=A.d1(q,B.tT,t.w).w.z
q=r.y
if(q===!0)if(!s){q=r.x
q=q!=null&&q.b==null}else q=!1
else q=!1
if(q)r.U5(B.Ef)
r.y=s
r.dC()},
U5(a){var s,r,q=this,p=q.r
if(p.b!==p.c){null.gam()
s=!1}else s=!0
if(s)return
r=p.gJ(0).b
p=q.y
p.toString
if(p){null.sn(0)
r.e7(a)}else null.kJ().bk(new A.Qu(q,r,a),t.H)
p=q.x
if(p!=null)p.b3()
q.x=null},
N(a){var s,r=this
r.y=A.d1(a,B.tT,t.w).w.z
if(!r.r.gL(0)){s=A.O5(a,t.X)
if(s==null||s.giN())null.gXl()}return new A.u8(r,r.a.c,null)},
m(){var s=this.x
if(s!=null)s.b3()
this.x=null
this.IJ()}}
A.Qu.prototype={
$1(a){var s=this.b
if((s.a.a&30)===0)s.e7(this.c)},
$S:8}
A.u8.prototype={
bq(a){return this.f!==a.f}}
A.Qv.prototype={}
A.A5.prototype={
RU(a,b){var s=a==null?this.a:a
return new A.A5(s,b==null?this.b:b)}}
A.Fn.prototype={
Bs(a,b,c){var s=this
s.b=c==null?s.b:c
s.c=s.c.RU(a,b)
s.aL()},
Qy(a){return this.Bs(null,null,a)},
Qz(a,b){return this.Bs(a,b,null)}}
A.rR.prototype={
i(a,b){var s=this
if(b==null)return!1
if(!s.GK(0,b))return!1
return b instanceof A.rR&&b.r===s.r&&b.e===s.e&&b.f===s.f},
gq(a){var s=this
return A.G(A.aJ.prototype.gq.call(s,0),s.r,s.e,s.f,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)}}
A.Bx.prototype={
N(a){return this.c}}
A.WT.prototype={
pL(a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=this,a4=A.ZB(a8),a5=a8.a,a6=a4.w5(a5),a7=a8.b
if(a3.b.k(0,B.dZ)!=null){s=a3.cb(B.dZ,a6).b
a3.d7(B.dZ,B.h)
r=s}else{r=0
s=0}if(a3.b.k(0,B.h8)!=null){q=0+a3.cb(B.h8,a6).b
p=Math.max(0,a7-q)
a3.d7(B.h8,new A.z(0,p))}else{q=0
p=null}if(a3.b.k(0,B.h7)!=null){q+=a3.cb(B.h7,new A.aJ(0,a6.b,0,Math.max(0,a7-q-r))).b
a3.d7(B.h7,new A.z(0,Math.max(0,a7-q)))}if(a3.b.k(0,B.e2)!=null){o=a3.cb(B.e2,a6)
a3.d7(B.e2,new A.z(0,s))
if(!a3.ay)r+=o.b}else o=B.I
n=a3.f
m=Math.max(0,a7-Math.max(n.d,q))
if(a3.b.k(0,B.dY)!=null){l=Math.max(0,m-r)
k=a3.d
if(k)l=A.V(l+q,0,a4.d-r)
k=k?q:0
a3.cb(B.dY,new A.rR(k,s,o.b,0,a6.b,0,l))
a3.d7(B.dY,new A.z(0,r))}if(a3.b.k(0,B.e0)!=null){a3.cb(B.e0,new A.aJ(0,a6.b,0,m))
a3.d7(B.e0,B.h)}k=a3.b.k(0,B.bG)!=null&&!a3.at?a3.cb(B.bG,a6):B.I
if(a3.b.k(0,B.e1)!=null){j=a3.cb(B.e1,new A.aJ(0,a6.b,0,Math.max(0,m-r)))
a3.d7(B.e1,new A.z((a5-j.a)/2,m-j.b))}else j=B.I
i=A.bv("floatingActionButtonRect")
if(a3.b.k(0,B.e3)!=null){h=a3.cb(B.e3,a4)
g=new A.Qv(h,j,m,s,n,a3.r,a8,k,a3.w)
f=a3.z.ww(g)
e=a3.as.Fz(a3.y.ww(g),f,a3.Q)
a3.d7(B.e3,e)
d=e.a
c=e.b
i.b=new A.D(d,c,d+h.a,c+h.b)}if(a3.b.k(0,B.bG)!=null){d=a3.ax
b=d!=null&&d<a5
if(k.i(0,B.I)){a=a3.cb(B.bG,b?a4:a6)
k=a}$label0$0:{c=!1
if(c){c=!1
break $label0$0}if(B.em!==a3.z)c=!1
else c=!0
if(c){c=!0
break $label0$0}c=!0
break $label0$0}a0=i.aX()
if(!new A.U(a0.c-a0.a,a0.d-a0.b).i(0,B.I)&&a3.at&&c)c=p!=null?Math.min(p,i.aX().b):i.aX().b
else{a1=a3.at?Math.min(m,a7-a3.r.d):m
c=a1}if(b){switch(a3.w.a){case 0:d.toString
a5=(d-a5)/2
break
case 1:d.toString
a5=(a5-d)/2
break
default:a5=null}a2=a5}else a2=0
a3.d7(B.bG,new A.z(a2,c-k.b))}if(a3.b.k(0,B.e_)!=null){a3.cb(B.e_,a6.w4(n.b))
a3.d7(B.e_,B.h)}if(a3.b.k(0,B.h9)!=null){a3.cb(B.h9,A.nO(a8))
a3.d7(B.h9,B.h)}if(a3.b.k(0,B.h6)!=null){a3.cb(B.h6,A.nO(a8))
a3.d7(B.h6,B.h)}a3.x.Qz(p,i.aX())},
kV(a){var s=this
return!a.f.i(0,s.f)||!a.r.i(0,s.r)||a.w!==s.w||a.Q!==s.Q||a.y!==s.y||a.z!==s.z||a.d!==s.d||!1}}
A.te.prototype={
ao(){return new A.tf(null,null,B.p)}}
A.tf.prototype={
aZ(){var s,r,q=this
q.bl()
s=A.dS(null,B.a6,null,null,q)
s.b7()
r=s.bD$
r.b=!0
r.a.push(q.gN4())
q.d=s
q.B8()
q.a.r.sn(1)},
m(){var s=this.d
s===$&&A.c()
s.m()
this.J2()},
aS(a){var s,r,q,p,o=this
o.br(a)
s=o.a
if(a.e!==s.e||a.d!==s.d)o.B8()
s=o.a
r=a.c
s=s.c
s=J.d(r.a,s.a)
if(s)return
s=o.d
s===$&&A.c()
q=s.Q
q===$&&A.c()
if(q===B.B){q=o.a.r
p=q.x
p===$&&A.c()
if(p===0||!1){o.y=null
q.cU()}else{o.y=r
s.sn(p)
s.kJ()
o.a.r.sn(0)}}},
B8(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=null,b=d.d
b===$&&A.c()
s=A.fL(B.cJ,b,c)
b=t.a7
r=A.fL(B.cJ,d.d,c)
q=A.fL(B.cJ,d.a.r,c)
p=d.a
o=p.r
n=$.a8h()
m=t.v
m.a(o)
p=p.d
m.a(p)
l=t.zD.h("aL<aj.T>")
k=t.A
j=t.U
i=t.i
h=A.a50(new A.eG(new A.aL(p,new A.fK(new A.lr(B.iA)),l),new A.b0(A.a([],k),j),0),new A.aL(p,new A.fK(B.iA),l),p,0.5,i)
p=d.a.d
g=$.a8k()
m.a(p)
f=$.a8l()
e=A.a50(new A.aL(p,g,g.$ti.h("aL<aj.T>")),new A.eG(new A.aL(p,f,A.q(f).h("aL<aj.T>")),new A.b0(A.a([],k),j),0),p,0.5,i)
d.e=A.a1D(h,s,i)
i=A.a1D(h,q,i)
d.r=i
d.w=new A.aL(m.a(i),new A.fK(B.xM),l)
d.f=A.a00(new A.aL(r,new A.ax(1,1,b),b.h("aL<aj.T>")),e,c)
d.x=A.a00(new A.aL(o,n,n.$ti.h("aL<aj.T>")),e,c)
n=d.r
o=d.gOk()
n.b7()
n=n.bU$
n.b=!0
n.a.push(o)
n=d.e
n.b7()
n=n.bU$
n.b=!0
n.a.push(o)},
N5(a){this.aE(new A.UQ(this,a))},
N(a){var s,r,q=this,p=A.a([],t.nA),o=q.d
o===$&&A.c()
o=o.Q
o===$&&A.c()
if(o!==B.B){o=q.e
o===$&&A.c()
s=q.f
s===$&&A.c()
p.push(A.a4k(A.a4h(q.y,s),o))}o=q.a
o.toString
s=q.r
s===$&&A.c()
r=q.x
r===$&&A.c()
p.push(A.a4k(A.a4h(o.c,r),s))
return A.a_R(B.u3,p,B.tv)},
Ol(){var s,r,q=this.e
q===$&&A.c()
s=q.a.gn()
q=q.b.gn()
q=Math.min(A.v7(s),A.v7(q))
s=this.r
s===$&&A.c()
r=s.a.gn()
s=s.b.gn()
s=Math.max(q,Math.min(A.v7(r),A.v7(s)))
this.a.f.Qy(s)}}
A.UQ.prototype={
$0(){var s=this.a.a
s.toString
if(this.b===B.B)s.r.cU()},
$S:0}
A.qP.prototype={
ao(){var s=null,r=t.rG,q=t.DU,p=$.aD()
return new A.m2(new A.cg(s,r),new A.cg(s,r),new A.cg(s,q),new A.qG(!1,p),new A.qG(!1,p),A.a([],t.pc),new A.cg(s,q),B.l,s,A.y(t.wb,t.O),s,!0,s,s,s,B.p)}}
A.m2.prototype={
gcj(){this.a.toString
return null},
j2(a,b){var s=this
s.mO(s.w,"drawer_open")
s.mO(s.x,"end_drawer_open")},
Qv(){var s=this,r=!s.y.r.gL(0)?s.y.r.gJ(0):null
if(s.z!=r)s.aE(new A.Qx(s,r))},
Ql(){var s=this,r=!s.y.e.gL(0)?s.y.e.gJ(0):null
if(s.Q!=r)s.aE(new A.Qw(s,r))},
NX(){this.a.toString},
Ng(){var s=this.c
s.toString
A.a_E(s)},
gjH(){this.a.toString
return!0},
aZ(){var s,r=this,q=null
r.bl()
s=r.c
s.toString
r.dx=new A.Fn(s,B.CW,$.aD())
r.a.toString
r.cy=B.em
r.CW=B.vF
r.cx=B.em
r.ch=A.dS(q,new A.aS(4e5),q,1,r)
r.db=A.dS(q,B.a6,q,q,r)},
aS(a){this.IM(a)
this.a.toString},
bd(){var s,r,q=this,p=q.c.aa(t.Cu),o=p==null?null:p.f,n=q.y,m=n==null
if(!m)s=o==null||n!==o
else s=!1
if(s)if(!m)n.d.A(0,q)
q.y=o
if(o!=null){n=o.d
n.C(0,q)
r=q.c.pa(t.yp)
if(r==null||!n.t(0,r)){if(!o.r.gL(0))q.Qv()
if(!o.e.gL(0))q.Ql()}}q.NX()
q.IL()},
m(){var s=this,r=s.dx
r===$&&A.c()
r.dy$=$.aD()
r.dx$=0
r=s.ch
r===$&&A.c()
r.m()
r=s.db
r===$&&A.c()
r.m()
r=s.y
if(r!=null)r.d.A(0,s)
s.w.m()
s.x.m()
s.IN()},
qR(a,b,c,d,e,f,g,h,i){var s,r=this.c
r.toString
s=A.d1(r,null,t.w).w.EE(f,g,h,i)
if(e)s=s.W2(!0)
if(d&&s.f.d!==0)s=s.Cl(s.r.u8(s.w.d))
if(b!=null)a.push(A.Ny(A.ye(b,s,null),c))},
Jw(a,b,c,d,e,f,g,h){return this.qR(a,b,c,!1,d,e,f,g,h)},
l5(a,b,c,d,e,f,g){return this.qR(a,b,c,!1,!1,d,e,f,g)},
xE(a,b,c,d,e,f,g,h){return this.qR(a,b,c,d,!1,e,f,g,h)},
xU(a,b){this.a.toString},
xT(a,b){this.a.toString},
N(a){var s,r,q,p,o,n,m,l,k,j,i=this,h=null,g={},f=A.aG(a),e=a.aa(t.I)
e.toString
s=e.w
r=A.a([],t.fd)
e=i.a.f
i.gjH()
i.Jw(r,new A.Bx(new A.pk(e,i.f),!1,!1,h),B.dY,!0,!1,!1,!1,!0)
if(i.dy)i.l5(r,A.a3B(!0,h,i.fr,!1,h,h,h),B.e0,!0,!0,!0,!0)
i.a.toString
e=A.d1(a,B.cz,t.w).w
e=i.r=A.a9P(a,i.a.e.fx)+e.r.b
q=i.a.e
i.l5(r,new A.el(new A.aJ(0,1/0,0,e),new A.oO(1,e,e,e,h,h,q,h),h),B.dZ,!0,!1,!1,!1)
g.a=!1
g.b=null
if(i.at!=null||i.as.length!==0){e=A.a0(i.as,!0,t.cm)
q=i.at
if(q!=null)e.push(q.a)
p=A.a_R(B.u1,e,B.tv)
i.gjH()
i.l5(r,p,B.e1,!0,!1,!1,!0)}e=i.z
if(e!=null){e.a.gX6()
g.a=!1
e=i.z
if(e!=null)e.a.ghi()
g.b=f.iF.w
e=i.z
e=e==null?h:e.a
i.a.toString
i.gjH()
i.xE(r,e,B.bG,!1,!1,!1,!1,!0)}g.c=!1
if(i.Q!=null){a.aa(t.rg)
e=A.aG(a)
o=e.ry.f
g.c=(o==null?0:o)!==0
e=i.Q
e=e==null?h:e.a
i.a.toString
i.gjH()
i.xE(r,e,B.e2,!1,!0,!1,!1,!0)}e=i.a
e.toString
q=i.ch
q===$&&A.c()
n=i.CW
n===$&&A.c()
m=i.dx
m===$&&A.c()
l=i.db
l===$&&A.c()
i.l5(r,new A.te(e.r,q,n,m,l,h),B.e3,!0,!0,!0,!0)
switch(f.w.a){case 2:case 4:i.l5(r,A.a2X(B.a7,h,B.bU,!0,h,h,h,h,h,h,h,h,h,h,h,h,h,h,i.gNf(),h,h,h),B.e_,!0,!1,!1,!0)
break
case 0:case 1:case 3:case 5:break}e=i.x
q=e.y
if(q==null?A.q(e).h("by.T").a(q):q){i.xT(r,s)
i.xU(r,s)}else{i.xU(r,s)
i.xT(r,s)}e=t.w
q=A.d1(a,B.cz,e).w
i.gjH()
n=A.d1(a,B.h1,e).w
k=q.r.u8(n.f.d)
q=A.d1(a,B.K9,e).w
i.gjH()
e=A.d1(a,B.h1,e).w
e=e.f.d!==0?0:h
j=q.w.u8(e)
if(k.d<=0)i.a.toString
i.a.toString
return new A.Fo(!1,new A.qS(A.NM(B.a6,A.nq(i.ch,new A.Qy(g,i,!1,k,j,s,r),h),B.M,f.id,0,h,h,h,h,h,B.dn),h),h)}}
A.Qx.prototype={
$0(){this.a.z=this.b},
$S:0}
A.Qw.prototype={
$0(){this.a.Q=this.b},
$S:0}
A.Qy.prototype={
$2(a,b){var s,r,q,p,o,n,m,l=this,k=A.aC([B.tD,new A.Cm(a,new A.b0(A.a([],t.B8),t.dc))],t.u,t.nT),j=l.b
j.a.toString
s=j.cy
s.toString
r=j.ch
r===$&&A.c()
r=r.x
r===$&&A.c()
q=j.CW
q===$&&A.c()
p=j.dx
p===$&&A.c()
j=j.cx
j.toString
o=l.a
n=o.a
m=o.c
return A.HR(k,new A.o7(new A.WT(l.c,!1,l.d,l.e,l.f,p,j,s,r,q,n,o.b,m),l.r,null))},
$S:199}
A.Cm.prototype={
h0(a){var s=this.e,r=A.qR(s).w,q=r.y
if(!(q==null?A.q(r).h("by.T").a(q):q)){s=A.qR(s).x
r=s.y
s=r==null?A.q(s).h("by.T").a(r):r}else s=!0
return s},
d4(a){var s=this.e
A.qR(s).a.toString
A.qR(s).a.toString}}
A.Fo.prototype={
bq(a){return this.f!==a.f}}
A.WU.prototype={
$2(a,b){if(!a.a)a.M(b)},
$S:40}
A.u9.prototype={
c5(){this.fN()
this.e1()
this.hB()},
m(){var s=this,r=s.aO$
if(r!=null)r.M(s.gfQ())
s.aO$=null
s.aW()}}
A.ua.prototype={
c5(){this.fN()
this.e1()
this.hB()},
m(){var s=this,r=s.aO$
if(r!=null)r.M(s.gfQ())
s.aO$=null
s.aW()}}
A.ub.prototype={
aS(a){this.br(a)
this.oT()},
bd(){var s,r,q,p,o=this
o.dC()
s=o.ak$
r=o.gmR()
q=o.c
q.toString
q=A.qJ(q)
o.fm$=q
p=o.lA(q,r)
if(r){o.j2(s,o.cS$)
o.cS$=!1}if(p)if(s!=null)s.m()},
m(){var s,r=this
r.ca$.W(0,new A.WU())
s=r.ak$
if(s!=null)s.m()
r.ak$=null
r.IK()}}
A.uO.prototype={
c5(){this.fN()
this.e1()
this.hB()},
m(){var s=this,r=s.aO$
if(r!=null)r.M(s.gfQ())
s.aO$=null
s.aW()}}
A.qV.prototype={
gq(a){var s=this
return A.G(s.a,s.b,s.c,s.d,s.e,s.f,s.r,s.w,s.x,s.y,s.z,s.Q,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.I(b)!==A.u(s))return!1
return b instanceof A.qV&&b.a==s.a&&b.b==s.b&&b.c==s.c&&b.d==s.d&&b.e==s.e&&J.d(b.f,s.f)&&b.r==s.r&&b.w==s.w&&b.x==s.x&&b.y==s.y&&b.z==s.z&&b.Q==s.Q}}
A.Fp.prototype={}
A.qW.prototype={
gq(a){var s=this
return A.G(s.a,s.b,s.c,s.d,s.e,s.f,s.r,s.w,s.x,s.y,s.z,s.Q,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.I(b)!==A.u(s))return!1
return b instanceof A.qW&&b.a==s.a&&b.b==s.b&&b.c==s.c&&b.d==s.d&&b.e==s.e&&b.f==s.f&&b.r==s.r&&b.w==s.w&&b.x==s.x&&b.y==s.y&&J.d(b.z,s.z)&&!0}}
A.Dp.prototype={
U(a){var s,r=this,q=r.a,p=q==null?null:q.U(a)
q=r.b
s=q==null?null:q.U(a)
if(p==s)return p
if(p==null){q=s.a.a
return A.a5(new A.bk(A.Y(0,q>>>16&255,q>>>8&255,q&255),0,B.F,-1),s,r.c)}if(s==null){q=p.a.a
return A.a5(p,new A.bk(A.Y(0,q>>>16&255,q>>>8&255,q&255),0,B.F,-1),r.c)}return A.a5(p,s,r.c)},
$iaO:1}
A.Fq.prototype={}
A.qX.prototype={
gq(a){var s=this
return A.G(s.a,s.b,s.c,s.d,s.e,s.f,s.r,s.w,s.x,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.I(b)!==A.u(s))return!1
return b instanceof A.qX&&J.d(b.a,s.a)&&b.b==s.b&&J.d(b.c,s.c)&&J.d(b.d,s.d)&&J.d(b.e,s.e)&&J.d(b.f,s.f)&&J.d(b.r,s.r)&&J.d(b.w,s.w)&&J.d(b.x,s.x)}}
A.Fr.prototype={}
A.qY.prototype={
gq(a){return A.G(this.a,this.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a,b){if(b==null)return!1
if(this===b)return!0
if(J.I(b)!==A.u(this))return!1
return b instanceof A.qY&&J.d(b.a,this.a)&&!0}}
A.Fs.prototype={}
A.r7.prototype={
gq(a){var s=this
return A.G(s.a,s.b,s.c,s.d,s.e,s.r,s.f,s.w,s.x,s.y,s.z,s.Q,s.as,s.at,s.ax,s.ay,s.CW,s.cx,s.cy,A.G(s.db,s.dx,s.dy,s.fr,s.fx,s.fy,s.go,s.id,s.k1,s.k2,s.k3,s.k4,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a))},
i(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(J.I(b)!==A.u(r))return!1
if(b instanceof A.r7)if(b.a==r.a)if(J.d(b.b,r.b))if(J.d(b.c,r.c))if(J.d(b.d,r.d))if(J.d(b.e,r.e))if(J.d(b.r,r.r))if(J.d(b.f,r.f))if(J.d(b.w,r.w))if(J.d(b.x,r.x))if(J.d(b.y,r.y))if(J.d(b.z,r.z))if(J.d(b.Q,r.Q))if(J.d(b.as,r.as))if(J.d(b.at,r.at))if(J.d(b.ax,r.ax))if(J.d(b.ay,r.ay))if(J.d(b.ch,r.ch))if(J.d(b.id,r.id))if(b.k1==r.k1)s=!0
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
return s}}
A.FK.prototype={}
A.r8.prototype={
D(){return"SnackBarClosedReason."+this.b}}
A.r9.prototype={
gq(a){var s=this
return A.G(s.a,s.b,s.c,s.d,s.e,s.f,s.r,s.w,s.x,null,s.z,s.Q,s.as,s.at,s.ax,B.a,B.a,B.a,B.a,B.a)},
i(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.I(b)!==A.u(s))return!1
return b instanceof A.r9&&J.d(b.a,s.a)&&J.d(b.b,s.b)&&J.d(b.c,s.c)&&J.d(b.d,s.d)&&b.e==s.e&&J.d(b.f,s.f)&&b.w==s.w&&J.d(b.x,s.x)&&J.d(b.z,s.z)&&b.Q==s.Q&&J.d(b.as,s.as)&&J.d(b.at,s.at)&&!0}}
A.FL.prototype={}
A.re.prototype={
gq(a){var s=this
return A.G(s.a,s.b,s.c,s.d,s.e,s.f,s.r,s.w,s.x,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.I(b)!==A.u(s))return!1
return b instanceof A.re&&b.a==s.a&&b.b==s.b&&b.c==s.c&&b.d==s.d&&b.r==s.r&&b.w==s.w&&!0}}
A.FQ.prototype={}
A.rg.prototype={
gq(a){var s=this
return A.G(s.a,s.b,s.c,s.d,s.e,s.f,s.r,s.w,s.x,s.y,s.z,s.Q,s.as,s.at,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(J.I(b)!==A.u(r))return!1
if(b instanceof A.rg)if(J.d(b.a,r.a))if(J.d(b.b,r.b))if(J.d(b.d,r.d))if(J.d(b.f,r.f))if(J.d(b.r,r.r))if(J.d(b.w,r.w))if(J.d(b.x,r.x))if(J.d(b.y,r.y))if(b.z==r.z)s=!0
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
return s}}
A.FU.prototype={}
A.ri.prototype={
gq(a){return J.l(this.a)},
i(a,b){if(b==null)return!1
if(this===b)return!0
if(J.I(b)!==A.u(this))return!1
return b instanceof A.ri&&J.d(b.a,this.a)}}
A.FV.prototype={}
A.rp.prototype={
gq(a){return A.G(this.a,this.b,this.c,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.I(b)!==A.u(s))return!1
return b instanceof A.rp&&J.d(b.a,s.a)&&J.d(b.b,s.b)&&J.d(b.c,s.c)}}
A.FW.prototype={}
A.c6.prototype={
bw(b3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=null
if(b3==null)return b1
s=b1.a
r=s==null?b2:s.bw(b3.a)
if(r==null)r=b3.a
q=b1.b
p=q==null?b2:q.bw(b3.b)
if(p==null)p=b3.b
o=b1.c
n=o==null?b2:o.bw(b3.c)
if(n==null)n=b3.c
m=b1.d
l=m==null?b2:m.bw(b3.d)
if(l==null)l=b3.d
k=b1.e
j=k==null?b2:k.bw(b3.e)
if(j==null)j=b3.e
i=b1.f
h=i==null?b2:i.bw(b3.f)
if(h==null)h=b3.f
g=b1.r
f=g==null?b2:g.bw(b3.r)
if(f==null)f=b3.r
e=b1.w
d=e==null?b2:e.bw(b3.w)
if(d==null)d=b3.w
c=b1.x
b=c==null?b2:c.bw(b3.x)
if(b==null)b=b3.x
a=b1.y
a0=a==null?b2:a.bw(b3.y)
if(a0==null)a0=b3.y
a1=b1.z
a2=a1==null?b2:a1.bw(b3.z)
if(a2==null)a2=b3.z
a3=b1.Q
a4=a3==null?b2:a3.bw(b3.Q)
if(a4==null)a4=b3.Q
a5=b1.as
a6=a5==null?b2:a5.bw(b3.as)
if(a6==null)a6=b3.as
a7=b1.at
a8=a7==null?b2:a7.bw(b3.at)
if(a8==null)a8=b3.at
a9=b1.ax
b0=a9==null?b2:a9.bw(b3.ax)
if(b0==null)b0=b3.ax
if(r==null)r=b2
s=r==null?s:r
r=p==null?b2:p
if(r==null)r=q
q=n==null?b2:n
if(q==null)q=o
p=l==null?m:l
o=j==null?b2:j
if(o==null)o=k
n=h==null?b2:h
if(n==null)n=i
m=f==null?b2:f
if(m==null)m=g
l=d==null?b2:d
if(l==null)l=e
k=b==null?b2:b
if(k==null)k=c
j=a0==null?b2:a0
if(j==null)j=a
i=a2==null?b2:a2
if(i==null)i=a1
h=a4==null?b2:a4
if(h==null)h=a3
g=a6==null?b2:a6
if(g==null)g=a5
f=a8==null?a7:a8
e=b0==null?b2:b0
return A.a_X(j,i,h,s,r,q,p,o,n,g,f,e==null?a9:e,m,l,k)},
QW(a,b,a0,a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,c=e.a
c=c==null?d:c.d_(a0,d,b,d,a1,a2,0,1,a3)
s=e.b
s=s==null?d:s.d_(a0,d,b,d,a1,a2,0,1,a3)
r=e.c
r=r==null?d:r.d_(a0,d,b,d,a1,a2,0,1,a3)
q=e.d
q=q==null?d:q.d_(a0,d,b,d,a1,a2,0,1,a3)
p=e.e
p=p==null?d:p.d_(a0,d,b,d,a1,a2,0,1,a3)
o=e.f
o=o==null?d:o.d_(a,d,b,d,a1,a2,0,1,a3)
n=e.r
n=n==null?d:n.d_(a,d,b,d,a1,a2,0,1,a3)
m=e.w
m=m==null?d:m.d_(a,d,b,d,a1,a2,0,1,a3)
l=e.x
l=l==null?d:l.d_(a,d,b,d,a1,a2,0,1,a3)
k=e.y
k=k==null?d:k.d_(a,d,b,d,a1,a2,0,1,a3)
j=e.z
j=j==null?d:j.d_(a,d,b,d,a1,a2,0,1,a3)
i=e.Q
i=i==null?d:i.d_(a0,d,b,d,a1,a2,0,1,a3)
h=e.as
h=h==null?d:h.d_(a,d,b,d,a1,a2,0,1,a3)
g=e.at
g=g==null?d:g.d_(a,d,b,d,a1,a2,0,1,a3)
f=e.ax
return A.a_X(k,j,i,c,s,r,q,p,o,h,g,f==null?d:f.d_(a,d,b,d,a1,a2,0,1,a3),n,m,l)},
BU(a,b,c){return this.QW(a,b,c,null,null,null)},
i(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.I(b)!==A.u(s))return!1
return b instanceof A.c6&&J.d(s.a,b.a)&&J.d(s.b,b.b)&&J.d(s.c,b.c)&&J.d(s.d,b.d)&&J.d(s.e,b.e)&&J.d(s.f,b.f)&&J.d(s.r,b.r)&&J.d(s.w,b.w)&&J.d(s.x,b.x)&&J.d(s.y,b.y)&&J.d(s.z,b.z)&&J.d(s.Q,b.Q)&&J.d(s.as,b.as)&&J.d(s.at,b.at)&&J.d(s.ax,b.ax)},
gq(a){var s=this
return A.G(s.a,s.b,s.c,s.d,s.e,s.f,s.r,s.w,s.x,s.y,s.z,s.Q,s.as,s.at,s.ax,B.a,B.a,B.a,B.a,B.a)}}
A.FZ.prototype={}
A.AM.prototype={
N(a){var s,r,q=null,p=this.c,o=B.aV.a,n=B.aV.b,m=B.aV.c,l=B.aV.d,k=B.aV.e,j=B.aV.f,i=B.aV.r,h=a.aa(t.mA)
if(h==null)h=B.ex
s=p.hO
r=s.b
if(r==null)r=h.x
s=s.a
h=s==null?h.w:s
return new A.tn(this,new A.wr(new A.NO(p,new A.yu(o,n,m,l,k,j,i),B.hT,o,n,m,l,k,j,i),A.a_f(A.ZO(this.d,h,q,q,r),p.ok,q),q),q)}}
A.tn.prototype={
bq(a){return!this.w.c.i(0,a.w.c)}}
A.kw.prototype={
cX(a){var s,r=this.a
r.toString
s=this.b
s.toString
return A.aet(r,s,a)}}
A.nt.prototype={
ao(){return new A.Bh(null,null,B.p)}}
A.Bh.prototype={
mi(a){var s=a.$3(this.CW,this.a.r,new A.Tt())
s.toString
this.CW=t.zB.a(s)},
N(a){var s=this.CW
s.toString
return new A.AM(s.a0(this.gdT().gn()),this.a.w,null)}}
A.Tt.prototype={
$1(a){return new A.kw(t.oz.a(a),null)},
$S:201}
A.jV.prototype={
D(){return"MaterialTapTargetSize."+this.b}}
A.eb.prototype={
i(a,b){var s,r,q=this
if(b==null)return!1
if(J.I(b)!==A.u(q))return!1
if(b instanceof A.eb)if(A.Hu(b.d,q.d))if(b.a===q.a)if(A.Hu(b.c,q.c))if(b.e.i(0,q.e))if(b.f===q.f)if(b.r.i(0,q.r))if(b.w===q.w)if(b.x.i(0,q.x))if(b.y===q.y)if(b.Q.i(0,q.Q))if(b.at.i(0,q.at))if(b.ax.i(0,q.ax))if(b.ay.i(0,q.ay))if(b.ch.i(0,q.ch))if(b.CW.i(0,q.CW))if(b.cx.i(0,q.cx))if(b.cy.i(0,q.cy))if(b.db.i(0,q.db))if(b.dx.i(0,q.dx))if(b.dy.i(0,q.dy))if(b.fr.i(0,q.fr))if(b.fx.i(0,q.fx))if(b.fy.i(0,q.fy))if(b.go.i(0,q.go))if(b.id.i(0,q.id))if(b.k1.i(0,q.k1))if(b.k2.i(0,q.k2))if(b.k3.i(0,q.k3))if(b.k4.i(0,q.k4))if(b.ok.i(0,q.ok))if(b.p1.i(0,q.p1))if(b.p2.i(0,q.p2))if(b.p3.i(0,q.p3))if(b.p4.i(0,q.p4))if(J.d(b.R8,q.R8))if(b.RG.i(0,q.RG))if(b.rx.i(0,q.rx))if(b.ry.i(0,q.ry))if(b.to.i(0,q.to))if(b.x1.i(0,q.x1))if(b.x2.i(0,q.x2))if(b.xr.i(0,q.xr))if(b.y1.i(0,q.y1))if(b.y2.i(0,q.y2))if(b.aY.i(0,q.aY))if(b.ar.i(0,q.ar))if(b.aK.i(0,q.aK))if(b.aA.i(0,q.aA))if(b.bi.i(0,q.bi))if(b.a9.i(0,q.a9))if(b.be.i(0,q.be))if(b.I.i(0,q.I))if(b.ap.i(0,q.ap))if(b.aH.i(0,q.aH))if(b.aN.i(0,q.aN))if(b.b0.i(0,q.b0))if(b.b4.i(0,q.b4))if(b.bs.i(0,q.bs))if(b.bt.i(0,q.bt))if(b.bp.i(0,q.bp))if(b.bN.i(0,q.bN))if(b.bH.i(0,q.bH))if(b.dO.i(0,q.dO))if(b.eg.i(0,q.eg))if(b.eh.i(0,q.eh))if(b.eT.i(0,q.eT))if(b.eU.i(0,q.eU))if(b.ei.i(0,q.ei))if(b.eV.i(0,q.eV))if(b.ej.i(0,q.ej))if(b.iE.i(0,q.iE))if(b.kl.i(0,q.kl))if(b.iF.i(0,q.iF))if(b.km.i(0,q.km))if(b.kn.i(0,q.kn))if(b.ko.i(0,q.ko))if(b.hO.i(0,q.hO))if(b.kp.i(0,q.kp))if(b.kq.i(0,q.kq))if(b.iG.i(0,q.iG)){s=b.u
s.toString
r=q.u
r.toString
if(s.i(0,r)){s=b.kr
s.toString
r=q.kr
r.toString
if(s.i(0,r)){s=b.ks
s.toString
r=q.ks
r.toString
if(s.i(0,r)){s=b.as
s.toString
r=q.as
r.toString
r=s.i(0,r)
s=r}else s=!1}else s=!1}else s=!1}else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
return s},
gq(a){var s=this,r=s.d,q=A.a0(new A.aB(r,A.q(r).h("aB<1>")),!0,t.X)
B.b.G(q,r.gau())
q.push(s.a)
q.push(s.b)
r=s.c
B.b.G(q,r.gb1())
B.b.G(q,r.gau())
q.push(s.e)
q.push(s.f)
q.push(s.r)
q.push(s.w)
q.push(s.x)
q.push(s.y)
q.push(!0)
q.push(s.Q)
q.push(s.at)
q.push(s.ax)
q.push(s.ay)
q.push(s.ch)
q.push(s.CW)
q.push(s.cx)
q.push(s.cy)
q.push(s.db)
q.push(s.dx)
q.push(s.dy)
q.push(s.fr)
q.push(s.fx)
q.push(s.fy)
q.push(s.go)
q.push(s.id)
q.push(s.k1)
q.push(s.k2)
q.push(s.k3)
q.push(s.k4)
q.push(s.ok)
q.push(s.p1)
q.push(s.p2)
q.push(s.p3)
q.push(s.p4)
q.push(s.R8)
q.push(s.RG)
q.push(s.rx)
q.push(s.ry)
q.push(s.to)
q.push(s.x1)
q.push(s.x2)
q.push(s.xr)
q.push(s.y1)
q.push(s.y2)
q.push(s.aY)
q.push(s.ar)
q.push(s.aK)
q.push(s.aA)
q.push(s.bi)
q.push(s.a9)
q.push(s.be)
q.push(s.I)
q.push(s.ap)
q.push(s.aH)
q.push(s.aN)
q.push(s.b0)
q.push(s.b4)
q.push(s.bs)
q.push(s.bt)
q.push(s.bp)
q.push(s.bN)
q.push(s.bH)
q.push(s.dO)
q.push(s.eg)
q.push(s.eh)
q.push(s.eT)
q.push(s.eU)
q.push(s.ei)
q.push(s.eV)
q.push(s.ej)
q.push(s.iE)
q.push(s.kl)
q.push(s.iF)
q.push(s.km)
q.push(s.kn)
q.push(s.ko)
q.push(s.hO)
q.push(s.kp)
q.push(s.kq)
q.push(s.iG)
r=s.u
r.toString
q.push(r)
r=s.kr
r.toString
q.push(r)
r=s.ks
r.toString
q.push(r)
r=s.as
r.toString
q.push(r)
return A.bs(q)}}
A.SL.prototype={
$0(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=null,b2=this.a,b3=this.b,b4=b3.bw(b2.p2)
b3=b3.bw(b2.p3)
s=b2.ay
r=s.b
q=s.c
p=s.d
if(p==null)p=r
o=s.e
if(o==null)o=q
n=s.f
m=s.r
l=s.w
if(l==null)l=n
k=s.x
if(k==null)k=m
j=s.y
i=j==null?n:j
h=s.z
g=h==null?m:h
f=s.Q
if(f==null){if(j==null)j=n}else j=f
f=s.as
if(f==null){if(h==null)h=m}else h=f
f=s.at
e=s.ax
d=s.ay
if(d==null)d=f
c=s.ch
if(c==null)c=e
b=s.cx
a=s.cy
a0=s.db
a1=s.dx
if(a1==null)a1=a
a2=s.dy
if(a2==null)a2=a0
a3=s.fr
if(a3==null)a3=b
a4=s.fx
if(a4==null)a4=b
a5=s.fy
if(a5==null)a5=B.l
a6=s.go
if(a6==null)a6=B.l
a7=s.id
if(a7==null)a7=a0
a8=s.k1
if(a8==null)a8=a
a9=s.k2
if(a9==null)a9=q
b0=s.k3
if(b0==null)b0=r
j=A.J7(s.CW,s.a,f,d,a9,a7,b,e,c,a8,q,o,m,k,a0,a2,g,h,a3,a4,r,p,a6,n,l,a5,a,b0,a1,i,j)
return A.a_Y(b2.R8,b2.d,b2.RG,b2.a,b2.ks,b2.rx,b2.ry,b2.as,b2.to,b2.x1,b2.x2,b2.xr,b2.y1,b2.at,b2.ax,b2.y2,b2.aY,b2.ar,j,b2.b,b2.aK,b2.aA,b2.ch,b2.bi,b2.CW,b2.cx,b2.a9,b2.be,b2.I,b2.ap,b2.kr,b2.aH,b2.c,b2.aN,b2.b0,b2.cy,b2.db,b2.dx,b2.dy,b2.b4,b2.ok,b2.fr,b2.e,b2.bs,b2.f,b2.bt,b2.bp,b2.bN,b2.bH,b2.dO,b2.eg,b2.eh,b2.r,b2.w,b2.eT,b2.fx,b2.fy,b2.go,b2.p1,b4,b2.eU,b2.ei,b2.id,b2.x,b2.eV,b2.ej,b2.k1,b2.iE,b2.k2,b2.kl,b2.iF,b2.k3,b2.y,b2.km,b2.kn,b2.ko,b2.hO,b3,b2.kp,b2.kq,b2.u,b2.iG,b2.p4,b2.k4,!0,b2.Q)},
$S:202}
A.SI.prototype={
$2(a,b){return new A.be(a,b.Xm(this.a.c.k(0,a),this.b),t.DR)},
$S:203}
A.SJ.prototype={
$1(a){return!this.a.c.T(a.a)},
$S:204}
A.NO.prototype={
glN(){return this.ay.ay.a},
gkF(){return this.ay.ay.b},
gpR(){return this.ay.ay.c},
gn8(){return this.ay.id}}
A.mQ.prototype={
gq(a){return(A.kZ(this.a)^A.kZ(this.b))>>>0},
i(a,b){if(b==null)return!1
return b instanceof A.mQ&&b.a===this.a&&b.b===this.b}}
A.CE.prototype={
bj(a,b){var s,r=this.a,q=r.k(0,a)
if(q!=null)return q
if(r.a===this.b)r.A(0,new A.aB(r,A.q(r).h("aB<1>")).gJ(0))
s=b.$0()
r.l(0,a,s)
return s}}
A.hq.prototype={
CT(a){var s=this.a,r=this.b,q=A.V(a.a+new A.z(s,r).X(0,4).a,0,a.b)
return a.RX(A.V(a.c+new A.z(s,r).X(0,4).b,0,a.d),q)},
i(a,b){if(b==null)return!1
if(J.I(b)!==A.u(this))return!1
return b instanceof A.hq&&b.a===this.a&&b.b===this.b},
gq(a){return A.G(this.a,this.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
bB(){return this.GX()+"(h: "+A.fz(this.a)+", v: "+A.fz(this.b)+")"}}
A.G0.prototype={}
A.GA.prototype={}
A.rs.prototype={
glY(){var s,r=this.e
if(r!=null)s=!1
else s=!0
if(s)return r
r=new A.SO(this)
return new A.DA(r,r.$1(B.DL).gn())},
gq(a){var s=this
return A.bs([s.a,s.b,s.c,s.d,s.glY(),s.f,s.r,s.w,s.x,s.y,s.z,s.Q,s.as,s.at,s.ax,s.ay,s.ch,s.CW,s.cx,s.cy,s.db,s.dx])},
i(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.I(b)!==A.u(s))return!1
return b instanceof A.rs&&J.d(b.a,s.a)&&J.d(b.b,s.b)&&J.d(b.c,s.c)&&J.d(b.d,s.d)&&J.d(b.glY(),s.glY())&&J.d(b.f,s.f)&&J.d(b.r,s.r)&&J.d(b.w,s.w)&&J.d(b.x,s.x)&&J.d(b.y,s.y)&&J.d(b.z,s.z)&&J.d(b.Q,s.Q)&&b.as==s.as&&J.d(b.at,s.at)&&J.d(b.ax,s.ax)&&J.d(b.ay,s.ay)&&J.d(b.ch,s.ch)&&J.d(b.CW,s.CW)&&J.d(b.cx,s.cx)&&J.d(b.db,s.db)&&J.d(b.dx,s.dx)}}
A.SO.prototype={
$1(a){var s
if(a.t(0,B.V)){s=this.a.e
return s==null?t.G.a(s):s}return B.Q},
$S:6}
A.G2.prototype={}
A.rt.prototype={
gq(a){var s=this
return A.G(s.a,s.b,s.c,s.d,s.e,s.f,s.r,s.w,s.y,s.x,s.z,s.Q,s.as,s.ax,s.at,B.a,B.a,B.a,B.a,B.a)},
i(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.I(b)!==A.u(s))return!1
return b instanceof A.rt&&J.d(b.a,s.a)&&J.d(b.b,s.b)&&J.d(b.c,s.c)&&J.d(b.d,s.d)&&J.d(b.e,s.e)&&J.d(b.f,s.f)&&J.d(b.r,s.r)&&J.d(b.w,s.w)&&J.d(b.y,s.y)&&J.d(b.x,s.x)&&J.d(b.z,s.z)&&J.d(b.Q,s.Q)&&J.d(b.as,s.as)&&J.d(b.ax,s.ax)&&b.at==s.at}}
A.G4.prototype={}
A.CC.prototype={
ah(a){var s=new A.F2(!0,this.e,null,this.r,B.cE,B.a7,null,A.ak())
s.aj()
s.sag(null)
return s}}
A.F2.prototype={
bE(a,b){var s,r=this,q=$.a0e
$.a0e=!1
if(r.gH().t(0,b)){s=r.cD(a,b)||r.u===B.a7
if((s||r.u===B.bX)&&!$.a0d){$.a0d=!0
a.C(0,new A.jc(b,r))}}else s=!1
if(q){$.a0e=!0
$.a0d=!1}return s}}
A.rv.prototype={
ao(){return new A.mq(new A.OE(),A.aw(t.S),B.B,null,null,B.p)}}
A.mq.prototype={
gPS(){this.a.toString
this.f===$&&A.c()
return B.xb},
gLj(){this.a.toString
this.f===$&&A.c()
return!0},
gtx(){var s=this.a.c
return s==null?null.XD():s},
ghz(){var s,r=this,q=r.w
if(q==null){q=A.dS(null,B.xa,B.eB,null,r)
q.b7()
s=q.bD$
s.b=!0
s.a.push(r.gNh())
r.w=q}return q},
Ni(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null
$label0$0:{s=A.a4R(g.Q)
r=A.a4R(a)
if(s){q=!r
p=q
o=r
n=!0
m=!0}else{o=f
q=o
n=!1
m=!1
p=!1}if(p){B.b.A($.ky,g)
p=g.d
l=p.a
if(l!=null)l.U4()
else p.b=null
break $label0$0}k=!1===s
p=k
if(p){if(m)p=o
else{p=r
o=p
m=!0}j=!0===p
p=j
i=!0}else{j=f
i=!1
p=!1}if(p){p=g.d
l=p.a
h=$.a_y+1
if(l!=null){$.a_y=h
l.Gh(h)}else p.b=$.a_y=h
$.ky.push(g)
A.Rh(g.gtx())
break $label0$0}if(s)if(i)p=j
else{if(m)p=o
else{p=r
o=p
m=!0}j=!0===p
p=j}else p=!1
if(!p)if(k)if(n)p=q
else{q=!1===(m?o:r)
p=q}else p=!1
else p=!0
if(p)break $label0$0
throw A.e(A.fl("None of the patterns in the exhaustive switch statement the matched input value. See https://github.com/dart-lang/language/issues/3488 for details."))}g.Q=a},
PB(a,b){var s,r,q=this,p=new A.SU(q,a)
$label0$0:{s=q.ghz().Q
s===$&&A.c()
r=B.B===s
if(r&&b.a>0){if(q.r==null)q.r=A.bH(b,p)
break $label0$0}if(r||B.aF===s||B.af===s||B.T===s)p.$0()
break $label0$0}},
Ap(a){return this.PB(null,a)},
lu(a){var s=this,r=s.r
if(r!=null)r.b3()
s.r=null
r=s.w
if(r==null)r=null
else{r=r.Q
r===$&&A.c()}switch(r){case null:case void 0:case B.af:case B.B:break
case B.aF:case B.T:if(a.a>0)s.r=A.bH(a,s.ghz().gEO())
else s.ghz().kJ()
break}},
Q6(a){var s,r=this
r.a.toString
r.f===$&&A.c()
switch(1){case 1:s=r.x
if(s==null)s=r.x=A.a3s(r,B.DH)
s.p1=r.gNj()
s.p2=r.gMI()
s.R8=r.gN2()
s.BJ(a)
break}},
ME(a){var s=this,r=s.y
r=r==null?null:r.CW
if(r!==a.gaT()){r=s.x
r=r==null?null:r.CW
r=r===a.gaT()}else r=!0
if(r)return
if(s.r==null){r=s.ghz().Q
r===$&&A.c()
r=r===B.B}else r=!1
if(r||!t.c.b(a))return
s.zj()},
zj(){this.a.toString
this.lu(B.t)
this.z.F(0)},
MJ(){var s=this,r=s.e
r===$&&A.c()
if(!r)return
r=s.ghz().Q
r===$&&A.c()
if(r===B.B){s.gLj()
r=!0}else r=!1
if(r){r=s.c
r.toString
A.abr(r)}s.a.toString
s.Ap(B.t)},
N3(){if(this.z.a!==0)return
this.lu(this.gPS())},
MK(a){var s,r,q,p,o,n,m=this
m.z.C(0,a.geb())
s=A.a($.ky.slice(0),A.X($.ky))
for(r=s.length,q=!1,p=0;p<s.length;s.length===r||(0,A.C)(s),++p){o=s[p]
n=o.z
if(o!==m&&n.a===1&&J.d(n.gjf(0),a.geb())){o.lu(B.t)
q=!0}}if(!q){m.a.toString
m.f===$&&A.c()}m.Ap(B.t)},
ML(a){var s=this,r=s.z
if(r.a===0)return
r.A(0,a.geb())
if(r.a===0){s.a.toString
s.f===$&&A.c()
s.lu(B.aW)}},
aZ(){this.bl()
$.dd.bt$.b.l(0,this.gzc(),null)},
bd(){var s,r=this
r.dC()
r.c.aa(t.fc)
r.e=!0
s=r.c
s.aa(t.cF)
s=A.aG(s)
r.f=s.iG},
LR(){var s,r=this.c
r.toString
s=A.aG(r).w
$label0$0:{if(B.aN===s||B.b9===s||B.ba===s){r=24
break $label0$0}if(B.al===s||B.bz===s||B.at===s){r=32
break $label0$0}throw A.e(A.fl(u.d))}return r},
LQ(){var s,r=this.c
r.toString
s=A.aG(r).w
$label0$0:{if(B.aN===s||B.b9===s||B.ba===s){r=B.xk
break $label0$0}if(B.al===s||B.bz===s||B.at===s){r=B.xj
break $label0$0}throw A.e(A.fl(u.d))}return r},
JX(a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=this,a3=null
a2.a.toString
s=A.acg(a4,t.bm)
s.toString
r=a2.c.ga5()
r.toString
t.BS.a(r)
q=r.gH().fe(B.h)
p=A.fg(r.eA(s.c.ga5()),q)
o=A.aG(a4)
$label0$0:{n=o.ay.a
if(B.a2===n){m=o.p3
l=o.w
s=!0
k=m
j=!0
i=!0}else{k=a3
l=k
m=l
i=!1
j=!1
s=!1}if(s){h=j?l:o.w
s=k.z
s.toString
s=new A.eT(s.Cn(B.l,A.a4Q(h)),new A.f1(A.Y(B.c.bx(229.5),255,255,255),a3,a3,B.hf,a3,a3,B.bg))
break $label0$0}if(B.L===n){if(i)s=m
else{m=o.p3
s=m
i=!0}if(s instanceof A.c6){k=i?m:o.p3
if(j)s=l
else{l=o.w
s=l
j=!0}s=s instanceof A.cy}else{k=a3
s=!1}}else{k=a3
s=!1}if(s){h=j?l:o.w
s=k.z
s.toString
s=new A.eT(s.Cn(B.i,A.a4Q(h)),new A.f1(A.Y(B.c.bx(229.5),97,97,97),a3,a3,B.hf,a3,a3,B.bg))
break $label0$0}throw A.e(A.fl(u.d))}g=s.a
f=s.b
e=f
s=!0
d=g
if(!s)throw A.e(A.az("Pattern matching error"))
s=a2.f
s===$&&A.c()
r=A.SG(a3,a3,a2.a.c)
q=s.a
if(q==null)q=a2.LR()
a2.a.toString
c=s.b
if(c==null)c=a2.LQ()
a2.a.toString
b=s.c
if(b==null)b=B.aX
a=s.r
if(a==null)a=e
a0=s.w
if(a0==null)a0=d
a1=A.fL(B.bT,a2.ghz(),a3)
a2.a.toString
s=s.d
if(s==null)s=24
A.a4n(a4)
return new A.G5(r,q,c,b,a,a0,B.aO,a1,p,s,!0,a2.gze(),a2.gzf(),a3)},
m(){var s,r,q=this
$.dd.bt$.b.A(0,q.gzc())
B.b.A($.ky,q)
s=q.x
r=s==null
if(!r)s.p1=null
if(!r){s.jO()
s.l0()}s=q.y
r=s==null
if(!r)s.a9=null
if(!r){s.jO()
s.l0()}s=q.r
if(s!=null)s.b3()
s=q.w
if(s!=null)s.m()
q.IQ()},
N(a){var s,r,q=this,p=null
if(q.gtx().length===0){s=q.a.z
return s}q.a.toString
q.f===$&&A.c()
s=q.gtx()
r=A.d4(p,q.a.z,!1,p,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,s)
q.e===$&&A.c()
r=A.a54(A.NE(B.a7,r,p,q.gQ5(),p,p),q.gze(),q.gzf())
return new A.q2(q.d,q.gJW(),r,p)}}
A.SU.prototype={
$0(){var s=this.a,r=s.e
r===$&&A.c()
if(!r)return
s.ghz().cU()
r=s.r
if(r!=null)r.b3()
r=this.b
s.r=r==null?null:A.bH(r,s.ghz().gEO())},
$S:0}
A.Xg.prototype={
wr(a){return new A.aJ(0,a.b,0,a.d)},
wz(a,b){return A.aiA(b,!0,a,this.b,this.c)},
kV(a){return!this.b.i(0,a.b)||this.c!==a.c||!1}}
A.G5.prototype={
N(a){var s,r=this,q=null,p=A.aG(a).p3.z
p.toString
s=A.a2M(new A.el(new A.aJ(0,1/0,r.d,1/0),A.wG(A.d4(q,A.a1Z(q,A.IH(new A.mi(q,r.c,r.w,r.x,q),1,1),q,r.r,q,r.f,r.e,q),!0,q,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q),q,B.cv,!0,p,q,q,B.aC),q),r.y)
s=A.a54(s,r.at,r.ax)
p=A.di(a,B.h1)
p=p==null?q:p.f
p=p==null?q:p.d
if(p==null)p=0
return new A.ke(0,0,0,p,q,q,new A.o8(new A.Xg(r.z,r.Q,!0),s,q),q)}}
A.uq.prototype={
m(){var s=this,r=s.eO$
if(r!=null)r.M(s.goi())
s.eO$=null
s.aW()},
c5(){this.fN()
this.e1()
this.oj()}}
A.rw.prototype={
gq(a){var s=this,r=null
return A.G(s.a,s.b,s.c,s.d,s.e,s.f,s.r,s.w,s.x,r,r,r,r,r,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(J.I(b)!==A.u(r))return!1
if(b instanceof A.rw)if(b.a==r.a)if(J.d(b.b,r.b))if(J.d(b.c,r.c))if(b.d==r.d)if(J.d(b.r,r.r))if(J.d(b.w,r.w))s=!0
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
return s}}
A.G6.prototype={}
A.QH.prototype={
D(){return"ScriptCategory."+this.b}}
A.ms.prototype={
Fn(a){switch(a.a){case 0:return this.c
case 1:return this.d
case 2:return this.e}},
i(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.I(b)!==A.u(s))return!1
return b instanceof A.ms&&b.a.i(0,s.a)&&b.b.i(0,s.b)&&b.c.i(0,s.c)&&b.d.i(0,s.d)&&b.e.i(0,s.e)},
gq(a){var s=this
return A.G(s.a,s.b,s.c,s.d,s.e,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)}}
A.Gr.prototype={}
A.j5.prototype={
j(a){var s=this
if(s.gfa()===0)return A.Zx(s.gfb(),s.gfc())
if(s.gfb()===0)return A.Zw(s.gfa(),s.gfc())
return A.Zx(s.gfb(),s.gfc())+" + "+A.Zw(s.gfa(),0)},
i(a,b){if(b==null)return!1
return b instanceof A.j5&&b.gfb()===this.gfb()&&b.gfa()===this.gfa()&&b.gfc()===this.gfc()},
gq(a){return A.G(this.gfb(),this.gfa(),this.gfc(),B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)}}
A.cK.prototype={
gfb(){return this.a},
gfa(){return 0},
gfc(){return this.b},
V(a,b){return new A.cK(this.a-b.a,this.b-b.b)},
S(a,b){return new A.cK(this.a+b.a,this.b+b.b)},
X(a,b){return new A.cK(this.a*b,this.b*b)},
jS(a){var s=a.a/2,r=a.b/2
return new A.z(s+this.a*s,r+this.b*r)},
U(a){return this},
j(a){return A.Zx(this.a,this.b)}}
A.eY.prototype={
gfb(){return 0},
gfa(){return this.a},
gfc(){return this.b},
V(a,b){return new A.eY(this.a-b.a,this.b-b.b)},
S(a,b){return new A.eY(this.a+b.a,this.b+b.b)},
X(a,b){return new A.eY(this.a*b,this.b*b)},
U(a){var s=this
switch(a.a){case 0:return new A.cK(-s.a,s.b)
case 1:return new A.cK(s.a,s.b)}},
j(a){return A.Zw(this.a,this.b)}}
A.DH.prototype={
X(a,b){return new A.DH(this.a*b,this.b*b,this.c*b)},
U(a){var s=this
switch(a.a){case 0:return new A.cK(s.a-s.b,s.c)
case 1:return new A.cK(s.a+s.b,s.c)}},
gfb(){return this.a},
gfa(){return this.b},
gfc(){return this.c}}
A.qz.prototype={
D(){return"RenderComparison."+this.b}}
A.vA.prototype={
D(){return"Axis."+this.b}}
A.B2.prototype={
D(){return"VerticalDirection."+this.b}}
A.l6.prototype={
D(){return"AxisDirection."+this.b}}
A.yW.prototype={$icH:1}
A.FS.prototype={
aL(){var s,r,q
for(s=this.a,s=A.cI(s,s.r,A.q(s).c),r=s.$ti.c;s.p();){q=s.d;(q==null?r.a(q):q).$0()}}}
A.nK.prototype={
qA(a){var s=this
return new A.tA(s.gcN().V(0,a.gcN()),s.ge0().V(0,a.ge0()),s.gdV().V(0,a.gdV()),s.geE().V(0,a.geE()),s.gcO().V(0,a.gcO()),s.ge_().V(0,a.ge_()),s.geF().V(0,a.geF()),s.gdU().V(0,a.gdU()))},
C(a,b){var s=this
return new A.tA(s.gcN().S(0,b.gcN()),s.ge0().S(0,b.ge0()),s.gdV().S(0,b.gdV()),s.geE().S(0,b.geE()),s.gcO().S(0,b.gcO()),s.ge_().S(0,b.ge_()),s.geF().S(0,b.geF()),s.gdU().S(0,b.gdU()))},
j(a){var s,r,q,p,o=this
if(o.gcN().i(0,o.ge0())&&o.ge0().i(0,o.gdV())&&o.gdV().i(0,o.geE()))if(!o.gcN().i(0,B.z))s=o.gcN().a===o.gcN().b?"BorderRadius.circular("+B.c.P(o.gcN().a,1)+")":"BorderRadius.all("+o.gcN().j(0)+")"
else s=null
else{r=""+"BorderRadius.only("
if(!o.gcN().i(0,B.z)){r+="topLeft: "+o.gcN().j(0)
q=!0}else q=!1
if(!o.ge0().i(0,B.z)){if(q)r+=", "
r+="topRight: "+o.ge0().j(0)
q=!0}if(!o.gdV().i(0,B.z)){if(q)r+=", "
r+="bottomLeft: "+o.gdV().j(0)
q=!0}if(!o.geE().i(0,B.z)){if(q)r+=", "
r+="bottomRight: "+o.geE().j(0)}r+=")"
s=r.charCodeAt(0)==0?r:r}if(o.gcO().i(0,o.ge_())&&o.ge_().i(0,o.gdU())&&o.gdU().i(0,o.geF()))if(!o.gcO().i(0,B.z))p=o.gcO().a===o.gcO().b?"BorderRadiusDirectional.circular("+B.c.P(o.gcO().a,1)+")":"BorderRadiusDirectional.all("+o.gcO().j(0)+")"
else p=null
else{r=""+"BorderRadiusDirectional.only("
if(!o.gcO().i(0,B.z)){r+="topStart: "+o.gcO().j(0)
q=!0}else q=!1
if(!o.ge_().i(0,B.z)){if(q)r+=", "
r+="topEnd: "+o.ge_().j(0)
q=!0}if(!o.geF().i(0,B.z)){if(q)r+=", "
r+="bottomStart: "+o.geF().j(0)
q=!0}if(!o.gdU().i(0,B.z)){if(q)r+=", "
r+="bottomEnd: "+o.gdU().j(0)}r+=")"
p=r.charCodeAt(0)==0?r:r}r=s!=null
if(r&&p!=null)return A.f(s)+" + "+p
if(r)return s
if(p!=null)return p
return"BorderRadius.zero"},
i(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.I(b)!==A.u(s))return!1
return b instanceof A.nK&&b.gcN().i(0,s.gcN())&&b.ge0().i(0,s.ge0())&&b.gdV().i(0,s.gdV())&&b.geE().i(0,s.geE())&&b.gcO().i(0,s.gcO())&&b.ge_().i(0,s.ge_())&&b.geF().i(0,s.geF())&&b.gdU().i(0,s.gdU())},
gq(a){var s=this
return A.G(s.gcN(),s.ge0(),s.gdV(),s.geE(),s.gcO(),s.ge_(),s.geF(),s.gdU(),B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)}}
A.bK.prototype={
gcN(){return this.a},
ge0(){return this.b},
gdV(){return this.c},
geE(){return this.d},
gcO(){return B.z},
ge_(){return B.z},
geF(){return B.z},
gdU(){return B.z},
cY(a){var s=this,r=s.a.e6(0,B.z),q=s.b.e6(0,B.z)
return A.Pw(a,s.c.e6(0,B.z),s.d.e6(0,B.z),r,q)},
qA(a){if(a instanceof A.bK)return this.V(0,a)
return this.GJ(a)},
C(a,b){if(b instanceof A.bK)return this.S(0,b)
return this.GI(0,b)},
V(a,b){var s=this
return new A.bK(s.a.V(0,b.a),s.b.V(0,b.b),s.c.V(0,b.c),s.d.V(0,b.d))},
S(a,b){var s=this
return new A.bK(s.a.S(0,b.a),s.b.S(0,b.b),s.c.S(0,b.c),s.d.S(0,b.d))},
X(a,b){var s=this
return new A.bK(s.a.X(0,b),s.b.X(0,b),s.c.X(0,b),s.d.X(0,b))},
U(a){return this}}
A.tA.prototype={
X(a,b){var s=this
return new A.tA(s.a.X(0,b),s.b.X(0,b),s.c.X(0,b),s.d.X(0,b),s.e.X(0,b),s.f.X(0,b),s.r.X(0,b),s.w.X(0,b))},
U(a){var s=this
switch(a.a){case 0:return new A.bK(s.a.S(0,s.f),s.b.S(0,s.e),s.c.S(0,s.w),s.d.S(0,s.r))
case 1:return new A.bK(s.a.S(0,s.e),s.b.S(0,s.f),s.c.S(0,s.r),s.d.S(0,s.w))}},
gcN(){return this.a},
ge0(){return this.b},
gdV(){return this.c},
geE(){return this.d},
gcO(){return this.e},
ge_(){return this.f},
geF(){return this.r},
gdU(){return this.w}}
A.vH.prototype={
D(){return"BorderStyle."+this.b}}
A.bk.prototype={
al(a){var s=Math.max(0,this.b*a),r=a<=0?B.O:this.c
return new A.bk(this.a,s,r,-1)},
he(){switch(this.c.a){case 1:var s=$.ai().bb()
s.saf(this.a)
s.shm(this.b)
s.sct(B.N)
return s
case 0:s=$.ai().bb()
s.saf(B.Q)
s.shm(0)
s.sct(B.N)
return s}},
gcs(){return this.b*(1-(1+this.d)/2)},
gjk(){return this.b*(1+this.d)/2},
i(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.I(b)!==A.u(s))return!1
return b instanceof A.bk&&b.a.i(0,s.a)&&b.b===s.b&&b.c===s.c&&b.d===s.d},
gq(a){var s=this
return A.G(s.a,s.b,s.c,s.d,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
bB(){return"BorderSide"}}
A.bf.prototype={
e2(a,b,c){return null},
C(a,b){return this.e2(0,b,!1)},
S(a,b){var s=this.C(0,b)
if(s==null)s=b.e2(0,this,!0)
return s==null?new A.ec(A.a([b,this],t.h_)):s},
bW(a,b){if(a==null)return this.al(b)
return null},
bX(a,b){if(a==null)return this.al(1-b)
return null},
j(a){return"ShapeBorder()"}}
A.c3.prototype={
gk9(){var s=Math.max(this.a.gcs(),0)
return new A.bd(s,s,s,s)},
bW(a,b){if(a==null)return this.al(b)
return null},
bX(a,b){if(a==null)return this.al(1-b)
return null}}
A.ec.prototype={
gk9(){return B.b.T3(this.a,B.aX,new A.Ue())},
e2(a,b,c){var s,r,q,p=b instanceof A.ec
if(!p){s=this.a
r=c?B.b.gO(s):B.b.gJ(s)
q=r.e2(0,b,c)
if(q==null)q=b.e2(0,r,!c)
if(q!=null){p=A.a0(s,!0,t.mD)
p[c?p.length-1:0]=q
return new A.ec(p)}}s=A.a([],t.h_)
if(c)B.b.G(s,this.a)
if(p)B.b.G(s,b.a)
else s.push(b)
if(!c)B.b.G(s,this.a)
return new A.ec(s)},
C(a,b){return this.e2(0,b,!1)},
al(a){var s=this.a,r=A.X(s).h("ag<1,bf>")
return new A.ec(A.a0(new A.ag(s,new A.Uf(a),r),!0,r.h("ap.E")))},
bW(a,b){return A.a52(a,this,b)},
bX(a,b){return A.a52(this,a,b)},
ez(a,b){return B.b.gJ(this.a).ez(a,b)},
fw(a,b,c){var s,r,q,p,o
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.C)(s),++q){p=s[q]
p.fw(a,b,c)
o=p.gk9().U(c)
b=new A.D(b.a+o.a,b.b+o.b,b.c-o.c,b.d-o.d)}},
i(a,b){if(b==null)return!1
if(this===b)return!0
if(J.I(b)!==A.u(this))return!1
return b instanceof A.ec&&A.cz(b.a,this.a)},
gq(a){return A.bs(this.a)},
j(a){var s=this.a,r=A.X(s).h("c5<1>")
return new A.ag(new A.c5(s,r),new A.Ug(),r.h("ag<ap.E,x>")).bv(0," + ")}}
A.Ue.prototype={
$2(a,b){return a.C(0,b.gk9())},
$S:206}
A.Uf.prototype={
$1(a){return a.al(this.a)},
$S:207}
A.Ug.prototype={
$1(a){return a.j(0)},
$S:208}
A.By.prototype={}
A.vK.prototype={
D(){return"BoxShape."+this.b}}
A.vI.prototype={
e2(a,b,c){return null},
C(a,b){return this.e2(0,b,!1)},
ez(a,b){var s=$.ai().cB()
s.or(a)
return s}}
A.cA.prototype={
gk9(){var s,r=this
if(r.gBz()){s=r.a.gcs()
return new A.bd(s,s,s,s)}return new A.bd(r.d.gcs(),r.a.gcs(),r.b.gcs(),r.c.gcs())},
gmx(){var s,r=this,q=r.a,p=q.a,o=r.d
if(o.a.i(0,p)&&r.c.a.i(0,p)&&r.b.a.i(0,p))if(r.gBz())if(r.glx()){s=q.d
q=o.d===s&&r.c.d===s&&r.b.d===s}else q=!1
else q=!1
else q=!1
return q},
gBz(){var s=this,r=s.a.b
return s.d.b===r&&s.c.b===r&&s.b.b===r},
glx(){var s=this,r=s.a.c
return s.d.c===r&&s.c.c===r&&s.b.c===r},
e2(a,b,c){var s=this
if(b instanceof A.cA&&A.fI(s.a,b.a)&&A.fI(s.b,b.b)&&A.fI(s.c,b.c)&&A.fI(s.d,b.d))return new A.cA(A.eg(s.a,b.a),A.eg(s.b,b.b),A.eg(s.c,b.c),A.eg(s.d,b.d))
return null},
C(a,b){return this.e2(0,b,!1)},
al(a){var s=this
return new A.cA(s.a.al(a),s.b.al(a),s.c.al(a),s.d.al(a))},
bW(a,b){if(a instanceof A.cA)return A.ZA(a,this,b)
return this.xs(a,b)},
bX(a,b){if(a instanceof A.cA)return A.ZA(this,a,b)
return this.xt(a,b)},
pG(a,b,c,d,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
if(e.gmx()){s=e.a
switch(s.c.a){case 0:return
case 1:switch(d.a){case 1:A.a1K(a,b,s)
break
case 0:if(c!=null&&!c.i(0,B.W)){A.a1L(a,b,s,c)
return}A.a1M(a,b,s)
break}return}}if(e.glx()&&e.a.c===B.O)return
r=A.aw(t.G)
s=e.a
q=s.c
p=q===B.O
if(!p)r.C(0,s.a)
o=e.b
n=o.c
m=n===B.O
if(!m)r.C(0,o.a)
l=e.c
k=l.c
j=k===B.O
if(!j)r.C(0,l.a)
i=e.d
h=i.c
g=h===B.O
if(!g)r.C(0,i.a)
if(!(q===B.F&&s.b===0))if(!(n===B.F&&o.b===0)){if(!(k===B.F&&l.b===0))q=h===B.F&&i.b===0
else q=!0
f=q}else f=!0
else f=!0
if(r.a===1)if(!f)if(d!==B.hh)q=c!=null&&!c.i(0,B.W)
else q=!0
else q=!1
else q=!1
if(q){if(p)s=B.q
q=m?B.q:o
p=j?B.q:l
o=g?B.q:i
A.a1O(a,b,c,p,r.gJ(0),o,q,d,a0,s)
return}A.a7g(a,b,l,i,o,s)},
fw(a,b,c){return this.pG(a,b,null,B.bg,c)},
i(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.I(b)!==A.u(s))return!1
return b instanceof A.cA&&b.a.i(0,s.a)&&b.b.i(0,s.b)&&b.c.i(0,s.c)&&b.d.i(0,s.d)},
gq(a){var s=this
return A.G(s.a,s.b,s.c,s.d,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
j(a){var s,r,q=this
if(q.gmx())return"Border.all("+q.a.j(0)+")"
s=A.a([],t.s)
r=q.a
if(!r.i(0,B.q))s.push("top: "+r.j(0))
r=q.b
if(!r.i(0,B.q))s.push("right: "+r.j(0))
r=q.c
if(!r.i(0,B.q))s.push("bottom: "+r.j(0))
r=q.d
if(!r.i(0,B.q))s.push("left: "+r.j(0))
return"Border("+B.b.bv(s,", ")+")"}}
A.cL.prototype={
gk9(){var s,r=this
if(r.gmx()){s=r.a.gcs()
return new A.dz(s,s,s,s)}return new A.dz(r.b.gcs(),r.a.gcs(),r.c.gcs(),r.d.gcs())},
gmx(){var s,r,q=this,p=q.a,o=p.a,n=q.b
if(n.a.i(0,o)&&q.d.a.i(0,o)&&q.c.a.i(0,o)){s=p.b
if(n.b===s&&q.d.b===s&&q.c.b===s)if(q.glx()){r=p.d
p=n.d===r&&q.d.d===r&&q.c.d===r}else p=!1
else p=!1}else p=!1
return p},
glx(){var s=this,r=s.a.c
return s.b.c===r&&s.d.c===r&&s.c.c===r},
e2(a,b,c){var s,r,q,p=this,o=null
if(b instanceof A.cL){s=p.a
r=b.a
if(A.fI(s,r)&&A.fI(p.b,b.b)&&A.fI(p.c,b.c)&&A.fI(p.d,b.d))return new A.cL(A.eg(s,r),A.eg(p.b,b.b),A.eg(p.c,b.c),A.eg(p.d,b.d))
return o}if(b instanceof A.cA){s=b.a
r=p.a
if(!A.fI(s,r)||!A.fI(b.c,p.d))return o
q=p.b
if(!q.i(0,B.q)||!p.c.i(0,B.q)){if(!b.d.i(0,B.q)||!b.b.i(0,B.q))return o
return new A.cL(A.eg(s,r),q,p.c,A.eg(b.c,p.d))}return new A.cA(A.eg(s,r),b.b,A.eg(b.c,p.d),b.d)}return o},
C(a,b){return this.e2(0,b,!1)},
al(a){var s=this
return new A.cL(s.a.al(a),s.b.al(a),s.c.al(a),s.d.al(a))},
bW(a,b){if(a instanceof A.cL)return A.Zz(a,this,b)
return this.xs(a,b)},
bX(a,b){if(a instanceof A.cL)return A.Zz(this,a,b)
return this.xt(a,b)},
pG(a,b,c,d,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
if(e.gmx()){s=e.a
switch(s.c.a){case 0:return
case 1:switch(d.a){case 1:A.a1K(a,b,s)
break
case 0:if(c!=null&&!c.i(0,B.W)){A.a1L(a,b,s,c)
return}A.a1M(a,b,s)
break}return}}if(e.glx()&&e.a.c===B.O)return
switch(a0.a){case 0:r=e.c
q=e.b
break
case 1:r=e.b
q=e.c
break
default:r=null
q=null}p=A.aw(t.G)
s=e.a
o=s.c
n=o===B.O
if(!n)p.C(0,s.a)
m=e.c
l=m.c
if(l!==B.O)p.C(0,m.a)
k=e.d
j=k.c
i=j===B.O
if(!i)p.C(0,k.a)
h=e.b
g=h.c
if(g!==B.O)p.C(0,h.a)
if(!(o===B.F&&s.b===0))if(!(l===B.F&&m.b===0)){if(!(j===B.F&&k.b===0))o=g===B.F&&h.b===0
else o=!0
f=o}else f=!0
else f=!0
if(p.a===1)if(!f)if(d!==B.hh)o=c!=null&&!c.i(0,B.W)
else o=!0
else o=!1
else o=!1
if(o){if(n)s=B.q
o=q.c===B.O?B.q:q
n=i?B.q:k
m=r.c===B.O?B.q:r
A.a1O(a,b,c,n,p.gJ(0),m,o,d,a0,s)
return}A.a7g(a,b,k,r,q,s)},
fw(a,b,c){return this.pG(a,b,null,B.bg,c)},
i(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.I(b)!==A.u(s))return!1
return b instanceof A.cL&&b.a.i(0,s.a)&&b.b.i(0,s.b)&&b.c.i(0,s.c)&&b.d.i(0,s.d)},
gq(a){var s=this
return A.G(s.a,s.b,s.c,s.d,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
j(a){var s=this,r=A.a([],t.s),q=s.a
if(!q.i(0,B.q))r.push("top: "+q.j(0))
q=s.b
if(!q.i(0,B.q))r.push("start: "+q.j(0))
q=s.c
if(!q.i(0,B.q))r.push("end: "+q.j(0))
q=s.d
if(!q.i(0,B.q))r.push("bottom: "+q.j(0))
return"BorderDirectional("+B.b.bv(r,", ")+")"}}
A.f1.prototype={
gci(){var s=this.c
s=s==null?null:s.gk9()
return s==null?B.aX:s},
al(a){var s=this,r=null,q=A.n(r,s.a,a),p=A.a26(r,s.b,a),o=A.a1N(r,s.c,a),n=A.f0(r,s.d,a),m=A.a1Q(r,s.e,a)
return new A.f1(q,p,o,n,m,r,s.w)},
guY(){return this.e!=null},
bW(a,b){if(a==null)return this.al(b)
if(a instanceof A.f1)return A.a1P(a,this,b)
return this.GS(a,b)},
bX(a,b){if(a==null)return this.al(1-b)
if(a instanceof A.f1)return A.a1P(this,a,b)
return this.GT(a,b)},
i(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(J.I(b)!==A.u(r))return!1
if(b instanceof A.f1)if(J.d(b.a,r.a))if(J.d(b.b,r.b))if(J.d(b.c,r.c))if(J.d(b.d,r.d))if(A.cz(b.e,r.e))s=b.w===r.w
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
return s},
gq(a){var s=this,r=s.e
r=r==null?null:A.bs(r)
return A.G(s.a,s.b,s.c,s.d,r,s.f,null,s.w,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
DB(a,b,c){var s
switch(this.w.a){case 0:s=this.d
if(s!=null)return s.U(c).cY(new A.D(0,0,0+a.a,0+a.b)).t(0,b)
return!0
case 1:return b.V(0,a.fe(B.h)).gc7()<=Math.min(a.a,a.b)/2}},
Cr(a){return new A.TE(this,a)}}
A.TE.prototype={
zQ(a,b,c,d){var s=this.b
switch(s.w.a){case 1:a.fW(b.gaz(),b.geC()/2,c)
break
case 0:s=s.d
if(s==null||s.i(0,B.W))a.cf(b,c)
else a.cC(s.U(d).cY(b),c)
break}},
OD(a,b,c){var s,r,q,p,o,n,m=this.b.e
if(m==null)return
for(s=m.length,r=0;r<m.length;m.length===s||(0,A.C)(m),++r){q=m[r]
p=$.ai().bb()
p.saf(q.a)
o=q.e
n=q.c
p.sDY(new A.pw(o,n>0?n*0.57735+0.5:0))
o=b.cn(q.b)
n=q.d
this.zQ(a,new A.D(o.a-n,o.b-n,o.c+n,o.d+n),p,c)}},
OC(a,b,c){var s,r,q=this,p=q.b,o=p.b
if(o==null)return
if(q.e==null)q.e=o.ud(q.a)
switch(p.w.a){case 1:s=A.zp(b.gaz(),b.geC()/2)
r=$.ai().cB()
r.tQ(s)
break
case 0:p=p.d
if(p!=null){r=$.ai().cB()
r.e3(p.U(c.d).cY(b))}else r=null
break
default:r=null}q.e.pF(a,b,r,c)},
m(){var s=this.e
if(s!=null)s.m()
this.GL()},
vC(a,b,c){var s,r,q,p=this,o=c.e,n=b.a,m=b.b,l=new A.D(n,m,n+o.a,m+o.b),k=c.d
p.OD(a,l,k)
o=p.b
n=o.a
m=n==null
if(!m||!1){s=p.c
if(s!=null)r=!1
else r=!0
if(r){q=$.ai().bb()
if(!m)q.saf(n)
p.c=q
n=q}else n=s
n.toString
p.zQ(a,l,n,k)}p.OC(a,l,c)
n=o.c
if(n!=null){m=o.d
m=m==null?null:m.U(k)
n.pG(a,l,m,o.w,k)}},
j(a){return"BoxPainter for "+this.b.j(0)}}
A.fJ.prototype={
al(a){var s=this
return new A.fJ(s.d*a,s.e,s.a,s.b.X(0,a),s.c*a)},
i(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.I(b)!==A.u(s))return!1
return b instanceof A.fJ&&b.a.i(0,s.a)&&b.b.i(0,s.b)&&b.c===s.c&&b.d===s.d&&b.e===s.e},
gq(a){var s=this
return A.G(s.a,s.b,s.c,s.d,s.e,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
j(a){var s=this
return"BoxShadow("+s.a.j(0)+", "+s.b.j(0)+", "+A.fz(s.c)+", "+A.fz(s.d)+", "+s.e.j(0)+")"}}
A.cn.prototype={
al(a){return new A.cn(this.b,this.a.al(a))},
bW(a,b){var s,r
if(a instanceof A.cn){s=A.a5(a.a,this.a,b)
r=A.F(a.b,this.b,b)
r.toString
return new A.cn(A.V(r,0,1),s)}return this.jn(a,b)},
bX(a,b){var s,r
if(a instanceof A.cn){s=A.a5(this.a,a.a,b)
r=A.F(this.b,a.b,b)
r.toString
return new A.cn(A.V(r,0,1),s)}return this.jo(a,b)},
ez(a,b){var s=$.ai().cB()
s.tQ(this.y8(a))
return s},
it(a){var s=a==null?this.a:a
return new A.cn(this.b,s)},
fw(a,b,c){var s,r=this.a
switch(r.c.a){case 0:break
case 1:s=r.b*r.d
if(this.b===0)a.fW(b.gaz(),(b.geC()+s)/2,r.he())
else a.m8(this.y8(b).d2(s/2),r.he())
break}},
y8(a){var s,r,q,p,o,n,m,l=this.b
if(l===0||a.c-a.a===a.d-a.b)return A.zp(a.gaz(),a.geC()/2)
s=a.c
r=a.a
q=s-r
p=a.d
o=a.b
n=p-o
l=1-l
if(q<n){m=l*(n-q)/2
return new A.D(r,o+m,s,p-m)}else{m=l*(q-n)/2
return new A.D(r+m,o,s-m,p)}},
i(a,b){if(b==null)return!1
if(J.I(b)!==A.u(this))return!1
return b instanceof A.cn&&b.a.i(0,this.a)&&b.b===this.b},
gq(a){return A.G(this.a,this.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
j(a){var s=this.b
if(s!==0)return"CircleBorder("+this.a.j(0)+", eccentricity: "+A.f(s)+")"
return"CircleBorder("+this.a.j(0)+")"}}
A.IR.prototype={
r3(a,b,c,d){var s=this
s.gbg().c3()
switch(b.a){case 0:break
case 1:a.$1(!1)
break
case 2:a.$1(!0)
break
case 3:a.$1(!0)
s.gbg().eB(c,$.ai().bb())
break}d.$0()
if(b===B.bi)s.gbg().bA()
s.gbg().bA()},
Rp(a,b,c,d){this.r3(new A.IS(this,a),b,c,d)},
Rr(a,b,c,d){this.r3(new A.IT(this,a),b,c,d)},
Rt(a,b,c,d){this.r3(new A.IU(this,a),b,c,d)}}
A.IS.prototype={
$1(a){return this.a.gbg().oC(this.b,a)},
$S:18}
A.IT.prototype={
$1(a){return this.a.gbg().oD(this.b,a)},
$S:18}
A.IU.prototype={
$1(a){return this.a.gbg().Ca(this.b,a)},
$S:18}
A.hT.prototype={
k(a,b){return this.b.k(0,b)},
i(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.I(b)!==A.u(s))return!1
return s.GM(0,b)&&A.q(s).h("hT<hT.T>").b(b)&&A.Hu(b.b,s.b)},
gq(a){return A.G(A.u(this),this.a,this.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
j(a){return"ColorSwatch(primary value: "+this.GN(0)+")"}}
A.f4.prototype={
bB(){return"Decoration"},
gci(){return B.aX},
guY(){return!1},
bW(a,b){return null},
bX(a,b){return null},
DB(a,b,c){return!0}}
A.vJ.prototype={
m(){}}
A.Cc.prototype={}
A.Bw.prototype={
ud(a){var s,r=this.a
r=r==null?null:r.ud(a)
s=this.b
s=s==null?null:s.ud(a)
return new A.TD(r,s,this.c)},
i(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.I(b)!==A.u(s))return!1
return b instanceof A.Bw&&J.d(b.a,s.a)&&J.d(b.b,s.b)&&b.c===s.c},
gq(a){return A.G(this.a,this.b,this.c,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
j(a){return"_BlendedDecorationImage("+A.f(this.a)+", "+A.f(this.b)+", "+A.f(this.c)+")"}}
A.TD.prototype={
vD(a,b,c,d,e,f){var s,r,q=this
a.eB(null,$.ai().bb())
s=q.a
r=s==null
if(!r)s.vD(a,b,c,d,e*(1-q.c),f)
s=q.b
if(s!=null){r=!r?B.uc:f
s.vD(a,b,c,d,e*q.c,r)}a.bA()},
pF(a,b,c,d){return this.vD(a,b,c,d,1,B.cC)},
m(){var s=this.a
if(s!=null)s.m()
s=this.b
if(s!=null)s.m()},
j(a){return"_BlendedDecorationImagePainter("+A.f(this.a)+", "+A.f(this.b)+", "+A.f(this.c)+")"}}
A.bW.prototype={
gUb(){var s=this
return s.gcu()+s.gcv()+s.gdg()+s.gdh()},
C(a,b){var s=this
return new A.iM(s.gcu()+b.gcu(),s.gcv()+b.gcv(),s.gdg()+b.gdg(),s.gdh()+b.gdh(),s.gcz()+b.gcz(),s.gcM()+b.gcM())},
hD(a,b,c){var s=this
return new A.iM(A.V(s.gcu(),b.a,c.a),A.V(s.gcv(),b.c,c.b),A.V(s.gdg(),0,c.c),A.V(s.gdh(),0,c.d),A.V(s.gcz(),b.b,c.e),A.V(s.gcM(),b.d,c.f))},
j(a){var s=this
if(s.gdg()===0&&s.gdh()===0){if(s.gcu()===0&&s.gcv()===0&&s.gcz()===0&&s.gcM()===0)return"EdgeInsets.zero"
if(s.gcu()===s.gcv()&&s.gcv()===s.gcz()&&s.gcz()===s.gcM())return"EdgeInsets.all("+B.c.P(s.gcu(),1)+")"
return"EdgeInsets("+B.c.P(s.gcu(),1)+", "+B.c.P(s.gcz(),1)+", "+B.c.P(s.gcv(),1)+", "+B.c.P(s.gcM(),1)+")"}if(s.gcu()===0&&s.gcv()===0)return"EdgeInsetsDirectional("+B.c.P(s.gdg(),1)+", "+B.c.P(s.gcz(),1)+", "+B.c.P(s.gdh(),1)+", "+B.c.P(s.gcM(),1)+")"
return"EdgeInsets("+B.c.P(s.gcu(),1)+", "+B.c.P(s.gcz(),1)+", "+B.c.P(s.gcv(),1)+", "+B.c.P(s.gcM(),1)+") + EdgeInsetsDirectional("+B.c.P(s.gdg(),1)+", 0.0, "+B.c.P(s.gdh(),1)+", 0.0)"},
i(a,b){var s=this
if(b==null)return!1
return b instanceof A.bW&&b.gcu()===s.gcu()&&b.gcv()===s.gcv()&&b.gdg()===s.gdg()&&b.gdh()===s.gdh()&&b.gcz()===s.gcz()&&b.gcM()===s.gcM()},
gq(a){var s=this
return A.G(s.gcu(),s.gcv(),s.gdg(),s.gdh(),s.gcz(),s.gcM(),B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)}}
A.bd.prototype={
gcu(){return this.a},
gcz(){return this.b},
gcv(){return this.c},
gcM(){return this.d},
gdg(){return 0},
gdh(){return 0},
C(a,b){if(b instanceof A.bd)return this.S(0,b)
return this.x5(0,b)},
hD(a,b,c){var s=this
return new A.bd(A.V(s.a,b.a,c.a),A.V(s.b,b.b,c.e),A.V(s.c,b.c,c.b),A.V(s.d,b.d,c.f))},
V(a,b){var s=this
return new A.bd(s.a-b.a,s.b-b.b,s.c-b.c,s.d-b.d)},
S(a,b){var s=this
return new A.bd(s.a+b.a,s.b+b.b,s.c+b.c,s.d+b.d)},
X(a,b){var s=this
return new A.bd(s.a*b,s.b*b,s.c*b,s.d*b)},
U(a){return this},
lT(a,b,c,d){var s=this,r=b==null?s.a:b,q=d==null?s.b:d,p=c==null?s.c:c
return new A.bd(r,q,p,a==null?s.d:a)},
u8(a){return this.lT(a,null,null,null)}}
A.dz.prototype={
gdg(){return this.a},
gcz(){return this.b},
gdh(){return this.c},
gcM(){return this.d},
gcu(){return 0},
gcv(){return 0},
C(a,b){if(b instanceof A.dz)return this.S(0,b)
return this.x5(0,b)},
V(a,b){var s=this
return new A.dz(s.a-b.a,s.b-b.b,s.c-b.c,s.d-b.d)},
S(a,b){var s=this
return new A.dz(s.a+b.a,s.b+b.b,s.c+b.c,s.d+b.d)},
X(a,b){var s=this
return new A.dz(s.a*b,s.b*b,s.c*b,s.d*b)},
U(a){var s=this
switch(a.a){case 0:return new A.bd(s.c,s.b,s.a,s.d)
case 1:return new A.bd(s.a,s.b,s.c,s.d)}}}
A.iM.prototype={
X(a,b){var s=this
return new A.iM(s.a*b,s.b*b,s.c*b,s.d*b,s.e*b,s.f*b)},
U(a){var s=this
switch(a.a){case 0:return new A.bd(s.d+s.a,s.e,s.c+s.b,s.f)
case 1:return new A.bd(s.c+s.a,s.e,s.d+s.b,s.f)}},
gcu(){return this.a},
gcv(){return this.b},
gdg(){return this.c},
gdh(){return this.d},
gcz(){return this.e},
gcM(){return this.f}}
A.MM.prototype={
F(a){var s,r,q,p
for(s=this.b,r=s.gau(),q=A.q(r),q=q.h("@<1>").Z(q.y[1]),r=new A.b7(J.ao(r.a),r.b,q.h("b7<1,2>")),q=q.y[1];r.p();){p=r.a;(p==null?q.a(p):p).m()}s.F(0)
for(s=this.a,r=s.gau(),q=A.q(r),q=q.h("@<1>").Z(q.y[1]),r=new A.b7(J.ao(r.a),r.b,q.h("b7<1,2>")),q=q.y[1];r.p();){p=r.a;(p==null?q.a(p):p).Xz()}s.F(0)}}
A.p4.prototype={
i(a,b){var s=this
if(b==null)return!1
if(J.I(b)!==A.u(s))return!1
return b instanceof A.p4&&b.a==s.a&&b.b==s.b&&J.d(b.c,s.c)&&b.d==s.d&&J.d(b.e,s.e)&&b.f==s.f},
gq(a){var s=this
return A.G(s.a,s.b,s.c,s.e,s.f,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
j(a){var s,r=this,q=""+"ImageConfiguration(",p=r.a
if(p!=null){q+="bundle: "+p.j(0)
s=!0}else s=!1
p=r.b
if(p!=null){if(s)q+=", "
p=q+("devicePixelRatio: "+B.c.P(p,1))
q=p
s=!0}p=r.c
if(p!=null){if(s)q+=", "
p=q+("locale: "+p.j(0))
q=p
s=!0}p=r.d
if(p!=null){if(s)q+=", "
p=q+("textDirection: "+p.j(0))
q=p
s=!0}p=r.e
if(p!=null){if(s)q+=", "
p=q+("size: "+p.j(0))
q=p
s=!0}p=r.f
if(p!=null){if(s)q+=", "
p=q+("platform: "+p.b)
q=p}q+=")"
return q.charCodeAt(0)==0?q:q}}
A.HP.prototype={}
A.lE.prototype={
i(a,b){var s
if(b==null)return!1
if(b instanceof A.lE)if(b.a===this.a)if(b.b==this.b)s=A.cz(b.f,this.f)
else s=!1
else s=!1
else s=!1
return s},
gq(a){return A.G(this.a,this.b,this.c,!1,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
j(a){return"InlineSpanSemanticsInformation{text: "+this.a+", semanticsLabel: "+A.f(this.b)+", recognizer: "+A.f(this.c)+"}"}}
A.fV.prototype={
FK(a){var s={}
s.a=null
this.aI(new A.MU(s,a,new A.HP()))
return s.a},
i(a,b){if(b==null)return!1
if(this===b)return!0
if(J.I(b)!==A.u(this))return!1
return b instanceof A.mm&&J.d(b.a,this.a)},
gq(a){return J.l(this.a)}}
A.MU.prototype={
$1(a){var s=a.FL(this.b,this.c)
this.a.a=s
return s==null},
$S:55}
A.bY.prototype={
al(a){var s=this.a.al(a)
return new A.bY(this.b.X(0,a),s)},
bW(a,b){var s,r,q=this
if(a instanceof A.bY){s=A.a5(a.a,q.a,b)
r=A.f0(a.b,q.b,b)
r.toString
return new A.bY(r,s)}if(a instanceof A.cn){s=A.a5(a.a,q.a,b)
return new A.cR(q.b,1-b,a.b,s)}return q.jn(a,b)},
bX(a,b){var s,r,q=this
if(a instanceof A.bY){s=A.a5(q.a,a.a,b)
r=A.f0(q.b,a.b,b)
r.toString
return new A.bY(r,s)}if(a instanceof A.cn){s=A.a5(q.a,a.a,b)
return new A.cR(q.b,b,a.b,s)}return q.jo(a,b)},
it(a){var s=a==null?this.a:a
return new A.bY(this.b,s)},
ez(a,b){var s=$.ai().cB()
s.e3(this.b.U(b).cY(a))
return s},
fw(a,b,c){var s,r,q,p,o=this.a
switch(o.c.a){case 0:break
case 1:s=this.b
if(o.b===0)a.cC(s.U(c).cY(b),o.he())
else{r=$.ai().bb()
r.saf(o.a)
q=s.U(c).cY(b)
p=q.d2(-o.gcs())
a.kb(q.d2(o.gjk()),p,r)}break}},
i(a,b){if(b==null)return!1
if(J.I(b)!==A.u(this))return!1
return b instanceof A.bY&&b.a.i(0,this.a)&&b.b.i(0,this.b)},
gq(a){return A.G(this.a,this.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
j(a){return"RoundedRectangleBorder("+this.a.j(0)+", "+this.b.j(0)+")"}}
A.cR.prototype={
al(a){var s=this.a.al(a)
return new A.cR(this.b.X(0,a),a,this.d,s)},
bW(a,b){var s,r,q,p=this
if(a instanceof A.bY){s=A.a5(a.a,p.a,b)
r=A.f0(a.b,p.b,b)
r.toString
return new A.cR(r,p.c*b,p.d,s)}if(a instanceof A.cn){s=A.a5(a.a,p.a,b)
r=p.c
return new A.cR(p.b,r+(1-r)*(1-b),a.b,s)}if(a instanceof A.cR){s=A.a5(a.a,p.a,b)
r=A.f0(a.b,p.b,b)
r.toString
q=A.F(a.c,p.c,b)
q.toString
return new A.cR(r,q,p.d,s)}return p.jn(a,b)},
bX(a,b){var s,r,q,p=this
if(a instanceof A.bY){s=A.a5(p.a,a.a,b)
r=A.f0(p.b,a.b,b)
r.toString
return new A.cR(r,p.c*(1-b),p.d,s)}if(a instanceof A.cn){s=A.a5(p.a,a.a,b)
r=p.c
return new A.cR(p.b,r+(1-r)*b,a.b,s)}if(a instanceof A.cR){s=A.a5(p.a,a.a,b)
r=A.f0(p.b,a.b,b)
r.toString
q=A.F(p.c,a.c,b)
q.toString
return new A.cR(r,q,p.d,s)}return p.jo(a,b)},
xK(a){var s,r,q,p,o,n,m,l,k=this.c
if(k===0||a.c-a.a===a.d-a.b)return a
s=a.c
r=a.a
q=s-r
p=a.d
o=a.b
n=p-o
m=1-this.d
if(q<n){l=k*((n-q)/2)*m
return new A.D(r,o+l,s,p-l)}else{l=k*((q-n)/2)*m
return new A.D(r+l,o,s-l,p)}},
xI(a,b){var s,r,q,p=this.b.U(b),o=this.c
if(o===0)return p
s=this.d
if(s!==0){r=a.c-a.a
q=a.d-a.b
s=0.5+s/2
if(r<q){o=A.l7(p,A.vG(new A.as(r/2,s*q/2)),o)
o.toString
return o}else{o=A.l7(p,A.vG(new A.as(s*r/2,q/2)),o)
o.toString
return o}}return A.l7(p,A.a1F(a.geC()/2),o)},
ez(a,b){var s=$.ai().cB(),r=this.xI(a,b)
r.toString
s.e3(r.cY(this.xK(a)))
return s},
it(a){var s=this,r=a==null?s.a:a
return new A.cR(s.b,s.c,s.d,r)},
fw(a,b,c){var s,r=this.a
switch(r.c.a){case 0:break
case 1:s=this.xI(b,c)
s.toString
a.cC(s.cY(this.xK(b)).d2(r.b*r.d/2),r.he())
break}},
i(a,b){var s=this
if(b==null)return!1
if(J.I(b)!==A.u(s))return!1
return b instanceof A.cR&&b.a.i(0,s.a)&&b.b.i(0,s.b)&&b.c===s.c},
gq(a){return A.G(this.a,this.b,this.c,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
j(a){var s=this,r="RoundedRectangleBorder(",q=s.d
if(q!==0)return r+s.a.j(0)+", "+s.b.j(0)+", "+B.c.P(s.c*100,1)+u.D+B.c.P(q*100,1)+"% oval)"
return r+s.a.j(0)+", "+s.b.j(0)+", "+B.c.P(s.c*100,1)+"% of the way to being a CircleBorder)"}}
A.d5.prototype={
al(a){return new A.d5(this.a.al(a))},
bW(a,b){var s,r=this
if(a instanceof A.d5)return new A.d5(A.a5(a.a,r.a,b))
if(a instanceof A.cn){s=A.a5(a.a,r.a,b)
return new A.cT(1-b,a.b,s)}if(a instanceof A.bY){s=A.a5(a.a,r.a,b)
return new A.cU(a.b,1-b,s)}return r.jn(a,b)},
bX(a,b){var s,r=this
if(a instanceof A.d5)return new A.d5(A.a5(r.a,a.a,b))
if(a instanceof A.cn){s=A.a5(r.a,a.a,b)
return new A.cT(b,a.b,s)}if(a instanceof A.bY){s=A.a5(r.a,a.a,b)
return new A.cU(a.b,b,s)}return r.jo(a,b)},
it(a){return new A.d5(a==null?this.a:a)},
ez(a,b){var s=a.geC()/2,r=$.ai().cB()
r.e3(A.a_G(a,new A.as(s,s)))
return r},
fw(a,b,c){var s,r=this.a
switch(r.c.a){case 0:break
case 1:s=b.geC()/2
a.cC(A.a_G(b,new A.as(s,s)).d2(r.b*r.d/2),r.he())
break}},
i(a,b){if(b==null)return!1
if(J.I(b)!==A.u(this))return!1
return b instanceof A.d5&&b.a.i(0,this.a)},
gq(a){var s=this.a
return A.G(s.a,s.b,s.c,s.d,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
j(a){return"StadiumBorder("+this.a.j(0)+")"}}
A.cT.prototype={
al(a){return new A.cT(a,this.c,this.a.al(a))},
bW(a,b){var s,r,q,p=this
if(a instanceof A.d5)return new A.cT(p.b*b,p.c,A.a5(a.a,p.a,b))
if(a instanceof A.cn){s=A.a5(a.a,p.a,b)
r=p.b
return new A.cT(r+(1-r)*(1-b),a.b,s)}if(a instanceof A.cT){s=A.a5(a.a,p.a,b)
r=A.F(a.b,p.b,b)
r.toString
q=A.F(a.c,p.c,b)
q.toString
return new A.cT(r,q,s)}return p.jn(a,b)},
bX(a,b){var s,r,q,p=this
if(a instanceof A.d5)return new A.cT(p.b*(1-b),p.c,A.a5(p.a,a.a,b))
if(a instanceof A.cn){s=A.a5(p.a,a.a,b)
r=p.b
return new A.cT(r+(1-r)*b,a.b,s)}if(a instanceof A.cT){s=A.a5(p.a,a.a,b)
r=A.F(p.b,a.b,b)
r.toString
q=A.F(p.c,a.c,b)
q.toString
return new A.cT(r,q,s)}return p.jo(a,b)},
AG(a){var s,r,q,p,o,n,m,l,k=this.b
if(k===0||a.c-a.a===a.d-a.b)return a
s=a.c
r=a.a
q=s-r
p=a.d
o=a.b
n=p-o
m=1-this.c
if(q<n){l=k*((n-q)/2)*m
return new A.D(r,o+l,s,p-l)}else{l=k*((q-n)/2)*m
return new A.D(r+l,o,s-l,p)}},
lw(a){var s,r,q,p=A.a1F(a.geC()/2),o=this.c
if(o!==0){s=a.c-a.a
r=a.d-a.b
q=this.b
o=0.5+o/2
if(s<r){o=A.l7(p,A.vG(new A.as(s/2,o*r/2)),q)
o.toString
return o}else{o=A.l7(p,A.vG(new A.as(o*s/2,r/2)),q)
o.toString
return o}}return p},
ez(a,b){var s=$.ai().cB()
s.e3(this.lw(a).cY(this.AG(a)))
return s},
it(a){var s=a==null?this.a:a
return new A.cT(this.b,this.c,s)},
fw(a,b,c){var s=this.a
switch(s.c.a){case 0:break
case 1:a.cC(this.lw(b).cY(this.AG(b)).d2(s.b*s.d/2),s.he())
break}},
i(a,b){if(b==null)return!1
if(J.I(b)!==A.u(this))return!1
return b instanceof A.cT&&b.a.i(0,this.a)&&b.b===this.b},
gq(a){return A.G(this.a,this.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
j(a){var s=this,r=s.c
if(r!==0)return"StadiumBorder("+s.a.j(0)+", "+B.c.P(s.b*100,1)+u.D+B.c.P(r*100,1)+"% oval)"
return"StadiumBorder("+s.a.j(0)+", "+B.c.P(s.b*100,1)+"% of the way to being a CircleBorder)"}}
A.cU.prototype={
al(a){var s=this.a.al(a)
return new A.cU(this.b.X(0,a),a,s)},
bW(a,b){var s,r,q,p=this
if(a instanceof A.d5)return new A.cU(p.b,p.c*b,A.a5(a.a,p.a,b))
if(a instanceof A.bY){s=p.c
return new A.cU(p.b,s+(1-s)*(1-b),A.a5(a.a,p.a,b))}if(a instanceof A.cU){s=A.a5(a.a,p.a,b)
r=A.f0(a.b,p.b,b)
r.toString
q=A.F(a.c,p.c,b)
q.toString
return new A.cU(r,q,s)}return p.jn(a,b)},
bX(a,b){var s,r,q,p=this
if(a instanceof A.d5)return new A.cU(p.b,p.c*(1-b),A.a5(p.a,a.a,b))
if(a instanceof A.bY){s=p.c
return new A.cU(p.b,s+(1-s)*b,A.a5(p.a,a.a,b))}if(a instanceof A.cU){s=A.a5(p.a,a.a,b)
r=A.f0(p.b,a.b,b)
r.toString
q=A.F(p.c,a.c,b)
q.toString
return new A.cU(r,q,s)}return p.jo(a,b)},
lw(a){var s=a.geC()/2
s=A.f0(this.b,A.vG(new A.as(s,s)),1-this.c)
s.toString
return s},
ez(a,b){var s=$.ai().cB()
s.e3(this.lw(a).U(b).cY(a))
return s},
it(a){var s=a==null?this.a:a
return new A.cU(this.b,this.c,s)},
fw(a,b,c){var s=this.a
switch(s.c.a){case 0:break
case 1:a.cC(this.lw(b).U(c).cY(b).d2(s.b*s.d/2),s.he())
break}},
i(a,b){var s=this
if(b==null)return!1
if(J.I(b)!==A.u(s))return!1
return b instanceof A.cU&&b.a.i(0,s.a)&&b.b.i(0,s.b)&&b.c===s.c},
gq(a){return A.G(this.a,this.b,this.c,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
j(a){return"StadiumBorder("+this.a.j(0)+", "+this.b.j(0)+", "+B.c.P(this.c*100,1)+"% of the way to being a RoundedRectangleBorder)"}}
A.rn.prototype={
D(){return"TextOverflow."+this.b}}
A.qe.prototype={
i(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(b instanceof A.qe)if(b.a.i(0,r.a))if(b.b===r.b)s=b.c==r.c
else s=!1
else s=!1
else s=!1
return s},
gq(a){var s=this
return A.G(s.a,s.b,s.d,s.c,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
j(a){var s,r=this,q="PlaceholderDimensions(",p=r.b
$label0$0:{if(B.ry===p||B.fp===p||B.rz===p||B.rw===p||B.rx===p){s=q+r.a.j(0)+", "+p.j(0)+")"
break $label0$0}if(B.rv===p){s=q+r.a.j(0)+", "+p.j(0)+"("+A.f(r.c)+" from top))"
break $label0$0}throw A.e(A.fl(u.d))}return s}}
A.SH.prototype={
D(){return"TextWidthBasis."+this.b}}
A.Xb.prototype={
Fv(a){var s
switch(a.a){case 0:s=this.a.glI()
break
case 1:s=this.a.gDC()
break
default:s=null}return s}}
A.Xc.prototype={
gha(){var s,r=this.c
if(r===0)return B.h
s=this.a
if(!isFinite(s.a.ghi()))return B.BP
return new A.z(r*(this.b-s.a.ghi()),0)},
Pn(a,b,c){var s,r=this,q=r.a,p=A.a5m(a,b,c,q)
if(p===r.b)return!0
if(!isFinite(r.gha().a)&&!isFinite(q.a.ghi())&&isFinite(a))return!1
s=q.a.gmB()
if(q.a.ghi()-s>-1e-10&&b-s>-1e-10){r.b=p
return!0}return!1}}
A.AK.prototype={
a4(){var s=this.b
if(s!=null)s.a.a.m()
this.b=null},
smT(a){var s,r,q=this
if(J.d(q.f,a))return
s=q.f
s=s==null?null:s.a
if(!J.d(s,a.a)){s=q.CW
if(s!=null)s.m()
q.CW=null}s=q.f
s=s==null?null:s.aq(0,a)
r=s==null?B.by:s
q.f=a
q.r=null
s=r.a
if(s>=3)q.a4()
else if(s>=2)q.c=!0},
sw1(a){if(this.w===a)return
this.w=a
this.a4()},
scd(a){var s,r=this
if(r.x===a)return
r.x=a
r.a4()
s=r.CW
if(s!=null)s.m()
r.CW=null},
scJ(a){var s,r=this
if(a.i(0,r.y))return
r.y=a
r.a4()
s=r.CW
if(s!=null)s.m()
r.CW=null},
sSx(a){if(this.z==a)return
this.z=a
this.a4()},
sv8(a){if(J.d(this.Q,a))return
this.Q=a
this.a4()},
svc(a){if(this.as==a)return
this.as=a
this.a4()},
sw3(a){if(this.ax===a)return
this.ax=a},
gUl(){var s,r,q,p=this.b
if(p==null)return null
s=p.gha()
if(!isFinite(s.a)||!isFinite(s.b))return A.a([],t.px)
r=p.d
if(r==null)r=p.d=p.a.a.n4()
if(s.i(0,B.h))return r
q=A.X(r).h("ag<1,cP>")
return A.a0(new A.ag(r,new A.SF(s),q),!1,q.h("ap.E"))},
qq(a){if(a==null||a.length===0||A.cz(a,this.ch))return
this.ch=a
this.a4()},
KO(a){var s,r,q,p,o,n=this,m=null,l=n.f.a
if(l==null)l=m
else{s=n.w
r=n.x
if(r==null)r=a
q=n.y
p=n.as
o=n.ay
q=l.FE(n.z,n.Q,p,n.at,s,r,o,q)
l=q}if(l==null){l=n.w
s=n.x
if(s==null)s=a
r=n.y
q=n.as
p=n.ay
p=A.a_B(n.z,m,14*r.a,m,m,m,n.Q,q,m,l,s,p)
l=p}return l},
KN(){return this.KO(null)},
yy(a){var s=this,r=s.KN(),q=$.ai().ue(r)
r=s.y
a.C2(q,s.ch,r)
s.c=!1
return q.bn()},
v6(a,b){var s,r,q,p,o,n,m,l,k=this,j=k.b,i=j==null
if(!i&&j.Pn(b,a,k.ax))return
s=k.f
if(s==null)throw A.e(A.az("TextPainter.text must be set to a non-null value before using the TextPainter."))
r=k.x
if(r==null)throw A.e(A.az("TextPainter.textDirection must be set to a non-null value before using the TextPainter."))
q=A.aem(k.w,r)
if(!(!isFinite(a)&&q!==0))p=a
else p=i?null:j.a.a.gmB()
o=p==null
k.d=o?a:p
n=i?null:j.a.a
if(n==null)n=k.yy(s)
n.h3(new A.k2(k.d))
i=new A.Xb(n)
m=A.a5m(b,a,k.ax,i)
if(o&&isFinite(b)){l=i.a.gmB()
n.h3(new A.k2(l))
k.d=l}k.b=new A.Xc(i,m,q)},
UP(){return this.v6(1/0,0)},
aQ(a,b){var s,r,q,p=this,o=p.b
if(o==null)throw A.e(A.az("TextPainter.paint called when text geometry was not yet calculated.\nPlease call layout() before paint() to position the text before painting it."))
if(!isFinite(o.gha().a)||!isFinite(o.gha().b))return
if(p.c){s=o.a
r=s.a
q=p.f
q.toString
q=p.yy(q)
q.h3(new A.k2(p.d))
s.a=q
r.m()}a.hH(o.a.a,b.S(0,o.gha()))},
Fp(a,b,c){var s,r,q=this.b,p=q.gha()
if(!isFinite(p.a)||!isFinite(p.b))return A.a([],t.px)
s=q.a.a.wo(a.a,a.b,b,c)
if(p.i(0,B.h))r=s
else{r=A.X(s).h("ag<1,cP>")
r=A.a0(new A.ag(s,new A.SE(p),r),!1,r.h("ap.E"))}return r},
Fs(a){var s=this.b,r=s.a.a.wq(a.V(0,s.gha()))
if(r==null||s.gha().i(0,B.h))return r
return new A.jF(r.a.cn(s.gha()),r.b,r.c)},
m(){var s=this,r=s.CW
if(r!=null)r.m()
s.CW=null
r=s.b
if(r!=null)r.a.a.m()
s.f=s.b=null}}
A.SF.prototype={
$1(a){return A.a4K(a,this.a)},
$S:81}
A.SE.prototype={
$1(a){return A.a4K(a,this.a)},
$S:81}
A.hy.prototype={
i(a,b){if(b==null)return!1
if(this===b)return!0
return b instanceof A.hy&&b.a===this.a},
gq(a){return B.c.gq(this.a)},
j(a){var s=this.a
return s===1?"no scaling":"linear ("+A.f(s)+"x)"}}
A.mm.prototype={
gCB(){return this.e},
gwj(){return!0},
hR(a,b){},
C2(a,b,c){var s,r,q,p,o,n=this.a,m=n!=null
if(m)a.vL(n.FN(c))
n=this.b
if(n!=null)try{a.ou(n)}catch(q){n=A.ah(q)
if(n instanceof A.ef){s=n
r=A.aI(q)
A.d_(new A.bm(s,r,"painting library",A.bb("while building a TextSpan"),null,!0))
a.ou("\ufffd")}else throw q}p=this.c
if(p!=null)for(o=0;o<1;++o)p[o].C2(a,b,c)
if(m)a.es()},
aI(a){var s,r
if(this.b!=null&&!a.$1(this))return!1
s=this.c
if(s!=null)for(r=0;r<1;++r)if(!s[r].aI(a))return!1
return!0},
WH(a){var s,r=this.c
if(r!=null)for(s=0;s<1;++s)if(!a.$1(r[s]))return!1
return!0},
FL(a,b){var s,r,q,p=this.b
if(p==null||p.length===0)return null
s=a.a
r=b.a
q=r+p.length
if(!(r===s&&!0))if(!(r<s&&s<q))r=!1
else r=!0
else r=!0
if(r)return this
b.a=q
return null},
Cd(a,b,c){var s,r,q,p=this.b
if(p!=null){s=A.a([],t.ve)
a.push(A.a39(p,null,null,s))}r=this.c
if(r!=null)for(q=0;q<1;++q)r[q].Cd(a,b,!1)},
RD(a){return this.Cd(a,null,!1)},
aq(a,b){var s,r,q,p,o,n=this
if(n===b)return B.cp
if(A.u(b)!==A.u(n))return B.by
if(b.b==n.b){s=n.c==null?null:1
s=s!=(b.c==null?null:1)||n.a==null!==(b.a==null)}else s=!0
if(s)return B.by
s=n.a
if(s!=null){r=b.a
r.toString
q=s.aq(0,r)
p=q.a>0?q:B.cp
if(p===B.by)return p}else p=B.cp
s=n.c
if(s!=null)for(r=b.c,o=0;o<1;++o){q=s[o].aq(0,r[o])
if(q.a>p.a)p=q
if(p===B.by)return p}return p},
i(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.I(b)!==A.u(s))return!1
if(!s.H5(0,b))return!1
return b instanceof A.mm&&b.b==s.b&&s.e.i(0,b.e)&&A.cz(b.c,s.c)},
gq(a){var s=this,r=null,q=A.fV.prototype.gq.call(s,0),p=s.c
p=p==null?r:A.bs(p)
return A.G(q,s.b,r,r,r,r,s.e,p,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
bB(){return"TextSpan"},
$iaa:1,
$ifi:1,
gE7(){return null},
gE8(){return null}}
A.j.prototype={
gku(){return this.e},
gii(){return this.d},
u9(a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=a.ay
if(a0==null&&b6==null)s=a3==null?a.b:a3
else s=null
r=a.ch
if(r==null&&a1==null)q=a2==null?a.c:a2
else q=null
p=b2==null?a.r:b2
o=b5==null?a.w:b5
n=b9==null?a.y:b9
m=c5==null?a.z:c5
l=c4==null?a.Q:c4
k=b7==null?a.as:b7
j=b8==null?a.at:b8
a0=b6==null?a0:b6
r=a1==null?r:a1
i=c3==null?a.dy:c3
h=b4==null?a.fx:b4
g=a5==null?a.CW:a5
f=a6==null?a.cx:a6
e=a7==null?a.cy:a7
d=a8==null?a.db:a8
c=a9==null?a.gii():a9
b=b0==null?a.e:b0
return A.rq(r,q,s,null,g,f,e,d,c,b,a.fr,p,a.x,h,o,a0,k,a.a,j,n,a.ax,a.fy,a.f,i,l,m)},
fj(a){var s=null
return this.u9(s,s,a,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s)},
Cn(a,b){var s=null
return this.u9(s,s,a,s,s,s,s,s,s,s,s,b,s,s,s,s,s,s,s,s,s,s,s,s,s)},
d_(a,b,c,d,e,a0,a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.ay
if(f==null)s=a==null?h.b:a
else s=g
r=h.ch
if(r==null)q=h.c
else q=g
p=h.gii()
o=h.r
o=o==null?g:o*a2+a1
n=h.w
n=n==null?g:B.iM[B.f.hD(n.a,0,8)]
m=h.y
m=m==null?g:m+0
l=h.z
l=l==null?g:l+0
k=h.as
k=k==null?g:k+0
j=c==null?h.cx:c
i=h.db
i=i==null?g:i+0
return A.rq(r,q,s,g,h.CW,j,h.cy,i,p,h.e,h.fr,o,h.x,h.fx,n,f,k,h.a,h.at,m,h.ax,h.fy,h.f,h.dy,h.Q,l)},
bw(a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
if(a4==null)return this
if(!a4.a)return a4
s=a4.b
r=a4.c
q=a4.r
p=a4.w
o=a4.x
n=a4.y
m=a4.z
l=a4.Q
k=a4.as
j=a4.at
i=a4.ax
h=a4.ay
g=a4.ch
f=a4.dy
e=a4.fr
d=a4.fx
c=a4.CW
b=a4.cx
a=a4.cy
a0=a4.db
a1=a4.gii()
a2=a4.e
a3=a4.f
return this.u9(g,r,s,null,c,b,a,a0,a1,a2,e,q,o,d,p,h,k,j,n,i,a4.fy,a3,f,l,m)},
FN(a){var s,r,q,p,o,n,m,l=this,k=l.r
$label0$0:{if(k==null){s=null
break $label0$0}s=a.i(0,B.aE)
if(s){s=k
break $label0$0}s=k*a.a
break $label0$0}r=l.gku()
q=l.ch
p=l.c
$label1$1:{o=t.wn
if(o.b(q)){n=q==null?o.a(q):q
o=n
break $label1$1}if(p instanceof A.r){m=p==null?t.G.a(p):p
o=$.ai().bb()
o.saf(m)
break $label1$1}o=null
break $label1$1}return A.a4L(o,l.b,l.CW,l.cx,l.cy,l.db,l.d,r,l.fr,s,l.x,l.fx,l.w,l.ay,l.as,l.at,l.y,l.ax,l.dy,l.Q,l.z)},
FE(a,b,c,d,e,f,g,h){var s=this,r=s.at,q=r==null?null:new A.AG(r),p=s.r
if(p==null)p=14
return A.a_B(a,s.d,p*h.a,s.x,s.w,s.as,b,c,null,e,f,q)},
aq(a,b){var s=this
if(s===b)return B.cp
if(s.a!==b.a||s.d!=b.d||s.r!=b.r||s.w!=b.w||s.y!=b.y||s.z!=b.z||s.Q!=b.Q||s.as!=b.as||s.at!=b.at||s.ay!=b.ay||s.ch!=b.ch||!A.cz(s.dy,b.dy)||!A.cz(s.fr,b.fr)||!A.cz(s.fx,b.fx)||!A.cz(s.gku(),b.gku())||!1)return B.by
if(!J.d(s.b,b.b)||!J.d(s.c,b.c)||!J.d(s.CW,b.CW)||!J.d(s.cx,b.cx)||s.cy!=b.cy||s.db!=b.db)return B.CN
return B.cp},
i(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(J.I(b)!==A.u(r))return!1
if(b instanceof A.j)if(b.a===r.a)if(J.d(b.b,r.b))if(J.d(b.c,r.c))if(b.r==r.r)if(b.w==r.w)if(b.y==r.y)if(b.z==r.z)if(b.Q==r.Q)if(b.as==r.as)if(b.at==r.at)if(b.ay==r.ay)if(b.ch==r.ch)if(A.cz(b.dy,r.dy))if(A.cz(b.fr,r.fr))if(A.cz(b.fx,r.fx))if(J.d(b.CW,r.CW))if(J.d(b.cx,r.cx))if(b.cy==r.cy)if(b.db==r.db)if(b.d==r.d)if(A.cz(b.gku(),r.gku()))s=!0
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
return s},
gq(a){var s,r=this,q=null,p=r.gku(),o=p==null?q:A.bs(p),n=A.G(r.cy,r.db,r.d,o,r.f,r.fy,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a),m=r.dy,l=r.fx
o=m==null?q:A.bs(m)
s=l==null?q:A.bs(l)
return A.G(r.a,r.b,r.c,r.r,r.w,r.x,r.y,r.z,r.Q,r.as,r.at,r.ax,r.ay,r.ch,o,q,s,r.CW,r.cx,n)},
bB(){return"TextStyle"}}
A.FX.prototype={}
A.Rs.prototype={
j(a){return"Simulation"}}
A.SQ.prototype={
j(a){return"Tolerance(distance: \xb1"+A.f(this.a)+", time: \xb10.001, velocity: \xb1"+A.f(this.c)+")"}}
A.m_.prototype={
gpN(){var s,r=this,q=r.at$
if(q===$){s=A.acM(new A.Q8(r),new A.Q9(r),new A.Qa(r))
q!==$&&A.a3()
r.at$=s
q=s}return q},
S3(a){var s,r=$.bc().d
if(r==null){s=self.window.devicePixelRatio
r=s===0?1:s}return new A.rG(a.go.gi_().ey(0,r),r)},
uL(){var s,r,q,p,o,n,m
for(s=this.ch$.gau(),r=A.q(s),r=r.h("@<1>").Z(r.y[1]),s=new A.b7(J.ao(s.a),s.b,r.h("b7<1,2>")),r=r.y[1],q=!1;s.p();){p=s.a
if(p==null)p=r.a(p)
q=q||p.db$!=null
o=p.go
n=$.bc().d
if(n==null){m=self.window.devicePixelRatio
n=m===0?1:m}m=o.as
if(m==null){m=o.ay.u6()
o.as=m}p.soG(new A.rG(new A.U(m.a/n,m.b/n),n))}if(q)this.FY()},
uR(){},
uN(){},
Uk(){var s,r=this.as$
if(r!=null){r.dy$=$.aD()
r.dx$=0}r=t.S
s=$.aD()
this.as$=new A.yj(new A.Q7(this),new A.O9(B.b8,A.y(r,t.Df)),A.y(r,t.eg),s)},
Nn(a){B.Bm.jC("first-frame",null,!1,t.H)},
MR(a){this.ux()
this.Pz()},
Pz(){$.cr.p4$.push(new A.Q6(this))},
BO(){--this.cx$
if(!this.cy$)this.wH()},
ux(){var s,r,q=this,p=q.ay$
p===$&&A.c()
p.De()
q.ay$.Dd()
q.ay$.Df()
if(q.cy$||q.cx$===0){for(p=q.ch$.gau(),s=A.q(p),s=s.h("@<1>").Z(s.y[1]),p=new A.b7(J.ao(p.a),p.b,s.h("b7<1,2>")),s=s.y[1];p.p();){r=p.a;(r==null?s.a(r):r).RB()}q.ay$.Dg()
q.cy$=!0}},
$iaa:1,
$icH:1}
A.Q8.prototype={
$0(){var s=this.a.gpN().e
if(s!=null)s.nb()},
$S:0}
A.Qa.prototype={
$1(a){var s=this.a.gpN().e
if(s!=null)s.go.gwJ().WF(a)},
$S:82}
A.Q9.prototype={
$0(){var s=this.a.gpN().e
if(s!=null)s.jW()},
$S:0}
A.Q7.prototype={
$2(a,b){var s=A.a_e()
this.a.pj(s,a,b)
return s},
$S:212}
A.Q6.prototype={
$1(a){this.a.as$.WC()},
$S:3}
A.Bv.prototype={}
A.Cd.prototype={}
A.Fg.prototype={
vJ(){if(this.I)return
this.HJ()
this.I=!0},
nb(){this.jW()
this.HC()},
m(){this.sag(null)}}
A.aJ.prototype={
lU(a,b,c,d){var s=this,r=d==null?s.a:d,q=b==null?s.b:b,p=c==null?s.c:c
return new A.aJ(r,q,p,a==null?s.d:a)},
RX(a,b){return this.lU(null,null,a,b)},
RW(a,b){return this.lU(null,a,null,b)},
RV(a,b){return this.lU(a,null,b,null)},
Ck(a){return this.lU(a,null,null,null)},
R