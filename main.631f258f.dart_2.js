)+"px")
A.m(q,"border-top-left-radius",A.f(p.e)+"px")
A.m(q,"border-top-right-radius",A.f(p.r)+"px")
A.m(q,"border-bottom-right-radius",A.f(p.x)+"px")
A.m(q,"border-bottom-left-radius",A.f(p.z)+"px")
p=r.d
p.toString
r.BV(p,r.cx)
p=r.dr$.style
A.m(p,"left",A.f(-o)+"px")
A.m(p,"top",A.f(-s)+"px")},
aV(a){var s=this
s.jp(a)
if(!s.CW.i(0,a.CW)||s.cx!==a.cx){s.w=null
s.dl()}},
$iIW:1}
A.q7.prototype={
aR(){return this.oM("flt-clippath")},
f_(){var s=this
s.Ho()
if(s.cx!==B.M){if(s.w==null)s.w=s.CW.dd()}else s.w=null},
dl(){var s=this,r=s.cy
if(r!=null)r.remove()
r=s.d
r.toString
r=A.a6S(r,s.CW)
s.cy=r
s.d.append(r)},
aV(a){var s,r=this
r.jp(a)
if(a.CW!==r.CW){r.w=null
s=a.cy
if(s!=null)s.remove()
r.dl()}else r.cy=a.cy
a.cy=null},
fV(){var s=this.cy
if(s!=null)s.remove()
this.cy=null
this.qK()},
$iIV:1}
A.JV.prototype={
hE(a,b){throw A.e(A.c7(null))},
ir(a){throw A.e(A.c7(null))},
eL(a){throw A.e(A.c7(null))},
kc(a){throw A.e(A.c7(null))},
cf(a,b){var s
a=A.v5(a,b)
s=this.me$
s=s.length===0?this.a:B.b.gO(s)
s.append(A.v6(a,b,"draw-rect",this.iD$))},
cC(a,b){var s,r=A.v6(A.v5(new A.D(a.a,a.b,a.c,a.d),b),b,"draw-rrect",this.iD$)
A.a6C(r.style,a)
s=this.me$
s=s.length===0?this.a:B.b.gO(s)
s.append(r)},
m8(a,b){throw A.e(A.c7(null))},
fW(a,b,c){throw A.e(A.c7(null))},
d0(a,b){throw A.e(A.c7(null))},
kd(a,b,c,d){throw A.e(A.c7(null))},
hH(a,b){var s=A.a6W(a,b,this.iD$),r=this.me$
r=r.length===0?this.a:B.b.gO(r)
r.append(s)},
kg(){}}
A.q9.prototype={
f_(){var s,r,q=this,p=q.e.f
q.f=p
s=q.CW
if(s!==0||q.cx!==0){p.toString
r=new A.b5(new Float32Array(16))
r.aD(p)
q.f=r
r.ai(s,q.cx)}q.r=null},
gmy(){var s=this,r=s.cy
if(r==null){r=A.cv()
r.jd(-s.CW,-s.cx,0)
s.cy=r}return r},
aR(){var s=A.aA(self.document,"flt-offset")
A.cJ(s,"position","absolute")
A.cJ(s,"transform-origin","0 0 0")
return s},
dl(){A.m(this.d.style,"transform","translate("+A.f(this.CW)+"px, "+A.f(this.cx)+"px)")},
aV(a){var s=this
s.jp(a)
if(a.CW!==s.CW||a.cx!==s.cx)s.dl()},
$iOB:1}
A.qa.prototype={
f_(){var s,r,q,p=this,o=p.e.f
p.f=o
s=p.cx
r=s.a
q=s.b
if(r!==0||q!==0){o.toString
s=new A.b5(new Float32Array(16))
s.aD(o)
p.f=s
s.ai(r,q)}p.r=null},
gmy(){var s,r=this.cy
if(r==null){r=this.cx
s=A.cv()
s.jd(-r.a,-r.b,0)
this.cy=s
r=s}return r},
aR(){var s=A.aA(self.document,"flt-opacity")
A.cJ(s,"position","absolute")
A.cJ(s,"transform-origin","0 0 0")
return s},
dl(){var s,r=this.d
r.toString
A.cJ(r,"opacity",A.f(this.CW/255))
s=this.cx
A.m(r.style,"transform","translate("+A.f(s.a)+"px, "+A.f(s.b)+"px)")},
aV(a){var s=this
s.jp(a)
if(s.CW!==a.CW||!s.cx.i(0,a.cx))s.dl()},
$iOC:1}
A.mc.prototype={
sC0(a){var s=this
if(s.b){s.a=s.a.jY()
s.b=!1}s.a.a=a},
gct(){var s=this.a.b
return s==null?B.ak:s},
sct(a){var s=this
if(s.b){s.a=s.a.jY()
s.b=!1}s.a.b=a},
ghm(){var s=this.a.c
return s==null?0:s},
shm(a){var s=this
if(s.b){s.a=s.a.jY()
s.b=!1}s.a.c=a},
gaf(){return new A.r(this.a.r)},
saf(a){var s=this
if(s.b){s.a=s.a.jY()
s.b=!1}s.a.r=a.gn()},
swS(a){var s=this
if(s.b){s.a=s.a.jY()
s.b=!1}s.a.w=a},
sDY(a){var s=this
if(s.b){s.a=s.a.jY()
s.b=!1}s.a.x=a},
j(a){var s,r=""+"Paint(",q=this.a.b,p=q==null
if((p?B.ak:q)===B.N){r+=(p?B.ak:q).j(0)
q=this.a.c
p=q==null
if((p?0:q)!==0)r+=" "+A.f(p?0:q)
else r+=" hairline"
s="; "}else s=""
q=this.a.r
r=(q!==4278190080?r+(s+new A.r(q).j(0)):r)+")"
return r.charCodeAt(0)==0?r:r},
$iOM:1}
A.Az.prototype={
jY(){var s=this,r=new A.Az()
r.a=s.a
r.y=s.y
r.x=s.x
r.w=s.w
r.r=s.r
r.z=s.z
r.c=s.c
r.b=s.b
r.e=s.e
r.d=s.d
return r},
j(a){return this.bf(0)}}
A.dU.prototype={
w8(){var s,r,q,p,o,n,m,l,k,j=this,i=A.a([],t.kQ),h=j.Kz(0.25),g=B.f.PN(1,h)
i.push(new A.z(j.a,j.b))
if(h===5){s=new A.BL()
j.y7(s)
r=s.a
r.toString
q=s.b
q.toString
p=r.c
if(p===r.e&&r.d===r.f&&q.a===q.c&&q.b===q.d){o=new A.z(p,r.d)
i.push(o)
i.push(o)
i.push(o)
i.push(new A.z(q.e,q.f))
g=2
n=!0}else n=!1}else n=!1
if(!n)A.ZJ(j,h,i)
m=2*g+1
k=0
while(!0){if(!(k<m)){l=!1
break}r=i[k]
if(isNaN(r.a)||isNaN(r.b)){l=!0
break}++k}if(l)for(r=m-1,q=j.c,p=j.d,k=1;k<r;++k)i[k]=new A.z(q,p)
return i},
y7(a){var s,r,q=this,p=q.r,o=1/(1+p),n=Math.sqrt(0.5+p*0.5),m=q.c,l=p*m,k=q.d,j=p*k,i=q.a,h=q.e,g=(i+2*l+h)*o*0.5,f=q.b,e=q.f,d=(f+2*j+e)*o*0.5,c=new A.z(g,d)
if(isNaN(g)||isNaN(d)){s=p*2
r=o*0.5
c=new A.z((i+s*m+h)*r,(f+s*k+e)*r)}p=c.a
m=c.b
a.a=new A.dU(i,f,(i+l)*o,(f+j)*o,p,m,n)
a.b=new A.dU(p,m,(h+l)*o,(e+j)*o,h,e,n)},
Rk(a){var s=this,r=s.LF()
if(r==null){a.push(s)
return}if(!s.Ki(r,a,!0)){a.push(s)
return}},
LF(){var s,r,q=this,p=q.f,o=q.b,n=p-o
p=q.r
s=p*(q.d-o)
r=new A.hc()
if(r.hP(p*n-n,n-2*s,s)===1)return r.a
return null},
Ki(a,a0,a1){var s,r,q,p=this,o=p.a,n=p.b,m=p.r,l=p.c*m,k=p.d*m,j=p.e,i=p.f,h=o+(l-o)*a,g=l+(j-l)*a,f=n+(k-n)*a,e=1+(m-1)*a,d=m+(1-m)*a,c=e+(d-e)*a,b=Math.sqrt(c)
if(Math.abs(b-0)<0.000244140625)return!1
if(Math.abs(e-0)<0.000244140625||Math.abs(c-0)<0.000244140625||Math.abs(d-0)<0.000244140625)return!1
s=(h+(g-h)*a)/c
r=(f+(k+(i-k)*a-f)*a)/c
m=p.b
q=p.f
a0.push(new A.dU(o,m,h/e,r,s,r,e/b))
a0.push(new A.dU(s,r,g/d,r,j,q,d/b))
return!0},
Kz(a){var s,r,q,p,o,n,m=this
if(a<0)return 0
s=m.r-1
r=s/(4*(2+s))
q=r*(m.a-2*m.c+m.e)
p=r*(m.b-2*m.d+m.f)
o=Math.sqrt(q*q+p*p)
for(n=0;n<5;++n){if(o<=a)break
o*=0.25}return n},
SK(a){var s,r,q,p,o,n,m,l,k=this
if(!(a===0&&k.a===k.c&&k.b===k.d))s=a===1&&k.c===k.e&&k.d===k.f
else s=!0
if(s)return new A.z(k.e-k.a,k.f-k.b)
s=k.a
r=k.e-s
q=k.f
p=k.b
o=q-p
q=k.r
n=q*(k.c-s)
m=q*(k.d-p)
l=A.a4t(q*r-r,q*o-o,r-n-n,o-m-m,n,m)
return new A.z(l.D3(a),l.D4(a))}}
A.Pv.prototype={}
A.Jc.prototype={}
A.BL.prototype={}
A.Jh.prototype={}
A.md.prototype={
Ah(){var s=this
s.c=0
s.b=B.aB
s.e=s.d=-1},
yv(a){var s=this
s.b=a.b
s.c=a.c
s.d=a.d
s.e=a.e},
gmf(){return this.b},
smf(a){this.b=a},
dv(){if(this.a.w!==0){this.a=A.a3T()
this.Ah()}},
h7(a,b){var s=this,r=s.a.fF(0,0)
s.c=r+1
s.a.dR(r,a,b)
s.e=s.d=-1},
zq(){var s,r,q,p,o=this.c
if(o<=0){s=this.a
if(s.d===0){r=0
q=0}else{p=2*(-o-1)
o=s.f
r=o[p]
q=o[p+1]}this.h7(r,q)}},
cG(a,b){var s,r=this
if(r.c<=0)r.zq()
s=r.a.fF(1,0)
r.a.dR(s,a,b)
r.e=r.d=-1},
e8(a,b,c,d,e){var s,r=this
r.zq()
s=r.a.fF(3,e)
r.a.dR(s,a,b)
r.a.dR(s+1,c,d)
r.e=r.d=-1},
av(){var s=this,r=s.a,q=r.w
if(q!==0&&r.r[q-1]!==5)r.fF(5,0)
r=s.c
if(r>=0)s.c=-r
s.e=s.d=-1},
or(a){this.os(a,0,0)},
nM(){var s,r=this.a,q=r.w
for(r=r.r,s=0;s<q;++s)switch(r[s]){case 1:case 2:case 3:case 4:return!1}return!0},
os(a,b,c){var s,r,q,p,o,n,m,l,k=this,j=k.nM(),i=k.nM()?b:-1,h=k.a.fF(0,0)
k.c=h+1
s=k.a.fF(1,0)
r=k.a.fF(1,0)
q=k.a.fF(1,0)
k.a.fF(5,0)
p=k.a
o=a.a
n=a.b
m=a.c
l=a.d
if(b===0){p.dR(h,o,n)
k.a.dR(s,m,n)
k.a.dR(r,m,l)
k.a.dR(q,o,l)}else{p.dR(q,o,l)
k.a.dR(r,m,l)
k.a.dR(s,m,n)
k.a.dR(h,o,n)}p=k.a
p.ay=j
p.ch=b===1
p.CW=0
k.e=k.d=-1
k.e=i},
tQ(a){this.xF(a,0,0)},
xF(a,b,c){var s,r=this,q=r.nM(),p=a.a,o=a.c,n=(p+o)/2,m=a.b,l=a.d,k=(m+l)/2
if(b===0){r.h7(o,k)
r.e8(o,l,n,l,0.707106781)
r.e8(p,l,p,k,0.707106781)
r.e8(p,m,n,m,0.707106781)
r.e8(o,m,o,k,0.707106781)}else{r.h7(o,k)
r.e8(o,m,n,m,0.707106781)
r.e8(p,m,p,k,0.707106781)
r.e8(p,l,n,l,0.707106781)
r.e8(o,l,o,k,0.707106781)}r.av()
s=r.a
s.at=q
s.ch=b===1
s.CW=0
r.e=r.d=-1
if(q)r.e=b},
e3(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.nM(),e=a1.a,d=a1.b,c=a1.c,b=a1.d,a=new A.D(e,d,c,b),a0=a1.e
if(a0===0||a1.f===0)if(a1.r===0||a1.w===0)if(a1.z===0||a1.Q===0)s=a1.x===0||a1.y===0
else s=!1
else s=!1
else s=!1
if(s||e>=c||d>=b)g.os(a,0,3)
else if(A.aim(a1))g.xF(a,0,3)
else{r=c-e
q=b-d
p=Math.max(0,a0)
o=Math.max(0,a1.r)
n=Math.max(0,a1.z)
m=Math.max(0,a1.x)
l=Math.max(0,a1.f)
k=Math.max(0,a1.w)
j=Math.max(0,a1.Q)
i=Math.max(0,a1.y)
h=A.XT(j,i,q,A.XT(l,k,q,A.XT(n,m,r,A.XT(p,o,r,1))))
a0=b-h*j
g.h7(e,a0)
g.cG(e,d+h*l)
g.e8(e,d,e+h*p,d,0.707106781)
g.cG(c-h*o,d)
g.e8(c,d,c,d+h*k,0.707106781)
g.cG(c,b-h*i)
g.e8(c,b,c-h*m,b,0.707106781)
g.cG(e+h*n,b)
g.e8(e,b,e,a0,0.707106781)
g.av()
g.e=f?0:-1
e=g.a
e.ax=f
e.ch=!1
e.CW=6}},
t(a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=this
if(a3.a.w===0)return!1
s=a3.dd()
r=a5.a
q=a5.b
if(r<s.a||q<s.b||r>s.c||q>s.d)return!1
p=a3.a
o=new A.OT(p,r,q,new Float32Array(18))
o.QE()
n=B.ck===a3.b
m=o.d
if((n?m&1:m)!==0)return!0
l=o.e
if(l<=1)return l!==0
p=(l&1)===0
if(!p||n)return!p
k=A.a3S(a3.a,!0)
j=new Float32Array(18)
i=A.a([],t.kQ)
p=k.a
h=!1
do{g=i.length
switch(k.hZ(j)){case 0:case 5:break
case 1:A.aiQ(j,r,q,i)
break
case 2:A.aiR(j,r,q,i)
break
case 3:f=k.f
A.aiO(j,r,q,p.y[f],i)
break
case 4:A.aiP(j,r,q,i)
break
case 6:h=!0
break}f=i.length
if(f>g){e=f-1
d=i[e]
c=d.a
b=d.b
if(Math.abs(c*c+b*b-0)<0.000244140625)B.b.j_(i,e)
else for(a=0;a<e;++a){a0=i[a]
f=a0.a
a1=a0.b
if(Math.abs(f*b-a1*c-0)<0.000244140625){f=c*f
if(f<0)f=-1
else f=f>0?1:0
if(f<=0){f=b*a1
if(f<0)f=-1
else f=f>0?1:0
f=f<=0}else f=!1}else f=!1
if(f){a2=B.b.j_(i,e)
if(a!==i.length)i[a]=a2
break}}}}while(!h)
return i.length!==0},
cn(a){var s,r=a.a,q=a.b,p=this.a,o=A.acJ(p,r,q),n=p.e,m=new Uint8Array(n)
B.R.kS(m,0,p.r)
o=new A.lV(o,m)
n=p.x
o.x=n
o.z=p.z
s=p.y
if(s!=null){n=new Float32Array(n)
o.y=n
B.fk.kS(n,0,s)}o.e=p.e
o.w=p.w
o.c=p.c
o.d=p.d
n=p.Q
o.Q=n
if(!n){o.a=p.a.ai(r,q)
n=p.b
o.b=n==null?null:n.ai(r,q)
o.as=p.as}o.cx=p.cx
o.at=p.at
o.ax=p.ax
o.ay=p.ay
o.ch=p.ch
o.CW=p.CW
r=new A.md(o,B.aB)
r.yv(this)
return r},
dd(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0=this,e1=e0.a
if((e1.ax?e1.CW:-1)===-1)s=(e1.at?e1.CW:-1)!==-1
else s=!0
if(s)return e1.dd()
if(!e1.Q&&e1.b!=null){e1=e1.b
e1.toString
return e1}r=new A.k4(e1)
r.l4(e1)
q=e0.a.f
for(p=!1,o=0,n=0,m=0,l=0,k=0,j=0,i=0,h=0,g=null,f=null,e=null;d=r.Vg(),d!==6;){c=r.e
switch(d){case 0:j=q[c]
h=q[c+1]
i=h
k=j
break
case 1:j=q[c+2]
h=q[c+3]
i=h
k=j
break
case 2:if(f==null)f=new A.Pv()
b=c+1
a=q[c]
a0=b+1
a1=q[b]
b=a0+1
a2=q[a0]
a0=b+1
a3=q[b]
a4=q[a0]
a5=q[a0+1]
s=f.a=Math.min(a,a4)
a6=f.b=Math.min(a1,a5)
a7=f.c=Math.max(a,a4)
a8=f.d=Math.max(a1,a5)
a9=a-2*a2+a4
if(Math.abs(a9)>0.000244140625){b0=(a-a2)/a9
if(b0>=0&&b0<=1){b1=1-b0
b2=b1*b1
b3=2*b0*b1
b0*=b0
b4=b2*a+b3*a2+b0*a4
b5=b2*a1+b3*a3+b0*a5
s=Math.min(s,b4)
f.a=s
a7=Math.max(a7,b4)
f.c=a7
a6=Math.min(a6,b5)
f.b=a6
a8=Math.max(a8,b5)
f.d=a8}}a9=a1-2*a3+a5
if(Math.abs(a9)>0.000244140625){b6=(a1-a3)/a9
if(b6>=0&&b6<=1){b7=1-b6
b2=b7*b7
b3=2*b6*b7
b6*=b6
b8=b2*a+b3*a2+b6*a4
b9=b2*a1+b3*a3+b6*a5
s=Math.min(s,b8)
f.a=s
a7=Math.max(a7,b8)
f.c=a7
a6=Math.min(a6,b9)
f.b=a6
a8=Math.max(a8,b9)
f.d=a8}h=a8
j=a7
i=a6
k=s}else{h=a8
j=a7
i=a6
k=s}break
case 3:if(e==null)e=new A.Jc()
s=e1.y[r.b]
b=c+1
a=q[c]
a0=b+1
a1=q[b]
b=a0+1
a2=q[a0]
a0=b+1
a3=q[b]
a4=q[a0]
a5=q[a0+1]
e.a=Math.min(a,a4)
e.b=Math.min(a1,a5)
e.c=Math.max(a,a4)
e.d=Math.max(a1,a5)
c0=new A.hc()
c1=a4-a
c2=s*(a2-a)
if(c0.hP(s*c1-c1,c1-2*c2,c2)!==0){a6=c0.a
a6.toString
if(a6>=0&&a6<=1){c3=2*(s-1)
a9=(-c3*a6+c3)*a6+1
c4=a2*s
b4=(((a4-2*c4+a)*a6+2*(c4-a))*a6+a)/a9
c4=a3*s
b5=(((a5-2*c4+a1)*a6+2*(c4-a1))*a6+a1)/a9
e.a=Math.min(e.a,b4)
e.c=Math.max(e.c,b4)
e.b=Math.min(e.b,b5)
e.d=Math.max(e.d,b5)}}c5=a5-a1
c6=s*(a3-a1)
if(c0.hP(s*c5-c5,c5-2*c6,c6)!==0){a6=c0.a
a6.toString
if(a6>=0&&a6<=1){c3=2*(s-1)
a9=(-c3*a6+c3)*a6+1
c4=a2*s
b8=(((a4-2*c4+a)*a6+2*(c4-a))*a6+a)/a9
c4=a3*s
b9=(((a5-2*c4+a1)*a6+2*(c4-a1))*a6+a1)/a9
e.a=Math.min(e.a,b8)
e.c=Math.max(e.c,b8)
e.b=Math.min(e.b,b9)
e.d=Math.max(e.d,b9)}}k=e.a
i=e.b
j=e.c
h=e.d
break
case 4:if(g==null)g=new A.Jh()
b=c+1
c7=q[c]
a0=b+1
c8=q[b]
b=a0+1
c9=q[a0]
a0=b+1
d0=q[b]
b=a0+1
d1=q[a0]
a0=b+1
d2=q[b]
d3=q[a0]
d4=q[a0+1]
s=Math.min(c7,d3)
g.a=s
g.c=Math.min(c8,d4)
a6=Math.max(c7,d3)
g.b=a6
g.d=Math.max(c8,d4)
if(!(c7<c9&&c9<d1&&d1<d3))a7=c7>c9&&c9>d1&&d1>d3
else a7=!0
if(!a7){a7=-c7
d5=a7+3*(c9-d1)+d3
d6=2*(c7-2*c9+d1)
d7=d6*d6-4*d5*(a7+c9)
if(d7>=0&&Math.abs(d5)>0.000244140625){a7=-d6
a8=2*d5
if(d7===0){d8=a7/a8
b1=1-d8
if(d8>=0&&d8<=1){a7=3*b1
b4=b1*b1*b1*c7+a7*b1*d8*c9+a7*d8*d8*d1+d8*d8*d8*d3
g.a=Math.min(b4,s)
g.b=Math.max(b4,a6)}}else{d7=Math.sqrt(d7)
d8=(a7-d7)/a8
b1=1-d8
if(d8>=0&&d8<=1){s=3*b1
b4=b1*b1*b1*c7+s*b1*d8*c9+s*d8*d8*d1+d8*d8*d8*d3
g.a=Math.min(b4,g.a)
g.b=Math.max(b4,g.b)}d8=(a7+d7)/a8
b1=1-d8
if(d8>=0&&d8<=1){s=3*b1
b4=b1*b1*b1*c7+s*b1*d8*c9+s*d8*d8*d1+d8*d8*d8*d3
g.a=Math.min(b4,g.a)
g.b=Math.max(b4,g.b)}}}}if(!(c8<d0&&d0<d2&&d2<d4))s=c8>d0&&d0>d2&&d2>d4
else s=!0
if(!s){s=-c8
d5=s+3*(d0-d2)+d4
d6=2*(c8-2*d0+d2)
d7=d6*d6-4*d5*(s+d0)
if(d7>=0&&Math.abs(d5)>0.000244140625){s=-d6
a6=2*d5
if(d7===0){d8=s/a6
b1=1-d8
if(d8>=0&&d8<=1){s=3*b1
b5=b1*b1*b1*c8+s*b1*d8*d0+s*d8*d8*d2+d8*d8*d8*d4
g.c=Math.min(b5,g.c)
g.d=Math.max(b5,g.d)}}else{d7=Math.sqrt(d7)
d8=(s-d7)/a6
b1=1-d8
if(d8>=0&&d8<=1){a7=3*b1
b5=b1*b1*b1*c8+a7*b1*d8*d0+a7*d8*d8*d2+d8*d8*d8*d4
g.c=Math.min(b5,g.c)
g.d=Math.max(b5,g.d)}s=(s+d7)/a6
b7=1-s
if(s>=0&&s<=1){a6=3*b7
b5=b7*b7*b7*c8+a6*b7*s*d0+a6*s*s*d2+s*s*s*d4
g.c=Math.min(b5,g.c)
g.d=Math.max(b5,g.d)}}}}k=g.a
i=g.c
j=g.b
h=g.d
break}if(!p){l=h
m=j
n=i
o=k
p=!0}else{o=Math.min(o,k)
m=Math.max(m,j)
n=Math.min(n,i)
l=Math.max(l,h)}}d9=p?new A.D(o,n,m,l):B.E
e0.a.dd()
return e0.a.b=d9},
j(a){return this.bf(0)}}
A.OS.prototype={
qW(a){var s=this,r=s.r,q=s.x
if(r!==q||s.w!==s.y){if(isNaN(r)||isNaN(s.w)||isNaN(q)||isNaN(s.y))return 5
a[0]=r
a[1]=s.w
a[2]=q
r=s.y
a[3]=r
s.r=q
s.w=r
return 1}else{a[0]=q
a[1]=s.y
return 5}},
ny(){var s,r,q=this
if(q.e===1){q.e=2
return new A.z(q.x,q.y)}s=q.a.f
r=q.Q
return new A.z(s[r-2],s[r-1])},
hZ(a){var s,r,q,p,o,n,m=this,l=m.z,k=m.a
if(l===k.w){if(m.d&&m.e===2){if(1===m.qW(a))return 1
m.d=!1
return 5}return 6}s=m.z=l+1
r=k.r[l]
switch(r){case 0:if(m.d){m.z=s-1
q=m.qW(a)
if(q===5)m.d=!1
return q}if(s===m.c)return 6
l=k.f
k=m.Q
s=m.Q=k+1
p=l[k]
m.Q=s+1
o=l[s]
m.x=p
m.y=o
a[0]=p
a[1]=o
m.e=1
m.r=p
m.w=o
m.d=!0
break
case 1:n=m.ny()
l=k.f
k=m.Q
s=m.Q=k+1
p=l[k]
m.Q=s+1
o=l[s]
a[0]=n.a
a[1]=n.b
a[2]=p
a[3]=o
m.r=p
m.w=o
break
case 3:++m.f
n=m.ny()
a[0]=n.a
a[1]=n.b
l=k.f
k=m.Q
s=m.Q=k+1
a[2]=l[k]
k=m.Q=s+1
a[3]=l[s]
s=m.Q=k+1
k=l[k]
a[4]=k
m.r=k
m.Q=s+1
s=l[s]
a[5]=s
m.w=s
break
case 2:n=m.ny()
a[0]=n.a
a[1]=n.b
l=k.f
k=m.Q
s=m.Q=k+1
a[2]=l[k]
k=m.Q=s+1
a[3]=l[s]
s=m.Q=k+1
k=l[k]
a[4]=k
m.r=k
m.Q=s+1
s=l[s]
a[5]=s
m.w=s
break
case 4:n=m.ny()
a[0]=n.a
a[1]=n.b
l=k.f
k=m.Q
s=m.Q=k+1
a[2]=l[k]
k=m.Q=s+1
a[3]=l[s]
s=m.Q=k+1
a[4]=l[k]
k=m.Q=s+1
a[5]=l[s]
s=m.Q=k+1
k=l[k]
a[6]=k
m.r=k
m.Q=s+1
s=l[s]
a[7]=s
m.w=s
break
case 5:r=m.qW(a)
if(r===1)--m.z
else{m.d=!1
m.e=0}m.r=m.x
m.w=m.y
break
case 6:break
default:throw A.e(A.bx("Unsupport Path verb "+r,null,null))}return r}}
A.lV.prototype={
dR(a,b,c){var s=a*2,r=this.f
r[s]=b
r[s+1]=c},
e4(a){var s=this.f,r=a*2
return new A.z(s[r],s[r+1])},
wA(){var s=this
if(s.ay)return new A.D(s.e4(0).a,s.e4(0).b,s.e4(1).a,s.e4(2).b)
else return s.w===4?s.L0():null},
dd(){if(this.Q)this.r7()
var s=this.a
s.toString
return s},
L0(){var s,r,q,p,o,n,m,l,k=this,j=null,i=k.e4(0).a,h=k.e4(0).b,g=k.e4(1).a,f=k.e4(1).b
if(k.r[1]!==1||f!==h)return j
s=g-i
r=k.e4(2).a
q=k.e4(2).b
if(k.r[2]!==1||r!==g)return j
p=q-f
o=k.e4(3)
n=k.e4(3).b
if(k.r[3]!==1||n!==q)return j
if(r-o.a!==s||n-h!==p)return j
m=Math.min(i,g)
l=Math.min(h,q)
return new A.D(m,l,m+Math.abs(s),l+Math.abs(p))},
FM(){var s,r,q,p,o
if(this.w===2){s=this.r
s=s[0]!==0||s[1]!==1}else s=!0
if(s)return null
s=this.f
r=s[0]
q=s[1]
p=s[2]
o=s[3]
if(q===o||r===p)return new A.D(r,q,p,o)
return null},
z1(){var s,r,q,p,o,n,m,l,k,j,i,h={},g=this.dd(),f=A.a([],t.c0),e=new A.k4(this)
e.l4(this)
s=new Float32Array(8)
h.a=e.hZ(s)
h.b=0
for(;r=h.a=e.hZ(s),r!==6;)if(3===r){q=s[2]
p=s[3]
o=q-s[0]
n=p-s[1]
m=s[4]
l=s[5]
if(o!==0){k=Math.abs(o)
j=Math.abs(l-p)}else{j=Math.abs(n)
k=n!==0?Math.abs(m-q):Math.abs(o)}f.push(new A.as(k,j));++h.b}m=f[0]
l=f[1]
i=f[2]
return A.Pw(g,f[3],i,m,l)},
i(a,b){if(b==null)return!1
if(this===b)return!0
if(J.I(b)!==A.u(this))return!1
return b instanceof A.lV&&this.SJ(b)},
gq(a){var s=this
return A.G(s.cx,s.f,s.y,s.r,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
SJ(a){var s,r,q,p,o,n,m,l=this
if(l.cx!==a.cx)return!1
s=l.d
if(s!==a.d)return!1
r=s*2
for(q=l.f,p=a.f,o=0;o<r;++o)if(q[o]!==p[o])return!1
q=l.y
if(q==null){if(a.y!=null)return!1}else{p=a.y
if(p==null)return!1
n=q.length
if(p.length!==n)return!1
for(o=0;o<n;++o)if(q[o]!==p[o])return!1}m=l.w
if(m!==a.w)return!1
for(q=l.r,p=a.r,o=0;o<m;++o)if(q[o]!==p[o])return!1
return!0},
Pm(a){var s,r,q=this
if(a>q.c){s=a+10
q.c=s
r=new Float32Array(s*2)
B.fk.kS(r,0,q.f)
q.f=r}q.d=a},
Po(a){var s,r,q=this
if(a>q.e){s=a+8
q.e=s
r=new Uint8Array(s)
B.R.kS(r,0,q.r)
q.r=r}q.w=a},
Pl(a){var s,r,q=this
if(a>q.x){s=a+4
q.x=s
r=new Float32Array(s)
s=q.y
if(s!=null)B.fk.kS(r,0,s)
q.y=r}q.z=a},
r7(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.d
i.Q=!1
i.b=null
if(h===0){i.a=B.E
i.as=!0}else{s=i.f
r=s[0]
q=s[1]
p=0*r*q
o=2*h
for(n=q,m=r,l=2;l<o;l+=2){k=s[l]
j=s[l+1]
p=p*k*j
m=Math.min(m,k)
n=Math.min(n,j)
r=Math.max(r,k)
q=Math.max(q,j)}if(p*0===0){i.a=new A.D(m,n,r,q)
i.as=!0}else{i.a=B.E
i.as=!1}}},
fF(a,b){var s,r,q,p,o,n=this
switch(a){case 0:s=1
r=0
break
case 1:s=1
r=1
break
case 2:s=2
r=2
break
case 3:s=2
r=4
break
case 4:s=3
r=8
break
case 5:s=0
r=0
break
case 6:s=0
r=0
break
default:s=0
r=0}n.cx|=r
n.Q=!0
n.Gu()
q=n.w
n.Po(q+1)
n.r[q]=a
if(3===a){p=n.z
n.Pl(p+1)
n.y[p]=b}o=n.d
n.Pm(o+s)
return o},
Gu(){var s=this
s.ay=s.ax=s.at=!1
s.b=null
s.Q=!0}}
A.k4.prototype={
l4(a){var s
this.d=0
s=this.a
if(s.Q)s.r7()
if(!s.as)this.c=s.w},
Vg(){var s,r=this,q=r.c,p=r.a
if(q===p.w)return 6
p=p.r
r.c=q+1
s=p[q]
switch(s){case 0:q=r.d
r.e=q
r.d=q+2
break
case 1:q=r.d
r.e=q-2
r.d=q+2
break
case 3:++r.b
q=r.d
r.e=q-2
r.d=q+4
break
case 2:q=r.d
r.e=q-2
r.d=q+4
break
case 4:q=r.d
r.e=q-2
r.d=q+6
break
case 5:break
case 6:break
default:throw A.e(A.bx("Unsupport Path verb "+s,null,null))}return s},
hZ(a){var s,r,q,p,o,n=this,m=n.c,l=n.a
if(m===l.w)return 6
s=l.r
n.c=m+1
r=s[m]
q=l.f
p=n.d
switch(r){case 0:o=p+1
a[0]=q[p]
p=o+1
a[1]=q[o]
break
case 1:a[0]=q[p-2]
a[1]=q[p-1]
o=p+1
a[2]=q[p]
p=o+1
a[3]=q[o]
break
case 3:++n.b
a[0]=q[p-2]
a[1]=q[p-1]
o=p+1
a[2]=q[p]
p=o+1
a[3]=q[o]
o=p+1
a[4]=q[p]
p=o+1
a[5]=q[o]
break
case 2:a[0]=q[p-2]
a[1]=q[p-1]
o=p+1
a[2]=q[p]
p=o+1
a[3]=q[o]
o=p+1
a[4]=q[p]
p=o+1
a[5]=q[o]
break
case 4:a[0]=q[p-2]
a[1]=q[p-1]
o=p+1
a[2]=q[p]
p=o+1
a[3]=q[o]
o=p+1
a[4]=q[p]
p=o+1
a[5]=q[o]
o=p+1
a[6]=q[p]
p=o+1
a[7]=q[o]
break
case 5:break
case 6:break
default:throw A.e(A.bx("Unsupport Path verb "+r,null,null))}n.d=p
return r}}
A.hc.prototype={
hP(a,b,c){var s,r,q,p,o,n,m,l=this
if(a===0){s=A.Hx(-c,b)
l.a=s
return s==null?0:1}r=b*b-4*a*c
if(r<0)return 0
r=Math.sqrt(r)
if(!isFinite(r))return 0
q=b<0?-(b-r)/2:-(b+r)/2
p=A.Hx(q,a)
if(p!=null){l.a=p
o=1}else o=0
p=A.Hx(c,q)
if(p!=null){n=o+1
if(o===0)l.a=p
else l.b=p
o=n}if(o===2){s=l.a
s.toString
m=l.b
m.toString
if(s>m){l.a=m
l.b=s}else if(s===m)return 1}return o}}
A.Rw.prototype={
D3(a){return(this.a*a+this.c)*a+this.e},
D4(a){return(this.b*a+this.d)*a+this.f}}
A.OT.prototype={
QE(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.a,c=A.a3S(d,!0)
for(s=e.f,r=t.wd;q=c.hZ(s),q!==6;)switch(q){case 0:case 5:break
case 1:e.Kw()
break
case 2:p=!A.a3U(s)?A.acK(s):0
o=e.yk(s[0],s[1],s[2],s[3],s[4],s[5])
e.d+=p>0?o+e.yk(s[4],s[5],s[6],s[7],s[8],s[9]):o
break
case 3:n=d.y[c.f]
m=s[0]
l=s[1]
k=s[2]
j=s[3]
i=s[4]
h=s[5]
g=A.a3U(s)
f=A.a([],r)
new A.dU(m,l,k,j,i,h,n).Rk(f)
e.yj(f[0])
if(!g&&f.length===2)e.yj(f[1])
break
case 4:e.Kt()
break}},
Kw(){var s,r,q,p,o,n=this,m=n.f,l=m[0],k=m[1],j=m[2],i=m[3]
if(k>i){s=k
r=i
q=-1}else{s=i
r=k
q=1}m=n.c
if(m<r||m>s)return
p=n.b
if(A.OU(p,m,l,k,j,i)){++n.e
return}if(m===s)return
o=(j-l)*(m-k)-(i-k)*(p-l)
if(o===0){if(p!==j||m!==i)++n.e
q=0}else if(A.adx(o)===q)q=0
n.d+=q},
yk(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k=this
if(b>f){s=b
r=f
q=-1}else{s=f
r=b
q=1}p=k.c
if(p<r||p>s)return 0
o=k.b
if(A.OU(o,p,a,b,e,f)){++k.e
return 0}if(p===s)return 0
n=new A.hc()
if(0===n.hP(b-2*d+f,2*(d-b),b-p))m=q===1?a:e
else{l=n.a
l.toString
m=((e-2*c+a)*l+2*(c-a))*l+a}if(Math.abs(m-o)<0.000244140625)if(o!==e||p!==f){++k.e
return 0}return m<o?q:0},
yj(a){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=a.b,f=a.f
if(g>f){s=g
r=f
q=-1}else{s=f
r=g
q=1}p=h.c
if(p<r||p>s)return
o=h.b
n=a.a
m=a.e
if(A.OU(o,p,n,g,m,f)){++h.e
return}if(p===s)return
l=a.r
k=a.d*l-p*l+p
j=new A.hc()
if(0===j.hP(f+(g-2*k),2*(k-g),g-p))n=q===1?n:m
else{i=j.a
i.toString
n=A.aao(n,a.c,m,l,i)/A.aan(l,i)}if(Math.abs(n-o)<0.000244140625)if(o!==m||p!==a.f){++h.e
return}p=h.d
h.d=p+(n<o?q:0)},
Kt(){var s,r=this.f,q=A.a6I(r,r)
for(s=0;s<=q;++s)this.QF(s*3*2)},
QF(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.f,e=a0+1,d=f[a0],c=e+1,b=f[e],a=f[c]
e=c+1+1
s=f[e]
e=e+1+1
r=f[e]
q=f[e+1]
if(b>q){p=b
o=q
n=-1}else{p=q
o=b
n=1}m=g.c
if(m<o||m>p)return
l=g.b
if(A.OU(l,m,d,b,r,q)){++g.e
return}if(m===p)return
k=Math.min(d,Math.min(a,Math.min(s,r)))
j=Math.max(d,Math.max(a,Math.max(s,r)))
if(l<k)return
if(l>j){g.d+=n
return}i=A.a6J(f,a0,m)
if(i==null)return
h=A.a6Z(d,a,s,r,i)
if(Math.abs(h-l)<0.000244140625)if(l!==r||m!==q){++g.e
return}f=g.d
g.d=f+(h<l?n:0)}}
A.ig.prototype={
Vy(){return this.b.$0()}}
A.z2.prototype={
aR(){var s=this.oM("flt-picture"),r=A.T("true")
A.h(s,"setAttribute",["aria-hidden",r==null?t.K.a(r):r])
return s},
mL(a){this.xi(a)},
f_(){var s,r,q,p,o,n=this,m=n.e.f
n.f=m
s=n.CW
if(s!==0||n.cx!==0){m.toString
r=new A.b5(new Float32Array(16))
r.aD(m)
n.f=r
r.ai(s,n.cx)}m=n.db
q=m.c-m.a
p=m.d-m.b
o=q===0||p===0?1:A.ag6(n.f,q,p)
if(o!==n.dy){n.dy=o
n.fr=!0}n.Ku()},
Ku(){var s,r,q,p,o,n,m=this,l=m.e
if(l.r==null){s=A.cv()
for(r=null;l!=null;){q=l.w
if(q!=null)r=r==null?A.a13(s,q):r.cW(A.a13(s,q))
p=l.gmy()
if(p!=null&&!p.mv())s.cc(p)
l=l.e}if(r!=null)o=r.c-r.a<=0||r.d-r.b<=0
else o=!1
if(o)r=B.E
o=m.e
o.r=r}else o=l
o=o.r
n=m.db
if(o==null){m.id=n
o=n}else o=m.id=n.cW(o)
if(o.c-o.a<=0||o.d-o.b<=0)m.go=m.id=B.E},
r9(a){var s,r,q,p,o,n,m,l,k,j,i,h=this
if(a==null||!a.cy.b.e){h.fy=h.id
h.fr=!0
return}s=a===h?h.fy:a.fy
if(J.d(h.id,B.E)){h.fy=B.E
if(!J.d(s,B.E))h.fr=!0
return}s.toString
r=h.id
r.toString
if(A.a7m(s,r)){h.fy=s
return}q=r.a
p=r.b
o=r.c
r=r.d
n=o-q
m=A.OY(s.a-q,n)
l=r-p
k=A.OY(s.b-p,l)
n=A.OY(o-s.c,n)
l=A.OY(r-s.d,l)
j=h.db
j.toString
i=new A.D(q-m,p-k,o+n,r+l).cW(j)
h.fr=!J.d(h.fy,i)
h.fy=i},
ns(a){var s,r=this,q=a==null,p=q?null:a.ch,o=r.fr=!1,n=r.cy.b
if(!n.e||r.fy.gL(0)){A.Hm(p)
if(!q)a.ch=null
q=r.d
if(q!=null)A.a0Y(q)
q=r.ch
if(q!=null?q!==p:o)A.Hm(q)
r.ch=null
return}if(n.d.c)r.JI(p)
else{A.Hm(r.ch)
q=r.d
q.toString
s=r.ch=new A.JV(q,A.a([],t.ea),A.a([],t.J),A.cv())
q=r.d
q.toString
A.a0Y(q)
q=r.fy
q.toString
n.tU(s,q)
s.kg()}},
vb(a){var s,r,q,p,o=this,n=a.cy,m=o.cy
if(n===m)return 0
n=n.b
if(!n.e)return 1
s=n.d.c
r=m.b.d.c
if(s!==r)return 1
else if(!r)return 1
else{q=t.jz.a(a.ch)
if(q==null)return 1
else{n=o.id
n.toString
if(!q.CO(n,o.dy))return 1
else{n=o.id
n=A.Ik(n.c-n.a)
m=o.id
m=A.Ij(m.d-m.b)
p=q.r*q.w
if(p===0)return 1
return 1-n*m/p}}}},
JI(a){var s,r,q=this
if(a instanceof A.fH){s=q.fy
s.toString
if(a.CO(s,q.dy)){s=a.y
$.bc()
r=self.window.devicePixelRatio
s=s===(r===0?1:r)}else s=!1}else s=!1
if(s){s=q.fy
s.toString
a.su1(s)
q.ch=a
a.b=q.fx
a.F(0)
s=q.cy.b
s.toString
r=q.fy
r.toString
s.tU(a,r)
a.kg()}else{A.Hm(a)
s=q.ch
if(s instanceof A.fH)s.b=null
q.ch=null
s=$.Z4
r=q.fy
s.push(new A.ig(new A.U(r.c-r.a,r.d-r.b),new A.OX(q)))}},
LE(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=a0.c-a0.a,a=a0.d-a0.b
for(s=b+1,r=a+1,q=b*a,p=q>1,o=null,n=1/0,m=0;m<$.hH.length;++m){l=$.hH[m]
$.bc()
k=self.window.devicePixelRatio
if(k===0)k=1
if(l.y!==k)continue
k=l.a
j=k.c-k.a
k=k.d-k.b
i=j*k
h=c.dy
g=self.window.devicePixelRatio
if(l.r>=B.c.c_(s*(g===0?1:g))+2){g=self.window.devicePixelRatio
f=l.w>=B.c.c_(r*(g===0?1:g))+2&&l.ay===h}else f=!1
e=i<n
if(f&&e)if(!(e&&p&&i/q>4)){if(j===b&&k===a){o=l
break}n=i
o=l}}if(o!=null){B.b.A($.hH,o)
o.su1(a0)
o.b=c.fx
return o}d=A.a9R(a0,c.cy.b.d,c.dy)
d.b=c.fx
return d},
xP(){A.m(this.d.style,"transform","translate("+A.f(this.CW)+"px, "+A.f(this.cx)+"px)")},
dl(){this.xP()
this.ns(null)},
bn(){this.r9(null)
this.fr=!0
this.xg()},
aV(a){var s,r,q=this
q.xk(a)
q.fx=a.fx
if(a!==q)a.fx=null
if(q.CW!==a.CW||q.cx!==a.cx)q.xP()
q.r9(a)
if(q.cy===a.cy){s=q.ch
r=s instanceof A.fH&&q.dy!==s.ay
if(q.fr||r)q.ns(a)
else q.ch=a.ch}else q.ns(a)},
i2(){var s=this
s.xj()
s.r9(s)
if(s.fr)s.ns(s)},
fV(){A.Hm(this.ch)
this.ch=null
this.xh()}}
A.OX.prototype={
$0(){var s,r=this.a,q=r.fy
q.toString
s=r.ch=r.LE(q)
s.b=r.fx
q=r.d
q.toString
A.a0Y(q)
r.d.append(s.c)
s.F(0)
q=r.cy.b
q.toString
r=r.fy
r.toString
q.tU(s,r)
s.kg()},
$S:0}
A.PI.prototype={
tU(a,b){var s,r,q,p,o,n,m,l,k,j
try{m=this.b
m.toString
m=A.a7m(b,m)
l=this.c
k=l.length
if(m){s=k
for(r=0;r<s;++r)l[r].cA(a)}else{q=k
for(p=0;p<q;++p){o=l[p]
if(o instanceof A.on)if(o.UE(b))continue
o.cA(a)}}}catch(j){n=A.ah(j)
if(!J.d(n.name,"NS_ERROR_FAILURE"))throw j}},
hE(a,b){var s=new A.yJ(a,b)
switch(b.a){case 1:this.a.hE(a,s)
break
case 0:break}this.d.c=!0
this.c.push(s)},
cf(a,b){var s,r,q=this,p=b.a
if(p.w!=null)q.d.c=!0
q.e=!0
s=A.uY(b)
b.b=!0
r=new A.yR(a,p)
p=q.a
if(s!==0)p.i7(a.d2(s),r)
else p.i7(a,r)
q.c.push(r)},
cC(a,b){var s,r,q,p,o,n,m,l,k=this,j=b.a
if(j.w!=null||!a.as)k.d.c=!0
k.e=!0
s=A.uY(b)
r=a.a
q=a.c
p=Math.min(r,q)
o=a.b
n=a.d
m=Math.min(o,n)
q=Math.max(r,q)
n=Math.max(o,n)
b.b=!0
l=new A.yQ(a,j)
k.a.kP(p-s,m-s,q+s,n+s,l)
k.c.push(l)},
kb(b0,b1,b2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=this,a4=new A.D(b1.a,b1.b,b1.c,b1.d),a5=b0.a,a6=b0.b,a7=b0.c,a8=b0.d,a9=new A.D(a5,a6,a7,a8)
if(a9.i(0,a4)||!a9.cW(a4).i(0,a4))return
s=b0.n9()
r=b1.n9()
q=s.e
p=s.f
o=s.r
n=s.w
m=s.z
l=s.Q
k=s.x
j=s.y
i=r.e
h=r.f
g=r.r
f=r.w
e=r.z
d=r.Q
c=r.x
b=r.y
if(i*i+h*h>q*q+p*p||g*g+f*f>o*o+n*n||e*e+d*d>m*m+l*l||c*c+b*b>k*k+j*j)return
a3.e=a3.d.c=!0
a=A.uY(b2)
b2.b=!0
a0=new A.yL(b0,b1,b2.a)
q=$.ai().cB()
q.smf(B.ck)
q.e3(b0)
q.e3(b1)
q.av()
a0.x=q
a1=Math.min(a5,a7)
a2=Math.max(a5,a7)
a3.a.kP(a1-a,Math.min(a6,a8)-a,a2+a,Math.max(a6,a8)+a,a0)
a3.c.push(a0)},
d0(a,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this
if(a0.a.w==null){t.r.a(a)
s=a.a.wA()
if(s!=null){b.cf(s,a0)
return}r=a.a
q=r.ax?r.z1():null
if(q!=null){b.cC(q,a0)
return}p=a.a.FM()
if(p!=null){r=a0.a.c
r=(r==null?0:r)===0}else r=!1
if(r){r=p.a
o=p.c
n=Math.min(r,o)
m=p.b
l=p.d
k=Math.min(m,l)
r=o-r
j=Math.abs(r)
m=l-m
i=Math.abs(m)
h=m===0?1:i
g=r===0?1:j
a0.sct(B.ak)
b.cf(new A.D(n,k,n+g,k+h),a0)
return}}t.r.a(a)
if(a.a.w!==0){b.e=b.d.c=!0
f=a.dd()
e=A.uY(a0)
if(e!==0)f=f.d2(e)
r=a.a
o=new A.lV(r.f,r.r)
o.e=r.e
o.w=r.w
o.c=r.c
o.d=r.d
o.x=r.x
o.z=r.z
o.y=r.y
m=r.Q
o.Q=m
if(!m){o.a=r.a
o.b=r.b
o.as=r.as}o.cx=r.cx
o.at=r.at
o.ax=r.ax
o.ay=r.ay
o.ch=r.ch
o.CW=r.CW
d=new A.md(o,B.aB)
d.yv(a)
a0.b=!0
c=new A.yP(d,a0.a)
b.a.i7(f,c)
d.b=a.b
b.c.push(c)}},
hH(a,b){var s,r,q,p,o=this
t.sk.a(a)
if(!a.e)return
o.e=!0
s=o.d
s.c=!0
s.b=!0
r=new A.yO(a,b)
q=a.gdE().z
s=b.a
p=b.b
o.a.kP(s+q.a,p+q.b,s+q.c,p+q.d,r)
o.c.push(r)}}
A.c4.prototype={}
A.on.prototype={
UE(a){var s=this
if(s.a)return!0
return s.e<a.b||s.c>a.d||s.d<a.a||s.b>a.c}}
A.q4.prototype={
cA(a){a.c3()},
j(a){return this.bf(0)}}
A.yT.prototype={
cA(a){a.bA()},
j(a){return this.bf(0)}}
A.yV.prototype={
cA(a){a.ai(this.a,this.b)},
j(a){return this.bf(0)}}
A.yU.prototype={
cA(a){a.a0(this.a)},
j(a){return this.bf(0)}}
A.yJ.prototype={
cA(a){a.hE(this.f,this.r)},
j(a){return this.bf(0)}}
A.yI.prototype={
cA(a){a.ir(this.f)},
j(a){return this.bf(0)}}
A.yH.prototype={
cA(a){a.eL(this.f)},
j(a){return this.bf(0)}}
A.yN.prototype={
cA(a){a.kc(this.f)},
j(a){return this.bf(0)}}
A.yR.prototype={
cA(a){a.cf(this.f,this.r)},
j(a){return this.bf(0)}}
A.yQ.prototype={
cA(a){a.cC(this.f,this.r)},
j(a){return this.bf(0)}}
A.yL.prototype={
cA(a){var s=this.w
if(s.b==null)s.b=B.ak
a.d0(this.x,s)},
j(a){return this.bf(0)}}
A.yM.prototype={
cA(a){a.m8(this.f,this.r)},
j(a){return this.bf(0)}}
A.yK.prototype={
cA(a){a.fW(this.f,this.r,this.w)},
j(a){return this.bf(0)}}
A.yP.prototype={
cA(a){a.d0(this.f,this.r)},
j(a){return this.bf(0)}}
A.yS.prototype={
cA(a){var s=this
a.kd(s.f,s.r,s.w,s.x)},
j(a){return this.bf(0)}}
A.yO.prototype={
cA(a){a.hH(this.f,this.r)},
j(a){return this.bf(0)}}
A.Wb.prototype={
hE(a,b){var s,r,q,p,o=this,n=a.a,m=a.b,l=a.c,k=a.d
if(!o.x){s=$.a1f()
s[0]=n
s[1]=m
s[2]=l
s[3]=k
A.a12(o.y,s)
n=s[0]
m=s[1]
l=s[2]
k=s[3]}if(!o.z){o.Q=n
o.as=m
o.at=l
o.ax=k
o.z=!0
r=k
q=l
p=m
s=n}else{s=o.Q
if(n>s){o.Q=n
s=n}p=o.as
if(m>p){o.as=m
p=m}q=o.at
if(l<q){o.at=l
q=l}r=o.ax
if(k<r){o.ax=k
r=k}}if(s>=q||p>=r)b.a=!0
else{b.b=s
b.c=p
b.d=q
b.e=r}},
i7(a,b){this.kP(a.a,a.b,a.c,a.d,b)},
kP(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j=this
if(a===c||b===d){e.a=!0
return}if(!j.x){s=$.a1f()
s[0]=a
s[1]=b
s[2]=c
s[3]=d
A.a12(j.y,s)
r=s[0]
q=s[1]
p=s[2]
o=s[3]}else{o=d
p=c
q=b
r=a}if(j.z){n=j.at
if(r>=n){e.a=!0
return}m=j.Q
if(p<=m){e.a=!0
return}l=j.ax
if(q>=l){e.a=!0
return}k=j.as
if(o<=k){e.a=!0
return}if(r<m)r=m
if(p>n)p=n
if(q<k)q=k
if(o>l)o=l}e.b=r
e.c=q
e.d=p
e.e=o
if(j.b){j.c=Math.min(Math.min(j.c,r),p)
j.e=Math.max(Math.max(j.e,r),p)
j.d=Math.min(Math.min(j.d,q),o)
j.f=Math.max(Math.max(j.f,q),o)}else{j.c=Math.min(r,p)
j.e=Math.max(r,p)
j.d=Math.min(q,o)
j.f=Math.max(q,o)}j.b=!0},
qk(){var s=this,r=s.y,q=new A.b5(new Float32Array(16))
q.aD(r)
s.r.push(q)
r=s.z?new A.D(s.Q,s.as,s.at,s.ax):null
s.w.push(r)},
RC(){var s,r,q,p,o,n,m,l,k,j,i=this
if(!i.b)return B.E
s=i.a
r=s.a
if(isNaN(r))r=-1/0
q=s.c
if(isNaN(q))q=1/0
p=s.b
if(isNaN(p))p=-1/0
o=s.d
if(isNaN(o))o=1/0
s=i.c
n=i.e
m=Math.min(s,n)
l=Math.max(s,n)
n=i.d
s=i.f
k=Math.min(n,s)
j=Math.max(n,s)
if(l<r||j<p)return B.E
return new A.D(Math.max(m,r),Math.max(k,p),Math.min(l,q),Math.min(j,o))},
j(a){return this.bf(0)}}
A.Q4.prototype={}
A.Xu.prototype={
CS(a,b,a0,a1,a2,a3){var s,r,q,p,o,n,m,l="uniform4f",k="bindBuffer",j="bufferData",i="vertexAttribPointer",h="enableVertexAttribArray",g=a.a,f=a.b,e=a.c,d=a.d,c=new Float32Array(8)
c[0]=g
c[1]=f
c[2]=e
c[3]=f
c[4]=e
c[5]=d
c[6]=g
c[7]=d
s=a0.a
r=b.a
A.h(r,"uniformMatrix4fv",[b.jb(s,"u_ctransform"),!1,A.cv().a])
A.h(r,l,[b.jb(s,"u_scale"),2/a2,-2/a3,1,1])
A.h(r,l,[b.jb(s,"u_shift"),-1,1,0,0])
q=r.createBuffer()
q.toString
A.h(r,k,[b.gky(),q])
q=b.gv3()
A.h(r,j,[b.gky(),c,q])
q=b.r
A.h(r,i,[0,2,q==null?b.r=r.FLOAT:q,!1,0,0])
A.h(r,h,[0])
p=r.createBuffer()
A.h(r,k,[b.gky(),p])
o=new Int32Array(A.Hk(A.a([4278255360,4278190335,4294967040,4278255615],t.t)))
q=b.gv3()
A.h(r,j,[b.gky(),o,q])
q=b.ch
A.h(r,i,[1,4,q==null?b.ch=r.UNSIGNED_BYTE:q,!0,0,0])
A.h(r,h,[1])
n=r.createBuffer()
A.h(r,k,[b.gpp(),n])
q=$.a8a()
m=b.gv3()
A.h(r,j,[b.gpp(),q,m])
if(A.h(r,"getUniformLocation",[s,"u_resolution"])!=null)A.h(r,"uniform2f",[b.jb(s,"u_resolution"),a2,a3])
s=b.w
A.h(r,"clear",[s==null?b.w=r.COLOR_BUFFER_BIT:s])
r.viewport(0,0,a2,a3)
s=b.ax
if(s==null)s=b.ax=r.TRIANGLES
m=b.CW
if(m==null)m=b.CW=r.UNSIGNED_SHORT
A.h(r,"drawElements",[s,q.length,m,0])}}
A.Mv.prototype={
gvW(){return"html"},
gmh(){var s=this.a
if(s===$){s!==$&&A.a3()
s=this.a=new A.Mt()}return s},
mq(){A.fD(new A.Mw())
$.abU.b=this},
EJ(a){},
bb(){return new A.mc(new A.Az())},
Cs(a,b){t.pO.a(a)
if(a.c)A.ae(A.cc(u.g,null))
return new A.RP(a.lL(b==null?B.fx:b))},
Cu(a,b,c,d,e,f){return new A.oZ(a,b,c,d,e,f==null?null:new A.L2(f))},
Cw(){return new A.x4()},
Cx(){var s=A.a([],t.kS),r=$.RS,q=A.a([],t.R)
r=new A.dZ(r!=null&&r.c===B.a1?r:null)
$.hJ.push(r)
r=new A.qb(q,r,B.as)
r.f=A.cv()
s.push(r)
return new A.RR(s)},
cB(){return A.a4E()},
Cy(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1){return A.a2L(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1)},
Cv(a,b,c,d,e,f,g,h,i,j,k,l){t.qa.a(i)
return new A.oz(j,k,e,d,h,b,c,f,l,a,g)},
ue(a){t.m1.a(a)
return new A.IC(new A.bz(""),a,A.a([],t.pi),A.a([],t.s5),new A.zX(a),A.a([],t.n))},
j0(a,b){return this.W8(a,b)},
W8(a,b){var s=0,r=A.Q(t.H),q,p,o
var $async$j0=A.R(function(c,d){if(c===1)return A.N(d,r)
while(true)switch(s){case 0:p=t.W.a($.a9().gbF().b.k(0,0)).gc8()
o=t.q9.a(a).a
o.toString
q=p.w
if(o!==q){if(q!=null)q.remove()
p.w=o
p.d.append(o)}A.a72()
return A.O(null,r)}})
return A.P($async$j0,r)},
C8(){}}
A.Mw.prototype={
$0(){A.a6Y()},
$S:0}
A.me.prototype={
m(){}}
A.qb.prototype={
f_(){var s=$.iZ.gi_()
this.w=new A.D(0,0,s.a,s.b)
this.r=null},
gmy(){var s=this.CW
return s==null?this.CW=A.cv():s},
aR(){return this.oM("flt-scene")},
dl(){}}
A.RR.prototype={
P1(a){var s,r=a.a.a
if(r!=null)r.c=B.BY
r=this.a
s=B.b.gO(r)
s.x.push(a)
a.e=s
r.push(a)
return a},
jE(a){return this.P1(a,t.f6)},
vK(a,b,c){var s,r
t.BM.a(c)
s=A.a([],t.R)
r=new A.dZ(c!=null&&c.c===B.a1?c:null)
$.hJ.push(r)
return this.jE(new A.q9(a,b,s,r,B.as))},
Ev(a,b){var s,r,q
if(this.a.length===1)s=A.cv().a
else s=A.Hw(a)
t.aR.a(b)
r=A.a([],t.R)
q=new A.dZ(b!=null&&b.c===B.a1?b:null)
$.hJ.push(q)
return this.jE(new A.qc(s,r,q,B.as))},
Eq(a,b,c){var s,r
t.f0.a(c)
s=A.a([],t.R)
r=new A.dZ(c!=null&&c.c===B.a1?c:null)
$.hJ.push(r)
return this.jE(new A.q8(b,a,null,s,r,B.as))},
Ep(a,b,c){var s,r
t.gx.a(c)
s=A.a([],t.R)
r=new A.dZ(c!=null&&c.c===B.a1?c:null)
$.hJ.push(r)
return this.jE(new A.z_(a,b,null,s,r,B.as))},
En(a,b,c){var s,r
t.rk.a(c)
s=A.a([],t.R)
r=new A.dZ(c!=null&&c.c===B.a1?c:null)
$.hJ.push(r)
return this.jE(new A.q7(a,b,s,r,B.as))},
Es(a,b,c){var s,r
t.Fl.a(c)
s=A.a([],t.R)
r=new A.dZ(c!=null&&c.c===B.a1?c:null)
$.hJ.push(r)
return this.jE(new A.qa(a,b,s,r,B.as))},
BK(a){var s
t.f6.a(a)
if(a.c===B.a1)a.c=B.br
else a.q0()
s=B.b.gO(this.a)
s.x.push(a)
a.e=s},
es(){this.a.pop()},
BI(a,b,c,d){var s,r
t.l9.a(b)
s=b.b.b
r=new A.dZ(null)
$.hJ.push(r)
r=new A.z2(a.a,a.b,b,s,new A.wm(t.om),r,B.as)
s=B.b.gO(this.a)
s.x.push(r)
r.e=s},
bn(){A.a71()
A.a73()
A.Zc("preroll_frame",new A.RT(this))
return A.Zc("apply_frame",new A.RU(this))}}
A.RT.prototype={
$0(){for(var s=this.a.a;s.length>1;)s.pop()
t.kF.a(B.b.gJ(s)).mL(new A.Pp())},
$S:0}
A.RU.prototype={
$0(){var s,r,q=t.kF,p=this.a.a
if($.RS==null)q.a(B.b.gJ(p)).bn()
else{s=q.a(B.b.gJ(p))
r=$.RS
r.toString
s.aV(r)}A.ahp(q.a(B.b.gJ(p)))
$.RS=q.a(B.b.gJ(p))
return new A.me(q.a(B.b.gJ(p)).d)},
$S:249}
A.Ov.prototype={
Gc(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
for(s=f.d,r=f.c,q=a.a,p=f.b,o=b.a,n=0;n<s;++n){m=""+n
l="bias_"+m
k=q.getUniformLocation.apply(q,[o,l])
if(k==null){A.ae(A.bL(l+" not found"))
j=null}else j=k
l=n*4
i=l+1
h=l+2
g=l+3
q.uniform4f.apply(q,[j,p[l],p[i],p[h],p[g]])
m="scale_"+m
k=q.getUniformLocation.apply(q,[o,m])
if(k==null){A.ae(A.bL(m+" not found"))
j=null}else j=k
q.uniform4f.apply(q,[j,r[l],r[i],r[h],r[g]])}for(s=f.a,r=s.length,n=0;n<r;n+=4){p="threshold_"+B.f.bZ(n,4)
k=q.getUniformLocation.apply(q,[o,p])
if(k==null){A.ae(A.bL(p+" not found"))
j=null}else j=k
q.uniform4f.apply(q,[j,s[n],s[n+1],s[n+2],s[n+3]])}}}
A.Ow.prototype={
$1(a){return(a.gn()>>>24&255)<1},
$S:259}
A.Rp.prototype={}
A.KC.prototype={}
A.oZ.prototype={
S2(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=this,h="createLinearGradient",g=i.f
if(g===B.dT||g===B.fV){s=i.r
r=b.a
q=b.b
p=i.b
o=i.c
n=p.a
m=o.a
p=p.b
o=o.b
if(s!=null){l=(n+m)/2-r
k=(p+o)/2-q
s.F_(n-l,p-k)
p=s.b
n=s.c
s.F_(m-l,o-k)
j=A.h(a,h,[p+l-r,n+k-q,s.b+l-r,s.c+k-q])}else j=A.h(a,h,[n-r,p-q,m-r,o-q])
A.afP(j,i.d,i.e,g===B.fV)
return j}else{g=A.h(a,"createPattern",[i.Ct(b,c,!1),"no-repeat"])
g.toString
return g}},
Ct(c7,c8,c9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0=this,c1="premultipliedAlpha",c2="u_resolution",c3="m_gradient",c4="attachShader",c5=c7.c,c6=c7.a
c5-=c6
s=B.c.c_(c5)
r=c7.d
q=c7.b
r-=q
p=B.c.c_(r)
if($.a0O==null)$.a0O=new A.Xu()
o=$.a1m()
o.b=!0
n=o.a
if(n==null){n=new A.OA(s,p)
if(A.a3O())n.a=A.hI(self.OffscreenCanvas,[s,p])
else{m=n.b=A.kY(p,s)
m.className="gl-canvas"
n.Ba(m)}o.a=n}else if(s!==n.c&&p!==n.d){n.c=s
n.d=p
m=n.a
if(m!=null){A.a2t(m,s)
n=n.a
n.toString
A.a2s(n,p)}else{m=n.b
if(m!=null){A.jn(m,s)
m=n.b
m.toString
A.jm(m,p)
m=n.b
m.toString
n.Ba(m)}}}o=o.a
o.toString
if(A.a3O()){o=o.a
o.toString
n=t.N
m=A.ZZ(o,"webgl2",A.aC([c1,!1],n,t.z))
m.toString
l=new A.xv(m)
$.Md.b=A.y(n,t.fS)
l.dy=o
o=$.Md}else{o=o.b
o.toString
n=$.ds
n=(n==null?$.ds=A.kT():n)===1?"webgl":"webgl2"
m=t.N
n=A.eo(o,n,A.aC([c1,!1],m,t.z))
n.toString
l=new A.xv(n)
$.Md.b=A.y(m,t.fS)
l.dy=o
o=$.Md}l.fr=s
l.fx=p
k=A.acF(c0.d,c0.e)
n=$.a4Z
if(n==null){n=$.ds
if(n==null)n=$.ds=A.kT()
m=A.a([],t.tU)
j=A.a([],t.ie)
i=new A.Aj(m,j,n===2,!1,new A.bz(""))
i.tO(11,"position")
i.tO(11,"color")
i.hC(14,"u_ctransform")
i.hC(11,"u_scale")
i.hC(11,"u_shift")
m.push(new A.kq("v_color",11,3))
n=A.a([],t.s)
j.push(new A.r0("main",n))
n.push("gl_Position = ((u_ctransform * position) * u_scale) + u_shift;")
n.push("v_color = color.zyxw;")
n=$.a4Z=i.bn()}m=c0.f
j=$.ds
if(j==null)j=$.ds=A.kT()
h=A.a([],t.tU)
g=A.a([],t.ie)
i=new A.Aj(h,g,j===2,!0,new A.bz(""))
i.e=1
i.tO(11,"v_color")
i.hC(9,c2)
i.hC(14,c3)
f=i.gDk()
j=A.a([],t.s)
e=new A.r0("main",j)
g.push(e)
j.push("vec4 localCoord = m_gradient * vec4(gl_FragCoord.x, u_resolution.y - gl_FragCoord.y, 0, 1);")
j.push("float st = localCoord.x;")
j.push(f.a+" = "+A.aha(i,e,k,m)+" * scale + bias;")
d=i.bn()
c=n+"||"+d
b=o.bm().k(0,c)
if(b==null){a=l.Cb("VERTEX_SHADER",n)
a0=l.Cb("FRAGMENT_SHADER",d)
n=l.a
j=n.createProgram()
A.h(n,c4,[j,a])
A.h(n,c4,[j,a0])
A.h(n,"linkProgram",[j])
h=l.ay
if(!A.h(n,"getProgramParameter",[j,h==null?l.ay=n.LINK_STATUS:h]))A.ae(A.bL(A.h(n,"getProgramInfoLog",[j])))
b=new A.xw(j)
o.bm().l(0,c,b)}o=l.a
n=b.a
A.h(o,"useProgram",[n])
j=c0.b
a1=j.a
a2=j.b
j=c0.c
a3=j.a
a4=j.b
a5=a3-a1
a6=a4-a2
a7=Math.sqrt(a5*a5+a6*a6)
j=a7<11920929e-14
a8=j?0:-a6/a7
a9=j?1:a5/a7
b0=m!==B.dT
b1=b0?c5/2:(a1+a3)/2-c6
b2=b0?r/2:(a2+a4)/2-q
b3=A.cv()
b3.jd(-b1,-b2,0)
b4=A.cv()
b5=b4.a
b5[0]=a9
b5[1]=a8
b5[4]=-a8
b5[5]=a9
b6=A.cv()
b6.Wx(0.5)
if(a7>11920929e-14)b6.al(1/a7)
c5=c0.r
if(c5!=null){b7=new A.b5(new Float32Array(16))
b7.fi(new A.b5(c5.a))
b8=c7.gaz()
c5=b8.a
c6=b8.b
b6.ai(-c5,-c6)
b6.cc(b7)
b6.ai(c5,c6)}b6.cc(b4)
b6.cc(b3)
k.Gc(l,b)
A.h(o,"uniformMatrix4fv",[l.jb(n,c3),!1,b6.a])
A.h(o,"uniform2f",[l.jb(n,c2),s,p])
b9=new A.Mf(c9,c7,l,b,k,s,p).$0()
$.a1m().b=!1
return b9}}
A.Mf.prototype={
$0(){var s,r,q,p=this,o="bindBuffer",n=$.a0O,m=p.b,l=p.c,k=p.d,j=p.e,i=p.f,h=p.r,g=m.c,f=m.a,e=m.d
m=m.b
s=l.a
if(p.a){n.CS(new A.D(0,0,0+(g-f),0+(e-m)),l,k,j,i,h)
n=l.fr
r=A.kY(l.fx,n)
n=A.eo(r,"2d",null)
n.toString
l.CR(t.e.a(n),0,0)
n=A.h(r,"toDataURL",["image/png"])
A.jn(r,0)
A.jm(r,0)
A.h(s,o,[l.gky(),null])
A.h(s,o,[l.gpp(),null])
return n}else{n.CS(new A.D(0,0,0+(g-f),0+(e-m)),l,k,j,i,h)
q=l.VU(j.e)
A.h(s,o,[l.gky(),null])
A.h(s,o,[l.gpp(),null])
q.toString
return q}},
$S:262}
A.Aj.prototype={
gDk(){var s=this.Q
if(s==null)s=this.Q=new A.kq(this.y?"gFragColor":"gl_FragColor",11,3)
return s},
tO(a,b){var s=new A.kq(b,a,1)
this.b.push(s)
return s},
hC(a,b){var s=new A.kq(b,a,2)
this.b.push(s)
return s},
BB(a,b){var s,r,q=this,p="varying ",o=b.c
switch(o){case 0:q.as.a+="const "
break
case 1:if(q.y)s="in "
else s=q.z?p:"attribute "
q.as.a+=s
break
case 2:q.as.a+="uniform "
break
case 3:s=q.y?"out ":p
q.as.a+=s
break}s=q.as
r=s.a+=A.adW(b.b)+" "+b.a
if(o===0)o=s.a=r+" = "
else o=r
s.a=o+";\n"},
bn(){var s,r,q,p,o,n=this,m=n.y
if(m)n.as.a+="#version 300 es\n"
s=n.e
if(s!=null){if(s===0)s="lowp"
else s=s===1?"mediump":"highp"
n.as.a+="precision "+s+" float;\n"}if(m&&n.Q!=null){m=n.Q
m.toString
n.BB(n.as,m)}for(m=n.b,s=m.length,r=n.as,q=0;q<m.length;m.length===s||(0,A.C)(m),++q)n.BB(r,m[q])
for(m=n.c,s=m.length,p=r.gWQ(),q=0;q<m.length;m.length===s||(0,A.C)(m),++q){o=m[q]
r.a+="void "+o.b+"() {\n"
B.b.W(o.c,p)
r.a+="}\n"}m=r.a
return m.charCodeAt(0)==0?m:m}}
A.r0.prototype={}
A.kq.prototype={}
A.Yv.prototype={
$2(a,b){var s,r=a.a,q=r.b*r.a
r=b.a
s=r.b*r.a
return J.a1w(s,q)},
$S:339}
A.k5.prototype={
D(){return"PersistedSurfaceState."+this.b}}
A.ci.prototype={
q0(){this.c=B.as},
ge5(){return this.d},
bn(){var s,r=this,q=r.aR()
r.d=q
s=$.ba()
if(s===B.u)A.m(q.style,"z-index","0")
r.dl()
r.c=B.a1},
ov(a){this.d=a.d
a.d=null
a.c=B.o2},
aV(a){this.ov(a)
this.c=B.a1},
i2(){if(this.c===B.br)$.a0Z.push(this)},
fV(){this.d.remove()
this.d=null
this.c=B.o2},
m(){},
oM(a){var s=A.aA(self.document,a)
A.m(s.style,"position","absolute")
return s},
gmy(){return null},
f_(){var s=this
s.f=s.e.f
s.r=s.w=null},
mL(a){this.f_()},
j(a){return this.bf(0)}}
A.z1.prototype={}
A.cw.prototype={
mL(a){var s,r,q
this.xi(a)
s=this.x
r=s.length
for(q=0;q<r;++q)s[q].mL(a)},
f_(){var s=this
s.f=s.e.f
s.r=s.w=null},
bn(){var s,r,q,p,o,n
this.xg()
s=this.x
r=s.length
q=this.ge5()
for(p=0;p<r;++p){o=s[p]
if(o.c===B.br)o.i2()
else if(o instanceof A.cw&&o.a.a!=null){n=o.a.a
n.toString
o.aV(n)}else o.bn()
q.toString
n=o.d
n.toString
q.append(n)
o.b=p}},
vb(a){return 1},
aV(a){var s,r=this
r.xk(a)
if(a.x.length===0)r.QA(a)
else{s=r.x.length
if(s===1)r.Qk(a)
else if(s===0)A.z0(a)
else r.Qj(a)}},
QA(a){var s,r,q,p=this.ge5(),o=this.x,n=o.length
for(s=0;s<n;++s){r=o[s]
if(r.c===B.br)r.i2()
else if(r instanceof A.cw&&r.a.a!=null){q=r.a.a
q.toString
r.aV(q)}else r.bn()
r.b=s
p.toString
q=r.d
q.toString
p.append(q)}},
Qk(a){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.x[0]
h.b=0
if(h.c===B.br){s=h.d.parentElement
r=i.ge5()
if(s==null?r!=null:s!==r){s=i.ge5()
s.toString
r=h.d
r.toString
s.append(r)}h.i2()
A.z0(a)
return}if(h instanceof A.cw&&h.a.a!=null){q=h.a.a
s=q.d.parentElement
r=i.ge5()
if(s==null?r!=null:s!==r){s=i.ge5()
s.toString
r=q.d
r.toString
s.append(r)}h.aV(q)
A.z0(a)
return}for(s=a.x,p=null,o=2,n=0;n<s.length;++n){m=s[n]
if(!(m.c===B.a1&&A.u(h)===A.u(m)))continue
l=h.vb(m)
if(l<o){o=l
p=m}}if(p!=null){h.aV(p)
r=h.d.parentElement
k=i.ge5()
if(r==null?k!=null:r!==k){r=i.ge5()
r.toString
k=h.d
k.toString
r.append(k)}}else{h.bn()
r=i.ge5()
r.toString
k=h.d
k.toString
r.append(k)}for(n=0;n<s.length;++n){j=s[n]
if(j!==p&&j.c===B.a1)j.fV()}},
Qj(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.ge5(),d=f.NU(a)
for(s=f.x,r=t.t,q=null,p=null,o=!1,n=0;n<s.length;++n){m=s[n]
if(m.c===B.br){l=m.d.parentElement
k=l==null?e!=null:l!==e
m.i2()
j=m}else if(m instanceof A.cw&&m.a.a!=null){i=m.a.a
l=i.d.parentElement
k=l==null?e!=null:l!==e
m.aV(i)
j=i}else{j=d.k(0,m)
if(j!=null){l=j.d.parentElement
k=l==null?e!=null:l!==e
m.aV(j)}else{m.bn()
k=!0}}h=j!=null&&!k?j.b:-1
if(!o&&h!==n){q=A.a([],r)
p=A.a([],r)
for(g=0;g<n;++g){q.push(g)
p.push(g)}o=!0}if(o&&h!==-1){q.push(n)
p.push(h)}m.b=n}if(o){p.toString
f.NB(q,p)}A.z0(a)},
NB(a,b){var s,r,q,p,o,n,m=A.a7b(b)
for(s=m.length,r=0;r<s;++r)m[r]=a[m[r]]
q=this.ge5()
for(s=this.x,r=s.length-1,p=null;r>=0;--r,p=n){a.toString
o=B.b.hT(a,r)!==-1&&B.b.t(m,r)
n=s[r].d
n.toString
if(!o)if(p==null)q.append(n)
else q.insertBefore(n,p)}},
NU(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this.x,d=e.length,c=a0.x,b=c.length,a=A.a([],t.R)
for(s=0;s<d;++s){r=e[s]
if(r.c===B.as&&r.a.a==null)a.push(r)}q=A.a([],t.zr)
for(s=0;s<b;++s){r=c[s]
if(r.c===B.a1)q.push(r)}p=a.length
o=q.length
if(p===0||o===0)return B.B8
n=A.a([],t.fi)
for(m=0;m<p;++m){l=a[m]
for(k=0;k<o;++k){j=q[k]
if(j!=null)e=!(j.c===B.a1&&A.u(l)===A.u(j))
else e=!0
if(e)continue
n.push(new A.iQ(l,k,l.vb(j)))}}B.b.dS(n,new A.OW())
i=A.y(t.gx,t.nx)
for(s=0;s<n.length;++s){h=n[s]
e=h.b
g=q[e]
c=h.a
f=i.k(0,c)==null
if(g!=null&&f){q[e]=null
i.l(0,c,g)}}return i},
i2(){var s,r,q
this.xj()
s=this.x
r=s.length
for(q=0;q<r;++q)s[q].i2()},
q0(){var s,r,q
this.Hp()
s=this.x
r=s.length
for(q=0;q<r;++q)s[q].q0()},
fV(){this.xh()
A.z0(this)}}
A.OW.prototype={
$2(a,b){return B.c.aq(a.c,b.c)},
$S:360}
A.iQ.prototype={
j(a){return this.bf(0)}}
A.Pp.prototype={}
A.qc.prototype={
gDZ(){var s=this.cx
return s==null?this.cx=new A.b5(this.CW):s},
f_(){var s=this,r=s.e.f
r.toString
s.f=r.px(s.gDZ())
s.r=null},
gmy(){var s=this.cy
return s==null?this.cy=A.acp(this.gDZ()):s},
aR(){var s=A.aA(self.document,"flt-transform")
A.cJ(s,"position","absolute")
A.cJ(s,"transform-origin","0 0 0")
return s},
dl(){A.m(this.d.style,"transform",A.fA(this.CW))},
aV(a){var s,r,q,p,o,n=this
n.jp(a)
s=a.CW
r=n.CW
if(s===r){n.cx=a.cx
n.cy=a.cy
return}p=r.length
o=0
while(!0){if(!(o<p)){q=!1
break}if(r[o]!==s[o]){q=!0
break}++o}if(q)n.dl()
else{n.cx=a.cx
n.cy=a.cy}},
$iAS:1}
A.jl.prototype={
D(){return"DebugEngineInitializationState."+this.b}}
A.YU.prototype={
$2(a,b){var s,r
for(s=$.hG.length,r=0;r<$.hG.length;$.hG.length===s||(0,A.C)($.hG),++r)$.hG[r].$0()
return A.dc(A.adS("OK"),t.jx)},
$S:111}
A.YV.prototype={
$0(){var s=this.a
if(!s.a){s.a=!0
A.h(self.window,"requestAnimationFrame",[t.g.a(A.aU(new A.YT(s)))])}},
$S:0}
A.YT.prototype={
$1(a){var s,r,q,p
A.ai1()
this.a.a=!1
s=B.c.Y(1000*a)
A.ai0()
r=$.a9()
q=r.x
if(q!=null){p=A.co(s,0)
r.w=A.aw(t.qb)
A.j0(q,r.y,p)
r.w=null}q=r.z
if(q!=null){r.w=A.aw(t.qb)
A.hK(q,r.Q)
r.w=null}},
$S:100}
A.YW.prototype={
$0(){var s=0,r=A.Q(t.H),q
var $async$$0=A.R(function(a,b){if(a===1)return A.N(b,r)
while(true)switch(s){case 0:q=$.ai().mq()
s=1
break
case 1:return A.O(q,r)}})
return A.P($async$$0,r)},
$S:25}
A.Lg.prototype={
$1(a){return A.Hs(this.a.$1(a),t.K)},
$S:112}
A.Lh.prototype={
$1(a){return A.Hs(this.a.$1(a),t.gt)},
$S:116}
A.Lj.prototype={
$1(a){return A.Hs(this.a.$1(a),t.wZ)},
$0(){return this.$1(null)},
$C:"$1",
$R:0,
$D(){return[null]},
$S:72}
A.Lk.prototype={
$0(){return A.Hs(this.a.$0(),t.wZ)},
$S:119}
A.Lf.prototype={
$1(a){return A.Hs(this.a.$1(a),t.wZ)},
$0(){return this.$1(null)},
$C:"$1",
$R:0,
$D(){return[null]},
$S:72}
A.YK.prototype={
$2(a,b){this.a.f0(new A.YI(a,this.b),new A.YJ(b),t.H)},
$S:120}
A.YI.prototype={
$1(a){return A.h(this.a,"call",[null,a])},
$S(){return this.b.h("~(0)")}}
A.YJ.prototype={
$1(a){$.cm().$1("Rejecting promise with error: "+A.f(a))
this.a.call(null,null)},
$S:121}
A.Y9.prototype={
$1(a){return a.a.altKey},
$S:12}
A.Ya.prototype={
$1(a){return a.a.altKey},
$S:12}
A.Yb.prototype={
$1(a){return a.a.ctrlKey},
$S:12}
A.Yc.prototype={
$1(a){return a.a.ctrlKey},
$S:12}
A.Yd.prototype={
$1(a){return a.a.shiftKey},
$S:12}
A.Ye.prototype={
$1(a){return a.a.shiftKey},
$S:12}
A.Yf.prototype={
$1(a){return a.a.metaKey},
$S:12}
A.Yg.prototype={
$1(a){return a.a.metaKey},
$S:12}
A.XO.prototype={
$0(){var s=this.a,r=s.a
return r==null?s.a=this.b.$0():r},
$S(){return this.c.h("0()")}}
A.xQ.prototype={
Ji(){var s=this
s.xC("keydown",new A.Nf(s))
s.xC("keyup",new A.Ng(s))},
gre(){var s,r,q,p=this,o=p.a
if(o===$){s=$.bV()
r=t.S
q=s===B.ar||s===B.a0
s=A.ac7(s)
p.a!==$&&A.a3()
o=p.a=new A.Nj(p.gOg(),q,s,A.y(r,r),A.y(r,t.O))}return o},
xC(a,b){var s=t.g.a(A.aU(new A.Nh(b)))
this.b.l(0,a,s)
A.bo(self.window,a,s,!0)},
Oh(a){var s={}
s.a=null
$.a9().UA(a,new A.Ni(s))
s=s.a
s.toString
return s}}
A.Nf.prototype={
$1(a){var s
this.a.gre().hQ(new A.fa(a))
s=$.zm
if(s!=null)s.Dr(a)},
$S:1}
A.Ng.prototype={
$1(a){var s
this.a.gre().hQ(new A.fa(a))
s=$.zm
if(s!=null)s.Dr(a)},
$S:1}
A.Nh.prototype={
$1(a){var s=$.aY
if((s==null?$.aY=A.cp():s).Ey(a))this.a.$1(a)},
$S:1}
A.Ni.prototype={
$1(a){this.a.a=a},
$S:18}
A.fa.prototype={}
A.Nj.prototype={
An(a,b,c){var s,r={}
r.a=!1
s=t.H
A.oW(a,null,s).bk(new A.Np(r,this,c,b),s)
return new A.Nq(r)},
PZ(a,b,c){var s,r,q,p=this
if(!p.b)return
s=p.An(B.iq,new A.Nr(c,a,b),new A.Ns(p,a))
r=p.r
q=r.A(0,a)
if(q!=null)q.$0()
r.l(0,a,s)},
Mz(a){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=a.a,e=A.ep(f)
e.toString
s=A.a0q(e)
e=A.f8(f)
e.toString
r=A.jo(f)
r.toString
q=A.ac6(r)
p=!(e.length>1&&e.charCodeAt(0)<127&&e.charCodeAt(1)<127)
o=A.afU(new A.Nl(h,e,a,p,q),t.S)
if(f.type!=="keydown")if(h.b){r=A.jo(f)
r.toString
r=r==="CapsLock"
n=r}else n=!1
else n=!0
if(h.b){r=A.jo(f)
r.toString
r=r==="CapsLock"}else r=!1
if(r){h.An(B.t,new A.Nm(s,q,o),new A.Nn(h,q))
m=B.am}else if(n){r=h.f
if(r.k(0,q)!=null){l=f.repeat
if(l==null)l=g
if(l===!0)m=B.xX
else{l=h.d
l.toString
l.$1(new A.df(s,B.ab,q,o.$0(),g,!0))
r.A(0,q)
m=B.am}}else m=B.am}else{if(h.f.k(0,q)==null){f.preventDefault()
return}m=B.ab}r=h.f
k=r.k(0,q)
switch(m.a){case 0:j=o.$0()
break
case 1:j=g
break
case 2:j=k
break
default:j=g}l=j==null
if(l)r.A(0,q)
else r.l(0,q,j)
$.a8L().W(0,new A.No(h,o,a,s))
if(p)if(!l)h.PZ(q,o.$0(),s)
else{r=h.r.A(0,q)
if(r!=null)r.$0()}if(p)i=e
else i=g
e=k==null?o.$0():k
r=m===B.ab?g:i
if(h.d.$1(new A.df(s,m,q,e,r,!1)))f.preventDefault()},
hQ(a){var s=this,r={}
r.a=!1
s.d=new A.Nt(r,s)
try{s.Mz(a)}finally{if(!r.a)s.d.$1(B.xW)
s.d=null}},
oe(a,b,c,d,e){var s,r=this,q=r.f,p=q.T(a),o=q.T(b),n=p||o,m=d===B.am&&!n,l=d===B.ab&&n
if(m){r.a.$1(new A.df(A.a0q(e),B.am,a,c,null,!0))
q.l(0,a,c)}if(l&&p){s=q.k(0,a)
s.toString
r.AR(e,a,s)}if(l&&o){q=q.k(0,b)
q.toString
r.AR(e,b,q)}},
AR(a,b,c){this.a.$1(new A.df(A.a0q(a),B.ab,b,c,null,!0))
this.f.A(0,b)}}
A.Np.prototype={
$1(a){var s=this
if(!s.a.a&&!s.b.e){s.c.$0()
s.b.a.$1(s.d.$0())}},
$S:8}
A.Nq.prototype={
$0(){this.a.a=!0},
$S:0}
A.Nr.prototype={
$0(){return new A.df(new A.aS(this.a.a+2e6),B.ab,this.b,this.c,null,!0)},
$S:83}
A.Ns.prototype={
$0(){this.a.f.A(0,this.b)},
$S:0}
A.Nl.prototype={
$0(){var s,r,q,p,o,n=this,m=n.b,l=B.B1.k(0,m)
if(l!=null)return l
s=n.c.a
if(B.nR.T(A.f8(s))){m=A.f8(s)
m.toString
m=B.nR.k(0,m)
r=m==null?null:m[B.c.Y(s.location)]
r.toString
return r}if(n.d){q=n.a.c.Fx(A.jo(s),A.f8(s),B.c.Y(s.keyCode))
if(q!=null)return q}if(m==="Dead"){m=s.altKey
p=s.ctrlKey
o=s.shiftKey
s=s.metaKey
m=m?1073741824:0
p=p?268435456:0
o=o?536870912:0
s=s?2147483648:0
return n.e+(m+p+o+s)+98784247808}return B.d.gq(m)+98784247808},
$S:38}
A.Nm.prototype={
$0(){return new A.df(this.a,B.ab,this.b,this.c.$0(),null,!0)},
$S:83}
A.Nn.prototype={
$0(){this.a.f.A(0,this.b)},
$S:0}
A.No.prototype={
$2(a,b){var s,r,q=this
if(J.d(q.b.$0(),a))return
s=q.a
r=s.f
if(r.RH(a)&&!b.$1(q.c))r.W3(0,new A.Nk(s,a,q.d))},
$S:132}
A.Nk.prototype={
$2(a,b){var s=this.b
if(b!==s)return!1
this.a.d.$1(new A.df(this.c,B.ab,a,s,null,!0))
return!0},
$S:137}
A.Nt.prototype={
$1(a){this.a.a=!0
return this.b.a.$1(a)},
$S:48}
A.Jf.prototype={
dK(){if(!this.b)return
this.b=!1
A.bo(this.a,"contextmenu",$.Zo(),null)},
Sy(){if(this.b)return
this.b=!0
A.dW(this.a,"contextmenu",$.Zo(),null)}}
A.O8.prototype={}
A.Z5.prototype={
$1(a){a.preventDefault()},
$S:1}
A.Iq.prototype={
gQc(){var s=this.a
s===$&&A.c()
return s},
m(){var s=this
if(s.c||s.gi5()==null)return
s.c=!0
s.Qd()},
mb(){var s=0,r=A.Q(t.H),q=this
var $async$mb=A.R(function(a,b){if(a===1)return A.N(b,r)
while(true)switch(s){case 0:s=q.gi5()!=null?2:3
break
case 2:s=4
return A.W(q.fC(),$async$mb)
case 4:s=5
return A.W(q.gi5().n7(-1),$async$mb)
case 5:case 3:return A.O(null,r)}})
return A.P($async$mb,r)},
gfU(){var s=this.gi5()
s=s==null?null:s.FF()
return s==null?"/":s},
gbc(){var s=this.gi5()
return s==null?null:s.wB()},
Qd(){return this.gQc().$0()}}
A.pK.prototype={
Jj(a){var s,r=this,q=r.d
if(q==null)return
r.a=q.tR(r.gvu())
if(!r.rS(r.gbc())){s=t.z
q.j1(A.aC(["serialCount",0,"state",r.gbc()],s,s),"flutter",r.gfU())}r.e=r.grh()},
grh(){if(this.rS(this.gbc())){var s=this.gbc()
s.toString
return B.c.Y(A.a0l(t.f.a(s).k(0,"serialCount")))}return 0},
rS(a){return t.f.b(a)&&a.k(0,"serialCount")!=null},
ng(a,b,c){var s,r,q=this.d
if(q!=null){s=t.z
r=this.e
if(b){r===$&&A.c()
s=A.aC(["serialCount",r,"state",c],s,s)
a.toString
q.j1(s,"flutter",a)}else{r===$&&A.c();++r
this.e=r
s=A.aC(["serialCount",r,"state",c],s,s)
a.toString
q.Eu(s,"flutter",a)}}},
wQ(a){return this.ng(a,!1,null)},
vv(a){var s,r,q,p,o=this
if(!o.rS(a)){s=o.d
s.toString
r=o.e
r===$&&A.c()
q=t.z
s.j1(A.aC(["serialCount",r+1,"state",a],q,q),"flutter",o.gfU())}o.e=o.grh()
s=$.a9()
r=o.gfU()
t.yq.a(a)
q=a==null?null:a.k(0,"state")
p=t.z
s.eX("flutter/navigation",B.a4.eN(new A.e3("pushRouteInformation",A.aC(["location",r,"state",q],p,p))),new A.Oh())},
fC(){var s=0,r=A.Q(t.H),q,p=this,o,n,m
var $async$fC=A.R(function(a,b){if(a===1)return A.N(b,r)
while(true)switch(s){case 0:p.m()
if(p.b||p.d==null){s=1
break}p.b=!0
o=p.grh()
s=o>0?3:4
break
case 3:s=5
return A.W(p.d.n7(-o),$async$fC)
case 5:case 4:n=p.gbc()
n.toString
t.f.a(n)
m=p.d
m.toString
m.j1(n.k(0,"state"),"flutter",p.gfU())
case 1:return A.O(q,r)}})
return A.P($async$fC,r)},
gi5(){return this.d}}
A.Oh.prototype={
$1(a){},
$S:11}
A.r4.prototype={
Jo(a){var s,r=this,q=r.d
if(q==null)return
r.a=q.tR(r.gvu())
s=r.gfU()
if(!A.a_O(A.a2o(self.window.history))){q.j1(A.aC(["origin",!0,"state",r.gbc()],t.N,t.z),"origin","")
r.PM(q,s)}},
ng(a,b,c){var s=this.d
if(s!=null)this.tr(s,a,!0)},
wQ(a){return this.ng(a,!1,null)},
vv(a){var s,r=this,q="flutter/navigation"
if(A.a4q(a)){s=r.d
s.toString
r.PL(s)
$.a9().eX(q,B.a4.eN(B.Bl),new A.Ru())}else if(A.a_O(a)){s=r.f
s.toString
r.f=null
$.a9().eX(q,B.a4.eN(new A.e3("pushRoute",s)),new A.Rv())}else{r.f=r.gfU()
r.d.n7(-1)}},
tr(a,b,c){var s
if(b==null)b=this.gfU()
s=this.e
if(c)a.j1(s,"flutter",b)
else a.Eu(s,"flutter",b)},
PM(a,b){return this.tr(a,b,!1)},
PL(a){return this.tr(a,null,!1)},
fC(){var s=0,r=A.Q(t.H),q,p=this,o,n
var $async$fC=A.R(function(a,b){if(a===1)return A.N(b,r)
while(true)switch(s){case 0:p.m()
if(p.b||p.d==null){s=1
break}p.b=!0
o=p.d
s=3
return A.W(o.n7(-1),$async$fC)
case 3:n=p.gbc()
n.toString
o.j1(t.f.a(n).k(0,"state"),"flutter",p.gfU())
case 1:return A.O(q,r)}})
return A.P($async$fC,r)},
gi5(){return this.d}}
A.Ru.prototype={
$1(a){},
$S:11}
A.Rv.prototype={
$1(a){},
$S:11}
A.h1.prototype={}
A.oL.prototype={
gqP(){var s,r,q=this,p=q.b
if(p===$){s=q.a
r=A.xZ(new A.aW(s,new A.L0(),A.X(s).h("aW<1>")),t.Ez)
q.b!==$&&A.a3()
q.b=r
p=r}return p}}
A.L0.prototype={
$1(a){return a.c},
$S:9}
A.x4.prototype={
lL(a){var s
this.b=a
this.c=!0
s=A.a([],t.gO)
return this.a=new A.PI(new A.Wb(a,A.a([],t.l6),A.a([],t.AQ),A.cv()),s,new A.Q4())},
gDM(){return this.c},
oX(){var s,r=this
if(!r.c)r.lL(B.fx)
r.c=!1
s=r.a
s.b=s.a.RC()
s.f=!0
s=r.a
r.b===$&&A.c()
return new A.x3(s)}}
A.x3.prototype={
m(){this.a=!0}}
A.xz.prototype={
gzP(){var s,r=this,q=r.c
if(q===$){s=t.g.a(A.aU(r.gOe()))
r.c!==$&&A.a3()
r.c=s
q=s}return q},
Of(a){var s,r,q,p=A.a2p(a)
p.toString
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.C)(s),++q)s[q].$1(p)}}
A.x5.prototype={
Jf(){var s,r,q=this
q.Ju()
s=$.Zg()
r=s.a
if(r.length===0)s.b.addListener(s.gzP())
r.push(q.gBk())
q.Jv()
q.Jz()
$.hG.push(q.gka())
q.Ar("flutter/lifecycle",A.ZD(B.aU.dI(B.cA.D())),A.a2K(null))
s=q.gbF().e
new A.d6(s,A.q(s).h("d6<1>")).pr(new A.KM(q))},
m(){var s,r,q,p=this
p.k1.removeListener(p.k2)
p.k2=null
s=p.fy
if(s!=null)s.disconnect()
p.fy=null
s=p.dy
if(s!=null)s.b3()
p.dy=null
s=$.Zg()
r=s.a
B.b.A(r,p.gBk())
if(r.length===0)s.b.removeListener(s.gzP())
s=p.gbF()
r=s.b
q=A.q(r).h("aB<1>")
B.b.W(A.a0(new A.aB(r,q),!0,q.h("v.E")),s.gSq())
s.d.av()
s.e.av()},
gbF(){var s,r,q,p=this.e
if(p===$){s=t.S
r=A.RJ(!0,s)
q=A.RJ(!0,s)
p!==$&&A.a3()
p=this.e=new A.oQ(this,A.y(s,t.pe),A.y(s,t.e),r,q)}return p},
gUe(){return t.W.a(this.gbF().b.k(0,0))},
uX(){var s=this.f
if(s!=null)A.hK(s,this.r)},
UA(a,b){var s=this.ax
if(s!=null)A.hK(new A.KN(b,s,a),this.ay)
else b.$1(!1)},
eX(a,b,c){var s
if(a==="dev.flutter/channel-buffers")try{s=$.HE()
b.toString
s.Tp(b)}finally{c.$1(null)}else $.HE().VI(a,b,c)},
Ar(a,b,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=null
switch(a){case"flutter/skia":s=B.a4.ea(b)
switch(s.a){case"Skia.setResourceCacheMaxBytes":if($.ai() instanceof A.nT){r=A.cV(s.b)
q=$.vQ.bm().d
q.w=r
q.AP()}d.cr(a0,B.C.aM([A.a([!0],t.sj)]))
break}return
case"flutter/assets":d.lh(B.J.e9(A.d3(b.buffer,0,c)),a0)
return
case"flutter/platform":s=B.a4.ea(b)
switch(s.a){case"SystemNavigator.pop":q=t.W
if(q.a(d.gbF().b.k(0,0))!=null)q.a(d.gbF().b.k(0,0)).goz().mb().bk(new A.KI(d,a0),t.P)
else d.cr(a0,B.C.aM([!0]))
return
case"HapticFeedback.vibrate":q=d.LV(A.bO(s.b))
p=self.window.navigator
if("vibrate" in p)p.vibrate(q)
d.cr(a0,B.C.aM([!0]))
return
case u.f:o=t.oZ.a(s.b)
n=A.bO(o.k(0,"label"))
if(n==null)n=""
m=A.uV(o.k(0,"primaryColor"))
if(m==null)m=4278190080
q=self.document
q.title=n
A.a7q(new A.r(m>>>0))
d.cr(a0,B.C.aM([!0]))
return
case"SystemChrome.setSystemUIOverlayStyle":l=A.uV(t.oZ.a(s.b).k(0,"statusBarColor"))
A.a7q(l==null?c:new A.r(l>>>0))
d.cr(a0,B.C.aM([!0]))
return
case"SystemChrome.setPreferredOrientations":B.vi.nf(t.j.a(s.b)).bk(new A.KJ(d,a0),t.P)
return
case"SystemSound.play":d.cr(a0,B.C.aM([!0]))
return
case"Clipboard.setData":new A.nY(A.ZN(),A.a_C()).G7(s,a0)
return
case"Clipboard.getData":new A.nY(A.ZN(),A.a_C()).Fu(a0)
return
case"Clipboard.hasStrings":new A.nY(A.ZN(),A.a_C()).U_(a0)
return}break
case"flutter/service_worker":q=self.window
k=A.h(self.document,"createEvent",["Event"])
A.h(k,"initEvent",["flutter-first-frame",!0,!0])
q.dispatchEvent(k)
return
case"flutter/textinput":$.vl().glO().TW(b,a0)
return
case"flutter/contextmenu":switch(B.a4.ea(b).a){case"enableContextMenu":t.W.a(d.gbF().b.k(0,0)).gCg().Sy()
d.cr(a0,B.C.aM([!0]))
return
case"disableContextMenu":t.W.a(d.gbF().b.k(0,0)).gCg().dK()
d.cr(a0,B.C.aM([!0]))
return}return
case"flutter/mousecursor":s=B.bh.ea(b)
o=t.f.a(s.b)
switch(s.a){case"activateSystemCursor":q=A.ac_(d.gbF().b.gau())
if(q!=null){if(q.w===$){q.gc8()
q.w!==$&&A.a3()
q.w=new A.O8()}j=B.AZ.k(0,A.bO(o.k(0,"kind")))
if(j==null)j="default"
if(j==="default")A.h(self.document.body.style,"removeProperty",["cursor"])
else A.m(self.document.body.style,"cursor",j)}break}return
case"flutter/web_test_e2e":d.cr(a0,B.C.aM([A.agy(B.a4,b)]))
return
case"flutter/platform_views":i=B.bh.ea(b)
h=i.b
o=h
if(!!0)throw A.e(A.az("Pattern matching error"))
q=$.a7M()
a0.toString
q.Tx(i.a,o,a0)
return
case"flutter/accessibility":q=t.W.a(d.gbF().b.k(0,0))
if(q!=null){q=q.gBF()
k=t.f
g=k.a(k.a(B.aG.dn(b)).k(0,"data"))
f=A.bO(g.k(0,"message"))
if(f!=null&&f.length!==0){e=A.a_m(g,"assertiveness")
q.BR(f,B.yw[e==null?0:e])}}d.cr(a0,B.aG.aM(!0))
return
case"flutter/navigation":q=t.W
if(q.a(d.gbF().b.k(0,0))!=null)q.a(d.gbF().b.k(0,0)).uM(b).bk(new A.KK(d,a0),t.P)
else if(a0!=null)a0.$1(c)
d.ry="/"
return}d.cr(a0,c)},
lh(a,b){return this.MC(a,b)},
MC(a,b){var s=0,r=A.Q(t.H),q=1,p,o=this,n,m,l,k,j,i,h
var $async$lh=A.R(function(c,d){if(c===1){p=d
s=q}while(true)switch(s){case 0:q=3
k=$.nd
h=t.fF
s=6
return A.W(A.nk(k.n3(a)),$async$lh)
case 6:n=h.a(d)
s=7
return A.W(n.gpK().jU(),$async$lh)
case 7:m=d
o.cr(b,A.lP(m,0,null))
q=1
s=5
break
case 3:q=2
i=p
l=A.ah(i)
$.cm().$1("Error while trying to load an asset: "+A.f(l))
o.cr(b,null)
s=5
break
case 2:s=1
break
case 5:return A.O(null,r)
case 1:return A.N(p,r)}})
return A.P($async$lh,r)},
LV(a){switch(a){case"HapticFeedbackType.lightImpact":return 10
case"HapticFeedbackType.mediumImpact":return 20
case"HapticFeedbackType.heavyImpact":return 30
case"HapticFeedbackType.selectionClick":return 10
default:return 50}},
fG(){var s=$.a7o
if(s==null)throw A.e(A.bL("scheduleFrameCallback must be initialized first."))
s.$0()},
pZ(a,b){return this.W5(a,b)},
W5(a,b){var s=0,r=A.Q(t.H),q=this,p
var $async$pZ=A.R(function(c,d){if(c===1)return A.N(d,r)
while(true)switch(s){case 0:p=q.w
p=p==null?null:p.C(0,b)
s=p===!0||$.ai().gvW()==="html"?2:3
break
case 2:s=4
return A.W($.ai().j0(a,b),$async$pZ)
case 4:case 3:return A.O(null,r)}})
return A.P($async$pZ,r)},
Jz(){var s=this
if(s.dy!=null)return
s.a=s.a.Cj(A.a_2())
s.dy=A.bw(self.window,"languagechange",new A.KH(s))},
Jv(){var s,r,q,p=A.hI(self.MutationObserver,[t.g.a(A.aU(new A.KG(this)))])
this.fy=p
s=self.document.documentElement
s.toString
r=A.a(["style"],t.s)
q=A.y(t.N,t.z)
q.l(0,"attributes",!0)
q.l(0,"attributeFilter",r)
r=A.T(q)
A.h(p,"observe",[s,r==null?t.K.a(r):r])},
Bm(a){var s=this,r=s.a
if(r.d!==a){s.a=r.RQ(a)
A.hK(null,null)
A.hK(s.k3,s.k4)}},
Qg(a){var s=this.a,r=s.a
if((r.a&32)!==0!==a){this.a=s.Ci(r.RO(a))
A.hK(null,null)}},
Ju(){var s,r=this,q=r.k1
r.Bm(q.matches?B.a2:B.L)
s=t.g.a(A.aU(new A.KF(r)))
r.k2=s
q.addListener(s)},
en(a,b,c){A.j0(this.p4,this.R8,new A.m4(b,0,a,c))},
guk(){var s=this.ry
if(s==null){s=t.W.a(this.gbF().b.k(0,0))
s=s==null?null:s.goz().gfU()
s=this.ry=s==null?"/":s}return s},
cr(a,b){A.oW(B.t,null,t.H).bk(new A.KO(a,b),t.P)}}
A.KM.prototype={
$1(a){this.a.uX()},
$S:14}
A.KN.prototype={
$0(){return this.a.$1(this.b.$1(this.c))},
$S:0}
A.KL.prototype={
$1(a){this.a.w0(this.b,a)},
$S:11}
A.KI.prototype={
$1(a){this.a.cr(this.b,B.C.aM([!0]))},
$S:8}
A.KJ.prototype={
$1(a){this.a.cr(this.b,B.C.aM([a]))},
$S:47}
A.KK.prototype={
$1(a){var s=this.b
if(a)this.a.cr(s,B.C.aM([!0]))
else if(s!=null)s.$1(null)},
$S:47}
A.KH.prototype={
$1(a){var s=this.a
s.a=s.a.Cj(A.a_2())
A.hK(s.fr,s.fx)},
$S:1}
A.KG.prototype={
$2(a,b){var s,r,q,p,o=null,n=B.b.gK(a),m=t.e,l=this.a
for(;n.p();){s=n.gB()
s.toString
m.a(s)
r=s.type
if((r==null?o:r)==="attributes"){r=s.attributeName
r=(r==null?o:r)==="style"}else r=!1
if(r){r=self.document.documentElement
r.toString
q=A.aiy(r)
p=(q==null?16:q)/16
r=l.a
if(r.e!==p){l.a=r.RS(p)
A.hK(o,o)
A.hK(l.go,l.id)}}}},
$S:144}
A.KF.prototype={
$1(a){var s=A.a2p(a)
s.toString
s=s?B.a2:B.L
this.a.Bm(s)},
$S:1}
A.KO.prototype={
$1(a){var s=this.a
if(s!=null)s.$1(this.b)},
$S:8}
A.YY.prototype={
$0(){this.a.$2(this.b,this.c)},
$S:0}
A.Tc.prototype={
j(a){return A.u(this).j(0)+"[view: null]"}}
A.z7.prototype={
lV(a,b,c,d,e){var s=this,r=a==null?s.a:a,q=d==null?s.c:d,p=c==null?s.d:c,o=e==null?s.e:e,n=b==null?s.f:b
return new A.z7(r,!1,q,p,o,n,s.r,s.w)},
Ci(a){var s=null
return this.lV(a,s,s,s,s)},
RR(a){var s=null
return this.lV(s,s,s,a,s)},
Cj(a){var s=null
return this.lV(s,a,s,s,s)},
RS(a){var s=null
return this.lV(s,s,s,s,a)},
RQ(a){var s=null
return this.lV(s,s,a,s,s)}}
A.z8.prototype={
EA(a,b,c){var s=this.a
if(s.T(a))return!1
s.l(0,a,b)
if(!c)this.c.C(0,a)
return!0},
VY(a,b){return this.EA(a,b,!0)},
W6(a,b,c){this.d.l(0,b,a)
return this.b.bj(b,new A.P8(this,b,"flt-pv-slot-"+b,a,c))},
C9(a){var s=this.b.A(0,a)
if(s!=null)s.remove()}}
A.P8.prototype={
$0(){var s,r,q,p,o=this,n="getPropertyValue",m=A.aA(self.document,"flt-platform-view"),l=o.b
m.id="flt-pv-"+l
s=A.T(o.c)
A.h(m,"setAttribute",["slot",s==null?t.K.a(s):s])
s=o.d
r=o.a.a.k(0,s)
r.toString
q=t.e
if(t.mB.b(r))p=q.a(r.$2$params(l,o.e))
else{t.jE.a(r)
p=q.a(r.$1(l))}if(A.h(p.style,n,["height"]).length===0){$.cm().$1("Height of Platform View type: ["+s+"] may not be set. Defaulting to `height: 100%`.\nSet `style.height` to any appropriate value to stop this message.")
A.m(p.style,"height","100%")}if(A.h(p.style,n,["width"]).length===0){$.cm().$1("Width of Platform View type: ["+s+"] may not be set. Defaulting to `width: 100%`.\nSet `style.width` to any appropriate value to stop this message.")
A.m(p.style,"width","100%")}m.append(p)
return m},
$S:46}
A.P9.prototype={
KP(a,b,c,d){var s=this.b
if(!s.a.T(d)){a.$1(B.bh.iz("unregistered_view_type","If you are the author of the PlatformView, make sure `registerViewFactory` is invoked.","A HtmlElementView widget is trying to create a platform view with an unregistered type: <"+d+">."))
return}if(s.b.T(c)){a.$1(B.bh.iz("recreating_view","view id: "+c,"trying to create an already created view"))
return}s.W6(d,c,b)
a.$1(B.bh.ma(null))},
Tx(a,b,c){var s,r
switch(a){case"create":t.f.a(b)
s=B.c.Y(A.uW(b.k(0,"id")))
r=A.bT(b.k(0,"viewType"))
this.KP(c,b.k(0,"params"),s,r)
return
case"dispose":this.b.C9(A.cV(b))
c.$1(B.bh.ma(null))
return}c.$1(null)}}
A.Qr.prototype={
WM(){if(this.a==null){this.a=t.g.a(A.aU(new A.Qs()))
A.bo(self.document,"touchstart",this.a,null)}}}
A.Qs.prototype={
$1(a){},
$S:1}
A.Pb.prototype={
KJ(){if("PointerEvent" in self.window){var s=new A.Wd(A.y(t.S,t.DW),this,A.a([],t.xU))
s.Gb()
return s}throw A.e(A.aH("This browser does not support pointer events which are necessary to handle interactions with Flutter Web apps."))}}
A.w1.prototype={
Vr(a,b){var s,r,q,p=this,o=$.a9()
if(!o.a.c){s=A.a(b.slice(0),A.X(b))
A.j0(o.as,o.at,new A.ij(s))
return}s=p.a
if(s!=null){o=s.a
r=A.ep(a)
r.toString
o.push(new A.tT(b,a,A.rQ(r)))
if(a.type==="pointerup")if(a.target!==s.b)p.ru()}else if(a.type==="pointerdown"){q=a.target
if(t.e.b(q)&&A.h(q,"hasAttribute",["flt-tappable"])){o=A.bH(B.a6,p.gOp())
s=A.ep(a)
s.toString
p.a=new A.EX(A.a([new A.tT(b,a,A.rQ(s))],t.cK),q,o)}else{s=A.a(b.slice(0),A.X(b))
A.j0(o.as,o.at,new A.ij(s))}}else{s=A.a(b.slice(0),A.X(b))
A.j0(o.as,o.at,new A.ij(s))}},
Vm(a,b,c){var s=this,r=s.a
if(r==null){if(c&&s.PP(a)){a.stopPropagation()
$.a9().en(b,B.dI,null)}return}if(c){s.a=null
r.c.b3()
a.stopPropagation()
$.a9().en(b,B.dI,null)}else s.ru()},
Oq(){if(this.a==null)return
this.ru()},
PP(a){var s,r=this.b
if(r==null)return!0
s=A.ep(a)
s.toString
return A.rQ(s).a-r.a>=5e4},
ru(){var s,r,q,p,o,n,m=this.a
m.c.b3()
s=t.sP
r=A.a([],s)
for(q=m.a,p=q.length,o=0;o<q.length;q.length===p||(0,A.C)(q),++o){n=q[o]
if(n.b.type==="pointerup")this.b=n.c
B.b.G(r,n.a)}s=A.a(r.slice(0),s)
q=$.a9()
A.j0(q.as,q.at,new A.ij(s))
this.a=null}}
A.Pl.prototype={
j(a){return"pointers:"+("PointerEvent" in self.window)}}
A.Dt.prototype={}
A.TB.prototype={
gK0(){return $.a1a().gVq()},
m(){var s,r,q,p,o
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,A.C)(s),++q){p=s[q]
o=p.b
o.removeEventListener.apply(o,[p.a,p.c])}B.b.F(s)},
QO(a,b,c){this.b.push(A.a59(b,new A.TC(c),null,a))},
jw(a,b){return this.gK0().$2(a,b)}}
A.TC.prototype={
$1(a){var s=$.aY
if((s==null?$.aY=A.cp():s).Ey(a))this.a.$1(a)},
$S:1}
A.Xv.prototype={
zw(a,b){if(b==null)return!1
return Math.abs(b- -3*a)>1},
NJ(a){var s,r,q,p,o,n=this,m=$.ba()
if(m===B.aS)return!1
if(n.zw(a.deltaX,A.a2z(a))||n.zw(a.deltaY,A.a2A(a)))return!1
if(!(B.c.bS(a.deltaX,120)===0&&B.c.bS(a.deltaY,120)===0)){m=A.a2z(a)
if(B.c.bS(m==null?1:m,120)===0){m=A.a2A(a)
m=B.c.bS(m==null?1:m,120)===0}else m=!1}else m=!0
if(m){m=a.deltaX
s=n.c
r=s==null
q=r?null:s.deltaX
p=Math.abs(m-(q==null?0:q))
m=a.deltaY
q=r?null:s.deltaY
o=Math.abs(m-(q==null?0:q))
if(!r)if(!(p===0&&o===0))m=!(p<20&&o<20)
else m=!0
else m=!0
if(m){if(A.ep(a)!=null)m=(r?null:A.ep(s))!=null
else m=!1
if(m){m=A.ep(a)
m.toString
s.toString
s=A.ep(s)
s.toString
if(m-s<50&&n.d)return!0}return!1}}return!0},
KI(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this
if(c.NJ(a)){s=B.bx
r=-2}else{s=B.dx
r=-1}q=a.deltaX
p=a.deltaY
switch(B.c.Y(a.deltaMode)){case 1:o=$.a5M
if(o==null){n=A.aA(self.document,"div")
o=n.style
A.m(o,"font-size","initial")
A.m(o,"display","none")
self.document.body.append(n)
o=A.h(A.a_0(self.window,n),"getPropertyValue",["font-size"])
if(B.d.t(o,"px"))m=A.a41(A.a7s(o,"px",""))
else m=null
n.remove()
o=$.a5M=m==null?16:m/4}q*=o
p*=o
break
case 2:o=c.a.b
q*=o.gi_().a
p*=o.gi_().b
break
case 0:o=$.bV()
if(o===B.ar){o=$.bc()
l=o.d
if(l==null){l=self.window.devicePixelRatio
if(l===0)l=1}q*=l
o=o.d
if(o==null){o=self.window.devicePixelRatio
if(o===0)o=1}p*=o}break
default:break}k=A.a([],t.sP)
o=c.a
l=o.b
j=A.a6N(a,l)
i=$.bV()
if(i===B.ar){i=o.e
h=i==null
if(h)g=null
else{g=$.a1t()
g=i.f.T(g)}if(g!==!0){if(h)i=null
else{h=$.a1u()
h=i.f.T(h)
i=h}f=i===!0}else f=!0}else f=!1
i=a.ctrlKey&&!f
o=o.d
l=l.a
h=j.a
if(i){i=A.ep(a)
i.toString
i=A.rQ(i)
g=$.bc()
e=g.d
if(e==null){e=self.window.devicePixelRatio
if(e===0)e=1}g=g.d
if(g==null){g=self.window.devicePixelRatio
if(g===0)g=1}d=A.oj(a)
d.toString
o.RJ(k,B.c.Y(d),B.b5,r,s,h*e,j.b*g,1,1,Math.exp(-p/200),B.CH,i,l)}else{i=A.ep(a)
i.toString
i=A.rQ(i)
g=$.bc()
e=g.d
if(e==null){e=self.window.devicePixelRatio
if(e===0)e=1}g=g.d
if(g==null){g=self.window.devicePixelRatio
if(g===0)g=1}d=A.oj(a)
d.toString
o.RL(k,B.c.Y(d),B.b5,r,s,h*e,j.b*g,1,1,q,p,B.CG,i,l)}c.c=a
c.d=s===B.bx
return k}}
A.fv.prototype={
j(a){return A.u(this).j(0)+"(change: "+this.a.j(0)+", buttons: "+this.b+")"}}
A.mB.prototype={
FS(a,b){var s
if(this.a!==0)return this.wF(b)
s=(b===0&&a>-1?A.ahw(a):b)&1073741823
this.a=s
return new A.fv(B.CE,s)},
wF(a){var s=a&1073741823,r=this.a
if(r===0&&s!==0)return new A.fv(B.b5,r)
this.a=s
return new A.fv(s===0?B.b5:B.dv,s)},
wE(a){if(this.a!==0&&(a&1073741823)===0){this.a=0
return new A.fv(B.rC,0)}return null},
FT(a){if((a&1073741823)===0){this.a=0
return new A.fv(B.b5,0)}return null},
FU(a){var s
if(this.a===0)return null
s=this.a=(a==null?0:a)&1073741823
if(s===0)return new A.fv(B.rC,s)
else return new A.fv(B.dv,s)}}
A.Wd.prototype={
rp(a){return this.e.bj(a,new A.Wf())},
Ad(a){if(A.a__(a)==="touch")this.e.A(0,A.a2u(a))},
qT(a,b,c,d){this.QO(a,b,new A.We(this,d,c))},
qS(a,b,c){return this.qT(a,b,c,!0)},
Gb(){var s,r=this,q=r.a.b
r.qS(q.gc8().a,"pointerdown",new A.Wg(r))
s=q.c
r.qS(s.gqi(),"pointermove",new A.Wh(r))
r.qT(q.gc8().a,"pointerleave",new A.Wi(r),!1)
r.qS(s.gqi(),"pointerup",new A.Wj(r))
r.qT(q.gc8().a,"pointercancel",new A.Wk(r),!1)
r.b.push(A.a59("wheel",new A.Wl(r),!1,q.gc8().a))},
ih(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=A.a__(c)
i.toString
s=this.zY(i)
i=A.a2v(c)
i.toString
r=A.a2w(c)
r.toString
i=Math.abs(i)>Math.abs(r)?A.a2v(c):A.a2w(c)
i.toString
r=A.ep(c)
r.toString
q=A.rQ(r)
p=c.pressure
if(p==null)p=null
r=this.a
o=r.b
n=A.a6N(c,o)
m=this.jB(c)
l=$.bc()
k=l.d
if(k==null){k=self.window.devicePixelRatio
if(k===0)k=1}l=l.d
if(l==null){l=self.window.devicePixelRatio
if(l===0)l=1}j=p==null?0:p
r.d.RK(a,b.b,b.a,m,s,n.a*k,n.b*l,j,1,B.dy,i/180*3.141592653589793,q,o.a)},
Lt(a){var s,r
if("getCoalescedEvents" in a){s=a.getCoalescedEvents()
s=B.b.fS(s,t.e)
r=new A.cZ(s.a,s.$ti.h("cZ<1,a1>"))
if(!r.gL(r))return r}return A.a([a],t.J)},
zY(a){switch(a){case"mouse":return B.dx
case"pen":return B.rD
case"touch":return B.dw
default:return B.rE}},
jB(a){var s=A.a__(a)
s.toString
if(this.zY(s)===B.dx)s=-1
else{s=A.a2u(a)
s.toString
s=B.c.Y(s)}return s}}
A.Wf.prototype={
$0(){return new A.mB()},
$S:146}
A.We.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j="getModifierState"
if(this.b){s=this.a.a.e
if(s!=null){r=A.h(a,j,["Alt"])
q=A.h(a,j,["Control"])
p=A.h(a,j,["Meta"])
o=A.h(a,j,["Shift"])
n=A.ep(a)
n.toString
m=$.a8S()
l=$.a8T()
k=$.a1i()
s.oe(m,l,k,r?B.am:B.ab,n)
m=$.a1t()
l=$.a1u()
k=$.a1j()
s.oe(m,l,k,q?B.am:B.ab,n)
r=$.a8U()
m=$.a8V()
l=$.a1k()
s.oe(r,m,l,p?B.am:B.ab,n)
r=$.a8W()
q=$.a8X()
m=$.a1l()
s.oe(r,q,m,o?B.am:B.ab,n)}}this.c.$1(a)},
$S:1}
A.Wg.prototype={
$1(a){var s,r,q=this.a,p=q.jB(a),o=A.a([],t.sP),n=q.rp(p),m=A.oj(a)
m.toString
s=n.wE(B.c.Y(m))
if(s!=null)q.ih(o,s,a)
m=B.c.Y(a.button)
r=A.oj(a)
r.toString
q.ih(o,n.FS(m,B.c.Y(r)),a)
q.jw(a,o)},
$S:31}
A.Wh.prototype={
$1(a){var s,r,q,p,o=this.a,n=o.rp(o.jB(a)),m=A.a([],t.sP)
for(s=J.ao(o.Lt(a));s.p();){r=s.gB()
q=r.buttons
if(q==null)q=null
q.toString
p=n.wE(B.c.Y(q))
if(p!=null)o.ih(m,p,r)
q=r.buttons
if(q==null)q=null
q.toString
o.ih(m,n.wF(B.c.Y(q)),r)}o.jw(a,m)},
$S:31}
A.Wi.prototype={
$1(a){var s,r=this.a,q=r.rp(r.jB(a)),p=A.a([],t.sP),o=A.oj(a)
o.toString
s=q.FT(B.c.Y(o))
if(s!=null){r.ih(p,s,a)
r.jw(a,p)}},
$S:31}
A.Wj.prototype={
$1(a){var s,r,q,p=this.a,o=p.jB(a),n=p.e
if(n.T(o)){s=A.a([],t.sP)
n=n.k(0,o)
n.toString
r=A.oj(a)
q=n.FU(r==null?null:B.c.Y(r))
p.Ad(a)
if(q!=null){p.ih(s,q,a)
p.jw(a,s)}}},
$S:31}
A.Wk.prototype={
$1(a){var s,r=this.a,q=r.jB(a),p=r.e
if(p.T(q)){s=A.a([],t.sP)
p=p.k(0,q)
p.toString
p.a=0
r.Ad(a)
r.ih(s,new A.fv(B.rB,0),a)
r.jw(a,s)}},
$S:31}
A.Wl.prototype={
$1(a){var s=this.a
s.jw(a,s.KI(a))
a.preventDefault()},
$S:1}
A.n_.prototype={}
A.Va.prototype={
oZ(a,b,c){return this.a.bj(a,new A.Vb(b,c))}}
A.Vb.prototype={
$0(){return new A.n_(this.a,this.b)},
$S:151}
A.Pc.prototype={
ij(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9){var s,r,q=$.fE().a.k(0,c)
q.toString
s=q.b
r=q.c
q.b=i
q.c=j
q=q.a
if(q==null)q=0
return A.a3W(a,b,c,d,e,f,!1,h,i-s,j-r,i,j,k,q,l,m,n,o,p,a0,a1,a2,a3,a4,a5,a6,!1,a7,a8,a9)},
t1(a,b,c){var s=$.fE().a.k(0,a)
s.toString
return s.b!==b||s.c!==c},
hy(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,a0,a1,a2,a3,a4,a5,a6,a7,a8){var s,r,q=$.fE().a.k(0,c)
q.toString
s=q.b
r=q.c
q.b=i
q.c=j
q=q.a
if(q==null)q=0
return A.a3W(a,b,c,d,e,f,!1,h,i-s,j-r,i,j,k,q,l,m,n,o,p,a0,a1,a2,a3,a4,B.dy,a5,!0,a6,a7,a8)},
u7(a,b,c,d,e,f,g,h,i,j,k,l,m,n,a0,a1){var s,r,q,p,o=this
if(m===B.dy)switch(c.a){case 1:$.fE().oZ(d,f,g)
a.push(o.ij(b,c,d,0,0,e,!1,0,f,g,0,h,i,0,0,0,0,0,j,k,l,m,0,n,a0,a1))
break
case 3:s=$.fE()
r=s.a.T(d)
s.oZ(d,f,g)
if(!r)a.push(o.hy(b,B.fq,d,0,0,e,!1,0,f,g,0,h,i,0,0,0,0,0,j,k,l,0,n,a0,a1))
a.push(o.ij(b,c,d,0,0,e,!1,0,f,g,0,h,i,0,0,0,0,0,j,k,l,m,0,n,a0,a1))
s.b=b
break
case 4:s=$.fE()
r=s.a.T(d)
s.oZ(d,f,g).a=$.a5f=$.a5f+1
if(!r)a.push(o.hy(b,B.fq,d,0,0,e,!1,0,f,g,0,h,i,0,0,0,0,0,j,k,l,0,n,a0,a1))
if(o.t1(d,f,g))a.push(o.hy(0,B.b5,d,0,0,e,!1,0,f,g,0,0,i,0,0,0,0,0,j,k,l,0,n,a0,a1))
a.push(o.ij(b,c,d,0,0,e,!1,0,f,g,0,h,i,0,0,0,0,0,j,k,l,m,0,n,a0,a1))
s.b=b
break
case 5:a.push(o.ij(b,c,d,0,0,e,!1,0,f,g,0,h,i,0,0,0,0,0,j,k,l,m,0,n,a0,a1))
$.fE().b=b
break
case 6:case 0:s=$.fE()
q=s.a
p=q.k(0,d)
p.toString
if(c===B.rB){f=p.b
g=p.c}if(o.t1(d,f,g))a.push(o.hy(s.b,B.dv,d,0,0,e,!1,0,f,g,0,h,i,0,0,0,0,0,j,k,l,0,n,a0,a1))
a.push(o.ij(b,c,d,0,0,e,!1,0,f,g,0,h,i,0,0,0,0,0,j,k,l,m,0,n,a0,a1))
if(e===B.dw){a.push(o.hy(0,B.CD,d,0,0,e,!1,0,f,g,0,0,i,0,0,0,0,0,j,k,l,0,n,a0,a1))
q.A(0,d)}break
case 2:s=$.fE().a
q=s.k(0,d)
q.toString
a.push(o.ij(b,c,d,0,0,e,!1,0,q.b,q.c,0,h,i,0,0,0,0,0,j,k,l,m,0,n,a0,a1))
s.A(0,d)
break
case 7:case 8:case 9:break}else switch(m.a){case 1:case 2:case 3:s=$.fE()
r=s.a.T(d)
s.oZ(d,f,g)
if(!r)a.push(o.hy(b,B.fq,d,0,0,e,!1,0,f,g,0,h,i,0,0,0,0,0,j,k,l,0,n,a0,a1))
if(o.t1(d,f,g))if(b!==0)a.push(o.hy(b,B.dv,d,0,0,e,!1,0,f,g,0,h,i,0,0,0,0,0,j,k,l,0,n,a0,a1))
else a.push(o.hy(b,B.b5,d,0,0,e,!1,0,f,g,0,h,i,0,0,0,0,0,j,k,l,0,n,a0,a1))
a.push(o.ij(b,c,d,0,0,e,!1,0,f,g,0,h,i,0,0,0,0,0,j,k,l,m,0,n,a0,a1))
break
case 0:break
case 4:break}},
RJ(a,b,c,d,e,f,g,h,i,j,k,l,m){return this.u7(a,b,c,d,e,f,g,h,i,j,0,0,k,0,l,m)},
RL(a,b,c,d,e,f,g,h,i,j,k,l,m,n){return this.u7(a,b,c,d,e,f,g,h,i,1,j,k,l,0,m,n)},
RK(a,b,c,d,e,f,g,h,i,j,k,l,m){return this.u7(a,b,c,d,e,f,g,h,i,1,0,0,j,k,l,m)}}
A.a_F.prototype={}
A.Pz.prototype={
Jk(a){$.hG.push(new A.PA(this))},
m(){var s,r
for(s=this.a,r=A.i8(s,s.r);r.p();)s.k(0,r.d).b3()
s.F(0)
$.zm=null},
Dr(a){var s,r,q,p,o,n,m=this,l="getModifierState",k=globalThis.KeyboardEvent
if(!(k!=null&&a instanceof k))return
s=new A.fa(a)
r=A.jo(a)
r.toString
if(a.type==="keydown"&&A.f8(a)==="Tab"&&a.isComposing)return
q=A.f8(a)
q.toString
if(!(q==="Meta"||q==="Shift"||q==="Alt"||q==="Control")&&m.c){q=m.a
p=q.k(0,r)
if(p!=null)p.b3()
if(a.type==="keydown")p=a.ctrlKey||a.shiftKey||a.altKey||a.metaKey
else p=!1
if(p)q.l(0,r,A.bH(B.iq,new A.PC(m,r,s)))
else q.A(0,r)}o=A.h(a,l,["Shift"])?1:0
if(A.h(a,l,["Alt"])||A.h(a,l,["AltGraph"]))o|=2
if(A.h(a,l,["Control"]))o|=4
if(A.h(a,l,["Meta"]))o|=8
m.b=o
if(a.type==="keydown")if(A.f8(a)==="CapsLock"){r=o|32
m.b=r}else if(A.jo(a)==="NumLock"){r=o|16
m.b=r}else if(A.f8(a)==="ScrollLock"){r=o|64
m.b=r}else{if(A.f8(a)==="Meta"){r=$.bV()
r=r===B.fm}else r=!1
if(r){r=o|8
m.b=r}else r=o}else r=o
n=A.aC(["type",a.type,"keymap","web","code",A.jo(a),"key",A.f8(a),"location",B.c.Y(a.location),"metaState",r,"keyCode",B.c.Y(a.keyCode)],t.N,t.z)
$.a9().eX("flutter/keyevent",B.C.aM(n),new A.PD(s))}}
A.PA.prototype={
$0(){this.a.m()},
$S:0}
A.PC.prototype={
$0(){var s,r,q=this.a
q.a.A(0,this.b)
s=this.c.a
r=A.aC(["type","keyup","keymap","web","code",A.jo(s),"key",A.f8(s),"location",B.c.Y(s.location),"metaState",q.b,"keyCode",B.c.Y(s.keyCode)],t.N,t.z)
$.a9().eX("flutter/keyevent",B.C.aM(r),A.agg())},
$S:0}
A.PD.prototype={
$1(a){var s
if(a==null)return
if(A.kS(t.a.a(B.C.dn(a)).k(0,"handled"))){s=this.a.a
s.preventDefault()
s.stopPropagation()}},
$S:11}
A.xw.prototype={}
A.xv.prototype={
CR(a,b,c){var s=this.dy,r=this.fr,q=this.fx
A.h(a,"drawImage",[s,0,0,r,q,b,c,r,q])},
Cb(a,b){var s,r=this.a,q=r.createShader(r[a])
if(q==null)throw A.e(A.bL(A.afW(r,"getError")))
A.h(r,"shaderSource",[q,b])
A.h(r,"compileShader",[q])
s=this.c
if(!A.h(r,"getShaderParameter",[q,s==null?this.c=r.COMPILE_STATUS:s]))throw A.e(A.bL("Shader compilation failed: "+A.f(A.h(r,"getShaderInfoLog",[q]))))
return q},
gky(){var s=this.d
return s==null?this.d=this.a.ARRAY_BUFFER:s},
gpp(){var s=this.e
return s==null?this.e=this.a.ELEMENT_ARRAY_BUFFER:s},
gv3(){var s=this.f
return s==null?this.f=this.a.STATIC_DRAW:s},
jb(a,b){var s=A.h(this.a,"getUniformLocation",[a,b])
if(s==null)throw A.e(A.bL(b+" not found"))
else return s},
VU(a){var s,r,q=this
if("transferToImageBitmap" in q.dy&&a){q.dy.getContext("webgl2")
return q.dy.transferToImageBitmap()}else{s=q.fr
r=A.kY(q.fx,s)
s=A.eo(r,"2d",null)
s.toString
q.CR(t.e.a(s),0,0)
return r}}}
A.OA.prototype={
Ba(a){var s,r,q,p,o=this.c
$.bc()
s=self.window.devicePixelRatio
if(s===0)s=1
r=this.d
q=self.window.devicePixelRatio
if(q===0)q=1
p=a.style
A.m(p,"position","absolute")
A.m(p,"width",A.f(o/s)+"px")
A.m(p,"height",A.f(r/q)+"px")}}
A.nF.prototype={
D(){return"Assertiveness."+this.b}}
A.HJ.prototype={
QZ(a){switch(a.a){case 0:return this.a
case 1:return this.b}},
BR(a,b){var s=this.QZ(b),r=A.aA(self.document,"div")
A.a2r(r,a)
s.append(r)
A.bH(B.bk,new A.HK(r))}}
A.HK.prototype={
$0(){return this.a.remove()},
$S:0}
A.rU.prototype={
D(){return"_CheckableKind."+this.b}}
A.IM.prototype={
cl(){var s,r,q,p=this,o="setAttribute",n="true",m="removeAttribute"
p.fJ()
s=p.c
if((s.k2&1)!==0){switch(p.r.a){case 0:r=p.a
r===$&&A.c()
q=A.T("checkbox")
A.h(r,o,["role",q==null?t.K.a(q):q])
break
case 1:r=p.a
r===$&&A.c()
q=A.T("radio")
A.h(r,o,["role",q==null?t.K.a(q):q])
break
case 2:r=p.a
r===$&&A.c()
q=A.T("switch")
A.h(r,o,["role",q==null?t.K.a(q):q])
break}r=s.uA()
q=p.a
if(r===B.cM){q===$&&A.c()
r=A.T(n)
A.h(q,o,["aria-disabled",r==null?t.K.a(r):r])
r=A.T(n)
A.h(q,o,["disabled",r==null?t.K.a(r):r])}else{q===$&&A.c()
A.h(q,m,["aria-disabled"])
A.h(q,m,["disabled"])}s=s.a
s=(s&2)!==0||(s&131072)!==0?n:"false"
r=p.a
r===$&&A.c()
s=A.T(s)
A.h(r,o,["aria-checked",s==null?t.K.a(s):s])}},
m(){var s,r="removeAttribute"
this.l1()
s=this.a
s===$&&A.c()
A.h(s,r,["aria-disabled"])
A.h(s,r,["disabled"])},
fn(){var s=this.e
if(s==null)s=null
else{s=s.c.a
s===$&&A.c()
s.focus()
s=!0}return s===!0}}
A.wM.prototype={
Je(a){var s=this,r=s.c,q=A.a_8(r,s)
s.e=q
s.dj(q)
s.dj(new A.jS(B.dF,r,s))
a.k1.r.push(new A.JE(s,a))},
PG(){this.c.tI(new A.JD())},
cl(){var s,r,q,p="setAttribute"
this.fJ()
s=this.c
if((s.a&4096)!==0){r=s.z
s=r==null?"":r
q=this.a
q===$&&A.c()
s=A.T(s)
A.h(q,p,["aria-label",s==null?t.K.a(s):s])
s=A.T("dialog")
A.h(q,p,["role",s==null?t.K.a(s):s])}},
CF(a){var s,r,q="setAttribute"
if((this.c.a&4096)!==0)return
s=this.a
s===$&&A.c()
r=A.T("dialog")
A.h(s,q,["role",r==null?t.K.a(r):r])
r=a.b.p1.a
r===$&&A.c()
r=A.T(r.id)
A.h(s,q,["aria-describedby",r==null?t.K.a(r):r])},
fn(){return!1}}
A.JE.prototype={
$0(){if(this.b.k1.w)return
this.a.PG()},
$S:0}
A.JD.prototype={
$1(a){var s=a.p1
if(s==null)return!0
return!s.fn()},
$S:66}
A.m0.prototype={
cl(){var s,r=this,q=r.b
if((q.a&4096)===0)return
if((q.k2&1024)!==0){s=r.e
if(s!=null)s.CF(r)
else q.k1.r.push(new A.Ql(r))}},
NQ(){var s,r,q=this.b.k4
while(!0){s=q!=null
if(s){r=q.p1
r=(r==null?null:r.b)!==B.dz}else r=!1
if(!r)break
q=q.k4}if(s){s=q.p1
s=(s==null?null:s.b)===B.dz}else s=!1
if(s){s=q.p1
s.toString
this.e=t.cn.a(s)}}}
A.Ql.prototype={
$0(){var s,r=this.a
r.NQ()
s=r.e
if(s!=null)s.CF(r)},
$S:0}
A.xm.prototype={
cl(){var s,r,q=this,p=q.b
if((p.a&2097152)!==0){s=q.e
if(s.b==null){r=q.c.a
r===$&&A.c()
s.DX(p.id,r)}p=p.a
if((p&32)!==0)p=(p&64)===0||(p&128)!==0
else p=!1
s.C7(p)}else q.e.qy()}}
A.vq.prototype={
DX(a,b){var s,r,q=this,p=q.b,o=p==null
if(b===(o?null:p.a[2])){o=p.a
if(a===o[3])return
s=o[2]
r=o[1]
q.b=new A.tU([o[0],r,s,a])
return}if(!o)q.qy()
o=t.g
s=o.a(A.aU(new A.HM(q)))
s=[o.a(A.aU(new A.HN(q))),s,b,a]
q.b=new A.tU(s)
A.a2f(b,0)
A.bo(b,"focus",s[1],null)
A.bo(b,"blur",s[0],null)},
qy(){var s,r=this.b
this.c=this.b=null
if(r==null)return
s=r.a
A.dW(s[2],"focus",s[1],null)
A.dW(s[2],"blur",s[0],null)},
Au(a){var s,r,q=this.b
if(q==null)return
s=$.a9()
r=q.a[3]
s.en(r,a?B.fC:B.fD,null)},
C7(a){var s,r=this,q=r.b
if(q==null){r.c=null
return}if(a===r.c)return
r.c=a
if(a){s=r.a
s.w=!0}else return
s.r.push(new A.HL(r,q))}}
A.HM.prototype={
$1(a){return this.a.Au(!0)},
$S:1}
A.HN.prototype={
$1(a){return this.a.Au(!1)},
$S:1}
A.HL.prototype={
$0(){var s=this.b
if(!J.d(this.a.b,s))return
s.a[2].focus()},
$S:0}
A.MN.prototype={
fn(){var s=this.e
if(s==null)s=null
else{s=s.c.a
s===$&&A.c()
s.focus()
s=!0}return s===!0},
cl(){var s,r,q,p=this,o="setAttribute"
p.fJ()
s=p.c
if(s.gv1()){r=s.dy
r=r!=null&&!B.bq.gL(r)}else r=!1
if(r){if(p.r==null){p.r=A.aA(self.document,"flt-semantics-img")
r=s.dy
if(r!=null&&!B.bq.gL(r)){r=p.r.style
A.m(r,"position","absolute")
A.m(r,"top","0")
A.m(r,"left","0")
q=s.y
A.m(r,"width",A.f(q.c-q.a)+"px")
s=s.y
A.m(r,"height",A.f(s.d-s.b)+"px")}A.m(p.r.style,"font-size","6px")
s=p.r
s.toString
r=p.a
r===$&&A.c()
r.append(s)}s=p.r
s.toString
r=A.T("img")
A.h(s,o,["role",r==null?t.K.a(r):r])
p.Aw(p.r)}else if(s.gv1()){s=p.a
s===$&&A.c()
r=A.T("img")
A.h(s,o,["role",r==null?t.K.a(r):r])
p.Aw(s)
p.r2()}else{p.r2()
s=p.a
s===$&&A.c()
A.h(s,"removeAttribute",["aria-label"])}},
Aw(a){var s=this.c.z
if(s!=null&&s.length!==0){a.toString
s.toString
s=A.T(s)
A.h(a,"setAttribute",["aria-label",s==null?t.K.a(s):s])}},
r2(){var s=this.r
if(s!=null){s.remove()
this.r=null}},
m(){this.l1()
this.r2()
var s=this.a
s===$&&A.c()
A.h(s,"removeAttribute",["aria-label"])}}
A.MR.prototype={
Jh(a){var s,r,q=this,p=q.c
q.dj(new A.jS(B.dF,p,q))
q.dj(new A.m0(B.fy,p,q))
q.dj(new A.pl(B.rL,p,q))
p=q.r
s=q.a
s===$&&A.c()
s.append(p)
A.K0(p,"range")
s=A.T("slider")
A.h(p,"setAttribute",["role",s==null?t.K.a(s):s])
A.bo(p,"change",t.g.a(A.aU(new A.MS(q,a))),null)
s=new A.MT(q)
q.y!==$&&A.ck()
q.y=s
r=$.aY;(r==null?$.aY=A.cp():r).r.push(s)
q.w.DX(a.id,p)},
fn(){this.r.focus()
return!0},
cl(){var s,r=this
r.fJ()
s=$.aY
switch((s==null?$.aY=A.cp():s).e.a){case 1:r.Li()
r.Qi()
break
case 0:r.yD()
break}r.w.C7((r.c.a&32)!==0)},
Li(){var s=this.r,r=A.ZX(s)
r.toString
if(!r)return
A.a2i(s,!1)},
Qi(){var s,r,q,p,o,n,m,l=this,k="setAttribute"
if(!l.z){s=l.c.k2
r=(s&4096)!==0||(s&8192)!==0||(s&16384)!==0}else r=!0
if(!r)return
l.z=!1
q=""+l.x
s=l.r
A.a2j(s,q)
p=A.T(q)
A.h(s,k,["aria-valuenow",p==null?t.K.a(p):p])
p=l.c
o=p.ax
o.toString
o=A.T(o)
A.h(s,k,["aria-valuetext",o==null?t.K.a(o):o])
n=p.ch.length!==0?""+(l.x+1):q
s.max=n
o=A.T(n)
A.h(s,k,["aria-valuemax",o==null?t.K.a(o):o])
m=p.cx.length!==0?""+(l.x-1):q
s.min=m
p=A.T(m)
A.h(s,k,["aria-valuemin",p==null?t.K.a(p):p])},
yD(){var s=this.r,r=A.ZX(s)
r.toString
if(r)return
A.a2i(s,!0)},
m(){var s,r,q=this
q.l1()
q.w.qy()
s=$.aY
if(s==null)s=$.aY=A.cp()
r=q.y
r===$&&A.c()
B.b.A(s.r,r)
q.yD()
q.r.remove()}}
A.MS.prototype={
$1(a){var s,r=this.a,q=r.r,p=A.ZX(q)
p.toString
if(p)return
r.z=!0
q=A.ZY(q)
q.toString
s=A.fB(q,null)
q=r.x
if(s>q){r.x=q+1
$.a9().en(this.b.id,B.rV,null)}else if(s<q){r.x=q-1
$.a9().en(this.b.id,B.rR,null)}},
$S:1}
A.MT.prototype={
$1(a){this.a.cl()},
$S:67}
A.pl.prototype={
cl(){var s,r=this.b,q=r.ax,p=q!=null&&q.length!==0,o=r.z,n=o!=null&&o.length!==0,m=r.fy,l=m!=null&&m.length!==0
if(p){r=r.b
r.toString
s=!((r&64)!==0||(r&128)!==0)}else s=!1
r=!n
if(r&&!s&&!l){r=this.c.a
r===$&&A.c()
A.h(r,"removeAttribute",["aria-label"])
return}if(l){m=""+A.f(m)
r=!r||s?m+"\n":m}else r=""
if(n){r+=A.f(o)
if(s)r+=" "}if(s)r+=A.f(q)
q=this.c.a
q===$&&A.c()
r=A.T(r.charCodeAt(0)==0?r:r)
A.h(q,"setAttribute",["aria-label",r==null?t.K.a(r):r])}}
A.NA.prototype={
aR(){var s=A.aA(self.document,"a"),r=A.T("#")
A.h(s,"setAttribute",["href",r==null?t.K.a(r):r])
A.m(s.style,"display","block")
return s},
fn(){var s=this.e
if(s==null)s=null
else{s=s.c.a
s===$&&A.c()
s.focus()
s=!0}return s===!0}}
A.jS.prototype={
cl(){var s=this,r=s.b,q=r.a
if(!((q&32768)!==0&&(q&8192)===0))return
q=s.e
r=r.z
if(q!=r){s.e=r
if(r!=null&&r.length!==0){r=t.W.a($.a9().gbF().b.k(0,0)).gBF()
q=s.e
q.toString
r.BR(q,B.e9)}}}}
A.Pa.prototype={
cl(){var s,r,q=this
q.fJ()
s=q.c
r=s.go
if(r!==-1){if((s.k2&8388608)!==0){s=q.a
s===$&&A.c()
r=A.T("flt-pv-"+r)
A.h(s,"setAttribute",["aria-owns",r==null?t.K.a(r):r])}}else{s=q.a
s===$&&A.c()
A.h(s,"removeAttribute",["aria-owns"])}},
fn(){return!1}}
A.QN.prototype={
P4(){var s,r,q,p,o=this,n=null
if(o.gyH()!==o.y){s=$.aY
if(!(s==null?$.aY=A.cp():s).Ge("scroll"))return
s=o.gyH()
r=o.y
o.zK()
q=o.c
q.vS()
p=q.id
if(s>r){s=q.b
s.toString
if((s&32)!==0||(s&16)!==0)$.a9().en(p,B.rS,n)
else $.a9().en(p,B.rU,n)}else{s=q.b
s.toString
if((s&32)!==0||(s&16)!==0)$.a9().en(p,B.rT,n)
else $.a9().en(p,B.rW,n)}}},
cl(){var s,r,q,p=this
p.fJ()
p.c.k1.r.push(new A.QP(p))
if(p.x==null){s=p.a
s===$&&A.c()
A.m(s.style,"touch-action","none")
p.yY()
r=new A.QQ(p)
p.r=r
q=$.aY;(q==null?$.aY=A.cp():q).r.push(r)
r=t.g.a(A.aU(new A.QR(p)))
p.x=r
A.bo(s,"scroll",r,null)}},
gyH(){var s,r=this.c.b
r.toString
r=(r&32)!==0||(r&16)!==0
s=this.a
if(r){s===$&&A.c()
return B.c.Y(s.scrollTop)}else{s===$&&A.c()
return B.c.Y(s.scrollLeft)}},
zK(){var s,r,q,p,o=this,n="transform",m=o.c,l=m.y
if(l==null){$.cm().$1("Warning! the rect attribute of semanticsObject is null")
return}s=m.b
s.toString
s=(s&32)!==0||(s&16)!==0
r=o.w
q=l.d-l.b
p=l.c-l.a
if(s){s=B.c.c_(q)
r=r.style
A.m(r,n,"translate(0px,"+(s+10)+"px)")
A.m(r,"width",""+B.c.bx(p)+"px")
A.m(r,"height","10px")
r=o.a
r===$&&A.c()
r.scrollTop=10
m.p2=o.y=B.c.Y(r.scrollTop)
m.p3=0}else{s=B.c.c_(p)
r=r.style
A.m(r,n,"translate("+(s+10)+"px,0px)")
A.m(r,"width","10px")
A.m(r,"height",""+B.c.bx(q)+"px")
q=o.a
q===$&&A.c()
q.scrollLeft=10
q=B.c.Y(q.scrollLeft)
o.y=q
m.p2=0
m.p3=q}},
yY(){var s,r=this,q="overflow-y",p="overflow-x",o=$.aY
switch((o==null?$.aY=A.cp():o).e.a){case 1:o=r.c.b
o.toString
o=(o&32)!==0||(o&16)!==0
s=r.a
if(o){s===$&&A.c()
A.m(s.style,q,"scroll")}else{s===$&&A.c()
A.m(s.style,p,"scroll")}break
case 0:o=r.c.b
o.toString
o=(o&32)!==0||(o&16)!==0
s=r.a
if(o){s===$&&A.c()
A.m(s.style,q,"hidden")}else{s===$&&A.c()
A.m(s.style,p,"hidden")}break}},
m(){var s,r,q,p=this,o="removeProperty"
p.l1()
s=p.a
s===$&&A.c()
r=s.style
A.h(r,o,["overflowY"])
A.h(r,o,["overflowX"])
A.h(r,o,["touch-action"])
q=p.x
if(q!=null){A.dW(s,"scroll",q,null)
p.x=null}s=p.r
if(s!=null){q=$.aY
B.b.A((q==null?$.aY=A.cp():q).r,s)
p.r=null}},
fn(){var s=this.e
if(s==null)s=null
else{s=s.c.a
s===$&&A.c()
s.focus()
s=!0}return s===!0}}
A.QP.prototype={
$0(){var s=this.a
s.zK()
s.c.vS()},
$S:0}
A.QQ.prototype={
$1(a){this.a.yY()},
$S:67}
A.QR.prototype={
$1(a){this.a.P4()},
$S:1}
A.oy.prototype={
j(a){var s=A.a([],t.s),r=this.a
if((r&1)!==0)s.push("accessibleNavigation")
if((r&2)!==0)s.push("invertColors")
if((r&4)!==0)s.push("disableAnimations")
if((r&8)!==0)s.push("boldText")
if((r&16)!==0)s.push("reduceMotion")
if((r&32)!==0)s.push("highContrast")
if((r&64)!==0)s.push("onOffSwitchLabels")
return"AccessibilityFeatures"+A.f(s)},
i(a,b){if(b==null)return!1
if(J.I(b)!==A.u(this))return!1
return b instanceof A.oy&&b.a===this.a},
gq(a){return B.f.gq(this.a)},
Cm(a,b){var s=(a==null?(this.a&1)!==0:a)?1:0,r=this.a
s=(r&2)!==0?s|2:s&4294967293
s=(r&4)!==0?s|4:s&4294967291
s=(r&8)!==0?s|8:s&4294967287
s=(r&16)!==0?s|16:s&4294967279
s=(b==null?(r&32)!==0:b)?s|32:s&4294967263
return new A.oy((r&64)!==0?s|64:s&4294967231)},
RO(a){return this.Cm(null,a)},
RN(a){return this.Cm(a,null)}}
A.Ai.prototype={$ia_M:1}
A.Ag.prototype={}
A.e7.prototype={
D(){return"PrimaryRole."+this.b}}
A.kk.prototype={
D(){return"Role."+this.b}}
A.ze.prototype={
jt(a,b){var s=this,r=s.c,q=A.zf(s.aR(),r)
s.a!==$&&A.ck()
s.a=q
q=A.a_8(r,s)
s.e=q
s.dj(q)
s.dj(new A.jS(B.dF,r,s))
s.dj(new A.m0(B.fy,r,s))
s.dj(new A.pl(B.rL,r,s))
s.dj(A.a4I(r,s))},
aR(){return A.aA(self.document,"flt-semantics")},
dj(a){var s=this.d;(s==null?this.d=A.a([],t.EM):s).push(a)},
cl(){var s,r,q=this.d
if(q==null)return
for(s=q.length,r=0;r<q.length;q.length===s||(0,A.C)(q),++r)q[r].cl()},
m(){var s=this.a
s===$&&A.c()
A.h(s,"removeAttribute",["role"])}}
A.LU.prototype={
cl(){var s,r,q=this,p="setAttribute"
q.fJ()
s=q.c
r=s.z
if(!(r!=null&&r.length!==0))return
r=s.dy
if(r!=null&&!B.bq.gL(r)){s=q.a
s===$&&A.c()
r=A.T("group")
A.h(s,p,["role",r==null?t.K.a(r):r])}else{s=s.a
r=q.a
if((s&512)!==0){r===$&&A.c()
s=A.T("heading")
A.h(r,p,["role",s==null?t.K.a(s):s])}else{r===$&&A.c()
s=A.T("text")
A.h(r,p,["role",s==null?t.K.a(s):s])}}},
fn(){var s,r,q=this.c
if((q.a&2097152)!==0){s=this.e
if(s!=null){q=s.c.a
q===$&&A.c()
q.focus()
return!0}}r=q.dy
if(!(r!=null&&!B.bq.gL(r))){q=q.z
q=!(q!=null&&q.length!==0)}else q=!0
if(q)return!1
q=this.a
q===$&&A.c()
A.a2f(q,-1)
q.focus()
return!0}}
A.hf.prototype={}
A.kp.prototype={
wx(){var s,r,q=this
if(q.k3==null){s=A.aA(self.document,"flt-semantics-container")
q.k3=s
s=s.style
A.m(s,"position","absolute")
A.m(s,"pointer-events","none")
s=q.p1.a
s===$&&A.c()
r=q.k3
r.toString
s.append(r)}return q.k3},
gv1(){var s,r=this.a
if((r&16384)!==0){s=this.b
s.toString
r=(s&1)===0&&(r&8)===0}else r=!1
return r},
uA(){var s=this.a
if((s&64)!==0)if((s&128)!==0)return B.xo
else return B.cM
else return B.xn},
WD(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=this,a3=a2.fr
if(a3==null||a3.length===0){s=a2.ok
if(s==null||s.length===0){a2.ok=null
return}r=s.length
for(s=a2.k1,q=s.d,p=0;p<r;++p){o=q.k(0,a2.ok[p].id)
if(o!=null)s.f.push(o)}a2.k3.remove()
a2.ok=a2.k3=null
return}s=a2.dy
s.toString
n=a3.length
m=a2.wx()
l=A.a([],t.b3)
for(q=a2.k1,k=q.d,p=0;p<n;++p){j=k.k(0,s[p])
j.toString
l.push(j)}if(n>1)for(p=0;p<n;++p){s=k.k(0,a3[p]).p1.a
s===$&&A.c()
s=s.style
s.setProperty.apply(s,["z-index",""+(n-p),""])}i=a2.ok
if(i==null||i.length===0){for(s=l.length,h=0;h<l.length;l.length===s||(0,A.C)(l),++h){g=l[h]
m.toString
k=g.p1.a
k===$&&A.c()
m.append(k)
g.k4=a2
q.e.l(0,g.id,a2)}a2.ok=l
return}f=i.length
s=t.t
e=A.a([],s)
d=Math.min(f,n)
c=0
while(!0){if(!(c<d&&i[c]===l[c]))break
e.push(c);++c}if(f===l.length&&c===n)return
for(;c<n;){for(b=0;b<f;++b)if(i[b]===l[c]){e.push(b)
break}++c}a=A.a7b(e)
a0=A.a([],s)
for(s=a.length,p=0;p<s;++p)a0.push(i[e[a[p]]].id)
for(p=0;p<f;++p)if(!B.b.t(e,p)){o=k.k(0,i[p].id)
if(o!=null)q.f.push(o)}for(p=n-1,a1=null;p>=0;--p,a1=s){g=l[p]
s=g.id
if(!B.b.t(a0,s)){k=g.p1
if(a1==null){m.toString
k=k.a
k===$&&A.c()
m.append(k)}else{m.toString
k=k.a
k===$&&A.c()
m.insertBefore(k,a1)}g.k4=a2
q.e.l(0,s,a2)}s=g.p1.a
s===$&&A.c()}a2.ok=l},
LZ(){var s,r,q=this
if(q.go!==-1)return B.fu
else if((q.a&16)!==0)return B.rG
else{s=q.b
s.toString
if((s&64)!==0||(s&128)!==0)return B.rF
else if(q.gv1())return B.rH
else{s=q.a
if((s&1)!==0||(s&65536)!==0)return B.ft
else if((s&8)!==0)return B.fs
else{r=q.b
r.toString
if((r&32)!==0||(r&16)!==0||(r&4)!==0||(r&8)!==0)return B.fr
else if((s&2048)!==0)return B.dz
else if((s&4194304)!==0)return B.fw
else return B.fv}}}},
KQ(a){var s,r,q,p=this
switch(a.a){case 3:s=new A.Sb(B.rG,p)
r=A.zf(s.aR(),p)
s.a!==$&&A.ck()
s.a=r
s.PK()
break
case 1:s=A.aA(self.document,"flt-semantics-scroll-overflow")
r=new A.QN(s,B.fr,p)
r.jt(B.fr,p)
q=s.style
A.m(q,"position","absolute")
A.m(q,"transform-origin","0 0 0")
A.m(q,"pointer-events","none")
q=r.a
q===$&&A.c()
q.append(s)
s=r
break
case 0:s=A.abW(p)
break
case 2:s=new A.Iv(B.fs,p)
s.jt(B.fs,p)
r=s.a
r===$&&A.c()
q=A.T("button")
A.h(r,"setAttribute",["role",q==null?t.K.a(q):q])
break
case 4:s=new A.IM(A.ag_(p),B.ft,p)
s.jt(B.ft,p)
break
case 6:s=A.aaI(p)
break
case 5:s=new A.MN(B.rH,p)
r=A.zf(s.aR(),p)
s.a!==$&&A.ck()
s.a=r
r=A.a_8(p,s)
s.e=r
s.dj(r)
s.dj(new A.jS(B.dF,p,s))
s.dj(new A.m0(B.fy,p,s))
s.dj(A.a4I(p,s))
break
case 7:s=new A.Pa(B.fu,p)
s.jt(B.fu,p)
break
case 9:s=new A.NA(B.fw,p)
s.jt(B.fw,p)
break
case 8:s=new A.LU(B.fv,p)
s.jt(B.fv,p)
break
default:s=null}return s},
Qp(){var s,r,q,p=this,o=p.p1,n=p.LZ(),m=p.p1
if(m==null)s=null
else{m=m.a
m===$&&A.c()
s=m}if(o!=null)if(o.b===n){o.cl()
return}else{o.m()
o=p.p1=null}if(o==null){o=p.KQ(n)
p.p1=o
o.cl()}m=p.p1.a
m===$&&A.c()
if(s!==m){r=p.k3
if(r!=null)m.append(r)
q=s==null?null:s.parentElement
if(q!=null){m=p.p1.a
m===$&&A.c()
q.insertBefore(m,s)
s.remove()}}},
vS(){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.p1.a
f===$&&A.c()
f=f.style
s=g.y
A.m(f,"width",A.f(s.c-s.a)+"px")
s=g.y
A.m(f,"height",A.f(s.d-s.b)+"px")
f=g.dy
r=f!=null&&!B.bq.gL(f)?g.wx():null
f=g.y
q=f.b===0&&f.a===0
p=g.dx
f=p==null
o=f||A.Zd(p)===B.tB
if(q&&o&&g.p2===0&&g.p3===0){f=g.p1.a
f===$&&A.c()
A.Rb(f)
if(r!=null)A.Rb(r)
return}n=A.bv("effectiveTransform")
if(!q)if(f){f=g.y
m=f.a
l=f.b
f=A.cv()
f.jd(m,l,0)
n.b=f
k=m===0&&l===0}else{f=new A.b5(new Float32Array(16))
f.aD(new A.b5(p))
s=g.y
f.ai(s.a,s.b)
n.b=f
k=n.aX().mv()}else if(!o){n.b=new A.b5(p)
k=!1}else k=!0
f=g.p1
if(!k){f=f.a
f===$&&A.c()
f=f.style
A.m(f,"transform-origin","0 0 0")
A.m(f,"transform",A.fA(n.aX().a))}else{f=f.a
f===$&&A.c()
A.Rb(f)}if(r!=null)if(!q||g.p2!==0||g.p3!==0){f=g.y
s=f.a
j=g.p3
f=f.b
i=g.p2
h=r.style
A.m(h,"top",A.f(-f+i)+"px")
A.m(h,"left",A.f(-s+j)+"px")}else A.Rb(r)},
tI(a){var s,r,q,p
if(!a.$1(this))return!1
s=this.dy
if(s==null)return!0
for(r=s.length,q=this.k1.d,p=0;p<r;++p)if(!q.k(0,s[p]).tI(a))return!1
return!0},
j(a){return this.bf(0)}}
A.HO.prototype={
D(){return"AccessibilityMode."+this.b}}
A.jC.prototype={
D(){return"GestureMode."+this.b}}
A.r_.prototype={
D(){return"SemanticsUpdatePhase."+this.b}}
A.KP.prototype={
sqm(a){var s,r,q
if(this.a)return
s=$.a9()
r=s.a
s.a=r.Ci(r.a.RN(!0))
this.a=!0
s=$.a9()
r=this.a
q=s.a
if(r!==q.c){s.a=q.RR(r)
r=s.p2
if(r!=null)A.hK(r,s.p3)}},
Sm(){if(!this.a){this.c.a.m()
this.sqm(!0)}},
LU(){var s=this,r=s.f
if(r==null){r=s.f=new A.vr(s.b)
r.d=new A.KT(s)}return r},
Ey(a){var s,r,q=this
if(B.b.t(B.yy,a.type)){s=q.LU()
s.toString
r=q.b.$0()
s.sS5(A.aaz(r.a+500,r.b))
if(q.e!==B.ix){q.e=B.ix
q.zM()}}return q.c.a.Gf(a)},
zM(){var s,r
for(s=this.r,r=0;r<s.length;++r)s[r].$1(this.e)},
Ge(a){if(B.b.t(B.yX,a))return this.e===B.bl
return!1}}
A.KU.prototype={
$0(){return new A.hV(Date.now(),!1)},
$S:160}
A.KT.prototype={
$0(){var s=this.a
if(s.e===B.bl)return
s.e=B.bl
s.zM()},
$S:0}
A.KQ.prototype={
Jg(a){$.hG.push(new A.KS(this))},
yS(){var s,r,q,p,o,n,m,l=this,k=t.n_,j=A.aw(k)
for(r=l.f,q=r.length,p=0;p<r.length;r.length===q||(0,A.C)(r),++p)r[p].tI(new A.KR(l,j))
for(r=A.cI(j,j.r,j.$ti.c),q=l.d,o=r.$ti.c;r.p();){n=r.d
if(n==null)n=o.a(n)
q.A(0,n.id)
n.p4=!0
m=n.p1.a
m===$&&A.c()
m.remove()
n.k4=null
m=n.p1
if(m!=null)m.m()
n.p1=null}l.f=A.a([],t.b3)
l.e=A.y(t.S,k)
l.c=B.DC
try{k=l.r
r=k.length
if(r!==0){for(p=0;p<k.length;k.length===r||(0,A.C)(k),++p){s=k[p]
s.$0()}l.r=A.a([],t.b)}}finally{l.c=B.fF}l.w=!1},
WF(a){var s,r,q,p,o,n,m,l=this,k=$.aY;(k==null?$.aY=A.cp():k).Sm()
k=$.aY
if(!(k==null?$.aY=A.cp():k).a)return
l.c=B.DB
s=a.a
for(k=s.length,r=l.d,q=0;p=s.length,q<p;s.length===k||(0,A.C)(s),++q){o=s[q]
p=o.a
n=r.k(0,p)
if(n==null){n=new A.kp(p,l)
r.l(0,p,n)}p=o.b
if(n.a!==p){n.a=p
n.k2=(n.k2|1)>>>0}p=o.cy
if(n.ax!==p){n.ax=p
n.k2=(n.k2|4096)>>>0}p=o.db
if(n.ay!==p){n.ay=p
n.k2=(n.k2|4096)>>>0}p=o.ay
if(n.z!==p){n.z=p
n.k2=(n.k2|1024)>>>0}p=o.ch
if(n.Q!==p){n.Q=p
n.k2=(n.k2|1024)>>>0}p=o.at
if(!J.d(n.y,p)){n.y=p
n.k2=(n.k2|512)>>>0}p=o.id
if(n.dx!==p){n.dx=p
n.k2=(n.k2|65536)>>>0}p=o.z
if(n.r!==p){n.r=p
n.k2=(n.k2|64)>>>0}p=o.c
if(n.b!==p){n.b=p
n.k2=(n.k2|2)>>>0}p=o.f
if(n.c!==p){n.c=p
n.k2=(n.k2|4)>>>0}p=o.r
if(n.d!==p){n.d=p
n.k2=(n.k2|8)>>>0}p=o.x
if(n.e!==p){n.e=p
n.k2=(n.k2|16)>>>0}p=o.y
if(n.f!==p){n.f=p
n.k2=(n.k2|32)>>>0}p=o.Q
if(n.w!==p){n.w=p
n.k2=(n.k2|128)>>>0}p=o.as
if(n.x!==p){n.x=p
n.k2=(n.k2|256)>>>0}p=o.CW
if(n.as!==p){n.as=p
n.k2=(n.k2|2048)>>>0}p=o.cx
if(n.at!==p){n.at=p
n.k2=(n.k2|2048)>>>0}p=o.dx
if(n.ch!==p){n.ch=p
n.k2=(n.k2|8192)>>>0}p=o.dy
if(n.CW!==p){n.CW=p
n.k2=(n.k2|8192)>>>0}p=o.fr
if(n.cx!==p){n.cx=p
n.k2=(n.k2|16384)>>>0}p=o.fx
if(n.cy!==p){n.cy=p
n.k2=(n.k2|16384)>>>0}p=o.fy
if(n.fy!==p){n.fy=p
n.k2=(n.k2|4194304)>>>0}p=o.go
if(n.db!=p){n.db=p
n.k2=(n.k2|32768)>>>0}p=o.k2
if(n.fr!==p){n.fr=p
n.k2=(n.k2|1048576)>>>0}p=o.k1
if(n.dy!==p){n.dy=p
n.k2=(n.k2|524288)>>>0}p=o.k3
if(n.fx!==p){n.fx=p
n.k2=(n.k2|2097152)>>>0}p=o.w
if(n.go!==p){n.go=p
n.k2=(n.k2|8388608)>>>0}n.Qp()
p=n.k2
if((p&512)!==0||(p&65536)!==0||(p&64)!==0)n.vS()
p=n.dy
p=!(p!=null&&!B.bq.gL(p))&&n.go===-1
m=n.p1
if(p){p=m.a
p===$&&A.c()
p=p.style
p.setProperty.apply(p,["pointer-events","all",""])}else{p=m.a
p===$&&A.c()
p=p.style
p.setProperty.apply(p,["pointer-events","none",""])}}for(q=0;q<s.length;s.length===p||(0,A.C)(s),++q){n=r.k(0,s[q].a)
n.WD()
n.k2=0}k=r.k(0,0)
k.toString
if(l.b==null){k=k.p1.a
k===$&&A.c()
l.b=k
l.a.append(k)}l.yS()},
dv(){var s,r,q=this,p=q.d,o=A.q(p).h("aB<1>"),n=A.a0(new A.aB(p,o),!0,o.h("v.E")),m=n.length
for(s=0;s<m;++s){r=p.k(0,n[s])
if(r!=null)q.f.push(r)}q.yS()
o=q.b
if(o!=null)o.remove()
q.b=null
p.F(0)
q.e.F(0)
B.b.F(q.f)
q.c=B.fF
B.b.F(q.r)}}
A.KS.prototype={
$0(){var s=this.a.b
if(s!=null)s.remove()},
$S:0}
A.KR.prototype={
$1(a){if(this.a.e.k(0,a.id)==null)this.b.C(0,a)
return!0},
$S:66}
A.ox.prototype={
D(){return"EnabledState."+this.b}}
A.R6.prototype={}
A.R2.prototype={
Gf(a){if(!this.gDO())return!0
else return this.q7(a)}}
A.JA.prototype={
gDO(){return this.a!=null},
q7(a){var s
if(this.a==null)return!0
s=$.aY
if((s==null?$.aY=A.cp():s).a)return!0
if(!B.DE.t(0,a.type))return!0
if(!J.d(a.target,this.a))return!0
s=$.aY;(s==null?$.aY=A.cp():s).sqm(!0)
this.m()
return!1},
Eh(){var s,r="setAttribute",q=this.a=A.aA(self.document,"flt-semantics-placeholder")
A.bo(q,"click",t.g.a(A.aU(new A.JB(this))),!0)
s=A.T("button")
A.h(q,r,["role",s==null?t.K.a(s):s])
s=A.T("polite")
A.h(q,r,["aria-live",s==null?t.K.a(s):s])
s=A.T("0")
A.h(q,r,["tabindex",s==null?t.K.a(s):s])
s=A.T("Enable accessibility")
A.h(q,r,["aria-label",s==null?t.K.a(s):s])
s=q.style
A.m(s,"position","absolute")
A.m(s,"left","-1px")
A.m(s,"top","-1px")
A.m(s,"width","1px")
A.m(s,"height","1px")
return q},
m(){var s=this.a
if(s!=null)s.remove()
this.a=null}}
A.JB.prototype={
$1(a){this.a.q7(a)},
$S:1}
A.O0.prototype={
gDO(){return this.b!=null},
q7(a){var s,r,q,p,o,n,m,l,k,j,i=this
if(i.b==null)return!0
if(i.d){s=$.ba()
if(s!==B.u||a.type==="touchend"||a.type==="pointerup"||a.type==="click")i.m()
return!0}s=$.aY
if((s==null?$.aY=A.cp():s).a)return!0
if(++i.c>=20)return i.d=!0
if(!B.DG.t(0,a.type))return!0
if(i.a!=null)return!1
r=A.bv("activationPoint")
switch(a.type){case"click":r.sbO(new A.ok(a.offsetX,a.offsetY))
break
case"touchstart":case"touchend":s=t.ef
s=A.ei(new A.t5(a.changedTouches,s),s.h("v.E"),t.e)
s=A.q(s).y[1].a(J.j3(s.a))
r.sbO(new A.ok(s.clientX,s.clientY))
break
case"pointerdown":case"pointerup":r.sbO(new A.ok(a.clientX,a.clientY))
break
default:return!0}q=i.b.getBoundingClientRect()
s=q.left
p=q.right
o=q.left
n=q.top
m=q.bottom
l=q.top
k=r.aX().a-(s+(p-o)/2)
j=r.aX().b-(n+(m-l)/2)
if(k*k+j*j<1&&!0){i.d=!0
i.a=A.bH(B.bk,new A.O2(i))
return!1}return!0},
Eh(){var s,r="setAttribute",q=this.b=A.aA(self.document,"flt-semantics-placeholder")
A.bo(q,"click",t.g.a(A.aU(new A.O1(this))),!0)
s=A.T("button")
A.h(q,r,["role",s==null?t.K.a(s):s])
s=A.T("Enable accessibility")
A.h(q,r,["aria-label",s==null?t.K.a(s):s])
s=q.style
A.m(s,"position","absolute")
A.m(s,"left","0")
A.m(s,"top","0")
A.m(s,"right","0")
A.m(s,"bottom","0")
return q},
m(){var s=this.b
if(s!=null)s.remove()
this.a=this.b=null}}
A.O2.prototype={
$0(){this.a.m()
var s=$.aY;(s==null?$.aY=A.cp():s).sqm(!0)},
$S:0}
A.O1.prototype={
$1(a){this.a.q7(a)},
$S:1}
A.Iv.prototype={
fn(){var s=this.e
if(s==null)s=null
else{s=s.c.a
s===$&&A.c()
s.focus()
s=!0}return s===!0},
cl(){var s,r
this.fJ()
s=this.c.uA()
r=this.a
if(s===B.cM){r===$&&A.c()
s=A.T("true")
A.h(r,"setAttribute",["aria-disabled",s==null?t.K.a(s):s])}else{r===$&&A.c()
A.h(r,"removeAttribute",["aria-disabled"])}}}
A.AE.prototype={
Jp(a,b){var s,r=t.g.a(A.aU(new A.S5(this,a)))
this.e=r
s=b.a
s===$&&A.c()
A.bo(s,"click",r,null)},
cl(){var s,r=this,q=r.f,p=r.b
if(p.uA()!==B.cM){p=p.b
p.toString
p=(p&1)!==0}else p=!1
r.f=p
if(q!==p){s=r.c.a
if(p){s===$&&A.c()
p=A.T("")
A.h(s,"setAttribute",["flt-tappable",p==null?t.K.a(p):p])}else{s===$&&A.c()
A.h(s,"removeAttribute",["flt-tappable"])}}}}
A.S5.prototype={
$1(a){$.a1a().Vm(a,this.b.id,this.a.f)},
$S:1}
A.Rj.prototype={
uz(a,b,c){this.CW=a
this.x=c
this.y=b},
QI(a){var s,r,q=this,p=q.ch
if(p===a)return
else if(p!=null)q.dK()
q.ch=a
q.c=a.r
q.AQ()
p=q.CW
p.toString
s=q.x
s.toString
r=q.y
r.toString
q.GV(p,r,s)},
dK(){var s,r,q,p,o=this
if(!o.b)return
o.b=!1
o.w=o.r=null
for(s=o.z,r=0;r<s.length;++r){q=s[r]
p=q.b
p.removeEventListener.apply(p,[q.a,q.c])}B.b.F(s)
o.e=null
s=o.c
if(s!=null)s.blur()
o.cx=o.ch=o.c=null},
lE(){var s,r,q=this,p=q.d
p===$&&A.c()
p=p.w
if(p!=null)B.b.G(q.z,p.lF())
p=q.z
s=q.c
s.toString
r=q.gmk()
p.push(A.bw(s,"input",r))
s=q.c
s.toString
p.push(A.bw(s,"keydown",q.gmD()))
p.push(A.bw(self.document,"selectionchange",r))
q.pQ()},
kw(a,b,c){this.b=!0
this.d=a
this.tV(a)},
eZ(){this.d===$&&A.c()
this.c.focus()},
mr(){},
wd(a){},
we(a){this.cx=a
this.AQ()},
AQ(){var s=this.cx
if(s==null||this.c==null)return
s.toString
this.GW(s)}}
A.Sb.prototype={
fn(){var s=this.r
if(s==null)return!1
s.focus()
return!0},
zo(){var s,r=this,q="setAttribute",p=r.c,o=(p.a&524288)!==0?A.aA(self.document,"textarea"):A.aA(self.document,"input")
r.r=o
o.spellcheck=!1
s=A.T("off")
A.h(o,q,["autocorrect",s==null?t.K.a(s):s])
s=A.T("off")
A.h(o,q,["autocomplete",s==null?t.K.a(s):s])
s=A.T("text-field")
A.h(o,q,["data-semantics-role",s==null?t.K.a(s):s])
o=r.r.style
A.m(o,"position","absolute")
A.m(o,"top","0")
A.m(o,"left","0")
s=p.y
A.m(o,"width",A.f(s.c-s.a)+"px")
p=p.y
A.m(o,"height",A.f(p.d-p.b)+"px")
p=r.r
p.toString
o=r.a
o===$&&A.c()
o.append(p)},
PK(){var s=$.ba()
switch(s.a){case 0:case 2:this.zp()
break
case 1:this.Nu()
break}},
zp(){var s,r,q=this
q.zo()
s=q.r
s.toString
r=t.g
A.bo(s,"focus",r.a(A.aU(new A.Sc(q))),null)
s=q.r
s.toString
A.bo(s,"blur",r.a(A.aU(new A.Sd(q))),null)},
Nu(){var s,r="setAttribute",q={},p=$.bV()
if(p===B.ar){this.zp()
return}p=this.a
p===$&&A.c()
s=A.T("textbox")
A.h(p,r,["role",s==null?t.K.a(s):s])
s=A.T("false")
A.h(p,r,["contenteditable",s==null?t.K.a(s):s])
s=A.T("0")
A.h(p,r,["tabindex",s==null?t.K.a(s):s])
q.a=q.b=null
s=t.g
A.bo(p,"pointerdown",s.a(A.aU(new A.Se(q))),!0)
A.bo(p,"pointerup",s.a(A.aU(new A.Sf(q,this))),!0)},
NG(){var s,r=this
if(r.r!=null)return
r.zo()
A.m(r.r.style,"transform","translate(-9999px, -9999px)")
s=r.w
if(s!=null)s.b3()
r.w=A.bH(B.aW,new A.Sg(r))
r.r.focus()
s=r.a
s===$&&A.c()
A.h(s,"removeAttribute",["role"])
s=r.r
s.toString
A.bo(s,"blur",t.g.a(A.aU(new A.Sh(r))),null)},
cl(){var s,r,q,p,o=this
o.fJ()
s=o.r
if(s!=null){s=s.style
r=o.c
q=r.y
A.m(s,"width",A.f(q.c-q.a)+"px")
q=r.y
A.m(s,"height",A.f(q.d-q.b)+"px")
if((r.a&32)!==0){s=self.document.activeElement
q=o.r
q.toString
if(!J.d(s,q))r.k1.r.push(new A.Si(o))
s=$.qZ
if(s!=null)s.QI(o)}else{s=self.document.activeElement
r=o.r
r.toString
if(J.d(s,r)){s=$.ba()
if(s===B.u){s=$.bV()
s=s===B.a0}else s=!1
if(!s){s=$.qZ
if(s!=null)if(s.ch===o)s.dK()}o.r.blur()}}}p=o.r
if(p==null){s=o.a
s===$&&A.c()
p=s}s=o.c.z
if(s!=null&&s.length!==0){s.toString
s=A.T(s)
A.h(p,"setAttribute",["aria-label",s==null?t.K.a(s):s])}else A.h(p,"removeAttribute",["aria-label"])},
m(){var s,r=this
r.l1()
s=r.w
if(s!=null)s.b3()
r.w=null
s=$.ba()
if(s===B.u){s=$.bV()
s=s===B.a0}else s=!1
if(!s){s=r.r
if(s!=null)s.remove()}s=$.qZ
if(s!=null)if(s.ch===r)s.dK()}}
A.Sc.prototype={
$1(a){var s=$.aY
if((s==null?$.aY=A.cp():s).e!==B.bl)return
$.a9().en(this.a.c.id,B.fC,null)},
$S:1}
A.Sd.prototype={
$1(a){var s=$.aY
if((s==null?$.aY=A.cp():s).e!==B.bl)return
$.a9().en(this.a.c.id,B.fD,null)},
$S:1}
A.Se.prototype={
$1(a){var s=this.a
s.b=a.clientX
s.a=a.clientY},
$S:1}
A.Sf.prototype={
$1(a){var s,r,q,p=this.a,o=p.b
if(o!=null){s=a.clientX-o
o=a.clientY
r=p.a
r.toString
q=o-r
if(s*s+q*q<324){o=this.b
$.a9().en(o.c.id,B.dI,null)
o.NG()}}p.a=p.b=null},
$S:1}
A.Sg.prototype={
$0(){var s=this.a,r=s.r
if(r!=null)A.m(r.style,"transform","")
s.w=null},
$S:0}
A.Sh.prototype={
$1(a){var s,r=this.a,q=r.a
q===$&&A.c()
s=A.T("textbox")
A.h(q,"setAttribute",["role",s==null?t.K.a(s):s])
r.r.remove()
s=$.qZ
if(s!=null)if(s.ch===r)s.dK()
q.focus()
r.r=null},
$S:1}
A.Si.prototype={
$0(){this.a.r.focus()},
$S:0}
A.fx.prototype={
gv(a){return this.b},
k(a,b){if(b>=this.b)throw A.e(A.a36(b,this))
return this.a[b]},
l(a,b,c){if(b>=this.b)throw A.e(A.a36(b,this))
this.a[b]=c},
sv(a,b){var s,r,q,p=this,o=p.b
if(b<o)for(s=p.a,r=b;r<o;++r)s[r]=0
else{o=p.a.length
if(b>o){if(o===0)q=new Uint8Array(b)
else q=p.rf(b)
B.R.de(q,0,p.b,p.a)
p.a=q}}p.b=b},
co(a){var s=this,r=s.b
if(r===s.a.length)s.xz(r)
s.a[s.b++]=a},
C(a,b){var s=this,r=s.b
if(r===s.a.length)s.xz(r)
s.a[s.b++]=b},
oo(a,b,c,d){A.cF(c,"start")
if(d!=null&&c>d)throw A.e(A.bB(d,c,null,"end",null))
this.Js(b,c,d)},
G(a,b){return this.oo(0,b,0,null)},
Js(a,b,c){var s,r,q,p=this
if(A.q(p).h("J<fx.E>").b(a))c=c==null?a.length:c
if(c!=null){p.NC(p.b,a,b,c)
return}for(s=J.ao(a),r=0;s.p();){q=s.gB()
if(r>=b)p.co(q);++r}if(r<b)throw A.e(A.az("Too few elements"))},
NC(a,b,c,d){var s,r,q,p=this,o=J.b4(b)
if(c>o.gv(b)||d>o.gv(b))throw A.e(A.az("Too few elements"))
s=d-c
r=p.b+s
p.Lm(r)
o=p.a
q=a+s
B.R.b_(o,q,p.b+s,o,a)
B.R.b_(p.a,a,q,b,c)
p.b=r},
Lm(a){var s,r=this
if(a<=r.a.length)return
s=r.rf(a)
B.R.de(s,0,r.b,r.a)
r.a=s},
rf(a){var s=this.a.length*2
if(a!=null&&s<a)s=a
else if(s<8)s=8
return new Uint8Array(s)},
xz(a){var s=this.rf(null)
B.R.de(s,0,a,this.a)
this.a=s},
b_(a,b,c,d,e){var s=this.b
if(c>s)throw A.e(A.bB(c,0,s,null,null))
s=this.a
if(A.q(this).h("fx<fx.E>").b(d))B.R.b_(s,b,c,d.a,e)
else B.R.b_(s,b,c,d,e)},
de(a,b,c,d){return this.b_(0,b,c,d,0)}}
A.Dd.prototype={}
A.AW.prototype={}
A.e3.prototype={
j(a){return A.u(this).j(0)+"("+this.a+", "+A.f(this.b)+")"}}
A.N_.prototype={
aM(a){return A.lP(B.aU.dI(B.cD.CZ(a)).buffer,0,null)},
dn(a){if(a==null)return a
return B.cD.e9(B.bB.dI(A.d3(a.buffer,0,null)))}}
A.N1.prototype={
eN(a){return B.C.aM(A.aC(["method",a.a,"args",a.b],t.N,t.z))},
ea(a){var s,r,q=null,p=B.C.dn(a)
if(!t.f.b(p))throw A.e(A.bx("Expected method call Map, got "+A.f(p),q,q))
s=p.k(0,"method")
r=p.k(0,"args")
if(typeof s=="string")return new A.e3(s,r)
throw A.e(A.bx("Invalid method call: "+p.j(0),q,q))}}
A.RD.prototype={
aM(a){var s=A.a03()
this.cm(s,!0)
return s.hG()},
dn(a){var s,r
if(a==null)return null
s=new A.zo(a)
r=this.eu(s)
if(s.b<a.byteLength)throw A.e(B.aa)
return r},
cm(a,b){var s,r,q,p,o=this
if(b==null)a.b.co(0)
else if(A.kU(b)){s=b?1:2
a.b.co(s)}else if(typeof b=="number"){s=a.b
s.co(6)
a.hr(8)
a.c.setFloat64(0,b,B.P===$.cb())
s.G(0,a.d)}else if(A.v0(b)){s=-2147483648<=b&&b<=2147483647
r=a.b
q=a.c
if(s){r.co(3)
q.setInt32(0,b,B.P===$.cb())
r.oo(0,a.d,0,4)}else{r.co(4)
B.dq.wN(q,0,b,$.cb())}}else if(typeof b=="string"){s=a.b
s.co(7)
p=B.aU.dI(b)
o.dc(a,p.length)
s.G(0,p)}else if(t.uo.b(b)){s=a.b
s.co(8)
o.dc(a,b.length)
s.G(0,b)}else if(t.fO.b(b)){s=a.b
s.co(9)
r=b.length
o.dc(a,r)
a.hr(4)
s.G(0,A.d3(b.buffer,b.byteOffset,4*r))}else if(t.cE.b(b)){s=a.b
s.co(11)
r=b.length
o.dc(a,r)
a.hr(8)
s.G(0,A.d3(b.buffer,b.byteOffset,8*r))}else if(t.j.b(b)){a.b.co(12)
s=J.b4(b)
o.dc(a,s.gv(b))
for(s=s.gK(b);s.p();)o.cm(a,s.gB())}else if(t.f.b(b)){a.b.co(13)
o.dc(a,b.gv(b))
b.W(0,new A.RF(o,a))}else throw A.e(A.fG(b,null,null))},
eu(a){if(a.b>=a.a.byteLength)throw A.e(B.aa)
return this.hd(a.j9(0),a)},
hd(a,b){var s,r,q,p,o,n,m,l,k=this
switch(a){case 0:s=null
break
case 1:s=!0
break
case 2:s=!1
break
case 3:r=b.a.getInt32(b.b,B.P===$.cb())
b.b+=4
s=r
break
case 4:s=b.qe(0)
break
case 5:q=k.cI(b)
s=A.fB(B.bB.dI(b.ja(q)),16)
break
case 6:b.hr(8)
r=b.a.getFloat64(b.b,B.P===$.cb())
b.b+=8
s=r
break
case 7:q=k.cI(b)
s=B.bB.dI(b.ja(q))
break
case 8:s=b.ja(k.cI(b))
break
case 9:q=k.cI(b)
b.hr(4)
p=b.a
o=A.a3H(p.buffer,p.byteOffset+b.b,q)
b.b=b.b+4*q
s=o
break
case 10:s=b.qf(k.cI(b))
break
case 11:q=k.cI(b)
b.hr(8)
p=b.a
o=A.a3F(p.buffer,p.byteOffset+b.b,q)
b.b=b.b+8*q
s=o
break
case 12:q=k.cI(b)
s=[]
for(p=b.a,n=0;n<q;++n){m=b.b
if(m>=p.byteLength)A.ae(B.aa)
b.b=m+1
s.push(k.hd(p.getUint8(m),b))}break
case 13:q=k.cI(b)
p=t.z
s=A.y(p,p)
for(p=b.a,n=0;n<q;++n){m=b.b
if(m>=p.byteLength)A.ae(B.aa)
b.b=m+1
m=k.hd(p.getUint8(m),b)
l=b.b
if(l>=p.byteLength)A.ae(B.aa)
b.b=l+1
s.l(0,m,k.hd(p.getUint8(l),b))}break
default:throw A.e(B.aa)}return s},
dc(a,b){var s,r,q
if(b<254)a.b.co(b)
else{s=a.b
r=a.c
q=a.d
if(b<=65535){s.co(254)
r.setUint16(0,b,B.P===$.cb())
s.oo(0,q,0,2)}else{s.co(255)
r.setUint32(0,b,B.P===$.cb())
s.oo(0,q,0,4)}}},
cI(a){var s=a.j9(0)
switch(s){case 254:s=a.a.getUint16(a.b,B.P===$.cb())
a.b+=2
return s
case 255:s=a.a.getUint32(a.b,B.P===$.cb())
a.b+=4
return s
default:return s}}}
A.RF.prototype={
$2(a,b){var s=this.a,r=this.b
s.cm(r,a)
s.cm(r,b)},
$S:74}
A.RH.prototype={
ea(a){var s,r,q
a.toString
s=new A.zo(a)
r=B.aG.eu(s)
q=B.aG.eu(s)
if(typeof r=="string"&&s.b>=a.byteLength)return new A.e3(r,q)
else throw A.e(B.iu)},
ma(a){var s=A.a03()
s.b.co(0)
B.aG.cm(s,a)
return s.hG()},
iz(a,b,c){var s=A.a03()
s.b.co(1)
B.aG.cm(s,a)
B.aG.cm(s,c)
B.aG.cm(s,b)
return s.hG()}}
A.Th.prototype={
hr(a){var s,r,q=this.b,p=B.f.bS(q.b,a)
if(p!==0)for(s=a-p,r=0;r<s;++r)q.co(0)},
hG(){var s,r
this.a=!0
s=this.b
r=s.a
return A.lP(r.buffer,0,s.b*r.BYTES_PER_ELEMENT)}}
A.zo.prototype={
j9(a){return this.a.getUint8(this.b++)},
qe(a){B.dq.wv(this.a,this.b,$.cb())},
ja(a){var s=this.a,r=A.d3(s.buffer,s.byteOffset+this.b,a)
this.b+=a
return r},
qf(a){var s
this.hr(8)
s=this.a
B.nW.BX(s.buffer,s.byteOffset+this.b,a)},
hr(a){var s=this.b,r=B.f.bS(s,a)
if(r!==0)this.b=s+(a-r)}}
A.RV.prototype={}
A.vR.prototype={
ghi(){return this.gdE().b},
gdP(){return this.gdE().c},
gDW(){var s=this.gdE().d
s=s==null?null:s.a.f
return s==null?0:s},
gmB(){return this.gdE().f},
glI(){return this.gdE().r},
gDC(){return this.gdE().w},
gCK(){return this.gdE().x},
gdE(){var s,r=this,q=r.r
if(q===$){s=A.a([],t.dB)
r.r!==$&&A.a3()
q=r.r=new A.ml(r,s,B.E)}return q},
h3(a){var s=this
if(a.i(0,s.f))return
A.bv("stopwatch")
s.gdE().pL(a)
s.e=!0
s.f=a
s.x=null},
Wp(){var s,r=this.x
if(r==null){s=this.x=this.KL()
return s}return A.a2q(r,!0)},
KL(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=A.aA(self.document,"flt-paragraph"),b0=a9.style
A.m(b0,"position","absolute")
A.m(b0,"white-space","pre")
s=t.K
r=t.dB
q=0
while(!0){p=a7.r
if(p===$){o=A.a([],r)
a7.r!==$&&A.a3()
n=a7.r=new A.ml(a7,o,B.E)
m=n
p=m}else m=p
if(!(q<p.y.length))break
if(m===$){o=A.a([],r)
a7.r!==$&&A.a3()
p=a7.r=new A.ml(a7,o,B.E)}else p=m
for(o=p.y[q].x,l=o.length,k=0;k<o.length;o.length===l||(0,A.C)(o),++k){j=o[k]
if(j.gh2())continue
i=j.qh(a7)
if(i.length===0)continue
h=A.aA(self.document,"flt-span")
if(j.d===B.H){g=A.T("rtl")
h.setAttribute.apply(h,["dir",g==null?s.a(g):g])}g=j.f.a
b0=h.style
f=g.db
e=f==null
d=e?a8:f.gaf()
if(d==null)d=g.a
if((e?a8:f.gct())===B.N){b0.setProperty.apply(b0,["color","transparent",""])
c=e?a8:f.ghm()
if(c!=null&&c>0)b=c
else{$.iZ.toString
f=$.bc().d
if(f==null){f=self.window.devicePixelRatio
if(f===0)f=1}b=1/f}f=d==null?a8:A.cW(d.gn())
b0.setProperty.apply(b0,["-webkit-text-stroke",A.f(b)+"px "+A.f(f),""])}else if(d!=null){f=A.cW(d.gn())
b0.setProperty.apply(b0,["color",f,""])}f=g.cy
a=f==null?a8:f.gaf()
if(a!=null){f=A.cW(a.a)
b0.setProperty.apply(b0,["background-color",f,""])}a0=g.at
if(a0!=null){f=B.c.cT(a0)
b0.setProperty.apply(b0,["font-size",""+f+"px",""])}f=g.f
if(f!=null){f=A.a0K(f.a)
b0.setProperty.apply(b0,["font-weight",f,""])}f=A.Yu(g.y)
f.toString
b0.setProperty.apply(b0,["font-family",f,""])
f=g.ax
if(f!=null)b0.setProperty.apply(b0,["letter-spacing",A.f(f)+"px",""])
f=g.ay
if(f!=null)b0.setProperty.apply(b0,["word-spacing",A.f(f)+"px",""])
f=g.b
e=f!=null
a1=e&&!0
a2=g.dx
if(a2!=null){a3=A.ah2(a2)
b0.setProperty.apply(b0,["text-shadow",a3,""])}if(a1)if(e){e=g.d
f=f.a
a3=(f|1)===f?""+"underline ":""
if((f|2)===f)a3+="overline "
f=(f|4)===f?a3+"line-through ":a3
if(e!=null)f+=A.f(A.ag9(e))
a4=f.length===0?a8:f.charCodeAt(0)==0?f:f
if(a4!=null){f=$.ba()
if(f===B.u){f=h.style
f.setProperty.apply(f,["-webkit-text-decoration",a4,""])}else b0.setProperty.apply(b0,["text-decoration",a4,""])
a5=g.c
if(a5!=null){f=A.cW(a5.a)
b0.setProperty.apply(b0,["text-decoration-color",f,""])}}}a6=g.as
if(a6!=null&&a6.length!==0){g=A.agl(a6)
b0.setProperty.apply(b0,["font-variation-settings",g,""])}g=j.EZ()
f=g.a
e=g.b
a3=h.style
a3.setProperty.apply(a3,["position","absolute",""])
a3.setProperty.apply(a3,["top",A.f(e)+"px",""])
a3.setProperty.apply(a3,["left",A.f(f)+"px",""])
a3.setProperty.apply(a3,["width",A.f(g.c-f)+"px",""])
a3.setProperty.apply(a3,["line-height",A.f(g.d-e)+"px",""])
g=self.document
h.append(g.createTextNode.apply(g,[i]))
a9.append(h)}++q}return a9},
n4(){return this.gdE().n4()},
wo(a,b,c,d){return this.gdE().Fo(a,b,c,d)},
wq(a){return this.gdE().Ft(a)},
m(){this.y=!0}}
A.q5.prototype={}
A.mb.prototype={
EL(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=a.a
if(a0==null){s=a.gr6()
r=a.grj()
q=a.grk()
p=a.grl()
o=a.grm()
n=a.grF()
m=a.grD()
l=a.gtu()
k=a.gqO()
j=a.grA()
i=a.grB()
h=a.grE()
g=a.grC()
f=a.grZ()
e=a.gtK()
d=a.grU()
c=a.grY()
b=a.gt0()
e=a.a=A.a2L(a.gqX(),s,r,q,p,o,k,j,i,g,m,h,n,a.gnC(),d,c,f,b,a.gts(),l,e)
return e}return a0}}
A.vU.prototype={
gr6(){var s=this.c.a
if(s==null)s=this.gnC()==null?this.b.gr6():null
return s},
grj(){var s=this.c.b
return s==null?this.b.grj():s},
grk(){var s=this.c.c
return s==null?this.b.grk():s},
grl(){var s=this.c.d
return s==null?this.b.grl():s},
grm(){var s=this.c.e
return s==null?this.b.grm():s},
grF(){var s=this.c.f
return s==null?this.b.grF():s},
grD(){var s=this.b.grD()
return s},
gtu(){var s=this.c.w
return s==null?this.b.gtu():s},
grA(){var s=this.c.z
return s==null?this.b.grA():s},
grB(){var s=this.b.grB()
return s},
grE(){var s=this.c.as
return s==null?this.b.grE():s},
grC(){var s=this.c.at
return s==null?this.b.grC():s},
grZ(){var s=this.c.ax
return s==null?this.b.grZ():s},
gtK(){var s=this.c.ay
return s==null?this.b.gtK():s},
grU(){var s=this.c.ch
return s==null?this.b.grU():s},
grY(){var s=this.c.CW
return s==null?this.b.grY():s},
gt0(){var s=this.c.cx
return s==null?this.b.gt0():s},
gqX(){var s=this.c.cy
return s==null?this.b.gqX():s},
gnC(){var s=this.c.db
return s==null?this.b.gnC():s},
gts(){var s=this.c.dx
return s==null?this.b.gts():s},
gqO(){var s=this.c
return s.x?s.y:this.b.gqO()}}
A.zX.prototype={
gr6(){return null},
grj(){return null},
grk(){return null},
grl(){return null},
grm(){return null},
grF(){return this.b.c},
grD(){return this.b.d},
gtu(){return null},
gqO(){var s=this.b.f
return s==null?"sans-serif":s},
grA(){return null},
grB(){return null},
grE(){return null},
grC(){var s=this.b.r
return s==null?14:s},
grZ(){return null},
gtK(){return null},
grU(){return this.b.w},
grY(){return null},
gt0(){return this.b.Q},
gqX(){return null},
gnC(){return null},
gts(){return null}}
A.IC.prototype={
gyz(){var s=this.d,r=s.length
return r===0?this.e:s[r-1]},
vL(a){this.d.push(new A.vU(this.gyz(),t.vK.a(a)))},
es(){var s=this.d
if(s.length!==0)s.pop()},
ou(a){var s,r=this,q=r.a,p=q.a,o=p+a
q.a=o
s=r.gyz().EL()
r.Qe(s)
r.c.push(new A.q5(s,p.length,o.length))},
Qe(a){var s,r,q,p,o=this
if(!o.w)return
s=a.ax
if(s!=null&&s!==0){o.w=!1
return}r=a.b
if(r!=null){q=r.a
q=B.e.a!==q}else q=!1
if(q){o.w=!1
return}p=a.as
if(p!=null&&p.length!==0){o.w=!1
return}},
bn(){var s,r=this,q=r.c
if(q.length===0)q.push(new A.q5(r.e.EL(),0,0))
s=r.a.a
return new A.vR(q,r.b,s.charCodeAt(0)==0?s:s,r.w)}}
A.Mt.prototype={
h6(a){return this.UU(a)},
UU(a0){var s=0,r=A.Q(t.w7),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$h6=A.R(function(a1,a2){if(a1===1)return A.N(a2,r)
while(true)switch(s){case 0:b=A.a([],t.uh)
for(o=a0.a,n=o.length,m=0;m<o.length;o.length===n||(0,A.C)(o),++m){l=o[m]
for(k=l.b,j=k.length,i=0;i<k.length;k.length===j||(0,A.C)(k),++i)b.push(new A.Mu(p,k[i],l).$0())}h=A.a([],t.s)
g=A.y(t.N,t.v4)
a=J
s=3
return A.W(A.oX(b,t.DZ),$async$h6)
case 3:o=a.ao(a2)
case 4:if(!o.p()){s=5
break}n=o.gB()
f=n.a
e=n.b
d=e
c=f
n=!0
if(!n)throw A.e(A.az("Pattern matching error"))
if(d==null)h.push(c)
else g.l(0,c,d)
s=4
break
case 5:q=new A.nG()
s=1
break
case 1:return A.O(q,r)}})
return A.P($async$h6,r)},
guI(){return null},
F(a){self.document.fonts.clear()},
ln(a,b,c){return this.NM(a,b,c)},
NM(a0,a1,a2){var s=0,r=A.Q(t.d5),q,p=2,o,n=this,m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$ln=A.R(function(a4,a5){if(a4===1){o=a5
s=p}while(true)switch(s){case 0:f=A.a([],t.J)
e=A.a([],t.Bq)
p=4
j=$.a7H()
s=j.b.test(a0)||$.a7G().Gv(a0)!==a0?7:8
break
case 7:b=J
a=f
s=9
return A.W(n.lo("'"+a0+"'",a1,a2),$async$ln)
case 9:b.ee(a,a5)
case 8:p=2
s=6
break
case 4:p=3
d=o
j=A.ah(d)
if(j instanceof A.cM){m=j
J.ee(e,m)}else throw d
s=6
break
case 3:s=2
break
case 6:p=11
b=J
a=f
s=14
return A.W(n.lo(a0,a1,a2),$async$ln)
case 14:b.ee(a,a5)
p=2
s=13
break
case 11:p=10
c=o
j=A.ah(c)
if(j instanceof A.cM){l=j
J.ee(e,l)}else throw c
s=13
break
case 10:s=2
break
case 13:if(J.c0(f)===0){q=J.j3(e)
s=1
break}try{for(j=f,h=j.length,g=0;g<j.length;j.length===h||(0,A.C)(j),++g){k=j[g]
self.document.fonts.add(k)}}catch(a3){q=new A.oU()
s=1
break}q=null
s=1
break
case 1:return A.O(q,r)
case 2:return A.N(o,r)}})
return A.P($async$ln,r)},
lo(a,b,c){return this.NN(a,b,c)},
NN(a,b,c){var s=0,r=A.Q(t.e),q,p=2,o,n,m,l,k,j
var $async$lo=A.R(function(d,e){if(d===1){o=e
s=p}while(true)switch(s){case 0:p=4
l=$.nd
n=A.ahF(a,"url("+l.n3(b)+")",c)
s=7
return A.W(A.hO(n.load(),t.e),$async$lo)
case 7:l=e
q=l
s=1
break
p=2
s=6
break
case 4:p=3
j=o
m=A.ah(j)
$.cm().$1('Error while loading font family "'+a+'":\n'+A.f(m))
l=A.abG(b,m)
throw A.e(l)
s=6
break
case 3:s=2
break
case 6:case 1:return A.O(q,r)
case 2:return A.N(o,r)}})
return A.P($async$lo,r)}}
A.Mu.prototype={
$0(){var s=0,r=A.Q(t.DZ),q,p=this,o,n,m,l
var $async$$0=A.R(function(a,b){if(a===1)return A.N(b,r)
while(true)switch(s){case 0:o=p.b
n=o.a
m=A
l=n
s=3
return A.W(p.a.ln(p.c.a,n,o.b),$async$$0)
case 3:q=new m.eT(l,b)
s=1
break
case 1:return A.O(q,r)}})
return A.P($async$$0,r)},
$S:176}
A.Sk.prototype={}
A.Sj.prototype={}
A.Nx.prototype={
pd(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=A.a([],t.sN),d=this.a,c=A.ac8(d).pd(),b=A.X(c),a=new J.bj(c,c.length,b.h("bj<1>"))
a.p()
d=A.ag3(d)
c=A.X(d)
s=new J.bj(d,d.length,c.h("bj<1>"))
s.p()
d=this.b
r=A.X(d)
q=new J.bj(d,d.length,r.h("bj<1>"))
q.p()
p=a.d
if(p==null)p=b.c.a(p)
o=s.d
if(o==null)o=c.c.a(o)
n=q.d
if(n==null)n=r.c.a(n)
for(d=b.c,c=c.c,r=r.c,m=0;!0;m=j){b=p.b
l=o.b
k=n.c
j=Math.min(b,Math.min(l,k))
i=b-j
h=i===0?p.c:B.m
g=j-m
e.push(A.a_p(m,j,h,o.c,o.d,n,A.kX(p.d-i,0,g),A.kX(p.e-i,0,g)))
if(b===j)if(a.p()){p=a.d
if(p==null)p=d.a(p)
f=!0}else f=!1
else f=!1
if(l===j)if(s.p()){o=s.d
if(o==null)o=c.a(o)
f=!0}if(k===j)if(q.p()){n=q.d
if(n==null)n=r.a(n)
f=!0}if(!f)break}return e}}
A.Ud.prototype={
gq(a){var s=this
return A.G(s.a,s.b,s.c,s.d,s.e,s.f,s.r,s.w,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a,b){var s=this
if(b==null)return!1
return b instanceof A.e1&&b.a===s.a&&b.b===s.b&&b.c===s.c&&b.d==s.d&&b.e===s.e&&b.f===s.f&&b.r===s.r&&b.w===s.w}}
A.e1.prototype={
gv(a){return this.b-this.a},
gv_(){return this.b-this.a===this.w},
gh2(){return!1},
qh(a){return B.d.a7(a.c,this.a,this.b-this.r)},
ni(a,b){var s,r,q,p,o,n,m,l,k,j=this,i=j.a
if(i===b)return A.a([null,j],t.wf)
s=j.b
if(s===b)return A.a([j,null],t.wf)
r=s-b
q=j.r
p=Math.min(q,r)
o=j.w
n=Math.min(o,r)
m=j.d
l=j.e
k=j.f
return A.a([A.a_p(i,b,B.m,m,l,k,q-p,o-n),A.a_p(b,s,j.c,m,l,k,p,n)],t.sN)},
j(a){var s=this
return B.J1.j(0)+"("+s.a+", "+s.b+", "+s.c.j(0)+", "+A.f(s.d)+")"}}
A.UW.prototype={
ne(a,b,c,d,e){var s=this
s.kk$=a
s.hL$=b
s.hM$=c
s.hN$=d
s.c1$=e}}
A.UX.prototype={
gh4(){var s,r,q=this,p=q.bz$
p===$&&A.c()
s=q.fl$
if(p.y===B.o){s===$&&A.c()
p=s}else{s===$&&A.c()
r=q.c1$
r===$&&A.c()
r=p.a.f-(s+(r+q.c2$))
p=r}return p},
gi3(){var s,r=this,q=r.bz$
q===$&&A.c()
s=r.fl$
if(q.y===B.o){s===$&&A.c()
q=r.c1$
q===$&&A.c()
q=s+(q+r.c2$)}else{s===$&&A.c()
q=q.a.f-s}return q},
UL(a){var s,r,q=this,p=q.bz$
p===$&&A.c()
s=p.f
if(q.b>p.c-s)return
r=q.w
if(r===0)return
q.c2$=(a-p.a.f)/(p.r-s)*r}}
A.UV.prototype={
gAU(){var s,r,q,p,o,n,m,l,k=this,j=k.p7$
if(j===$){s=k.bz$
s===$&&A.c()
r=k.gh4()
q=k.bz$.a
p=k.hL$
p===$&&A.c()
o=k.gi3()
n=k.bz$
m=k.hM$
m===$&&A.c()
l=k.d
l.toString
k.p7$!==$&&A.a3()
j=k.p7$=new A.cP(s.a.r+r,q.w-p,q.r+o,n.a.w+m,l)}return j},
EZ(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.bz$
h===$&&A.c()
if(i.b>h.c-h.f){s=i.d
s.toString
h=h.a.r
if(s===B.o){s=i.gh4()
r=i.bz$.a
q=i.hL$
q===$&&A.c()
p=i.gi3()
o=i.c1$
o===$&&A.c()
n=i.c2$
m=i.hN$
m===$&&A.c()
l=i.bz$
k=i.hM$
k===$&&A.c()
j=i.d
j.toString
j=new A.cP(h+s,r.w-q,r.r+p-(o+n-m),l.a.w+k,j)
h=j}else{s=i.gh4()
r=i.c1$
r===$&&A.c()
q=i.c2$
p=i.hN$
p===$&&A.c()
o=i.bz$.a
n=i.hL$
n===$&&A.c()
m=i.gi3()
l=i.bz$
k=i.hM$
k===$&&A.c()
j=i.d
j.toString
j=new A.cP(h+s+(r+q-p),o.w-n,o.r+m,l.a.w+k,j)
h=j}return h}return i.gAU()},
q6(a,b){var s,r,q,p,o,n,m,l,k,j=this
if(b==null)b=j.a
if(a==null)a=j.b
s=j.a
r=b<=s
if(r&&a>=j.b-j.r)return j.gAU()
if(r)q=0
else{r=j.kk$
r===$&&A.c()
r.sk0(j.f)
r=j.kk$
q=A.nm($.no(),r.a.c,s,b,r.c.a.ax)}s=j.b-j.r
if(a>=s)p=0
else{r=j.kk$
r===$&&A.c()
r.sk0(j.f)
r=j.kk$
p=A.nm($.no(),r.a.c,a,s,r.c.a.ax)}s=j.d
s.toString
if(s===B.o){o=j.gh4()+q
n=j.gi3()-p}else{o=j.gh4()+p
n=j.gi3()-q}s=j.bz$
s===$&&A.c()
s=s.a
r=s.r
s=s.w
m=j.hL$
m===$&&A.c()
l=j.hM$
l===$&&A.c()
k=j.d
k.toString
return new A.cP(r+o,s-m,r+n,s+l,k)},
Wu(){return this.q6(null,null)},
gqj(){var s,r=this,q=r.p8$
if(q===$){s=r.LP()
r.p8$!==$&&A.a3()
r.p8$=s
q=s}return q},
LP(){var s,r,q,p,o=this,n=o.b,m=o.a
if(n===m)return null
s=o.bz$
s===$&&A.c()
r=s.gi6()
q=o.bz$.wD(m,0,r.length)
p=n===m+1?q+1:o.bz$.wD(n-1,q,r.length)+1
if(r[q]>m){n=q+1
n=p===n?null:new A.eT(n,p)}else n=new A.eT(q,p)
return n},
rG(b0,b1,b2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=a7.bz$
a9===$&&A.c()
s=a9.gi6()
a9=s[b1]
r=s[b2]
q=a7.q6(r,a9)
p=b1+1
if(p===b2)return new A.jF(new A.D(q.a,q.b,q.c,q.d),new A.dm(a9,r),q.e)
o=q.a
n=q.c
m=n
a9=!0
l=o
if(!a9)throw A.e(A.az("Pattern matching error"))
if(l<b0&&b0<m){k=B.f.bZ(b1+b2,2)
j=a7.rG(b0,b1,k)
a9=j.a
r=a9.a
if(r<b0&&b0<a9.c)return j
i=a7.rG(b0,k,b2)
p=i.a
h=p.a
if(h<b0&&b0<p.c)return i
return Math.abs(b0-B.c.hD(b0,r,a9.c))>Math.abs(b0-B.c.hD(b0,h,p.c))?j:i}g=q.e
f=b0<=l
$label0$0:{e=B.o===g
a9=e
d=g
if(a9){a9=f
c=a9
b=c
a=!0
a0=!0}else{c=a8
b=c
a=!1
a0=!1
a9=!1}if(!a9){a9=d
a1=!0
a2=B.H===a9
a9=a2
if(a9){if(a0)a9=c
else{a9=f
c=a9
a0=!0}a3=!1===a9
a9=a3
a4=!0}else{a3=a8
a4=!1
a9=!1}a5=!0}else{a3=a8
a2=a3
a1=!0
a5=!1
a4=!1
a9=!0}if(a9){a9=new A.dm(s[b1],s[p])
break $label0$0}if(e)if(a4)a9=a3
else{if(a0)a9=c
else{a9=f
c=a9
a0=!0}a3=!1===a9
a9=a3}else a9=!1
if(!a9){if(a5)a9=a2
else{a2=B.H===(a1?d:g)
a9=a2}if(a9)if(a)a9=b
else{b=!0===(a0?c:f)
a9=b}else a9=!1}else a9=!0
if(a9){a9=new A.dm(s[b2-1],s[b2])
break $label0$0}a9=a8}r=a9.a
a6=a7.q6(a9.b,r)
return new A.jF(new A.D(a6.a,a6.b,a6.c,a6.d),a9,a6.e)},
wp(a){var s=null,r=this.gqj(),q=r.a,p=r.b,o=p,n=!0,m=q
if(!n)throw A.e(A.az("Pattern matching error"))
return this.rG(a,m,o)}}
A.ov.prototype={
gv_(){return!1},
gh2(){return!1},
qh(a){var s=a.b.z
s.toString
return s},
ni(a,b){throw A.e(A.bL("Cannot split an EllipsisFragment"))}}
A.ml.prototype={
gwZ(){var s=this.Q
if(s===$){s!==$&&A.a3()
s=this.Q=new A.At(this.a)}return s},
pL(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=a2.a
a0.b=a1
a0.c=0
a0.d=null
a0.f=a0.e=0
a0.x=!1
s=a0.y
B.b.F(s)
r=a0.a
q=A.a3p(r,a0.gwZ(),0,A.a([],t.sN),0,a1)
p=a0.as
if(p===$){p!==$&&A.a3()
p=a0.as=new A.Nx(r.a,r.c)}o=p.pd()
B.b.W(o,a0.gwZ().gV7())
$label0$0:for(n=0;n<o.length;++n){m=o[n]
q.og(m)
if(m.c!==B.m)q.Q=q.a.length
B.b.C(q.a,m)
for(;q.w>q.c;){if(q.gRf()){q.Uo()
s.push(q.bn())
a0.x=!0
break $label0$0}if(q.gUC())q.Wf()
else q.T5()
n+=q.QV(o,n+1)
s.push(q.bn())
q=q.E3()}a1=q.a
if(a1.length!==0){a1=B.b.gO(a1).c
a1=a1===B.aJ||a1===B.aK}else a1=!1
if(a1){s.push(q.bn())
q=q.E3()}}a1=r.b
l=a1.e
if(l!=null&&s.length>l){a0.x=!0
B.b.vV(s,l,s.length)}for(r=s.length,k=1/0,j=-1/0,i=0;i<r;++i){h=s[i]
g=h.a
a0.c=a0.c+g.e
if(a0.r===-1){f=g.w
a0.r=f
a0.w=f*1.1662499904632568}f=a0.d
e=f==null?null:f.a.f
if(e==null)e=0
f=g.f
if(e<f)a0.d=h
d=g.r
if(d<k)k=d
c=d+f
if(c>j)j=c}a0.z=new A.D(k,0,j,a0.c)
if(r!==0)if(isFinite(a0.b)&&a1.a===B.dS)for(n=0;n<s.length-1;++n)for(a1=s[n].x,r=a1.length,i=0;i<a1.length;a1.length===r||(0,A.C)(a1),++i)a1[i].UL(a0.b)
B.b.W(s,a0.gOV())
for(a1=o.length,b=0,a=0,i=0;i<a1;++i){m=o[i]
s=m.hN$
s===$&&A.c()
b+=s
s=m.c1$
s===$&&A.c()
a+=s+m.c2$
switch(m.c.a){case 1:break
case 0:a0.e=Math.max(a0.e,b)
b=0
break
case 2:case 3:a0.e=Math.max(a0.e,b)
a0.f=Math.max(a0.f,a)
b=0
a=0
break}}},
OW(a){var s,r,q,p,o,n,m=this,l=null,k=m.a.b.b,j=k==null,i=j?B.o:k
for(s=a.x,r=l,q=0,p=0,o=0;n=s.length,o<=n;++o){if(o<n){n=s[o].e
if(n===B.cO){r=l
continue}if(n===B.eE){if(r==null)r=o
continue}if((n===B.iv?B.o:B.H)===i){r=l
continue}}if(r==null)q+=m.te(i,o,a,p,q)
else{q+=m.te(i,r,a,p,q)
q+=m.te(j?B.o:k,o,a,r,q)}if(o<s.length){n=s[o].d
n.toString
i=n}p=o
r=l}},
te(a,b,c,d,e){var s,r,q,p,o=this.a.b.b
if(a===(o==null?B.o:o))for(o=c.x,s=d,r=0;s<b;++s){q=o[s]
q.fl$=e+r
if(q.d==null)q.d=a
p=q.c1$
p===$&&A.c()
r+=p+q.c2$}else for(s=b-1,o=c.x,r=0;s>=d;--s){q=o[s]
q.fl$=e+r
if(q.d==null)q.d=a
p=q.c1$
p===$&&A.c()
r+=p+q.c2$}return r},
n4(){var s,r,q,p,o,n,m,l=A.a([],t.px)
for(s=this.y,r=s.length,q=0;q<s.length;s.length===r||(0,A.C)(s),++q)for(p=s[q].x,o=p.length,n=0;n<p.length;p.length===o||(0,A.C)(p),++n){m=p[n]
if(m.gh2())l.push(m.Wu())}return l},
Fo(a,b,c,d){var s,r,q,p,o,n,m,l,k,j
if(a>=b||a<0||b<0)return A.a([],t.px)
s=this.a.c.length
if(a>s||b>s)return A.a([],t.px)
r=A.a([],t.px)
for(q=this.y,p=q.length,o=0;o<q.length;q.length===p||(0,A.C)(q),++o){n=q[o]
if(a<n.c&&n.b<b)for(m=n.x,l=m.length,k=0;k<m.length;m.length===l||(0,A.C)(m),++k){j=m[k]
if(!j.gh2()&&a<j.b&&j.a<b)r.push(j.q6(b,a))}}return r},
Ft(a){var s,r,q,p,o,n,m,l,k,j,i=null,h=this.LD(a.b)
if(h==null)return i
s=a.a
r=h.a.r
q=h.Rw(s-r)
if(q==null)return i
p=q.gqj()
o=p==null?i:p.a
if(o!=null){p=q.bz$
p===$&&A.c()
p=p.gi6()[o]!==q.a}else p=!0
if(p){p=q.bz$
p===$&&A.c()
p=p.a
n=p.r
if(!(s<=n)){if(!(n+p.f<=s))switch(q.d.a){case 1:r=s>=r+(q.gh4()+q.gi3())/2
break
case 0:r=s<=r+(q.gh4()+q.gi3())/2
break
default:r=i}else r=!0
m=r}else m=!0}else m=!0
l=q.wp(s)
if(m)return l
switch(q.d.a){case 1:r=!0
break
case 0:r=!1
break
default:r=i}p=q.bz$
p===$&&A.c()
r=p.Rx(q,r)
k=r==null?i:r.wp(s)
if(k==null)return l
r=l.a
j=Math.min(Math.abs(r.a-s),Math.abs(r.c-s))
r=k.a
return Math.min(Math.abs(r.a-s),Math.abs(r.c-s))>j?l:k},
LD(a){var s,r,q,p=this.y,o=p.length
if(o===0)return null
for(s=0;s<o;++s){r=p[s]
q=r.a.e
if(a<=q)return r
a-=q}return B.b.gO(p)}}
A.Nz.prototype={
gD1(){var s=this.a
if(s.length!==0)s=B.b.gO(s).b
else{s=this.b
s.toString
s=B.b.gJ(s).a}return s},
gUC(){var s=this.a
if(s.length===0)return!1
if(B.b.gO(s).c!==B.m)return this.as>1
return this.as>0},
gQT(){var s=this.c-this.w,r=this.d.b
switch(r.a.a){case 2:return s/2
case 1:return s
case 4:r=r.b
return(r==null?B.o:r)===B.H?s:0
case 5:r=r.b
return(r==null?B.o:r)===B.H?0:s
default:return 0}},
gRf(){var s,r=this.d.b
if(r.z==null)return!1
s=r.e
return s==null||s===this.f+1},
gK1(){var s=this.a
if(s.length!==0){s=B.b.gO(s).c
s=s===B.aJ||s===B.aK}else s=!1
if(s)return!1
s=this.b
s=s==null?null:s.length!==0
if(s===!0)return!1
return!0},
BH(a){var s=this
s.og(a)
if(a.c!==B.m)s.Q=s.a.length
B.b.C(s.a,a)},
og(a){var s,r=this,q=a.w
r.at=r.at+q
if(a.gv_())r.ax+=q
else{r.ax=q
q=r.x
s=a.hN$
s===$&&A.c()
r.w=q+s}q=r.x
s=a.c1$
s===$&&A.c()
r.x=q+(s+a.c2$)
if(a.gh2())r.JE(a)
if(a.c!==B.m)++r.as
q=r.y
s=a.hL$
s===$&&A.c()
r.y=Math.max(q,s)
s=r.z
q=a.hM$
q===$&&A.c()
r.z=Math.max(s,q)},
JE(a){var s,r,q,p,o,n=this,m=t.zC.a(a.f)
switch(m.gip()){case B.ry:s=n.y
r=m.gdP().V(0,n.y)
break
case B.fp:s=m.gdP().V(0,n.z)
r=n.z
break
case B.rz:q=n.y
p=n.z
o=m.gdP().ey(0,2).V(0,(q+p)/2)
s=B.c.S(n.y,o)
r=B.c.S(n.z,o)
break
case B.rw:s=m.gdP()
r=0
break
case B.rx:r=m.gdP()
s=0
break
case B.rv:s=m.gX5()
r=m.gdP().V(0,s)
break
default:s=null
r=null}q=a.hN$
q===$&&A.c()
p=a.c1$
p===$&&A.c()
a.ne(n.e,s,r,q,p+a.c2$)},
ls(){var s,r=this,q=r.as=r.ax=r.at=r.z=r.y=r.x=r.w=0
r.Q=-1
for(s=r.a;q<s.length;++q){r.og(s[q])
if(s[q].c!==B.m)r.Q=q}},
Di(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g=this
if(b==null)b=g.c
if(g.b==null)g.b=A.a([],t.sN)
s=g.a
r=s.length>1||a
q=B.b.gO(s)
if(q.gh2()){if(r){p=g.b
p.toString
B.b.iL(p,0,B.b.dQ(s))
g.ls()}return}p=g.e
p.sk0(q.f)
o=g.x
n=q.c1$
n===$&&A.c()
m=q.c2$
l=q.b-q.r
k=p.T4(q.a,l,r,b-(o-(n+m)))
if(k===l)return
B.b.dQ(s)
g.ls()
j=q.ni(0,k)
i=B.b.gJ(j)
if(i!=null){p.ve(i)
g.BH(i)}h=B.b.gO(j)
if(h!=null){p.ve(h)
s=g.b
s.toString
B.b.iL(s,0,h)}},
T5(){return this.Di(!1,null)},
Uo(){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.d.b.z
f.toString
g.b=A.a([],t.sN)
s=g.e
r=g.a
s.sk0(B.b.gO(r).f)
q=$.no()
p=f.length
o=A.nm(q,f,0,p,null)
n=g.c
m=Math.max(0,n-o)
while(!0){if(r.length>1){l=g.x
k=B.b.gO(r)
j=k.c1$
j===$&&A.c()
k=l-(j+k.c2$)
l=k}else l=0
if(!(l>m))break
l=g.b
l.toString
B.b.iL(l,0,B.b.dQ(r))
g.ls()
s.sk0(B.b.gO(r).f)
o=A.nm(q,f,0,p,null)
m=n-o}i=B.b.gO(r)
g.Di(!0,m)
f=g.gD1()
h=new A.ov($,$,$,$,$,$,$,$,$,0,B.aK,null,B.eE,i.f,0,0,f,f)
f=i.hL$
f===$&&A.c()
r=i.hM$
r===$&&A.c()
h.ne(s,f,r,o,o)
g.BH(h)},
Wf(){var s,r=this.a,q=r.length,p=q-2
for(;r[p].c===B.m;)--p
s=p+1
A.cN(s,q,q)
this.b=A.dl(r,s,q,A.X(r).c).d9(0)
B.b.vV(r,s,r.length)
this.ls()},
QV(a,b){var s,r=this,q=r.a,p=b
while(!0){if(r.gK1())if(p<a.length){s=a[p].hN$
s===$&&A.c()
s=s===0}else s=!1
else s=!1
if(!s)break
s=a[p]
r.og(s)
if(s.c!==B.m)r.Q=q.length
B.b.C(q,s);++p}return p-b},
bn(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this
if(c.b==null){s=c.a
r=c.Q+1
q=s.length
A.cN(r,q,q)
c.b=A.dl(s,r,q,A.X(s).c).d9(0)
B.b.vV(s,c.Q+1,s.length)}s=c.a
p=s.length===0?0:B.b.gO(s).r
if(s.length!==0)r=B.b.gJ(s).a
else{r=c.b
r.toString
r=B.b.gJ(r).a}q=c.gD1()
o=c.ax
n=c.at
if(s.length!==0){m=B.b.gO(s).c
m=m===B.aJ||m===B.aK}else m=!1
l=c.w
k=c.x
j=c.gQT()
i=c.y
h=c.z
g=c.d
f=g.b.b
if(f==null)f=B.o
e=new A.ih(new A.x2(m,i,h,i,i+h,l,j,c.r+i,c.f),r,q,p,o,n,k,s,f,g)
for(r=s.length,d=0;d<r;++d)s[d].bz$=e
return e},
E3(){var s=this,r=s.y,q=s.z,p=s.b
if(p==null)p=A.a([],t.sN)
return A.a3p(s.d,s.e,s.r+(r+q),p,s.f+1,s.c)}}
A.At.prototype={
sk0(a){var s,r,q,p,o=a.a,n=o.gCA()
if($.a69!==n){$.a69=n
$.no().font=n}if(a===this.c)return
this.c=a
s=o.fr
if(s===$){r=o.gCU()
q=o.at
if(q==null)q=14
o.fr!==$&&A.a3()
s=o.fr=new A.rl(r,q,o.ch,null,null)}p=$.a4C.k(0,s)
if(p==null){p=new A.AH(s,$.a7W(),new A.S8(A.aA(self.document,"flt-paragraph")))
$.a4C.l(0,s,p)}this.b=p},
ve(a){var s,r,q,p,o,n,m,l=this,k=a.f
if(a.gh2()){t.zC.a(k)
a.ne(l,k.gdP(),0,k.ghi(),k.ghi())}else{l.sk0(k)
k=a.a
s=a.b
r=$.no()
q=l.a.c
p=A.nm(r,q,k,s-a.w,l.c.a.ax)
o=A.nm(r,q,k,s-a.r,l.c.a.ax)
s=l.b.glI()
k=l.b
n=k.r
if(n===$){r=k.e
q=r.b
r=q==null?r.b=r.a.getBoundingClientRect():q
m=r.height
r=$.ba()
if(r===B.aS&&!0)++m
k.r!==$&&A.a3()
n=k.r=m}a.ne(l,s,n-l.b.glI(),p,o)}},
T4(a,b,c,d){var s,r,q,p,o
if(d<=0)return c?a:a+1
for(s=this.a.c,r=b,q=a;r-q>1;){p=B.f.bZ(q+r,2)
o=A.nm($.no(),s,a,p,this.c.a.ax)
if(o<d)q=p
else{q=o>d?q:p
r=p}}return q===a&&!c?q+1:q}}
A.i7.prototype={
D(){return"LineBreakType."+this.b}}
A.KY.prototype={
pd(){return A.ag4(this.a)}}
A.Tb.prototype={
pd(){var s=this.a
return A.a6G(s,s,this.b)}}
A.i6.prototype={
gq(a){var s=this
return A.G(s.a,s.b,s.c,s.d,s.e,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a,b){var s=this
if(b==null)return!1
return b instanceof A.i6&&b.a===s.a&&b.b===s.b&&b.c===s.c&&b.d===s.d&&b.e===s.e},
j(a){return"LineBreakFragment("+this.a+", "+this.b+", "+this.c.j(0)+")"}}
A.XS.prototype={
$2(a,b){var s=this,r=a===B.aK?s.b.length:s.a.f,q=s.a,p=q.a
if(p===B.bo)++q.d
else if(p===B.c2||p===B.cW||p===B.d_){++q.e;++q.d}if(a===B.m)return
p=q.c
s.c.push(new A.i6(a,q.e,q.d,p,r))
q.c=q.f
q.d=q.e=0
q.a=q.b=null},
$S:185}
A.A1.prototype={
m(){this.a.remove()}}
A.SD.prototype={
aQ(a,b){var s,r,q,p,o,n,m,l=this.a.gdE().y
for(s=l.length,r=0;r<l.length;l.length===s||(0,A.C)(l),++r){q=l[r]
for(p=q.x,o=p.length,n=0;n<p.length;p.length===o||(0,A.C)(p),++n){m=p[n]
this.OB(a,b,m)
this.OE(a,b,q,m)}}},
OB(a,b,c){var s,r,q
if(c.gh2())return
s=t.wE.a(c.f.a.cy)
if(s!=null){r=c.EZ()
q=new A.D(r.a,r.b,r.c,r.d)
if(!q.gL(0)){r=q.cn(b)
s.b=!0
a.cf(r,s.a)}}},
OE(a,b,c,d){var s,r,q,p,o,n,m,l,k,j
if(d.gh2())return
if(d.gv_())return
s=d.f.a
r=s.db
q=r==null
p=t.k
if(!q){p.a(r)
o=r}else{o=p.a($.ai().bb())
p=s.a
if(p!=null)o.saf(p)}p=s.gCA()
n=d.d
n.toString
m=a.d
l=m.gan()
n=n===B.o?"ltr":"rtl"
l.direction=n
if(p!==a.e){l.font=p
a.e=p}o.b=!0
p=o.a
m.gbC().i9(p,null)
p=d.d
p.toString
k=p===B.o?d.gh4():d.gi3()
p=c.a
j=d.qh(this.a)
q=q?null:r.gct()
a.Sv(j,b.a+p.r+k,b.b+p.w,s.dx,q)
m.gbC().j3()}}
A.x2.prototype={
gq(a){var s=this
return A.G(s.a,s.b,s.c,s.d,s.e,s.f,s.r,s.w,s.x,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.I(b)!==A.u(s))return!1
return b instanceof A.x2&&b.a===s.a&&b.b===s.b&&b.c===s.c&&b.d===s.d&&b.e===s.e&&b.f===s.f&&b.r===s.r&&b.w===s.w&&b.x===s.x},
j(a){return this.bf(0)}}
A.ih.prototype={
gn0(){var s,r,q,p,o,n=this,m=null,l=n.d
if(l===$){s=n.x
$label0$0:{r=s.length
if(r<=0){q=n.b
break $label0$0}if(r>=1){p=B.b.b6(s,0,r-1)
q=p
if(t.ph.b(q)){q=s[r-1] instanceof A.ov
o=p}else{o=m
q=!1}}else{o=m
q=!1}if(!q)if(t.ph.b(s)){o=s
q=!0}else q=!1
else q=!0
if(q){q=(o&&B.b).gO(o).b
break $label0$0}q=m}n.d!==$&&A.a3()
l=n.d=q}return l},
Lu(a){var s,r,q,p,o,n=A.a([],t.t)
for(s=a.length,r=this.b,q=!1,p=0;p<s;++p){o=a.charCodeAt(p)&64512
if(o!==56320||!q)n.push(r+p)
q=o===55296}return n},
LM(a){var s,r,q=A.a0H("grapheme"),p=A.a([],t.t),o=A.a2x(A.h(q,"segment",[a]))
for(s=this.b;o.p();){r=o.b
r===$&&A.c()
p.push(B.c.Y(r.index)+s)}return p},
gi6(){var s,r,q,p=this,o=p.as
if(o===$){s=p.b
if(p.gn0()===s)r=B.bp
else{s=B.d.a7(p.Q.c,s,p.gn0())
q=self.Intl.Segmenter==null?p.Lu(s):p.LM(s)
if(q.length!==0)q.push(p.gn0())
r=q}p.as!==$&&A.a3()
o=p.as=r}return o},
wD(a,b,c){var s,r,q,p,o=this.gi6()
for(s=c,r=b;r+2<=s;){q=B.f.bZ(r+s,2)
p=o[q]-a
if(p>0){s=q
continue}if(p<0){r=q
continue}return q}return r},
Rx(a,b){var s,r,q,p,o,n,m,l,k,j
for(s=this.x,r=s.length,q=null,p=0;p<s.length;s.length===r||(0,A.C)(s),++p){o=s[p]
if(o.a>=this.gn0())break
if(o.gqj()==null)continue
if(b){n=a.bz$
n===$&&A.c()
m=a.fl$
if(n.y===B.o){m===$&&A.c()
n=m}else{m===$&&A.c()
l=a.c1$
l===$&&A.c()
l=n.a.f-(m+(l+a.c2$))
n=l}m=o.bz$
m===$&&A.c()
l=o.fl$
if(m.y===B.o){l===$&&A.c()
m=o.c1$
m===$&&A.c()
m=l+(m+o.c2$)}else{l===$&&A.c()
m=m.a.f-l}k=n-m}else{n=o.bz$
n===$&&A.c()
m=o.fl$
if(n.y===B.o){m===$&&A.c()
n=m}else{m===$&&A.c()
l=o.c1$
l===$&&A.c()
l=n.a.f-(m+(l+o.c2$))
n=l}m=a.bz$
m===$&&A.c()
l=a.fl$
if(m.y===B.o){l===$&&A.c()
m=a.c1$
m===$&&A.c()
m=l+(m+a.c2$)}else{l===$&&A.c()
m=m.a.f-l}k=n-m}j=q==null?null:q.a
$label0$1:{if(k>0)n=j==null||j>k
else n=!1
if(n){q=new A.tS(k,o)
break $label0$1}if(k===0)return o
continue}}return q==null?null:q.b},
Rw(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null
if(g.gi6().length===0)return f
for(s=g.x,r=s.length,q=f,p=0,o=0;o<s.length;s.length===r||(0,A.C)(s),++o){n=s[o]
m=n.a
if(m>=g.gn0())break
l=n.b
if(l-m===0)continue
for(;m>g.gi6()[p];)++p
if(g.gi6()[p]>=l)continue
m=n.bz$
m===$&&A.c()
l=m.y===B.o
k=n.fl$
if(l){k===$&&A.c()
j=k}else{k===$&&A.c()
j=n.c1$
j===$&&A.c()
j=m.a.f-(k+(j+n.c2$))}if(a<j){if(l){k===$&&A.c()
m=k}else{k===$&&A.c()
l=n.c1$
l===$&&A.c()
l=m.a.f-(k+(l+n.c2$))
m=l}i=m-a}else{if(l){k===$&&A.c()
j=n.c1$
j===$&&A.c()
j=k+(j+n.c2$)}else{k===$&&A.c()
j=m.a.f-k}if(a>j){if(l){k===$&&A.c()
m=n.c1$
m===$&&A.c()
m=k+(m+n.c2$)}else{k===$&&A.c()
m=m.a.f-k}i=a-m}else return n}h=q==null?f:q.a
if(h==null||h>i)q=new A.tS(i,n)}return q==null?f:q.b},
gq(a){var s=this
return A.G(s.a,s.b,s.c,s.e,s.f,s.r,s.w,s.x,s.y,null,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.I(b)!==A.u(s))return!1
return b instanceof A.ih&&b.a.i(0,s.a)&&b.b===s.b&&b.c===s.c&&b.e===s.e&&b.f===s.f&&b.r===s.r&&b.w===s.w&&b.x===s.x&&b.y===s.y&&!0},
j(a){return B.J5.j(0)+"("+this.b+", "+this.c+", "+this.a.j(0)+")"}}
A.oz.prototype={
i(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.I(b)!==A.u(s))return!1
return b instanceof A.oz&&b.a===s.a&&b.b==s.b&&b.c==s.c&&b.e==s.e&&b.f==s.f&&b.r==s.r&&b.w==s.w&&J.d(b.x,s.x)&&b.z==s.z&&J.d(b.Q,s.Q)},
gq(a){var s=this
return A.G(s.a,s.b,s.c,s.d,s.e,s.f,s.r,s.w,s.x,s.z,s.Q,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
j(a){return this.bf(0)}}
A.oA.prototype={
gCU(){var s=this.y
return s.length===0?"sans-serif":s},
gCA(){var s,r,q,p,o=this,n=o.dy
if(n==null){n=o.f
s=o.at
r=o.gCU()
q=n==null?null:A.a0K(n.a)
if(q==null)q="normal"
p=B.c.cT(s==null?14:s)
n=A.Yu(r)
n.toString
n=o.dy="normal "+q+" "+p+"px "+n}return n},
i(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
return b instanceof A.oA&&J.d(b.a,s.a)&&J.d(b.b,s.b)&&J.d(b.c,s.c)&&b.d==s.d&&b.f==s.f&&b.w==s.w&&b.CW==s.CW&&b.y===s.y&&b.at==s.at&&b.ax==s.ax&&b.ay==s.ay&&b.ch==s.ch&&b.e==s.e&&J.d(b.cx,s.cx)&&b.cy==s.cy&&b.db==s.db&&A.hM(b.dx,s.dx)&&A.hM(b.z,s.z)&&A.hM(b.Q,s.Q)&&A.hM(b.as,s.as)},
gq(a){var s=this,r=null,q=s.dx,p=s.as,o=s.z,n=o==null?r:A.bs(o),m=q==null?r:A.bs(q)
return A.G(s.a,s.b,s.c,s.d,s.f,s.r,s.w,s.CW,s.y,n,s.at,s.ax,s.ay,s.ch,s.cx,s.cy,s.db,m,s.e,A.G(r,p==null?r:A.bs(p),B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a))},
j(a){return this.bf(0)}}
A.rl.prototype={
i(a,b){if(b==null)return!1
if(this===b)return!0
return b instanceof A.rl&&b.gq(0)===this.gq(0)},
gq(a){var s,r=this,q=r.f
if(q===$){s=A.G(r.a,r.b,r.c,null,null,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)
r.f!==$&&A.a3()
r.f=s
q=s}return q}}
A.S8.prototype={}
A.AH.prototype={
gNo(){var s,r,q,p,o,n,m,l,k,j=this,i=j.d
if(i===$){s=A.aA(self.document,"div")
r=s.style
A.m(r,"visibility","hidden")
A.m(r,"position","absolute")
A.m(r,"top","0")
A.m(r,"left","0")
A.m(r,"display","flex")
A.m(r,"flex-direction","row")
A.m(r,"align-items","baseline")
A.m(r,"margin","0")
A.m(r,"border","0")
A.m(r,"padding","0")
r=j.e
q=j.a
p=q.a
o=r.a
n=o.style
A.m(n,"font-size",""+B.c.cT(q.b)+"px")
m=A.Yu(p)
m.toString
A.m(n,"font-family",m)
l=q.c
if(l==null)k=p==="FlutterTest"?1:null
else k=l
if(k!=null)A.m(n,"line-height",B.c.j(k))
r.b=null
A.m(o.style,"white-space","pre")
r.b=null
A.a2r(o," ")
s.append(o)
r.b=null
j.b.a.append(s)
j.d!==$&&A.a3()
j.d=s
i=s}return i},
glI(){var s,r=this,q=r.f
if(q===$){q=r.c
if(q===$){s=A.aA(self.document,"div")
r.gNo().append(s)
r.c!==$&&A.a3()
r.c=s
q=s}q=q.getBoundingClientRect().bottom
r.f!==$&&A.a3()
r.f=q}return q}}
A.lw.prototype={
D(){return"FragmentFlow."+this.b}}
A.j9.prototype={
gq(a){var s=this
return A.G(s.a,s.b,s.c,s.d,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a,b){var s=this
if(b==null)return!1
return b instanceof A.j9&&b.a===s.a&&b.b===s.b&&b.c==s.c&&b.d===s.d},
j(a){return"BidiFragment("+this.a+", "+this.b+", "+A.f(this.c)+")"}}
A.rV.prototype={
D(){return"_ComparisonResult."+this.b}}
A.bt.prototype={
RA(a){if(a<this.a)return B.JP
if(a>this.b)return B.JO
return B.JN}}
A.kA.prototype={
pb(a){var s,r,q,p,o=this
if(a==null)return o.b
s=o.c
r=s.k(0,a)
if(r!=null)return r
q=o.JM(a)
p=q===-1?o.b:o.a[q].c
s.l(0,a,p)
return p},
JM(a){var s,r,q=this.a,p=q.length
for(s=0;s<p;){r=s+B.f.eH(p-s,1)
switch(q[r].RA(a).a){case 1:s=r+1
break
case 2:p=r
break
case 0:return r}}return-1}}
A.Ip.prototype={}
A.wg.prototype={
gyg(){var s,r=this,q=r.a$
if(q===$){s=t.g.a(A.aU(r.gMl()))
r.a$!==$&&A.a3()
r.a$=s
q=s}return q},
gyh(){var s,r=this,q=r.b$
if(q===$){s=t.g.a(A.aU(r.gMn()))
r.b$!==$&&A.a3()
r.b$=s
q=s}return q},
gyf(){var s,r=this,q=r.c$
if(q===$){s=t.g.a(A.aU(r.gMj()))
r.c$!==$&&A.a3()
r.c$=s
q=s}return q},
op(a){A.bo(a,"compositionstart",this.gyg(),null)
A.bo(a,"compositionupdate",this.gyh(),null)
A.bo(a,"compositionend",this.gyf(),null)},
Mm(a){this.d$=null},
Mo(a){var s,r=globalThis.CompositionEvent
if(r!=null&&a instanceof r){s=a.data
this.d$=s==null?null:s}},
Mk(a){this.d$=null},
Si(a){var s,r,q
if(this.d$==null||a.a==null)return a
s=a.c
r=this.d$.length
q=s-r
if(q<0)return a
return A.or(a.b,q,q+r,s,a.a)}}
A.KD.prototype={
RE(a){var s
if(this.gfk()==null)return
s=$.bV()
if(s!==B.a0)s=s===B.dr||this.gfk()==null
else s=!0
if(s){s=this.gfk()
s.toString
s=A.T(s)
A.h(a,"setAttribute",["enterkeyhint",s==null?t.K.a(s):s])}}}
A.Os.prototype={
gfk(){return null}}
A.KV.prototype={
gfk(){return"enter"}}
A.K3.prototype={
gfk(){return"done"}}
A.Me.prototype={
gfk(){return"go"}}
A.Or.prototype={
gfk(){return"next"}}
A.Pq.prototype={
gfk(){return"previous"}}
A.QS.prototype={
gfk(){return"search"}}
A.Rl.prototype={
gfk(){return"send"}}
A.KE.prototype={
uc(){return A.aA(self.document,"input")},
Ce(a){var s
if(this.gfp()==null)return
s=$.bV()
if(s!==B.a0)s=s===B.dr||this.gfp()==="none"
else s=!0
if(s){s=this.gfp()
s.toString
s=A.T(s)
A.h(a,"setAttribute",["inputmode",s==null?t.K.a(s):s])}}}
A.Ou.prototype={
gfp(){return"none"}}
A.Sx.prototype={
gfp(){return null}}
A.Oz.prototype={
gfp(){return"numeric"}}
A.Jt.prototype={
gfp(){return"decimal"}}
A.OZ.prototype={
gfp(){return"tel"}}
A.Ks.prototype={
gfp(){return"email"}}
A.T7.prototype={
gfp(){return"url"}}
A.yk.prototype={
gfp(){return null},
uc(){return A.aA(self.document,"textarea")}}
A.mj.prototype={
D(){return"TextCapitalization."+this.b}}
A.rj.prototype={
wK(a){var s,r,q,p="sentences",o="setAttribute"
switch(this.a.a){case 0:s=$.ba()
r=s===B.u?p:"words"
break
case 2:r="characters"
break
case 1:r=p
break
case 3:default:r="off"
break}q=globalThis.HTMLInputElement
if(q!=null&&a instanceof q){s=A.T(r)
A.h(a,o,["autocapitalize",s==null?t.K.a(s):s])}else{q=globalThis.HTMLTextAreaElement
if(q!=null&&a instanceof q){s=A.T(r)
A.h(a,o,["autocapitalize",s==null?t.K.a(s):s])}}}}
A.Kx.prototype={
lF(){var s=this.b,r=A.a([],t.uK)
new A.aB(s,A.q(s).h("aB<1>")).W(0,new A.Ky(this,r))
return r}}
A.Ky.prototype={
$1(a){var s=this.a,r=s.b.k(0,a)
r.toString
this.b.push(A.bw(r,"input",new A.Kz(s,a,r)))},
$S:186}
A.Kz.prototype={
$1(a){var s,r=this.a.c,q=this.b
if(r.k(0,q)==null)throw A.e(A.az("AutofillInfo must have a valid uniqueIdentifier."))
else{r=r.k(0,q)
r.toString
s=A.a2F(this.c)
$.a9().eX("flutter/textinput",B.a4.eN(new A.e3("TextInputClient.updateEditingStateWithTag",[0,A.aC([r.b,s.EX()],t.dR,t.z)])),A.Hj())}},
$S:1}
A.vz.prototype={
BW(a,b){var s,r,q="password",p=this.d,o=this.e,n=globalThis.HTMLInputElement
if(n!=null&&a instanceof n){if(o!=null)a.placeholder=o
s=p==null
if(!s){a.name=p
a.id=p
if(B.d.t(p,q))A.K0(a,q)
else A.K0(a,"text")}s=s?"on":p
a.autocomplete=s}else{n=globalThis.HTMLTextAreaElement
if(n!=null&&a instanceof n){if(o!=null)a.placeholder=o
s=p==null
if(!s){a.name=p
a.id=p}r=A.T(s?"on":p)
A.h(a,"setAttribute",["autocomplete",r==null?t.K.a(r):r])}}},
cP(a){return this.BW(a,!1)}}
A.mk.prototype={}
A.lm.prototype={
gpw(){return Math.min(this.b,this.c)},
gpv(){return Math.max(this.b,this.c)},
EX(){var s=this
return A.aC(["text",s.a,"selectionBase",s.b,"selectionExtent",s.c,"composingBase",s.d,"composingExtent",s.e],t.N,t.z)},
gq(a){var s=this
return A.G(s.a,s.b,s.c,s.d,s.e,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(A.u(s)!==J.I(b))return!1
return b instanceof A.lm&&b.a==s.a&&b.gpw()===s.gpw()&&b.gpv()===s.gpv()&&b.d===s.d&&b.e===s.e},
j(a){return this.bf(0)},
cP(a){var s,r=this,q="setSelectionRange",p=globalThis.HTMLInputElement
if(p!=null&&a instanceof p){a.toString
A.a2j(a,r.a)
A.h(a,q,[r.gpw(),r.gpv()])}else{p=globalThis.HTMLTextAreaElement
if(p!=null&&a instanceof p){a.toString
A.a2n(a,r.a)
A.h(a,q,[r.gpw(),r.gpv()])}else{s=a==null?null:A.ab1(a)
throw A.e(A.aH("Unsupported DOM element type: <"+A.f(s)+"> ("+J.I(a).j(0)+")"))}}}}
A.MV.prototype={}
A.xx.prototype={
eZ(){var s,r=this,q=r.w
if(q!=null){s=r.c
s.toString
q.cP(s)}q=r.d
q===$&&A.c()
if(q.w!=null){r.mK()
q=r.e
if(q!=null)q.cP(r.c)
r.gDh().focus()
r.c.focus()}}}
A.qO.prototype={
eZ(){var s,r=this,q=r.w
if(q!=null){s=r.c
s.toString
q.cP(s)}q=r.d
q===$&&A.c()
if(q.w!=null)A.bH(B.t,new A.Qq(r))},
mr(){if(this.w!=null)this.eZ()
this.c.focus()}}
A.Qq.prototype={
$0(){var s,r=this.a
r.mK()
r.gDh().focus()
r.c.focus()
s=r.e
if(s!=null){r=r.c
r.toString
s.cP(r)}},
$S:0}
A.ob.prototype={
geM(){var s=null,r=this.f
if(r==null){r=this.e.a
r.toString
r=this.f=new A.mk(r,"",-1,-1,s,s,s,s)}return r},
gDh(){var s=this.d
s===$&&A.c()
s=s.w
return s==null?null:s.a},
kw(a,b,c){var s,r,q,p=this,o="none",n="transparent"
p.c=a.a.uc()
p.tV(a)
s=p.c
A.h(s.classList,"add",["flt-text-editing"])
r=s.style
A.m(r,"forced-color-adjust",o)
A.m(r,"white-space","pre-wrap")
A.m(r,"align-content","center")
A.m(r,"position","absolute")
A.m(r,"top","0")
A.m(r,"left","0")
A.m(r,"padding","0")
A.m(r,"opacity","1")
A.m(r,"color",n)
A.m(r,"background-color",n)
A.m(r,"background",n)
A.m(r,"caret-color",n)
A.m(r,"outline",o)
A.m(r,"border",o)
A.m(r,"resize",o)
A.m(r,"text-shadow",o)
A.m(r,"overflow","hidden")
A.m(r,"transform-origin","0 0 0")
q=$.ba()
if(q!==B.aR)q=q===B.u
else q=!0
if(q)A.h(s.classList,"add",["transparentTextEditing"])
s=p.r
if(s!=null){q=p.c
q.toString
s.cP(q)}s=p.d
s===$&&A.c()
if(s.w==null){s=t.W.a($.a9().gbF().b.k(0,0)).gc8()
q=p.c
q.toString
s.e.append(q)
p.Q=!1}p.mr()
p.b=!0
p.x=c
p.y=b},
tV(a){var s,r,q,p,o,n=this,m="setAttribute"
n.d=a
s=n.c
if(a.c){s.toString
r=A.T("readonly")
A.h(s,m,["readonly",r==null?t.K.a(r):r])}else{s.toString
A.h(s,"removeAttribute",["readonly"])}if(a.d){s=n.c
s.toString
r=A.T("password")
A.h(s,m,["type",r==null?t.K.a(r):r])}if(a.a===B.hM){s=n.c
s.toString
r=A.T("none")
A.h(s,m,["inputmode",r==null?t.K.a(r):r])}q=A.abj(a.b)
s=n.c
s.toString
q.RE(s)
p=a.r
s=n.c
if(p!=null){s.toString
p.BW(s,!0)}else{s.toString
r=A.T("off")
A.h(s,m,["autocomplete",r==null?t.K.a(r):r])}o=a.e?"on":"off"
s=n.c
s.toString
r=A.T(o)
A.h(s,m,["autocorrect",r==null?t.K.a(r):r])},
mr(){this.eZ()},
lE(){var s,r,q=this,p=q.d
p===$&&A.c()
p=p.w
if(p!=null)B.b.G(q.z,p.lF())
p=q.z
s=q.c
s.toString
r=q.gmk()
p.push(A.bw(s,"input",r))
s=q.c
s.toString
p.push(A.bw(s,"keydown",q.gmD()))
p.push(A.bw(self.document,"selectionchange",r))
r=q.c
r.toString
A.bo(r,"beforeinput",t.g.a(A.aU(q.gpe())),null)
r=q.c
r.toString
q.op(r)
r=q.c
r.toString
p.push(A.bw(r,"blur",new A.Jw(q)))
q.pQ()},
wd(a){this.w=a
if(this.b)this.eZ()},
we(a){var s
this.r=a
if(this.b){s=this.c
s.toString
a.cP(s)}},
dK(){var s,r,q,p,o=this,n=null
o.b=!1
o.w=o.r=o.f=o.e=null
for(s=o.z,r=0;r<s.length;++r){q=s[r]
p=q.b
p.removeEventListener.apply(p,[q.a,q.c])}B.b.F(s)
s=o.c
s.toString
A.dW(s,"compositionstart",o.gyg(),n)
A.dW(s,"compositionupdate",o.gyh(),n)
A.dW(s,"compositionend",o.gyf(),n)
if(o.Q){s=o.d
s===$&&A.c()
s=s.w
s=(s==null?n:s.a)!=null}else s=!1
q=o.c
if(s){q.blur()
s=o.c
s.toString
A.Ho(s,!0,!1,!0)
s=o.d
s===$&&A.c()
s=s.w
if(s!=null){q=s.e
s=s.a
$.Hr.l(0,q,s)
A.Ho(s,!0,!1,!0)}}else q.remove()
o.c=null},
wM(a){var s
this.e=a
if(this.b)s=!(a.b>=0&&a.c>=0)
else s=!0
if(s)return
a.cP(this.c)},
eZ(){this.c.focus()},
mK(){var s,r,q=this.d
q===$&&A.c()
q=q.w
q.toString
s=this.c
s.toString
if($.vl().gdB() instanceof A.qO)A.m(s.style,"pointer-events","all")
r=q.a
r.insertBefore(s,q.d)
t.W.a($.a9().gbF().b.k(0,0)).gc8().e.append(r)
this.Q=!0},
Do(a){var s,r,q=this,p=q.c
p.toString
s=q.Si(A.a2F(p))
p=q.d
p===$&&A.c()
if(p.f){q.geM().r=s.d
q.geM().w=s.e
r=A.ael(s,q.e,q.geM())}else r=null
if(!s.i(0,q.e)){q.e=s
q.f=r
q.x.$2(s,r)}q.f=null},
Tb(a){var s,r,q,p=this,o=A.bO(a.data),n=A.bO(a.inputType)
if(n!=null){s=p.e
r=s.b
q=s.c
r=r>q?r:q
if(B.d.t(n,"delete")){p.geM().b=""
p.geM().d=r}else if(n==="insertLineBreak"){p.geM().b="\n"
p.geM().c=r
p.geM().d=r}else if(o!=null){p.geM().b=o
p.geM().c=r
p.geM().d=r}}},
V6(a){var s,r,q=globalThis.KeyboardEvent
if(q!=null&&a instanceof q)if(a.keyCode===13){s=this.y
s.toString
r=this.d
r===$&&A.c()
s.$1(r.b)
if(!(this.d.a instanceof A.yk))a.preventDefault()}},
uz(a,b,c){var s,r=this
r.kw(a,b,c)
r.lE()
s=r.e
if(s!=null)r.wM(s)
r.c.focus()},
pQ(){var s=this,r=s.z,q=s.c
q.toString
r.push(A.bw(q,"mousedown",new A.Jx()))
q=s.c
q.toString
r.push(A.bw(q,"mouseup",new A.Jy()))
q=s.c
q.toString
r.push(A.bw(q,"mousemove",new A.Jz()))}}
A.Jw.prototype={
$1(a){this.a.c.focus()},
$S:1}
A.Jx.prototype={
$1(a){a.preventDefault()},
$S:1}
A.Jy.prototype={
$1(a){a.preventDefault()},
$S:1}
A.Jz.prototype={
$1(a){a.preventDefault()},
$S:1}
A.MG.prototype={
kw(a,b,c){var s,r=this
r.qE(a,b,c)
s=r.c
s.toString
a.a.Ce(s)
s=r.d
s===$&&A.c()
if(s.w!=null)r.mK()
s=r.c
s.toString
a.x.wK(s)},
mr(){A.m(this.c.style,"transform","translate(-9999px, -9999px)")
this.p1=!1},
lE(){var s,r,q,p=this,o=p.d
o===$&&A.c()
o=o.w
if(o!=null)B.b.G(p.z,o.lF())
o=p.z
s=p.c
s.toString
r=p.gmk()
o.push(A.bw(s,"input",r))
s=p.c
s.toString
o.push(A.bw(s,"keydown",p.gmD()))
o.push(A.bw(self.document,"selectionchange",r))
r=p.c
r.toString
A.bo(r,"beforeinput",t.g.a(A.aU(p.gpe())),null)
r=p.c
r.toString
p.op(r)
r=p.c
r.toString
o.push(A.bw(r,"focus",new A.MJ(p)))
p.JB()
q=new A.ma()
$.nn()
q.qv()
r=p.c
r.toString
o.push(A.bw(r,"blur",new A.MK(p,q)))},
wd(a){var s=this
s.w=a
if(s.b&&s.p1)s.eZ()},
dK(){this.GU()
var s=this.ok
if(s!=null)s.b3()
this.ok=null},
JB(){var s=this.c
s.toString
this.z.push(A.bw(s,"click",new A.MH(this)))},
Ao(){var s=this.ok
if(s!=null)s.b3()
this.ok=A.bH(B.aW,new A.MI(this))},
eZ(){var s,r
this.c.focus()
s=this.w
if(s!=null){r=this.c
r.toString
s.cP(r)}}}
A.MJ.prototype={
$1(a){this.a.Ao()},
$S:1}
A.MK.prototype={
$1(a){var s=A.co(this.b.gCV(),0).a<2e5,r=self.document.hasFocus()&&s,q=this.a
if(r)q.c.focus()
else q.a.qp()},
$S:1}
A.MH.prototype={
$1(a){var s=this.a
if(s.p1){s.mr()
s.Ao()}},
$S:1}
A.MI.prototype={
$0(){var s=this.a
s.p1=!0
s.eZ()},
$S:0}
A.HX.prototype={
kw(a,b,c){var s,r,q=this
q.qE(a,b,c)
s=q.c
s.toString
a.a.Ce(s)
s=q.d
s===$&&A.c()
if(s.w!=null)q.mK()
else{s=t.W.a($.a9().gbF().b.k(0,0)).gc8()
r=q.c
r.toString
s.e.append(r)}s=q.c
s.toString
a.x.wK(s)},
lE(){var s,r,q=this,p=q.d
p===$&&A.c()
p=p.w
if(p!=null)B.b.G(q.z,p.lF())
p=q.z
s=q.c
s.toString
r=q.gmk()
p.push(A.bw(s,"input",r))
s=q.c
s.toString
p.push(A.bw(s,"keydown",q.gmD()))
p.push(A.bw(self.document,"selectionchange",r))
r=q.c
r.toString
A.bo(r,"beforeinput",t.g.a(A.aU(q.gpe())),null)
r=q.c
r.toString
q.op(r)
r=q.c
r.toString
p.push(A.bw(r,"blur",new A.HY(q)))
q.pQ()},
eZ(){var s,r
this.c.focus()
s=this.w
if(s!=null){r=this.c
r.toString
s.cP(r)}}}
A.HY.prototype={
$1(a){var s=this.a
if(self.document.hasFocus())s.c.focus()
else s.a.qp()},
$S:1}
A.L5.prototype={
kw(a,b,c){var s
this.qE(a,b,c)
s=this.d
s===$&&A.c()
if(s.w!=null)this.mK()},
lE(){var s,r,q=this,p=q.d
p===$&&A.c()
p=p.w
if(p!=null)B.b.G(q.z,p.lF())
p=q.z
s=q.c
s.toString
r=q.gmk()
p.push(A.bw(s,"input",r))
s=q.c
s.toString
p.push(A.bw(s,"keydown",q.gmD()))
s=q.c
s.toString
A.bo(s,"beforeinput",t.g.a(A.aU(q.gpe())),null)
s=q.c
s.toString
q.op(s)
s=q.c
s.toString
p.push(A.bw(s,"keyup",new A.L7(q)))
s=q.c
s.toString
p.push(A.bw(s,"select",r))
r=q.c
r.toString
p.push(A.bw(r,"blur",new A.L8(q)))
q.pQ()},
OX(){A.bH(B.t,new A.L6(this))},
eZ(){var s,r,q=this
q.c.focus()
s=q.w
if(s!=null){r=q.c
r.toString
s.cP(r)}s=q.e
if(s!=null){r=q.c
r.toString
s.cP(r)}}}
A.L7.prototype={
$1(a){this.a.Do(a)},
$S:1}
A.L8.prototype={
$1(a){this.a.OX()},
$S:1}
A.L6.prototype={
$0(){this.a.c.focus()},
$S:0}
A.Sm.prototype={}
A.Sr.prototype={
d8(a){var s=a.b
if(s!=null&&s!==this.a&&a.c){a.c=!1
a.gdB().dK()}a.b=this.a
a.d=this.b}}
A.Sy.prototype={
d8(a){var s=a.gdB(),r=a.d
r.toString
s.tV(r)}}
A.St.prototype={
d8(a){a.gdB().wM(this.a)}}
A.Sw.prototype={
d8(a){if(!a.c)a.PY()}}
A.Ss.prototype={
d8(a){a.gdB().wd(this.a)}}
A.Sv.prototype={
d8(a){a.gdB().we(this.a)}}
A.Sl.prototype={
d8(a){if(a.c){a.c=!1
a.gdB().dK()}}}
A.So.prototype={
d8(a){if(a.c){a.c=!1
a.gdB().dK()}}}
A.Su.prototype={
d8(a){}}
A.Sq.prototype={
d8(a){}}
A.Sp.prototype={
d8(a){}}
A.Sn.prototype={
d8(a){a.qp()
if(this.a)A.aiE()
A.ahn()}}
A.Z8.prototype={
$2(a,b){var s=t.sM
s=A.ei(new A.iD(A.h(b,"getElementsByClassName",["submitBtn"]),s),s.h("v.E"),t.e)
A.q(s).y[1].a(J.j3(s.a)).click()},
$S:187}
A.S9.prototype={
TW(a,b){var s,r,q,p,o,n,m,l=B.a4.ea(a)
switch(l.a){case"TextInput.setClient":s=l.b
r=J.b4(s)
q=new A.Sr(A.cV(r.k(s,0)),A.a3a(t.a.a(r.k(s,1))))
break
case"TextInput.updateConfig":this.a.d=A.a3a(t.a.a(l.b))
q=B.vu
break
case"TextInput.setEditingState":q=new A.St(A.a2G(t.a.a(l.b)))
break
case"TextInput.show":q=B.vs
break
case"TextInput.setEditableSizeAndTransform":q=new A.Ss(A.abc(t.a.a(l.b)))
break
case"TextInput.setStyle":s=t.a.a(l.b)
p=A.cV(s.k(0,"textAlignIndex"))
o=A.cV(s.k(0,"textDirectionIndex"))
n=A.uV(s.k(0,"fontWeightIndex"))
m=n!=null?A.a0K(n):"normal"
r=A.a5Q(s.k(0,"fontSize"))
if(r==null)r=null
q=new A.Sv(new A.Ki(r,m,A.bO(s.k(0,"fontFamily")),B.zd[p],B.eT[o]))
break
case"TextInput.clearClient":q=B.vn
break
case"TextInput.hide":q=B.vo
break
case"TextInput.requestAutofill":q=B.vp
break
case"TextInput.finishAutofillContext":q=new A.Sn(A.kS(l.b))
break
case"TextInput.setMarkedTextRect":q=B.vr
break
case"TextInput.setCaretRect":q=B.vq
break
default:$.a9().cr(b,null)
return}q.d8(this.a)
new A.Sa(b).$0()}}
A.Sa.prototype={
$0(){$.a9().cr(this.a,B.C.aM([!0]))},
$S:0}
A.MD.prototype={
glO(){var s=this.a
if(s===$){s!==$&&A.a3()
s=this.a=new A.S9(this)}return s},
gdB(){var s,r,q,p,o=this,n=null,m=o.f
if(m===$){s=$.aY
if((s==null?$.aY=A.cp():s).a){s=A.adR(o)
r=s}else{s=$.ba()
if(s===B.u){q=$.bV()
q=q===B.a0}else q=!1
if(q)p=new A.MG(o,A.a([],t.uK),$,$,$,n)
else if(s===B.u)p=new A.qO(o,A.a([],t.uK),$,$,$,n)
else{if(s===B.aR){q=$.bV()
q=q===B.dr}else q=!1
if(q)p=new A.HX(o,A.a([],t.uK),$,$,$,n)
else p=s===B.aS?new A.L5(o,A.a([],t.uK),$,$,$,n):A.abK(o)}r=p}o.f!==$&&A.a3()
m=o.f=r}return m},
PY(){var s,r,q=this
q.c=!0
s=q.gdB()
r=q.d
r.toString
s.uz(r,new A.ME(q),new A.MF(q))},
qp(){var s,r=this
if(r.c){r.c=!1
r.gdB().dK()
r.glO()
s=r.b
$.a9().eX("flutter/textinput",B.a4.eN(new A.e3("TextInputClient.onConnectionClosed",[s])),A.Hj())}}}
A.MF.prototype={
$2(a,b){var s,r,q="flutter/textinput",p=this.a
if(p.d.f){p.glO()
p=p.b
s=t.N
r=t.z
$.a9().eX(q,B.a4.eN(new A.e3("TextInputClient.updateEditingStateWithDeltas",[p,A.aC(["deltas",A.a([A.aC(["oldText",b.a,"deltaText",b.b,"deltaStart",b.c,"deltaEnd",b.d,"selectionBase",b.e,"selectionExtent",b.f,"composingBase",b.r,"composingExtent",b.w],s,r)],t.cs)],s,r)])),A.Hj())}else{p.glO()
p=p.b
$.a9().eX(q,B.a4.eN(new A.e3("TextInputClient.updateEditingState",[p,a.EX()])),A.Hj())}},
$S:188}
A.ME.prototype={
$1(a){var s=this.a
s.glO()
s=s.b
$.a9().eX("flutter/textinput",B.a4.eN(new A.e3("TextInputClient.performAction",[s,a])),A.Hj())},
$S:192}
A.Ki.prototype={
cP(a){var s=this,r=a.style
A.m(r,"text-align",A.aiS(s.d,s.e))
A.m(r,"font",s.b+" "+A.f(s.a)+"px "+A.f(A.Yu(s.c)))}}
A.Kg.prototype={
cP(a){var s=A.fA(this.c),r=a.style
A.m(r,"width",A.f(this.a)+"px")
A.m(r,"height",A.f(this.b)+"px")
A.m(r,"transform",s)}}
A.Kh.prototype={
$1(a){return A.uW(a)},
$S:193}
A.ry.prototype={
D(){return"TransformKind."+this.b}}
A.y3.prototype={
gv(a){return this.b.b},
k(a,b){var s=this.c.k(0,b)
return s==null?null:s.d.b},
xy(a,b){var s,r,q,p=this.b
p.oq(new A.EU(a,b))
s=this.c
r=p.a
q=r.b.nt()
q.toString
s.l(0,a,q)
if(p.b>this.a){s.A(0,r.a.goW().a)
p.dQ(0)}}}
A.b5.prototype={
aD(a){var s=a.a,r=this.a
r[15]=s[15]
r[14]=s[14]
r[13]=s[13]
r[12]=s[12]
r[11]=s[11]
r[10]=s[10]
r[9]=s[9]
r[8]=s[8]
r[7]=s[7]
r[6]=s[6]
r[5]=s[5]
r[4]=s[4]
r[3]=s[3]
r[2]=s[2]
r[1]=s[1]
r[0]=s[0]},
k(a,b){return this.a[b]},
ai(a,b){var s=this.a,r=s[0],q=s[4],p=s[8],o=s[12],n=s[1],m=s[5],l=s[9],k=s[13],j=s[2],i=s[6],h=s[10],g=s[14],f=s[3],e=s[7],d=s[11],c=s[15]
s[12]=r*a+q*b+p*0+o
s[13]=n*a+m*b+l*0+k
s[14]=j*a+i*b+h*0+g
s[15]=f*a+e*b+d*0+c},
Wx(a){return this.ai(a,0)},
kQ(a,b,c){var s=b==null?a:b,r=c==null?a:c,q=this.a
q[15]=q[15]
q[0]=q[0]*a
q[1]=q[1]*a
q[2]=q[2]*a
q[3]=q[3]*a
q[4]=q[4]*s
q[5]=q[5]*s
q[6]=q[6]*s
q[7]=q[7]*s
q[8]=q[8]*r
q[9]=q[9]*r
q[10]=q[10]*r
q[11]=q[11]*r
q[12]=q[12]
q[13]=q[13]
q[14]=q[14]},
al(a){return this.kQ(a,null,null)},
mJ(a,b,c){var s=this.a,r=s[0],q=s[4],p=s[8],o=s[12],n=s[1],m=s[5],l=s[9],k=s[13],j=s[2],i=s[6],h=s[10],g=s[14],f=1/(s[3]*a+s[7]*b+s[11]*c+s[15])
return new A.EY((r*a+q*b+p*c+o)*f,(n*a+m*b+l*c+k)*f,(j*a+i*b+h*c+g)*f)},
mv(){var s=this.a
return s[0]===1&&s[1]===0&&s[2]===0&&s[3]===0&&s[4]===0&&s[5]===1&&s[6]===0&&s[7]===0&&s[8]===0&&s[9]===0&&s[10]===1&&s[11]===0&&s[12]===0&&s[13]===0&&s[14]===0&&s[15]===1},
jd(a,b,c){var s=this.a
s[14]=c
s[13]=b
s[12]=a},
fi(b5){var s,r,q,p,o=b5.a,n=o[0],m=o[1],l=o[2],k=o[3],j=o[4],i=o[5],h=o[6],g=o[7],f=o[8],e=o[9],d=o[10],c=o[11],b=o[12],a=o[13],a0=o[14],a1=o[15],a2=n*i-m*j,a3=n*h-l*j,a4=n*g-k*j,a5=m*h-l*i,a6=m*g-k*i,a7=l*g-k*h,a8=f*a-e*b,a9=f*a0-d*b,b0=f*a1-c*b,b1=e*a0-d*a,b2=e*a1-c*a,b3=d*a1-c*a0,b4=a2*b3-a3*b2+a4*b1+a5*b0-a6*a9+a7*a8
if(b4===0){this.aD(b5)
return 0}s=1/b4
r=this.a
r[0]=(i*b3-h*b2+g*b1)*s
r[1]=(-m*b3+l*b2-k*b1)*s
r[2]=(a*a7-a0*a6+a1*a5)*s
r[3]=(-e*a7+d*a6-c*a5)*s
q=-j
r[4]=(q*b3+h*b0-g*a9)*s
r[5]=(n*b3-l*b0+k*a9)*s
p=-b
r[6]=(p*a7+a0*a4-a1*a3)*s
r[7]=(f*a7-d*a4+c*a3)*s
r[8]=(j*b2-i*b0+g*a8)*s
r[9]=(-n*b2+m*b0-k*a8)*s
r[10]=(b*a6-a*a4+a1*a2)*s
r[11]=(-f*a6+e*a4-c*a2)*s
r[12]=(q*b1+i*a9-h*a8)*s
r[13]=(n*b1-m*a9+l*a8)*s
r[14]=(p*a5+a*a3-a0*a2)*s
r[15]=(f*a5-e*a3+d*a2)*s
return b4},
cc(b5){var s=this.a,r=s[15],q=s[0],p=s[4],o=s[8],n=s[12],m=s[1],l=s[5],k=s[9],j=s[13],i=s[2],h=s[6],g=s[10],f=s[14],e=s[3],d=s[7],c=s[11],b=b5.a,a=b[15],a0=b[0],a1=b[4],a2=b[8],a3=b[12],a4=b[1],a5=b[5],a6=b[9],a7=b[13],a8=b[2],a9=b[6],b0=b[10],b1=b[14],b2=b[3],b3=b[7],b4=b[11]
s[0]=q*a0+p*a4+o*a8+n*b2
s[4]=q*a1+p*a5+o*a9+n*b3
s[8]=q*a2+p*a6+o*b0+n*b4
s[12]=q*a3+p*a7+o*b1+n*a
s[1]=m*a0+l*a4+k*a8+j*b2
s[5]=m*a1+l*a5+k*a9+j*b3
s[9]=m*a2+l*a6+k*b0+j*b4
s[13]=m*a3+l*a7+k*b1+j*a
s[2]=i*a0+h*a4+g*a8+f*b2
s[6]=i*a1+h*a5+g*a9+f*b3
s[10]=i*a2+h*a6+g*b0+f*b4
s[14]=i*a3+h*a7+g*b1+f*a
s[3]=e*a0+d*a4+c*a8+r*b2
s[7]=e*a1+d*a5+c*a9+r*b3
s[11]=e*a2+d*a6+c*b0+r*b4
s[15]=e*a3+d*a7+c*b1+r*a},
px(a){var s=new A.b5(new Float32Array(16))
s.aD(this)
s.cc(a)
return s},
F0(a){var s=a[0],r=a[1],q=this.a
a[0]=q[0]*s+q[4]*r+q[12]
a[1]=q[1]*s+q[5]*r+q[13]},
j(a){return this.bf(0)}}
A.L2.prototype={
F_(a,b){var s=this.a
this.b=s[12]+s[0]*a+s[4]*b
this.c=s[13]+s[1]*a+s[5]*b}}
A.ws.prototype={
Jd(a){var s=A.ahG(new A.Jn(this))
this.c=s
s.observe(this.b)},
JO(a){this.d.C(0,a)},
av(){this.x4()
var s=this.c
s===$&&A.c()
s.disconnect()
this.d.av()},
gEa(){var s=this.d
return new A.d6(s,A.q(s).h("d6<1>"))},
u6(){var s,r=$.bc().d
if(r==null){s=self.window.devicePixelRatio
r=s===0?1:s}s=this.b
return new A.U(s.clientWidth*r,s.clientHeight*r)},
Cc(a,b){return B.bC}}
A.Jn.prototype={
$2(a,b){new A.ag(a,new A.Jm(),a.$ti.h("ag<am.E,U>")).W(0,this.a.gJN())},
$S:196}
A.Jm.prototype={
$1(a){return new A.U(a.contentRect.width,a.contentRect.height)},
$S:198}
A.wN.prototype={
av(){}}
A.xq.prototype={
Oy(a){this.c.C(0,null)},
av(){this.x4()
var s=this.b
s===$&&A.c()
s.b3()
this.c.av()},
gEa(){var s=this.c
return new A.d6(s,A.q(s).h("d6<1>"))},
u6(){var s,r,q=A.bv("windowInnerWidth"),p=A.bv("windowInnerHeight"),o=self.window.visualViewport,n=$.bc().d
if(n==null){s=self.window.devicePixelRatio
n=s===0?1:s}if(o!=null){s=$.bV()
if(s===B.a0){s=self.document.documentElement.clientWidth
r=self.document.documentElement.clientHeight
q.b=s*n
p.b=r*n}else{s=o.width
if(s==null)s=null
s.toString
q.b=s*n
s=A.a2y(o)
s.toString
p.b=s*n}}else{s=self.window.innerWidth
if(s==null)s=null
s.toString
q.b=s*n
s=A.a2B(self.window)
s.toString
p.b=s*n}return new A.U(q.aX(),p.aX())},
Cc(a,b){var s,r,q,p=$.bc().d
if(p==null){s=self.window.devicePixelRatio
p=s===0?1:s}r=self.window.visualViewport
q=A.bv("windowInnerHeight")
if(r!=null){s=$.bV()
if(s===B.a0&&!b)q.b=self.document.documentElement.clientHeight*p
else{s=A.a2y(r)
s.toString
q.b=s*p}}else{s=A.a2B(self.window)
s.toString
q.b=s*p}return new A.B4(0,0,0,a-q.aX())}}
A.K1.prototype={}
A.Jo.prototype={
gqi(){var s=this.b
s===$&&A.c()
return s},
DE(a){var s
a.gdq().W(0,new A.Jp(this))
s=A.T("custom-element")
if(s==null)s=t.K.a(s)
A.h(this.a,"setAttribute",["flt-embedding",s])},
C_(a){var s
A.m(a.style,"width","100%")
A.m(a.style,"height","100%")
A.m(a.style,"display","block")
A.m(a.style,"overflow","hidden")
A.m(a.style,"position","relative")
this.a.appendChild(a)
if($.Zl()!=null){s=self.window.__flutterState
s.toString
A.h(s,"push",[a])}this.b!==$&&A.ck()
this.b=a}}
A.Jp.prototype={
$1(a){var s=A.T(a.b)
if(s==null)s=t.K.a(s)
A.h(this.a.a,"setAttribute",[a.a,s])},
$S:77}
A.LO.prototype={
gqi(){return self.window},
DE(a){var s,r,q="0",p="none"
a.gdq().W(0,new A.LP(this))
s=self.document.body
s.toString
r=A.T("full-page")
A.h(s,"setAttribute",["flt-embedding",r==null?t.K.a(r):r])
this.JK()
s=self.document.body
s.toString
A.cJ(s,"position","fixed")
A.cJ(s,"top",q)
A.cJ(s,"right",q)
A.cJ(s,"bottom",q)
A.cJ(s,"left",q)
A.cJ(s,"overflow","hidden")
A.cJ(s,"padding",q)
A.cJ(s,"margin",q)
A.cJ(s,"user-select",p)
A.cJ(s,"-webkit-user-select",p)
A.cJ(s,"touch-action",p)},
C_(a){var s=a.style
A.m(s,"position","absolute")
A.m(s,"top","0")
A.m(s,"right","0")
A.m(s,"bottom","0")
A.m(s,"left","0")
self.document.body.append(a)
if($.Zl()!=null){s=self.window.__flutterState
s.toString
A.h(s,"push",[a])}},
JK(){var s,r,q=self.document.head
q.toString
s=t.sM
s=A.ei(new A.iD(A.h(q,"querySelectorAll",['meta[name="viewport"]']),s),s.h("v.E"),t.e)
q=J.ao(s.a)
s=A.q(s)
s=s.h("@<1>").Z(s.y[1]).y[1]
for(;q.p();)s.a(q.gB()).remove()
r=A.aA(self.document,"meta")
q=A.T("")
A.h(r,"setAttribute",["flt-viewport",q==null?t.K.a(q):q])
r.name="viewport"
r.content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
self.document.head.append(r)
if($.Zl()!=null){q=self.window.__flutterState
q.toString
A.h(q,"push",[r])}}}
A.LP.prototype={
$1(a){var s,r=self.document.body
r.toString
s=A.T(a.b)
if(s==null)s=t.K.a(s)
A.h(r,"setAttribute",[a.a,s])},
$S:77}
A.oQ.prototype={
k(a,b){return this.b.k(0,b)},
EB(a,b){var s=a.a
this.b.l(0,s,a)
if(b!=null)this.c.l(0,s,b)
this.d.C(0,s)
return a},
VZ(a){return this.EB(a,null)},
CN(a){var s,r=this.b,q=r.k(0,a)
if(q==null)return null
r.A(0,a)
s=this.c.A(0,a)
this.e.C(0,a)
q.m()
return s}}
A.Y8.prototype={
$0(){return null},
$S:209}
A.fO.prototype={
xx(a,b,c){var s,r=this
r.c.C_(r.gc8().a)
s=A.acQ(r)
r.z!==$&&A.ck()
r.z=s
s=r.ay.gEa().pr(r.gL5())
r.d!==$&&A.ck()
r.d=s
$.hG.push(r.gka())},
m(){var s,r,q=this
if(q.f)return
q.f=!0
s=q.d
s===$&&A.c()
s.b3()
q.ay.av()
s=q.z
s===$&&A.c()
r=s.f
r===$&&A.c()
r.m()
s=s.a
if(s!=null)if(s.a!=null){A.dW(self.document,"touchstart",s.a,null)
s.a=null}q.gc8().a.remove()
$.ai().C8()
q.gwJ().dv()},
gBF(){var s,r,q,p=this,o=p.r
if(o===$){s=p.gc8().r
r=A.a1B(B.e9)
q=A.a1B(B.ea)
s.append(r)
s.append(q)
p.r!==$&&A.a3()
o=p.r=new A.HJ(r,q)}return o},
gCg(){var s,r=this,q=r.x
if(q===$){s=r.gc8()
r.x!==$&&A.a3()
q=r.x=new A.Jf(s.a)}return q},
gc8(){var s,r,q,p,o,n,m,l,k,j=this,i="flutter-view",h=j.y
if(h===$){s=$.bc().d
if(s==null){s=self.window.devicePixelRatio
if(s===0)s=1}r=A.aA(self.document,i)
q=A.aA(self.document,"flt-glass-pane")
p=A.T(A.aC(["mode","open","delegatesFocus",!1],t.N,t.z))
p=A.h(q,"attachShadow",[p==null?t.K.a(p):p])
o=A.aA(self.document,"flt-scene-host")
n=A.aA(self.document,"flt-text-editing-host")
m=A.aA(self.document,"flt-semantics-host")
l=A.aA(self.document,"flt-announcement-host")
k=A.T(j.a)
A.h(r,"setAttribute",["flt-view-id",k==null?t.K.a(k):k])
r.appendChild(q)
r.appendChild(n)
r.appendChild(m)
k=$.aY
p.append((k==null?$.aY=A.cp():k).c.a.Eh())
p.append(o)
p.append(l)
k=A.cX().b
A.a4D(i,r,"flt-text-editing-stylesheet",k==null?null:A.a_k(k))
k=A.cX().b
A.a4D("",p,"flt-internals-stylesheet",k==null?null:A.a_k(k))
k=A.cX().gui()
A.m(o.style,"pointer-events","none")
if(k)A.m(o.style,"opacity","0.3")
k=m.style
A.m(k,"position","absolute")
A.m(k,"transform-origin","0 0 0")
A.m(m.style,"transform","scale("+A.f(1/s)+")")
j.y!==$&&A.a3()
h=j.y=new A.K1(r,p,o,n,m,l)}return h},
gwJ(){var s,r=this,q=r.Q
if(q===$){s=A.abl(r.gc8().f)
r.Q!==$&&A.a3()
r.Q=s
q=s}return q},
gi_(){var s=this.as
return s==null?this.as=this.ym():s},
ym(){var s=this.ay.u6()
return s},
L6(a){var s,r=this,q=r.gc8(),p=$.bc().d
if(p==null){p=self.window.devicePixelRatio
if(p===0)p=1}A.m(q.f.style,"transform","scale("+A.f(1/p)+")")
s=r.ym()
q=$.bV()
if(!B.fG.t(0,q)&&!r.NI(s)&&$.vl().c)r.yl(!0)
else{r.as=s
r.yl(!1)}r.b.uX()},
NI(a){var s,r,q=this.as
if(q!=null){s=q.b
r=a.b
if(s!==r&&q.a!==a.a){q=q.a
if(!(s>q&&r<a.a))q=q>s&&a.a<r
else q=!0
if(q)return!0}}return!1},
yl(a){this.ax=this.ay.Cc(this.as.b,a)},
$iLp:1}
A.Cz.prototype={}
A.lo.prototype={
m(){this.H_()
var s=this.ch
if(s!=null)s.m()},
goz(){var s=this.ch
if(s==null){s=$.Zm()
s=this.ch=A.a0G(s)}return s},
lC(){var s=0,r=A.Q(t.H),q,p=this,o,n
var $async$lC=A.R(function(a,b){if(a===1)return A.N(b,r)
while(true)switch(s){case 0:n=p.ch
if(n==null){n=$.Zm()
n=p.ch=A.a0G(n)}if(n instanceof A.r4){s=1
break}o=n.gi5()
n=p.ch
n=n==null?null:n.fC()
s=3
return A.W(t.pz.b(n)?n:A.iF(n,t.H),$async$lC)
case 3:p.ch=A.a4p(o)
case 1:return A.O(q,r)}})
return A.P($async$lC,r)},
ol(){var s=0,r=A.Q(t.H),q,p=this,o,n
var $async$ol=A.R(function(a,b){if(a===1)return A.N(b,r)
while(true)switch(s){case 0:n=p.ch
if(n==null){n=$.Zm()
n=p.ch=A.a0G(n)}if(n instanceof A.pK){s=1
break}o=n.gi5()
n=p.ch
n=n==null?null:n.fC()
s=3
return A.W(t.pz.b(n)?n:A.iF(n,t.H),$async$ol)
case 3:p.ch=A.a3D(o)
case 1:return A.O(q,r)}})
return A.P($async$ol,r)},
lD(a){return this.QD(a)},
QD(a){var s=0,r=A.Q(t.y),q,p=2,o,n=[],m=this,l,k,j
var $async$lD=A.R(function(b,c){if(b===1){o=c
s=p}while(true)switch(s){case 0:k=m.CW
j=new A.bu(new A.af($.a6,t.D),t.m)
m.CW=j.a
s=3
return A.W(k,$async$lD)
case 3:l=!1
p=4
s=7
return A.W(a.$0(),$async$lD)
case 7:l=c
n.push(6)
s=5
break
case 4:n=[2]
case 5:p=2
j.fg()
s=n.pop()
break
case 6:q=l
s=1
break
case 1:return A.O(q,r)
case 2:return A.N(o,r)}})
return A.P($async$lD,r)},
uM(a){return this.Tv(a)},
Tv(a){var s=0,r=A.Q(t.y),q,p=this
var $async$uM=A.R(function(b,c){if(b===1)return A.N(c,r)
while(true)switch(s){case 0:q=p.lD(new A.KB(p,a))
s=1
break
case 1:return A.O(q,r)}})
return A.P($async$uM,r)}}
A.KB.prototype={
$0(){var s=0,r=A.Q(t.y),q,p=this,o,n,m,l,k,j,i,h
var $async$$0=A.R(function(a,b){if(a===1)return A.N(b,r)
while(true)switch(s){case 0:i=B.a4.ea(p.b)
h=t.nV.a(i.b)
case 3:switch(i.a){case"selectMultiEntryHistory":s=5
break
case"selectSingleEntryHistory":s=6
break
case"routeUpdated":s=7
break
case"routeInformationUpdated":s=8
break
default:s=4
break}break
case 5:s=9
return A.W(p.a.ol(),$async$$0)
case 9:q=!0
s=1
break
case 6:s=10
return A.W(p.a.lC(),$async$$0)
case 10:q=!0
s=1
break
case 7:o=p.a
s=11
return A.W(o.lC(),$async$$0)
case 11:o.goz().wQ(A.bO(h.k(0,"routeName")))
q=!0
s=1
break
case 8:n=A.bO(h.k(0,"uri"))
if(n!=null){m=A.kD(n)
o=m.ger().length===0?"/":m.ger()
l=m.ghc()
l=l.gL(l)?null:m.ghc()
o=A.Xk(m.gfo().length===0?null:m.gfo(),o,l).glz()
k=A.n9(o,0,o.length,B.J,!1)}else{o=A.bO(h.k(0,"location"))
o.toString
k=o}o=p.a.goz()
l=h.k(0,"state")
j=A.uU(h.k(0,"replace"))
o.ng(k,j===!0,l)
q=!0
s=1
break
case 4:q=!1
s=1
break
case 1:return A.O(q,r)}})
return A.P($async$$0,r)},
$S:78}
A.B4.prototype={}
A.Cf.prototype={}
A.Cp.prototype={}
A.Dl.prototype={}
A.Dm.prototype={}
A.Dn.prototype={}
A.E5.prototype={
ov(a){this.xf(a)
this.dr$=a.dr$
a.dr$=null},
fV(){this.qK()
this.dr$=null}}
A.E6.prototype={
ov(a){this.xf(a)
this.dr$=a.dr$
a.dr$=null},
fV(){this.qK()
this.dr$=null}}
A.GQ.prototype={}
A.a_j.prototype={}
J.pa.prototype={
i(a,b){return a===b},
gq(a){return A.eD(a)},
j(a){return"Instance of '"+A.zg(a)+"'"},
E(a,b){throw A.e(A.a3L(a,b))},
gbQ(a){return A.br(A.a0v(this))}}
J.pd.prototype={
j(a){return String(a)},
FR(a,b){return b||a},
gq(a){return a?519018:218159},
gbQ(a){return A.br(t.y)},
$ibi:1,
$iH:1}
J.pf.prototype={
i(a,b){return null==b},
j(a){return"null"},
gq(a){return 0},
gbQ(a){return A.br(t.P)},
E(a,b){return this.H6(a,b)},
$ibi:1,
$iaK:1}
J.a1.prototype={$ibh:1}
J.i5.prototype={
gq(a){return 0},
gbQ(a){return B.J_},
j(a){return String(a)}}
J.z6.prototype={}
J.hp.prototype={}
J.de.prototype={
j(a){var s=a[$.a17()]
if(s==null)return this.Hc(a)
return"JavaScript function for "+J.cY(s)},
$ijB:1}
J.jK.prototype={
gq(a){return 0},
j(a){return String(a)}}
J.jL.prototype={
gq(a){return 0},
j(a){return String(a)}}
J.t.prototype={
fS(a,b){return new A.cZ(a,A.X(a).h("@<1>").Z(b).h("cZ<1,2>"))},
C(a,b){if(!!a.fixed$length)A.ae(A.aH("add"))
a.push(b)},
j_(a,b){if(!!a.fixed$length)A.ae(A.aH("removeAt"))
if(b<0||b>=a.length)throw A.e(A.Px(b,null))
return a.splice(b,1)[0]},
iL(a,b,c){if(!!a.fixed$length)A.ae(A.aH("insert"))
if(b<0||b>a.length)throw A.e(A.Px(b,null))
a.splice(b,0,c)},
DG(a,b,c){var s,r
if(!!a.fixed$length)A.ae(A.aH("insertAll"))
A.a46(b,0,a.length,"index")
if(!t.he.b(c))c=J.Zs(c)
s=J.c0(c)
a.length=a.length+s
r=b+s
this.b_(a,r,a.length,a,b)
this.de(a,b,r,c)},
dQ(a){if(!!a.fixed$length)A.ae(A.aH("removeLast"))
if(a.length===0)throw A.e(A.nj(a,-1))
return a.pop()},
A(a,b){var s
if(!!a.fixed$length)A.ae(A.aH("remove"))
for(s=0;s<a.length;++s)if(J.d(a[s],b)){a.splice(s,1)
return!0}return!1},
o5(a,b,c){var s,r,q,p=[],o=a.length
for(s=0;s<o;++s){r=a[s]
if(!b.$1(r))p.push(r)
if(a.length!==o)throw A.e(A.bl(a))}q=p.length
if(q===o)return
this.sv(a,q)
for(s=0;s<p.length;++s)a[s]=p[s]},
f2(a,b){return new A.aW(a,b,A.X(a).h("aW<1>"))},
G(a,b){var s
if(!!a.fixed$length)A.ae(A.aH("addAll"))
if(Array.isArray(b)){this.Jt(a,b)
return}for(s=J.ao(b);s.p();)a.push(s.gB())},
Jt(a,b){var s,r=b.length
if(r===0)return
if(a===b)throw A.e(A.bl(a))
for(s=0;s<r;++s)a.push(b[s])},
F(a){if(!!a.fixed$length)A.ae(A.aH("clear"))
a.length=0},
W(a,b){var s,r=a.length
for(s=0;s<r;++s){b.$1(a[s])
if(a.length!==r)throw A.e(A.bl(a))}},
eo(a,b,c){return new A.ag(a,b,A.X(a).h("@<1>").Z(c).h("ag<1,2>"))},
bv(a,b){var s,r=A.aZ(a.length,"",!1,t.N)
for(s=0;s<a.length;++s)r[s]=A.f(a[s])
return r.join(b)},
v2(a){return this.bv(a,"")},
q2(a,b){return A.dl(a,0,A.dR(b,"count",t.S),A.X(a).c)},
f4(a,b){return A.dl(a,b,null,A.X(a).c)},
T2(a,b,c){var s,r,q=a.length
for(s=b,r=0;r<q;++r){s=c.$2(s,a[r])
if(a.length!==q)throw A.e(A.bl(a))}return s},
T3(a,b,c){return this.T2(a,b,c,t.z)},
SZ(a,b,c){var s,r,q=a.length
for(s=0;s<q;++s){r=a[s]
if(b.$1(r))return r
if(a.length!==q)throw A.e(A.bl(a))}throw A.e(A.bA())},
SY(a,b){return this.SZ(a,b,null)},
jg(a,b){var s,r,q,p,o=a.length
for(s=null,r=!1,q=0;q<o;++q){p=a[q]
if(b.$1(p)){if(r)throw A.e(A.a_h())
s=p
r=!0}if(o!==a.length)throw A.e(A.bl(a))}if(r)return s==null?A.X(a).c.a(s):s
throw A.e(A.bA())},
bo(a,b){return a[b]},
b6(a,b,c){if(b<0||b>a.length)throw A.e(A.bB(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw A.e(A.bB(c,b,a.length,"end",null))
if(b===c)return A.a([],A.X(a))
return A.a(a.slice(b,c),A.X(a))},
cL(a,b){return this.b6(a,b,null)},
n5(a,b,c){A.cN(b,c,a.length)
return A.dl(a,b,c,A.X(a).c)},
gJ(a){if(a.length>0)return a[0]
throw A.e(A.bA())},
gO(a){var s=a.length
if(s>0)return a[s-1]
throw A.e(A.bA())},
gjf(a){var s=a.length
if(s===1)return a[0]
if(s===0)throw A.e(A.bA())
throw A.e(A.a_h())},
vV(a,b,c){if(!!a.fixed$length)A.ae(A.aH("removeRange"))
A.cN(b,c,a.length)
a.splice(b,c-b)},
b_(a,b,c,d,e){var s,r,q,p,o
if(!!a.immutable$list)A.ae(A.aH("setRange"))
A.cN(b,c,a.length)
s=c-b
if(s===0)return
A.cF(e,"skipCount")
if(t.j.b(d)){r=d
q=e}else{r=J.HI(d,e).ck(0,!1)
q=0}p=J.b4(r)
if(q+s>p.gv(r))throw A.e(A.a3b())
if(q<b)for(o=s-1;o>=0;--o)a[b+o]=p.k(r,q+o)
else for(o=0;o<s;++o)a[b+o]=p.k(r,q+o)},
de(a,b,c,d){return this.b_(a,b,c,d,0)},
jT(a,b){var s,r=a.length
for(s=0;s<r;++s){if(b.$1(a[s]))return!0
if(a.length!==r)throw A.e(A.bl(a))}return!1},
p_(a,b){var s,r=a.length
for(s=0;s<r;++s){if(!b.$1(a[s]))return!1
if(a.length!==r)throw A.e(A.bl(a))}return!0},
dS(a,b){var s,r,q,p,o
if(!!a.immutable$list)A.ae(A.aH("sort"))
s=a.length
if(s<2)return
if(b==null)b=J.agD()
if(s===2){r=a[0]
q=a[1]
if(b.$2(r,q)>0){a[0]=q
a[1]=r}return}if(A.X(a).c.b(null)){for(p=0,o=0;o<a.length;++o)if(a[o]===void 0){a[o]=null;++p}}else p=0
a.sort(A.ni(b,2))
if(p>0)this.Pg(a,p)},
eD(a){return this.dS(a,null)},
Pg(a,b){var s,r=a.length
for(;s=r-1,r>0;r=s)if(a[s]===null){a[s]=void 0;--b
if(b===0)break}},
hT(a,b){var s,r=a.length
if(0>=r)return-1
for(s=0;s<r;++s)if(J.d(a[s],b))return s
return-1},
v5(a,b){var s,r=a.length,q=r-1
if(q<0)return-1
q>=r
for(s=q;s>=0;--s)if(J.d(a[s],b))return s
return-1},
t(a,b){var s
for(s=0;s<a.length;++s)if(J.d(a[s],b))return!0
return!1},
gL(a){return a.length===0},
gaP(a){return a.length!==0},
j(a){return A.lG(a,"[","]")},
ck(a,b){var s=A.X(a)
return b?A.a(a.slice(0),s):J.lH(a.slice(0),s.c)},
d9(a){return this.ck(a,!0)},
gK(a){return new J.bj(a,a.length,A.X(a).h("bj<1>"))},
gq(a){return A.eD(a)},
gv(a){return a.length},
sv(a,b){if(!!a.fixed$length)A.ae(A.aH("set length"))
if(b<0)throw A.e(A.bB(b,0,null,"newLength",null))
if(b>a.length)A.X(a).c.a(null)
a.length=b},
k(a,b){if(!(b>=0&&b<a.length))throw A.e(A.nj(a,b))
return a[b]},
l(a,b,c){if(!!a.immutable$list)A.ae(A.aH("indexed set"))
if(!(b>=0&&b<a.length))throw A.e(A.nj(a,b))
a[b]=c},
uH(a,b){return A.a2T(a,b,A.X(a).c)},
S(a,b){var s=A.a0(a,!0,A.X(a).c)
this.G(s,b)
return s},
Uj(a,b,c){var s
if(c>=a.length)return-1
for(s=c;s<a.length;++s)if(b.$1(a[s]))return s
return-1},
gbQ(a){return A.br(A.X(a))},
$ia_:1,
$iv:1,
$iJ:1}
J.N4.prototype={}
J.bj.prototype={
gB(){var s=this.d
return s==null?this.$ti.c.a(s):s},
p(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw A.e(A.C(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.i4.prototype={
aq(a,b){var s
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gmw(b)
if(this.gmw(a)===s)return 0
if(this.gmw(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gmw(a){return a===0?1/a<0:a<0},
gwU(a){var s
if(a>0)s=1
else s=a<0?-1:a
return s},
Y(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.e(A.aH(""+a+".toInt()"))},
c_(a){var s,r
if(a>=0){if(a<=2147483647){s=a|0
return a===s?s:s+1}}else if(a>=-2147483648)return a|0
r=Math.ceil(a)
if(isFinite(r))return r
throw A.e(A.aH(""+a+".ceil()"))},
cT(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw A.e(A.aH(""+a+".floor()"))},
bx(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.e(A.aH(""+a+".round()"))},
EQ(a){if(a<0)return-Math.round(-a)
else return Math.round(a)},
hD(a,b,c){if(this.aq(b,c)>0)throw A.e(A.nh(b))
if(this.aq(a,b)<0)return b
if(this.aq(a,c)>0)return c
return a},
P(a,b){var s
if(b>20)throw A.e(A.bB(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gmw(a))return"-"+s
return s},
Wt(a,b){var s
if(b<1||b>21)throw A.e(A.bB(b,1,21,"precision",null))
s=a.toPrecision(b)
if(a===0&&this.gmw(a))return"-"+s
return s},
i4(a,b){var s,r,q,p
if(b<2||b>36)throw A.e(A.bB(b,2,36,"radix",null))
s=a.toString(b)
if(s.charCodeAt(s.length-1)!==41)return s
r=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(s)
if(r==null)A.ae(A.aH("Unexpected toString result: "+s))
s=r[1]
q=+r[3]
p=r[2]
if(p!=null){s+=p
q-=p.length}return s+B.d.X("0",q)},
j(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gq(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
S(a,b){return a+b},
V(a,b){return a-b},
X(a,b){return a*b},
bS(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
js(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.AT(a,b)},
bZ(a,b){return(a|0)===a?a/b|0:this.AT(a,b)},
AT(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.e(A.aH("Result of truncating division is "+A.f(s)+": "+A.f(a)+" ~/ "+A.f(b)))},
Gd(a,b){if(b<0)throw A.e(A.nh(b))
return b>31?0:a<<b>>>0},
PN(a,b){return b>31?0:a<<b>>>0},
eH(a,b){var s
if(a>0)s=this.AE(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
PT(a,b){if(0>b)throw A.e(A.nh(b))
return this.AE(a,b)},
AE(a,b){return b>31?0:a>>>b},
jM(a,b){if(b>31)return 0
return a>>>b},
gbQ(a){return A.br(t.fY)},
$iM:1,
$ied:1}
J.lI.prototype={
gwU(a){var s
if(a>0)s=1
else s=a<0?-1:a
return s},
gbQ(a){return A.br(t.S)},
$ibi:1,
$io:1}
J.pg.prototype={
gbQ(a){return A.br(t.i)},
$ibi:1}
J.fW.prototype={
Ry(a,b){if(b<0)throw A.e(A.nj(a,b))
if(b>=a.length)A.ae(A.nj(a,b))
return a.charCodeAt(b)},
QU(a,b,c){var s=b.length
if(c>s)throw A.e(A.bB(c,0,s,null,null))
return new A.FO(b,a,c)},
X3(a,b){return this.QU(a,b,0)},
S(a,b){return a+b},
SF(a,b){var s=b.length,r=a.length
if(s>r)return!1
return b===this.f7(a,r-s)},
ni(a,b){var s=A.a(a.split(b),t.s)
return s},
kH(a,b,c,d){var s=A.cN(b,c,a.length)
return A.a7t(a,b,s,d)},
cK(a,b,c){var s
if(c<0||c>a.length)throw A.e(A.bB(c,0,a.length,null,null))
s=c+b.length
if(s>a.length)return!1
return b===a.substring(c,s)},
bK(a,b){return this.cK(a,b,0)},
a7(a,b,c){return a.substring(b,A.cN(b,c,a.length))},
f7(a,b){return this.a7(a,b,null)},
Wq(a){return a.toLowerCase()},
F1(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(p.charCodeAt(0)===133){s=J.a3g(p,1)
if(s===o)return""}else s=0
r=o-1
q=p.charCodeAt(r)===133?J.a3h(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
Wz(a){var s=a.trimStart()
if(s.length===0)return s
if(s.charCodeAt(0)!==133)return s
return s.substring(J.a3g(s,1))},
w9(a){var s,r=a.trimEnd(),q=r.length
if(q===0)return r
s=q-1
if(r.charCodeAt(s)!==133)return r
return r.substring(0,J.a3h(r,s))},
X(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.e(B.vb)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
mH(a,b,c){var s=b-a.length
if(s<=0)return a
return this.X(c,s)+a},
pk(a,b,c){var s
if(c<0||c>a.length)throw A.e(A.bB(c,0,a.length,null,null))
s=a.indexOf(b,c)
return s},
hT(a,b){return this.pk(a,b,0)},
UN(a,b,c){var s,r
if(c==null)c=a.length
else if(c<0||c>a.length)throw A.e(A.bB(c,0,a.length,null,null))
s=b.length
r=a.length
if(c+s>r)c=r-s
return a.lastIndexOf(b,c)},
v5(a,b){return this.UN(a,b,null)},
t(a,b){return A.aiJ(a,b,0)},
aq(a,b){var s
if(a===b)s=0
else s=a<b?-1:1
return s},
j(a){return a},
gq(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gbQ(a){return A.br(t.N)},
gv(a){return a.length},
k(a,b){if(!(b>=0&&b<a.length))throw A.e(A.nj(a,b))
return a[b]},
$ibi:1,
$ix:1}
A.fs.prototype={
gK(a){var s=A.q(this)
return new A.vS(J.ao(this.gdZ()),s.h("@<1>").Z(s.y[1]).h("vS<1,2>"))},
gv(a){return J.c0(this.gdZ())},
gL(a){return J.np(this.gdZ())},
gaP(a){return J.HG(this.gdZ())},
f4(a,b){var s=A.q(this)
return A.ei(J.HI(this.gdZ(),b),s.c,s.y[1])},
bo(a,b){return A.q(this).y[1].a(J.vn(this.gdZ(),b))},
gJ(a){return A.q(this).y[1].a(J.j3(this.gdZ()))},
gO(a){return A.q(this).y[1].a(J.HH(this.gdZ()))},
t(a,b){return J.HF(this.gdZ(),b)},
j(a){return J.cY(this.gdZ())}}
A.vS.prototype={
p(){return this.a.p()},
gB(){return this.$ti.y[1].a(this.a.gB())}}
A.je.prototype={
gdZ(){return this.a}}
A.td.prototype={$ia_:1}
A.rT.prototype={
k(a,b){return this.$ti.y[1].a(J.vm(this.a,b))},
l(a,b,c){J.Zq(this.a,b,this.$ti.c.a(c))},
sv(a,b){J.a9C(this.a,b)},
C(a,b){J.ee(this.a,this.$ti.c.a(b))},
A(a,b){return J.a1y(this.a,b)},
dQ(a){return this.$ti.y[1].a(J.a9B(this.a))},
n5(a,b,c){var s=this.$ti
return A.ei(J.a9x(this.a,b,c),s.c,s.y[1])},
b_(a,b,c,d,e){var s=this.$ti
J.a9D(this.a,b,c,A.ei(d,s.y[1],s.c),e)},
de(a,b,c,d){return this.b_(0,b,c,d,0)},
$ia_:1,
$iJ:1}
A.cZ.prototype={
fS(a,b){return new A.cZ(this.a,this.$ti.h("@<1>").Z(b).h("cZ<1,2>"))},
gdZ(){return this.a}}
A.jg.prototype={
C(a,b){return this.a.C(0,this.$ti.c.a(b))},
G(a,b){var s=this.$ti
this.a.G(0,A.ei(b,s.y[1],s.c))},
A(a,b){return this.a.A(0,b)},
hV(a){var s,r=this
if(r.b!=null)return r.KA(a,!0)
s=r.$ti
return new A.jg(r.a.hV(a),null,s.h("@<1>").Z(s.y[1]).h("jg<1,2>"))},
KA(a,b){var s,r=this.b,q=this.$ti,p=q.y[1],o=r==null?A.fZ(p):r.$1$0(p)
for(p=this.a,p=p.gK(p),q=q.y[1];p.p();){s=q.a(p.gB())
if(b===a.t(0,s))o.C(0,s)}return o},
Ko(){var s=this.b,r=this.$ti.y[1],q=s==null?A.fZ(r):s.$1$0(r)
q.G(0,this)
return q},
hf(a){var s=this.b,r=this.$ti.y[1],q=s==null?A.fZ(r):s.$1$0(r)
q.G(0,this)
return q},
$ia_:1,
$ib8:1,
gdZ(){return this.a}}
A.jf.prototype={
fT(a,b,c){var s=this.$ti
return new A.jf(this.a,s.h("@<1>").Z(s.y[1]).Z(b).Z(c).h("jf<1,2,3,4>"))},
T(a){return this.a.T(a)},
k(a,b){return this.$ti.h("4?").a(this.a.k(0,b))},
l(a,b,c){var s=this.$ti
this.a.l(0,s.c.a(b),s.y[1].a(c))},
bj(a,b){var s=this.$ti
return s.y[3].a(this.a.bj(s.c.a(a),new A.IG(this,b)))},
A(a,b){return this.$ti.h("4?").a(this.a.A(0,b))},
W(a,b){this.a.W(0,new A.IF(this,b))},
gb1(){var s=this.$ti
return A.ei(this.a.gb1(),s.c,s.y[2])},
gau(){var s=this.$ti
return A.ei(this.a.gau(),s.y[1],s.y[3])},
gv(a){var s=this.a
return s.gv(s)},
gL(a){var s=this.a
return s.gL(s)},
gaP(a){var s=this.a
return s.gaP(s)},
gdq(){return this.a.gdq().eo(0,new A.IE(this),this.$ti.h("be<3,4>"))}}
A.IG.prototype={
$0(){return this.a.$ti.y[1].a(this.b.$0())},
$S(){return this.a.$ti.h("2()")}}
A.IF.prototype={
$2(a,b){var s=this.a.$ti
this.b.$2(s.y[2].a(a),s.y[3].a(b))},
$S(){return this.a.$ti.h("~(1,2)")}}
A.IE.prototype={
$1(a){var s=this.a.$ti,r=s.y[3]
return new A.be(s.y[2].a(a.a),r.a(a.b),s.h("@<3>").Z(r).h("be<1,2>"))},
$S(){return this.a.$ti.h("be<3,4>(be<1,2>)")}}
A.dE.prototype={
j(a){return"LateInitializationError: "+this.a}}
A.zn.prototype={
j(a){return"ReachabilityError: "+this.a}}
A.ji.prototype={
gv(a){return this.a.length},
k(a,b){return this.a.charCodeAt(b)}}
A.Z3.prototype={
$0(){return A.dc(null,t.P)},
$S:43}
A.Rm.prototype={}
A.a_.prototype={}
A.ap.prototype={
gK(a){var s=this
return new A.bX(s,s.gv(s),A.q(s).h("bX<ap.E>"))},
W(a,b){var s,r=this,q=r.gv(r)
for(s=0;s<q;++s){b.$1(r.bo(0,s))
if(q!==r.gv(r))throw A.e(A.bl(r))}},
gL(a){return this.gv(this)===0},
gJ(a){if(this.gv(this)===0)throw A.e(A.bA())
return this.bo(0,0)},
gO(a){var s=this
if(s.gv(s)===0)throw A.e(A.bA())
return s.bo(0,s.gv(s)-1)},
t(a,b){var s,r=this,q=r.gv(r)
for(s=0;s<q;++s){if(J.d(r.bo(0,s),b))return!0
if(q!==r.gv(r))throw A.e(A.bl(r))}return!1},
bv(a,b){var s,r,q,p=this,o=p.gv(p)
if(b.length!==0){if(o===0)return""
s=A.f(p.bo(0,0))
if(o!==p.gv(p))throw A.e(A.bl(p))
for(r=s,q=1;q<o;++q){r=r+b+A.f(p.bo(0,q))
if(o!==p.gv(p))throw A.e(A.bl(p))}return r.charCodeAt(0)==0?r:r}else{for(q=0,r="";q<o;++q){r+=A.f(p.bo(0,q))
if(o!==p.gv(p))throw A.e(A.bl(p))}return r.charCodeAt(0)==0?r:r}},
f2(a,b){return this.H7(0,b)},
eo(a,b,c){return new A.ag(this,b,A.q(this).h("@<ap.E>").Z(c).h("ag<1,2>"))},
f4(a,b){return A.dl(this,b,null,A.q(this).h("ap.E"))},
ck(a,b){return A.a0(this,b,A.q(this).h("ap.E"))},
d9(a){return this.ck(0,!0)},
hf(a){var s,r=this,q=A.fZ(A.q(r).h("ap.E"))
for(s=0;s<r.gv(r);++s)q.C(0,r.bo(0,s))
return q}}
A.eL.prototype={
qN(a,b,c,d){var s,r=this.b
A.cF(r,"start")
s=this.c
if(s!=null){A.cF(s,"end")
if(r>s)throw A.e(A.bB(r,0,s,"start",null))}},
gLl(){var s=J.c0(this.a),r=this.c
if(r==null||r>s)return s
return r},
gQ_(){var s=J.c0(this.a),r=this.b
if(r>s)return s
return r},
gv(a){var s,r=J.c0(this.a),q=this.b
if(q>=r)return 0
s=this.c
if(s==null||s>=r)return r-q
return s-q},
bo(a,b){var s=this,r=s.gQ_()+b
if(b<0||r>=s.gLl())throw A.e(A.xH(b,s.gv(0),s,null,"index"))
return J.vn(s.a,r)},
f4(a,b){var s,r,q=this
A.cF(b,"count")
s=q.b+b
r=q.c
if(r!=null&&s>=r)return new A.dA(q.$ti.h("dA<1>"))
return A.dl(q.a,s,r,q.$ti.c)},
q2(a,b){var s,r,q,p=this
A.cF(b,"count")
s=p.c
r=p.b
q=r+b
if(s==null)return A.dl(p.a,r,q,p.$ti.c)
else{if(s<q)return p
return A.dl(p.a,r,q,p.$ti.c)}},
ck(a,b){var s,r,q,p=this,o=p.b,n=p.a,m=J.b4(n),l=m.gv(n),k=p.c
if(k!=null&&k<l)l=k
s=l-o
if(s<=0){n=p.$ti.c
return b?J.pc(0,n):J.a_i(0,n)}r=A.aZ(s,m.bo(n,o),b,p.$ti.c)
for(q=1;q<s;++q){r[q]=m.bo(n,o+q)
if(m.gv(n)<l)throw A.e(A.bl(p))}return r},
d9(a){return this.ck(0,!0)}}
A.bX.prototype={
gB(){var s=this.d
return s==null?this.$ti.c.a(s):s},
p(){var s,r=this,q=r.a,p=J.b4(q),o=p.gv(q)
if(r.b!==o)throw A.e(A.bl(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.bo(q,s);++r.c
return!0}}
A.d2.prototype={
gK(a){var s=A.q(this)
return new A.b7(J.ao(this.a),this.b,s.h("@<1>").Z(s.y[1]).h("b7<1,2>"))},
gv(a){return J.c0(this.a)},
gL(a){return J.np(this.a)},
gJ(a){return this.b.$1(J.j3(this.a))},
gO(a){return this.b.$1(J.HH(this.a))},
bo(a,b){return this.b.$1(J.vn(this.a,b))}}
A.jq.prototype={$ia_:1}
A.b7.prototype={
p(){var s=this,r=s.b
if(r.p()){s.a=s.c.$1(r.gB())
return!0}s.a=null
return!1},
gB(){var s=this.a
return s==null?this.$ti.y[1].a(s):s}}
A.ag.prototype={
gv(a){return J.c0(this.a)},
bo(a,b){return this.b.$1(J.vn(this.a,b))}}
A.aW.prototype={
gK(a){return new A.kF(J.ao(this.a),this.b)},
eo(a,b,c){return new A.d2(this,b,this.$ti.h("@<1>").Z(c).h("d2<1,2>"))}}
A.kF.prototype={
p(){var s,r
for(s=this.a,r=this.b;s.p();)if(r.$1(s.gB()))return!0
return!1},
gB(){return this.a.gB()}}
A.er.prototype={
gK(a){var s=this.$ti
return new A.x9(J.ao(this.a),this.b,B.ht,s.h("@<1>").Z(s.y[1]).h("x9<1,2>"))}}
A.x9.prototype={
gB(){var s=this.d
return s==null?this.$ti.y[1].a(s):s},
p(){var s,r,q=this,p=q.c
if(p==null)return!1
for(s=q.a,r=q.b;!p.p();){q.d=null
if(s.p()){q.c=null
p=J.ao(r.$1(s.gB()))
q.c=p}else return!1}q.d=q.c.gB()
return!0}}
A.ku.prototype={
gK(a){return new A.AC(J.ao(this.a),this.b,A.q(this).h("AC<1>"))}}
A.ot.prototype={
gv(a){var s=J.c0(this.a),r=this.b
if(s>r)return r
return s},
$ia_:1}
A.AC.prototype={
p(){if(--this.b>=0)return this.a.p()
this.b=-1
return!1},
gB(){if(this.b<0){this.$ti.c.a(null)
return null}return this.a.gB()}}
A.hh.prototype={
f4(a,b){A.nE(b,"count")
A.cF(b,"count")
return new A.hh(this.a,this.b+b,A.q(this).h("hh<1>"))},
gK(a){return new A.An(J.ao(this.a),this.b)}}
A.ln.prototype={
gv(a){var s=J.c0(this.a)-this.b
if(s>=0)return s
return 0},
f4(a,b){A.nE(b,"count")
A.cF(b,"count")
return new A.ln(this.a,this.b+b,this.$ti)},
$ia_:1}
A.An.prototype={
p(){var s,r
for(s=this.a,r=0;r<this.b;++r)s.p()
this.b=0
return s.p()},
gB(){return this.a.gB()}}
A.r6.prototype={
gK(a){return new A.Ao(J.ao(this.a),this.b)}}
A.Ao.prototype={
p(){var s,r,q=this
if(!q.c){q.c=!0
for(s=q.a,r=q.b;s.p();)if(!r.$1(s.gB()))return!0}return q.a.p()},
gB(){return this.a.gB()}}
A.dA.prototype={
gK(a){return B.ht},
gL(a){return!0},
gv(a){return 0},
gJ(a){throw A.e(A.bA())},
gO(a){throw A.e(A.bA())},
bo(a,b){throw A.e(A.bB(b,0,0,"index",null))},
t(a,b){return!1},
f2(a,b){return this},
eo(a,b,c){return new A.dA(c.h("dA<0>"))},
f4(a,b){A.cF(b,"count")
return this},
ck(a,b){var s=this.$ti.c
return b?J.pc(0,s):J.a_i(0,s)},
d9(a){return this.ck(0,!0)},
hf(a){return A.fZ(this.$ti.c)}}
A.wY.prototype={
p(){return!1},
gB(){throw A.e(A.bA())}}
A.fQ.prototype={
gK(a){return new A.xn(J.ao(this.a),this.b)},
gv(a){return J.c0(this.a)+J.c0(this.b)},
gL(a){return J.np(this.a)&&J.np(this.b)},
gaP(a){return J.HG(this.a)||J.HG(this.b)},
t(a,b){return J.HF(this.a,b)||J.HF(this.b,b)},
gJ(a){var s=J.ao(this.a)
if(s.p())return s.gB()
return J.j3(this.b)},
gO(a){var s,r=J.ao(this.b)
if(r.p()){s=r.gB()
for(;r.p();)s=r.gB()
return s}return J.HH(this.a)}}
A.os.prototype={
bo(a,b){var s=this.a,r=J.b4(s),q=r.gv(s)
if(b<q)return r.bo(s,b)
return J.vn(this.b,b-q)},
gJ(a){var s=this.a,r=J.b4(s)
if(r.gaP(s))return r.gJ(s)
return J.j3(this.b)},
gO(a){var s=this.b,r=J.b4(s)
if(r.gaP(s))return r.gO(s)
return J.HH(this.a)},
$ia_:1}
A.xn.prototype={
p(){var s,r=this
if(r.a.p())return!0
s=r.b
if(s!=null){s=J.ao(s)
r.a=s
r.b=null
return s.p()}return!1},
gB(){return this.a.gB()}}
A.hr.prototype={
gK(a){return new A.mw(J.ao(this.a),this.$ti.h("mw<1>"))}}
A.mw.prototype={
p(){var s,r
for(s=this.a,r=this.$ti.c;s.p();)if(r.b(s.gB()))return!0
return!1},
gB(){return this.$ti.c.a(this.a.gB())}}
A.oN.prototype={
sv(a,b){throw A.e(A.aH("Cannot change the length of a fixed-length list"))},
C(a,b){throw A.e(A.aH("Cannot add to a fixed-length list"))},
A(a,b){throw A.e(A.aH("Cannot remove from a fixed-length list"))},
dQ(a){throw A.e(A.aH("Cannot remove from a fixed-length list"))}}
A.B_.prototype={
l(a,b,c){throw A.e(A.aH("Cannot modify an unmodifiable list"))},
sv(a,b){throw A.e(A.aH("Cannot change the length of an unmodifiable list"))},
C(a,b){throw A.e(A.aH("Cannot add to an unmodifiable list"))},
A(a,b){throw A.e(A.aH("Cannot remove from an unmodifiable list"))},
dQ(a){throw A.e(A.aH("Cannot remove from an unmodifiable list"))},
b_(a,b,c,d,e){throw A.e(A.aH("Cannot modify an unmodifiable list"))},
de(a,b,c,d){return this.b_(0,b,c,d,0)}}
A.mu.prototype={}
A.c5.prototype={
gv(a){return J.c0(this.a)},
bo(a,b){var s=this.a,r=J.b4(s)
return r.bo(s,r.gv(s)-1-b)}}
A.hj.prototype={
gq(a){var s=this._hashCode
if(s!=null)return s
s=664597*B.d.gq(this.a)&536870911
this._hashCode=s
return s},
j(a){return'Symbol("'+this.a+'")'},
i(a,b){if(b==null)return!1
return b instanceof A.hj&&this.a===b.a},
$irf:1}
A.uN.prototype={}
A.eT.prototype={$r:"+(1,2)",$s:1}
A.n0.prototype={$r:"+cacheSize,maxTextLength(1,2)",$s:2}
A.tS.prototype={$r:"+distance,fragment(1,2)",$s:3}
A.EU.prototype={$r:"+key,value(1,2)",$s:4}
A.EV.prototype={$r:"+breaks,graphemes,words(1,2,3)",$s:5}
A.tT.prototype={$r:"+data,event,timeStamp(1,2,3)",$s:6}
A.EW.prototype={$r:"+large,medium,small(1,2,3)",$s:7}
A.EX.prototype={$r:"+queue,target,timer(1,2,3)",$s:8}
A.EY.prototype={$r:"+x,y,z(1,2,3)",$s:9}
A.tU.prototype={$r:"+domBlurListener,domFocusListener,element,semanticsNodeId(1,2,3,4)",$s:10}
A.jj.prototype={}
A.li.prototype={
fT(a,b,c){var s=A.q(this)
return A.a3u(this,s.c,s.y[1],b,c)},
gL(a){return this.gv(this)===0},
gaP(a){return this.gv(this)!==0},
j(a){return A.a_s(this)},
l(a,b,c){A.ZL()},
bj(a,b){A.ZL()},
A(a,b){A.ZL()},
gdq(){return new A.fw(this.SH(),A.q(this).h("fw<be<1,2>>"))},
SH(){var s=this
return function(){var r=0,q=1,p,o,n,m
return function $async$gdq(a,b,c){if(b===1){p=c
r=q}while(true)switch(r){case 0:o=s.gb1(),o=o.gK(o),n=A.q(s),n=n.h("@<1>").Z(n.y[1]).h("be<1,2>")
case 2:if(!o.p()){r=3
break}m=o.gB()
r=4
return a.b=new A.be(m,s.k(0,m),n),1
case 4:r=2
break
case 3:return 0
case 1:return a.c=p,3}}}},
mz(a,b,c,d){var s=A.y(c,d)
this.W(0,new A.Jd(this,b,s))
return s},
$iay:1}
A.Jd.prototype={
$2(a,b){var s=this.b.$2(a,b)
this.c.l(0,s.a,s.b)},
$S(){return A.q(this.a).h("~(1,2)")}}
A.b3.prototype={
gv(a){return this.b.length},
gzz(){var s=this.$keys
if(s==null){s=Object.keys(this.a)
this.$keys=s}return s},
T(a){if(typeof a!="string")return!1
if("__proto__"===a)return!1
return this.a.hasOwnProperty(a)},
k(a,b){if(!this.T(b))return null
return this.b[this.a[b]]},
W(a,b){var s,r,q=this.gzz(),p=this.b
for(s=q.length,r=0;r<s;++r)b.$2(q[r],p[r])},
gb1(){return new A.kJ(this.gzz(),this.$ti.h("kJ<1>"))},
gau(){return new A.kJ(this.b,this.$ti.h("kJ<2>"))}}
A.kJ.prototype={
gv(a){return this.a.length},
gL(a){return 0===this.a.length},
gaP(a){return 0!==this.a.length},
gK(a){var s=this.a
return new A.iJ(s,s.length,this.$ti.h("iJ<1>"))}}
A.iJ.prototype={
gB(){var s=this.d
return s==null?this.$ti.c.a(s):s},
p(){var s=this,r=s.c
if(r>=s.b){s.d=null
return!1}s.d=s.a[r]
s.c=r+1
return!0}}
A.bP.prototype={
hw(){var s,r=this,q=r.$map
if(q==null){s=r.$ti
q=new A.jM(s.h("@<1>").Z(s.y[1]).h("jM<1,2>"))
A.a7_(r.a,q)
r.$map=q}return q},
T(a){return this.hw().T(a)},
k(a,b){return this.hw().k(0,b)},
W(a,b){this.hw().W(0,b)},
gb1(){var s=this.hw()
return new A.aB(s,A.q(s).h("aB<1>"))},
gau(){return this.hw().gau()},
gv(a){return this.hw().a}}
A.o0.prototype={
C(a,b){A.ZM()},
G(a,b){A.ZM()},
A(a,b){A.ZM()}}
A.ek.prototype={
gv(a){return this.b},
gL(a){return this.b===0},
gaP(a){return this.b!==0},
gK(a){var s,r=this,q=r.$keys
if(q==null){q=Object.keys(r.a)
r.$keys=q}s=q
return new A.iJ(s,s.length,r.$ti.h("iJ<1>"))},
t(a,b){if(typeof b!="string")return!1
if("__proto__"===b)return!1
return this.a.hasOwnProperty(b)},
hf(a){return A.dF(this,this.$ti.c)}}
A.d0.prototype={
gv(a){return this.a.length},
gL(a){return this.a.length===0},
gaP(a){return this.a.length!==0},
gK(a){var s=this.a
return new A.iJ(s,s.length,this.$ti.h("iJ<1>"))},
hw(){var s,r,q,p,o=this,n=o.$map
if(n==null){s=o.$ti
n=new A.jM(s.h("@<1>").Z(s.c).h("jM<1,2>"))
for(s=o.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.C)(s),++q){p=s[q]
n.l(0,p,p)}o.$map=n}return n},
t(a,b){return this.hw().T(b)},
hf(a){return A.dF(this,this.$ti.c)}}
A.pe.prototype={
gV8(){var s=this.a
if(s instanceof A.hj)return s
return this.a=new A.hj(s)},
gVE(){var s,r,q,p,o,n=this
if(n.c===1)return B.iP
s=n.d
r=J.b4(s)
q=r.gv(s)-J.c0(n.e)-n.f
if(q===0)return B.iP
p=[]
for(o=0;o<q;++o)p.push(r.k(s,o))
return J.a3e(p)},
gVe(){var s,r,q,p,o,n,m,l,k=this
if(k.c!==0)return B.nM
s=k.e
r=J.b4(s)
q=r.gv(s)
p=k.d
o=J.b4(p)
n=o.gv(p)-q-k.f
if(q===0)return B.nM
m=new A.dD(t.eA)
for(l=0;l<q;++l)m.l(0,new A.hj(r.k(s,l)),o.k(p,n+l))
return new A.jj(m,t.o5)}}
A.Pt.prototype={
$0(){return B.c.cT(1000*this.a.now())},
$S:38}
A.Ps.prototype={
$2(a,b){var s=this.a
s.b=s.b+"$"+a
this.b.push(a)
this.c.push(b);++s.a},
$S:56}
A.SZ.prototype={
fq(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
if(p==null)return null
s=Object.create(null)
r=q.b
if(r!==-1)s.arguments=p[r+1]
r=q.c
if(r!==-1)s.argumentsExpr=p[r+1]
r=q.d
if(r!==-1)s.expr=p[r+1]
r=q.e
if(r!==-1)s.method=p[r+1]
r=q.f
if(r!==-1)s.receiver=p[r+1]
return s}}
A.pX.prototype={
j(a){return"Null check operator used on a null value"}}
A.xL.prototype={
j(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.AZ.prototype={
j(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.yx.prototype={
j(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"},
$icC:1}
A.oC.prototype={}
A.uh.prototype={
j(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$ieK:1}
A.hS.prototype={
j(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.a7w(r==null?"unknown":r)+"'"},
gbQ(a){var s=A.a0E(this)
return A.br(s==null?A.ca(this):s)},
$ijB:1,
gWS(){return this},
$C:"$1",
$R:1,
$D:null}
A.wb.prototype={$C:"$0",$R:0}
A.wc.prototype={$C:"$2",$R:2}
A.AF.prototype={}
A.Ax.prototype={
j(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.a7w(s)+"'"}}
A.l8.prototype={
i(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.l8))return!1
return this.$_target===b.$_target&&this.a===b.a},
gq(a){return(A.kZ(this.a)^A.eD(this.$_target))>>>0},
j(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.zg(this.a)+"'")}}
A.C8.prototype={
j(a){return"Reading static variable '"+this.a+"' during its initialization"}}
A.A2.prototype={
j(a){return"RuntimeError: "+this.a}}
A.Wy.prototype={}
A.dD.prototype={
gv(a){return this.a},
gL(a){return this.a===0},
gaP(a){return this.a!==0},
gb1(){return new A.aB(this,A.q(this).h("aB<1>"))},
gau(){var s=A.q(this)
return A.y6(new A.aB(this,s.h("aB<1>")),new A.N7(this),s.c,s.y[1])},
T(a){var s,r
if(typeof a=="string"){s=this.b
if(s==null)return!1
return s[a]!=null}else if(typeof a=="number"&&(a&0x3fffffff)===a){r=this.c
if(r==null)return!1
return r[a]!=null}else return this.Up(a)},
Up(a){var s=this.d
if(s==null)return!1
return this.mt(s[this.ms(a)],a)>=0},
RH(a){return new A.aB(this,A.q(this).h("aB<1>")).jT(0,new A.N6(this,a))},
G(a,b){b.W(0,new A.N5(this))},
k(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.Uq(b)},
Uq(a){var s,r,q=this.d
if(q==null)return null
s=q[this.ms(a)]
r=this.mt(s,a)
if(r<0)return null
return s[r].b},
l(a,b,c){var s,r,q=this
if(typeof b=="string"){s=q.b
q.xD(s==null?q.b=q.t5():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=q.c
q.xD(r==null?q.c=q.t5():r,b,c)}else q.Us(b,c)},
Us(a,b){var s,r,q,p=this,o=p.d
if(o==null)o=p.d=p.t5()
s=p.ms(a)
r=o[s]
if(r==null)o[s]=[p.t6(a,b)]
else{q=p.mt(r,a)
if(q>=0)r[q].b=b
else r.push(p.t6(a,b))}},
bj(a,b){var s,r,q=this
if(q.T(a)){s=q.k(0,a)
return s==null?A.q(q).y[1].a(s):s}r=b.$0()
q.l(0,a,r)
return r},
A(a,b){var s=this
if(typeof b=="string")return s.Ab(s.b,b)
else if(typeof b=="number"&&(b&0x3fffffff)===b)return s.Ab(s.c,b)
else return s.Ur(b)},
Ur(a){var s,r,q,p,o=this,n=o.d
if(n==null)return null
s=o.ms(a)
r=n[s]
q=o.mt(r,a)
if(q<0)return null
p=r.splice(q,1)[0]
o.B5(p)
if(r.length===0)delete n[s]
return p.b},
F(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.t4()}},
W(a,b){var s=this,r=s.e,q=s.r
for(;r!=null;){b.$2(r.a,r.b)
if(q!==s.r)throw A.e(A.bl(s))
r=r.c}},
xD(a,b,c){var s=a[b]
if(s==null)a[b]=this.t6(b,c)
else s.b=c},
Ab(a,b){var s
if(a==null)return null
s=a[b]
if(s==null)return null
this.B5(s)
delete a[b]
return s.b},
t4(){this.r=this.r+1&1073741823},
t6(a,b){var s,r=this,q=new A.NB(a,b)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.d=s
r.f=s.c=q}++r.a
r.t4()
return q},
B5(a){var s=this,r=a.d,q=a.c
if(r==null)s.e=q
else r.c=q
if(q==null)s.f=r
else q.d=r;--s.a
s.t4()},
ms(a){return J.l(a)&1073741823},
mt(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.d(a[r].a,b))return r
return-1},
j(a){return A.a_s(this)},
t5(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s}}
A.N7.prototype={
$1(a){var s=this.a,r=s.k(0,a)
return r==null?A.q(s).y[1].a(r):r},
$S(){return A.q(this.a).h("2(1)")}}
A.N6.prototype={
$1(a){return J.d(this.a.k(0,a),this.b)},
$S(){return A.q(this.a).h("H(1)")}}
A.N5.prototype={
$2(a,b){this.a.l(0,a,b)},
$S(){return A.q(this.a).h("~(1,2)")}}
A.NB.prototype={}
A.aB.prototype={
gv(a){return this.a.a},
gL(a){return this.a.a===0},
gK(a){var s=this.a,r=new A.po(s,s.r)
r.c=s.e
return r},
t(a,b){return this.a.T(b)},
W(a,b){var s=this.a,r=s.e,q=s.r
for(;r!=null;){b.$1(r.a)
if(q!==s.r)throw A.e(A.bl(s))
r=r.c}}}
A.po.prototype={
gB(){return this.d},
p(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.e(A.bl(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}}}
A.jM.prototype={
ms(a){return A.ahv(a)&1073741823},
mt(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.d(a[r].a,b))return r
return-1}}
A.YP.prototype={
$1(a){return this.a(a)},
$S:57}
A.YQ.prototype={
$2(a,b){return this.a(a,b)},
$S:227}
A.YR.prototype={
$1(a){return this.a(a)},
$S:97}
A.eS.prototype={
gbQ(a){return A.br(this.z3())},
z3(){return A.ahS(this.$r,this.nE())},
j(a){return this.B1(!1)},
B1(a){var s,r,q,p,o,n=this.Lv(),m=this.nE(),l=(a?""+"Record ":"")+"("
for(s=n.length,r="",q=0;q<s;++q,r=", "){l+=r
p=n[q]
if(typeof p=="string")l=l+p+": "
o=m[q]
l=a?l+A.a43(o):l+A.f(o)}l+=")"
return l.charCodeAt(0)==0?l:l},
Lv(){var s,r=this.$s
for(;$.Ws.length<=r;)$.Ws.push(null)
s=$.Ws[r]
if(s==null){s=this.Kv()
$.Ws[r]=s}return s},
Kv(){var s,r,q,p=this.$r,o=p.indexOf("("),n=p.substring(1,o),m=p.substring(o),l=m==="()"?0:m.replace(/[^,]/g,"").length+1,k=t.K,j=J.a3d(l,k)
for(s=0;s<l;++s)j[s]=s
if(n!==""){r=n.split(",")
s=r.length
for(q=l;s>0;){--q;--s
j[q]=r[s]}}return A.xZ(j,k)}}
A.ER.prototype={
nE(){return[this.a,this.b]},
i(a,b){if(b==null)return!1
return b instanceof A.ER&&this.$s===b.$s&&J.d(this.a,b.a)&&J.d(this.b,b.b)},
gq(a){return A.G(this.$s,this.a,this.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)}}
A.ES.prototype={
nE(){return[this.a,this.b,this.c]},
i(a,b){var s=this
if(b==null)return!1
return b instanceof A.ES&&s.$s===b.$s&&J.d(s.a,b.a)&&J.d(s.b,b.b)&&J.d(s.c,b.c)},
gq(a){var s=this
return A.G(s.$s,s.a,s.b,s.c,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)}}
A.ET.prototype={
nE(){return this.a},
i(a,b){if(b==null)return!1
return b instanceof A.ET&&this.$s===b.$s&&A.afd(this.a,b.a)},
gq(a){return A.G(this.$s,A.bs(this.a),B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)}}
A.N3.prototype={
j(a){return"RegExp/"+this.a+"/"+this.b.flags},
gO6(){var s=this,r=s.c
if(r!=null)return r
r=s.b
return s.c=A.a3i(s.a,r.multiline,!r.ignoreCase,r.unicode,r.dotAll,!0)},
pc(a){var s=this.b.exec(a)
if(s==null)return null
return new A.tv(s)},
Gv(a){var s=this.pc(a)
if(s!=null)return s.b[0]
return null},
Lq(a,b){var s,r=this.gO6()
r.lastIndex=b
s=r.exec(a)
if(s==null)return null
return new A.tv(s)}}
A.tv.prototype={
gke(){var s=this.b
return s.index+s[0].length},
k(a,b){return this.b[b]},
$ipx:1,
$ia_I:1}
A.Tm.prototype={
gB(){var s=this.d
return s==null?t.ez.a(s):s},
p(){var s,r,q,p,o,n=this,m=n.b
if(m==null)return!1
s=n.c
r=m.length
if(s<=r){q=n.a
p=q.Lq(m,s)
if(p!=null){n.d=p
o=p.gke()
if(p.b.index===o){if(q.b.unicode){s=n.c
q=s+1
if(q<r){s=m.charCodeAt(s)
if(s>=55296&&s<=56319){s=m.charCodeAt(q)
s=s>=56320&&s<=57343}else s=!1}else s=!1}else s=!1
o=(s?o+1:o)+1}n.c=o
return!0}}n.b=n.d=null
return!1}}
A.rc.prototype={
k(a,b){if(b!==0)A.ae(A.Px(b,null))
return this.c},
$ipx:1}
A.FO.prototype={
gK(a){return new A.X5(this.a,this.b,this.c)},
gJ(a){var s=this.b,r=this.a.indexOf(s,this.c)
if(r>=0)return new A.rc(r,s)
throw A.e(A.bA())}}
A.X5.prototype={
p(){var s,r,q=this,p=q.c,o=q.b,n=o.length,m=q.a,l=m.length
if(p+n>l){q.d=null
return!1}s=m.indexOf(o,p)
if(s<0){q.c=l+1
q.d=null
return!1}r=s+n
q.d=new A.rc(s,o)
q.c=r===q.c?r+1:r
return!0},
gB(){var s=this.d
s.toString
return s}}
A.Ua.prototype={
aX(){var s=this.b
if(s===this)throw A.e(new A.dE("Local '"+this.a+"' has not been initialized."))
return s},
bm(){var s=this.b
if(s===this)throw A.e(A.a3m(this.a))
return s},
sbO(a){var s=this
if(s.b!==s)throw A.e(new A.dE("Local '"+s.a+"' has already been initialized."))
s.b=a}}
A.Vp.prototype={
tg(){var s,r=this,q=r.b
if(q===r){s=r.c.$0()
if(r.b!==r)throw A.e(new A.dE("Local '"+r.a+u.m))
r.b=s
q=s}return q}}
A.pN.prototype={
gbQ(a){return B.IP},
BX(a,b,c){throw A.e(A.aH("Int64List not supported by dart2js."))},
$ibi:1,
$ivN:1}
A.pR.prototype={
gCY(a){return a.BYTES_PER_ELEMENT},
NF(a,b,c,d){var s=A.bB(b,0,c,d,null)
throw A.e(s)},
y3(a,b,c,d){if(b>>>0!==b||b>c)this.NF(a,b,c,d)}}
A.pO.prototype={
gbQ(a){return B.IQ},
gCY(a){return 1},
wv(a,b,c){throw A.e(A.aH("Int64 accessor not supported by dart2js."))},
wN(a,b,c,d){throw A.e(A.aH("Int64 accessor not supported by dart2js."))},
$ibi:1,
$icd:1}
A.lQ.prototype={
gv(a){return a.length},
Ay(a,b,c,d,e){var s,r,q=a.length
this.y3(a,b,q,"start")
this.y3(a,c,q,"end")
if(b>c)throw A.e(A.bB(b,0,c,null,null))
s=c-b
if(e<0)throw A.e(A.cc(e,null))
r=d.length
if(r-e<s)throw A.e(A.az("Not enough elements"))
if(e!==0||r!==s)d=d.subarray(e,e+s)
a.set(d,b)},
$idC:1}
A.id.prototype={
k(a,b){A.hE(b,a,a.length)
return a[b]},
l(a,b,c){A.hE(b,a,a.length)
a[b]=c},
b_(a,b,c,d,e){if(t.Eg.b(d)){this.Ay(a,b,c,d,e)
return}this.xc(a,b,c,d,e)},
de(a,b,c,d){return this.b_(a,b,c,d,0)},
$ia_:1,
$iv:1,
$iJ:1}
A.dI.prototype={
l(a,b,c){A.hE(b,a,a.length)
a[b]=c},
b_(a,b,c,d,e){if(t.Ag.b(d)){this.Ay(a,b,c,d,e)
return}this.xc(a,b,c,d,e)},
de(a,b,c,d){return this.b_(a,b,c,d,0)},
$ia_:1,
$iv:1,
$iJ:1}
A.pP.prototype={
gbQ(a){return B.IU},
b6(a,b,c){return new Float32Array(a.subarray(b,A.iX(b,c,a.length)))},
cL(a,b){return this.b6(a,b,null)},
$ibi:1,
$iLa:1}
A.yn.prototype={
gbQ(a){return B.IV},
b6(a,b,c){return new Float64Array(a.subarray(b,A.iX(b,c,a.length)))},
cL(a,b){return this.b6(a,b,null)},
$ibi:1,
$iLb:1}
A.yo.prototype={
gbQ(a){return B.IX},
k(a,b){A.hE(b,a,a.length)
return a[b]},
b6(a,b,c){return new Int16Array(a.subarray(b,A.iX(b,c,a.length)))},
cL(a,b){return this.b6(a,b,null)},
$ibi:1,
$iMW:1}
A.pQ.prototype={
gbQ(a){return B.IY},
k(a,b){A.hE(b,a,a.length)
return a[b]},
b6(a,b,c){return new Int32Array(a.subarray(b,A.iX(b,c,a.length)))},
cL(a,b){return this.b6(a,b,null)},
$ibi:1,
$iMX:1}
A.yp.prototype={
gbQ(a){return B.IZ},
k(a,b){A.hE(b,a,a.length)
return a[b]},
b6(a,b,c){return new Int8Array(a.subarray(b,A.iX(b,c,a.length)))},
cL(a,b){return this.b6(a,b,null)},
$ibi:1,
$iMY:1}
A.yq.prototype={
gbQ(a){return B.Jc},
k(a,b){A.hE(b,a,a.length)
return a[b]},
b6(a,b,c){return new Uint16Array(a.subarray(b,A.iX(b,c,a.length)))},
cL(a,b){return this.b6(a,b,null)},
$ibi:1,
$iT0:1}
A.yr.prototype={
gbQ(a){return B.Jd},
k(a,b){A.hE(b,a,a.length)
return a[b]},
b6(a,b,c){return new Uint32Array(a.subarray(b,A.iX(b,c,a.length)))},
cL(a,b){return this.b6(a,b,null)},
$ibi:1,
$imt:1}
A.pS.prototype={
gbQ(a){return B.Je},
gv(a){return a.length},
k(a,b){A.hE(b,a,a.length)
return a[b]},
b6(a,b,c){return new Uint8ClampedArray(a.subarray(b,A.iX(b,c,a.length)))},
cL(a,b){return this.b6(a,b,null)},
$ibi:1,
$iT1:1}
A.h0.prototype={
gbQ(a){return B.Jf},
gv(a){return a.length},
k(a,b){A.hE(b,a,a.length)
return a[b]},
b6(a,b,c){return new Uint8Array(a.subarray(b,A.iX(b,c,a.length)))},
cL(a,b){return this.b6(a,b,null)},
$ibi:1,
$ih0:1,
$iix:1}
A.tD.prototype={}
A.tE.prototype={}
A.tF.prototype={}
A.tG.prototype={}
A.e8.prototype={
h(a){return A.uw(v.typeUniverse,this,a)},
Z(a){return A.a5s(v.typeUniverse,this,a)}}
A.CU.prototype={}
A.ur.prototype={
j(a){return A.dt(this.a,null)},
$idN:1}
A.CA.prototype={
j(a){return this.a}}
A.us.prototype={$ihn:1}
A.X7.prototype={
Ew(){var s=this.c
this.c=s+1
return this.a.charCodeAt(s)-$.a8Q()},
VS(){var s=this.c
this.c=s+1
return this.a.charCodeAt(s)},
VQ(){var s=A.cE(this.VS())
if(s===$.a90())return"Dead"
else return s}}
A.X8.prototype={
$1(a){return new A.be(J.a9t(a.b,0),a.a,t.ou)},
$S:231}
A.ps.prototype={
Fx(a,b,c){var s,r,q,p=this.a.k(0,a),o=p==null?null:p.k(0,b)
if(o===255)return c
if(o==null){p=a==null
if((p?"":a).length===0)s=(b==null?"":b).length===0
else s=!1
if(s)return null
p=p?"":a
r=A.ai8(p,b==null?"":b)
if(r!=null)return r
q=A.afZ(b)
if(q!=null)return q}return o}}
A.aT.prototype={
D(){return"LineCharProperty."+this.b}}
A.Tw.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:26}
A.Tv.prototype={
$1(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:233}
A.Tx.prototype={
$0(){this.a.$0()},
$S:41}
A.Ty.prototype={
$0(){this.a.$0()},
$S:41}
A.G3.prototype={
Jr(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(A.ni(new A.Xd(this,b),0),a)
else throw A.e(A.aH("`setTimeout()` not found."))},
b3(){if(self.setTimeout!=null){var s=this.b
if(s==null)return
if(this.a)self.clearTimeout(s)
else self.clearInterval(s)
this.b=null}else throw A.e(A.aH("Canceling a timer."))},
$ia4O:1}
A.Xd.prototype={
$0(){var s=this.a
s.b=null
s.c=1
this.b.$0()},
$S:0}
A.Bq.prototype={
e7(a){var s,r=this
if(a==null)a=r.$ti.c.a(a)
if(!r.b)r.a.hs(a)
else{s=r.a
if(r.$ti.h("a8<1>").b(a))s.xY(a)
else s.lc(a)}},
u5(a,b){var s=this.a
if(this.b)s.dX(a,b)
else s.nu(a,b)}}
A.XL.prototype={
$1(a){return this.a.$2(0,a)},
$S:20}
A.XM.prototype={
$2(a,b){this.a.$2(1,new A.oC(a,b))},
$S:242}
A.Yq.prototype={
$2(a,b){this.a(a,b)},
$S:247}
A.iT.prototype={
gB(){return this.b},
Pq(a,b){var s,r,q
a=a
b=b
s=this.a
for(;!0;)try{r=s(this,a,b)
return r}catch(q){b=q
a=1}},
p(){var s,r,q,p,o=this,n=null,m=0
for(;!0;){s=o.d
if(s!=null)try{if(s.p()){o.b=s.gB()
return!0}else o.d=null}catch(r){n=r
m=1
o.d=null}q=o.Pq(m,n)
if(1===q)return!0
if(0===q){o.b=null
p=o.e
if(p==null||p.length===0){o.a=A.a5l
return!1}o.a=p.pop()
m=0
n=null
continue}if(2===q){m=0
n=null
continue}if(3===q){n=o.c
o.c=null
p=o.e
if(p==null||p.length===0){o.b=null
o.a=A.a5l
throw n
return!1}o.a=p.pop()
m=1
continue}throw A.e(A.az("sync*"))}return!1},
BC(a){var s,r,q=this
if(a instanceof A.fw){s=a.a()
r=q.e
if(r==null)r=q.e=[]
r.push(q.a)
q.a=s
return 2}else{q.d=J.ao(a)
return 2}}}
A.fw.prototype={
gK(a){return new A.iT(this.a())}}
A.vy.prototype={
j(a){return A.f(this.a)},
$ib2:1,
gnj(){return this.b}}
A.d6.prototype={}
A.mA.prototype={
t8(){},
ta(){}}
A.iz.prototype={
gx0(){return new A.d6(this,A.q(this).h("d6<1>"))},
gnU(){return this.c<4},
Ac(a){var s=a.CW,r=a.ch
if(s==null)this.d=r
else s.ch=r
if(r==null)this.e=s
else r.CW=s
a.CW=a
a.ch=a},
AM(a,b,c,d){var s,r,q,p,o,n=this
if((n.c&4)!==0){s=new A.t6($.a6)
A.fD(s.gOi())
if(c!=null)s.c=c
return s}s=$.a6
r=d?1:0
A.a51(s,b)
q=c==null?A.a6D():c
p=new A.mA(n,a,q,s,r,A.q(n).h("mA<1>"))
p.CW=p
p.ch=p
p.ay=n.c&1
o=n.e
n.e=p
p.ch=null
p.CW=o
if(o==null)n.d=p
else o.ch=p
if(n.d===p)A.Hn(n.a)
return p},
A0(a){var s,r=this
A.q(r).h("mA<1>").a(a)
if(a.ch===a)return null
s=a.ay
if((s&2)!==0)a.ay=s|4
else{r.Ac(a)
if((r.c&2)===0&&r.d==null)r.qY()}return null},
A2(a){},
A3(a){},
nr(){if((this.c&4)!==0)return new A.e9("Cannot add new events after calling close")
return new A.e9("Cannot add new events while doing an addStream")},
C(a,b){if(!this.gnU())throw A.e(this.nr())
this.il(b)},
av(){var s,r,q=this
if((q.c&4)!==0){s=q.r
s.toString
return s}if(!q.gnU())throw A.e(q.nr())
q.c|=4
r=q.r
if(r==null)r=q.r=new A.af($.a6,t.D)
q.im()
return r},
yW(a){var s,r,q,p=this,o=p.c
if((o&2)!==0)throw A.e(A.az(u.o))
s=p.d
if(s==null)return
r=o&1
p.c=o^3
for(;s!=null;){o=s.ay
if((o&1)===r){s.ay=o|2
a.$1(s)
o=s.ay^=1
q=s.ch
if((o&4)!==0)p.Ac(s)
s.ay&=4294967293
s=q}else s=s.ch}p.c&=4294967293
if(p.d==null)p.qY()},
qY(){if((this.c&4)!==0){var s=this.r
if((s.a&30)===0)s.hs(null)}A.Hn(this.b)}}
A.iS.prototype={
gnU(){return A.iz.prototype.gnU.call(this)&&(this.c&2)===0},
nr(){if((this.c&2)!==0)return new A.e9(u.o)
return this.Ic()},
il(a){var s=this,r=s.d
if(r==null)return
if(r===s.e){s.c|=2
r.xA(a)
s.c&=4294967293
if(s.d==null)s.qY()
return}s.yW(new A.X9(s,a))},
im(){var s=this
if(s.d!=null)s.yW(new A.Xa(s))
else s.r.hs(null)}}
A.X9.prototype={
$1(a){a.xA(this.b)},
$S(){return this.a.$ti.h("~(iA<1>)")}}
A.Xa.prototype={
$1(a){a.Kp()},
$S(){return this.a.$ti.h("~(iA<1>)")}}
A.rP.prototype={
il(a){var s
for(s=this.d;s!=null;s=s.ch)s.jv(new A.kH(a))},
im(){var s=this.d
if(s!=null)for(;s!=null;s=s.ch)s.jv(B.cF)
else this.r.hs(null)}}
A.LR.prototype={
$0(){var s,r,q
try{this.a.nx(this.b.$0())}catch(q){s=A.ah(q)
r=A.aI(q)
A.a5T(this.a,s,r)}},
$S:0}
A.LQ.prototype={
$0(){var s,r,q,p=this,o=p.a
if(o==null){p.c.a(null)
p.b.nx(null)}else try{p.b.nx(o.$0())}catch(q){s=A.ah(q)
r=A.aI(q)
A.a5T(p.b,s,r)}},
$S:0}
A.LT.prototype={
$2(a,b){var s=this,r=s.a,q=--r.b
if(r.a!=null){r.a=null
if(r.b===0||s.c)s.d.dX(a,b)
else{s.e.b=a
s.f.b=b}}else if(q===0&&!s.c)s.d.dX(s.e.aX(),s.f.aX())},
$S:61}
A.LS.prototype={
$1(a){var s,r=this,q=r.a;--q.b
s=q.a
if(s!=null){J.Zq(s,r.b,a)
if(q.b===0)r.c.lc(A.jR(s,!0,r.w))}else if(q.b===0&&!r.e)r.c.dX(r.f.aX(),r.r.aX())},
$S(){return this.w.h("aK(0)")}}
A.BK.prototype={
u5(a,b){A.dR(a,"error",t.K)
if((this.a.a&30)!==0)throw A.e(A.az("Future already completed"))
if(b==null)b=A.Ia(a)
this.dX(a,b)},
oE(a){return this.u5(a,null)}}
A.bu.prototype={
e7(a){var s=this.a
if((s.a&30)!==0)throw A.e(A.az("Future already completed"))
s.hs(a)},
fg(){return this.e7(null)},
dX(a,b){this.a.nu(a,b)}}
A.ft.prototype={
V2(a){if((this.c&15)!==6)return!0
return this.b.b.w_(this.d,a.a)},
Td(a){var s,r=this.e,q=null,p=a.a,o=this.b.b
if(t.nW.b(r))q=o.ES(r,p,a.b)
else q=o.w_(r,p)
try{p=q
return p}catch(s){if(t.bs.b(A.ah(s))){if((this.c&1)!==0)throw A.e(A.cc("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.e(A.cc("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.af.prototype={
At(a){this.a=this.a&1|4
this.c=a},
f0(a,b,c){var s,r,q=$.a6
if(q===B.a5){if(b!=null&&!t.nW.b(b)&&!t.in.b(b))throw A.e(A.fG(b,"onError",u.c))}else if(b!=null)b=A.a6o(b,q)
s=new A.af(q,c.h("af<0>"))
r=b==null?1:3
this.l6(new A.ft(s,r,a,b,this.$ti.h("@<1>").Z(c).h("ft<1,2>")))
return s},
bk(a,b){return this.f0(a,null,b)},
AY(a,b,c){var s=new A.af($.a6,c.h("af<0>"))
this.l6(new A.ft(s,19,a,b,this.$ti.h("@<1>").Z(c).h("ft<1,2>")))
return s},
Ri(a,b){var s=this.$ti,r=$.a6,q=new A.af(r,s)
if(r!==B.a5)a=A.a6o(a,r)
this.l6(new A.ft(q,2,b,a,s.h("@<1>").Z(s.c).h("ft<1,2>")))
return q},
u2(a){return this.Ri(a,null)},
j6(a){var s=this.$ti,r=new A.af($.a6,s)
this.l6(new A.ft(r,8,a,null,s.h("@<1>").Z(s.c).h("ft<1,2>")))
return r},
PH(a){this.a=this.a&1|16
this.c=a},
nw(a){this.a=a.a&30|this.a&1
this.c=a.c},
l6(a){var s=this,r=s.a
if(r<=3){a.a=s.c
s.c=a}else{if((r&4)!==0){r=s.c
if((r.a&24)===0){r.l6(a)
return}s.nw(r)}A.kW(null,null,s.b,new A.UY(s,a))}},
tf(a){var s,r,q,p,o,n=this,m={}
m.a=a
if(a==null)return
s=n.a
if(s<=3){r=n.c
n.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){s=n.c
if((s.a&24)===0){s.tf(a)
return}n.nw(s)}m.a=n.o7(a)
A.kW(null,null,n.b,new A.V4(m,n))}},
o4(){var s=this.c
this.c=null
return this.o7(s)},
o7(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
r_(a){var s,r,q,p=this
p.a^=2
try{a.f0(new A.V1(p),new A.V2(p),t.P)}catch(q){s=A.ah(q)
r=A.aI(q)
A.fD(new A.V3(p,s,r))}},
nx(a){var s,r=this,q=r.$ti
if(q.h("a8<1>").b(a))if(q.b(a))A.a05(a,r)
else r.r_(a)
else{s=r.o4()
r.a=8
r.c=a
A.mM(r,s)}},
lc(a){var s=this,r=s.o4()
s.a=8
s.c=a
A.mM(s,r)},
dX(a,b){var s=this.o4()
this.PH(A.I9(a,b))
A.mM(this,s)},
hs(a){if(this.$ti.h("a8<1>").b(a)){this.xY(a)
return}this.JL(a)},
JL(a){this.a^=2
A.kW(null,null,this.b,new A.V_(this,a))},
xY(a){if(this.$ti.b(a)){A.af_(a,this)
return}this.r_(a)},
nu(a,b){this.a^=2
A.kW(null,null,this.b,new A.UZ(this,a,b))},
$ia8:1}
A.UY.prototype={
$0(){A.mM(this.a,this.b)},
$S:0}
A.V4.prototype={
$0(){A.mM(this.b,this.a.a)},
$S:0}
A.V1.prototype={
$1(a){var s,r,q,p=this.a
p.a^=2
try{p.lc(p.$ti.c.a(a))}catch(q){s=A.ah(q)
r=A.aI(q)
p.dX(s,r)}},
$S:26}
A.V2.prototype={
$2(a,b){this.a.dX(a,b)},
$S:250}
A.V3.prototype={
$0(){this.a.dX(this.b,this.c)},
$S:0}
A.V0.prototype={
$0(){A.a05(this.a.a,this.b)},
$S:0}
A.V_.prototype={
$0(){this.a.lc(this.b)},
$S:0}
A.UZ.prototype={
$0(){this.a.dX(this.b,this.c)},
$S:0}
A.V7.prototype={
$0(){var s,r,q,p,o,n,m=this,l=null
try{q=m.a.a
l=q.b.b.d8(q.d)}catch(p){s=A.ah(p)
r=A.aI(p)
q=m.c&&m.b.a.c.a===s
o=m.a
if(q)o.c=m.b.a.c
else o.c=A.I9(s,r)
o.b=!0
return}if(l instanceof A.af&&(l.a&24)!==0){if((l.a&16)!==0){q=m.a
q.c=l.c
q.b=!0}return}if(t.o0.b(l)){n=m.b.a
q=m.a
q.c=l.bk(new A.V8(n),t.z)
q.b=!1}},
$S:0}
A.V8.prototype={
$1(a){return this.a},
$S:251}
A.V6.prototype={
$0(){var s,r,q,p,o
try{q=this.a
p=q.a
q.c=p.b.b.w_(p.d,this.b)}catch(o){s=A.ah(o)
r=A.aI(o)
q=this.a
q.c=A.I9(s,r)
q.b=!0}},
$S:0}
A.V5.prototype={
$0(){var s,r,q,p,o,n,m=this
try{s=m.a.a.c
p=m.b
if(p.a.V2(s)&&p.a.e!=null){p.c=p.a.Td(s)
p.b=!1}}catch(o){r=A.ah(o)
q=A.aI(o)
p=m.a.a.c
n=m.b
if(p.a===r)n.c=p
else n.c=A.I9(r,q)
n.b=!0}},
$S:0}
A.Br.prototype={}
A.hi.prototype={
gv(a){var s={},r=new A.af($.a6,t.h1)
s.a=0
this.DS(new A.RK(s,this),!0,new A.RL(s,r),r.gKs())
return r}}
A.RK.prototype={
$1(a){++this.a.a},
$S(){return A.q(this.b).h("~(1)")}}
A.RL.prototype={
$0(){this.b.nx(this.a.a)},
$S:0}
A.uj.prototype={
gx0(){return new A.iC(this,A.q(this).h("iC<1>"))},
gOF(){if((this.b&8)===0)return this.a
return this.a.gwk()},
yN(){var s,r=this
if((r.b&8)===0){s=r.a
return s==null?r.a=new A.tP():s}s=r.a.gwk()
return s},
gAN(){var s=this.a
return(this.b&8)!==0?s.gwk():s},
xS(){if((this.b&4)!==0)return new A.e9("Cannot add event after closing")
return new A.e9("Cannot add event while adding a stream")},
yL(){var s=this.c
if(s==null)s=this.c=(this.b&2)!==0?$.Hy():new A.af($.a6,t.D)
return s},
C(a,b){var s=this,r=s.b
if(r>=4)throw A.e(s.xS())
if((r&1)!==0)s.il(b)
else if((r&3)===0)s.yN().C(0,new A.kH(b))},
av(){var s=this,r=s.b
if((r&4)!==0)return s.yL()
if(r>=4)throw A.e(s.xS())
r=s.b=r|4
if((r&1)!==0)s.im()
else if((r&3)===0)s.yN().C(0,B.cF)
return s.yL()},
AM(a,b,c,d){var s,r,q,p,o=this
if((o.b&3)!==0)throw A.e(A.az("Stream has already been listened to."))
s=A.aeU(o,a,b,c,d)
r=o.gOF()
q=o.b|=1
if((q&8)!==0){p=o.a
p.swk(s)
p.Wd()}else o.a=s
s.PI(r)
q=s.e
s.e=q|32
new A.X4(o).$0()
s.e&=4294967263
s.y4((q&4)!==0)
return s},
A0(a){var s,r,q,p,o,n,m,l=this,k=null
if((l.b&8)!==0)k=l.a.b3()
l.a=null
l.b=l.b&4294967286|2
s=l.r
if(s!=null)if(k==null)try{r=s.$0()
if(t.pz.b(r))k=r}catch(o){q=A.ah(o)
p=A.aI(o)
n=new A.af($.a6,t.D)
n.nu(q,p)
k=n}else k=k.j6(s)
m=new A.X3(l)
if(k!=null)k=k.j6(m)
else m.$0()
return k},
A2(a){if((this.b&8)!==0)this.a.Xw()
A.Hn(this.e)},
A3(a){if((this.b&8)!==0)this.a.Wd()
A.Hn(this.f)}}
A.X4.prototype={
$0(){A.Hn(this.a.d)},
$S:0}
A.X3.prototype={
$0(){var s=this.a.c
if(s!=null&&(s.a&30)===0)s.hs(null)},
$S:0}
A.Bs.prototype={
il(a){this.gAN().jv(new A.kH(a))},
im(){this.gAN().jv(B.cF)}}
A.mz.prototype={}
A.iC.prototype={
gq(a){return(A.eD(this.a)^892482866)>>>0},
i(a,b){if(b==null)return!1
if(this===b)return!0
return b instanceof A.iC&&b.a===this.a}}
A.mC.prototype={
zO(){return this.w.A0(this)},
t8(){this.w.A2(this)},
ta(){this.w.A3(this)}}
A.iA.prototype={
PI(a){if(a==null)return
this.r=a
if(a.c!=null){this.e|=64
a.ql(this)}},
b3(){var s=this.e&=4294967279
if((s&8)===0)this.xW()
s=this.f
return s==null?$.Hy():s},
xW(){var s,r=this,q=r.e|=8
if((q&64)!==0){s=r.r
if(s.a===1)s.a=3}if((q&32)===0)r.r=null
r.f=r.zO()},
xA(a){var s=this.e
if((s&8)!==0)return
if(s<32)this.il(a)
else this.jv(new A.kH(a))},
Kp(){var s=this,r=s.e
if((r&8)!==0)return
r|=2
s.e=r
if(r<32)s.im()
else s.jv(B.cF)},
t8(){},
ta(){},
zO(){return null},
jv(a){var s,r=this,q=r.r
if(q==null)q=r.r=new A.tP()
q.C(0,a)
s=r.e
if((s&64)===0){s|=64
r.e=s
if(s<128)q.ql(r)}},
il(a){var s=this,r=s.e
s.e=r|32
s.d.w0(s.a,a)
s.e&=4294967263
s.y4((r&4)!==0)},
im(){var s,r=this,q=new A.TF(r)
r.xW()
r.e|=16
s=r.f
if(s!=null&&s!==$.Hy())s.j6(q)
else q.$0()},
y4(a){var s,r,q=this,p=q.e
if((p&64)!==0&&q.r.c==null){p=q.e=p&4294967231
if((p&4)!==0)if(p<128){s=q.r
s=s==null?null:s.c==null
s=s!==!1}else s=!1
else s=!1
if(s){p&=4294967291
q.e=p}}for(;!0;a=r){if((p&8)!==0){q.r=null
return}r=(p&4)!==0
if(a===r)break
q.e=p^32
if(r)q.t8()
else q.ta()
p=q.e&=4294967263}if((p&64)!==0&&p<128)q.r.ql(q)}}
A.TF.prototype={
$0(){var s=this.a,r=s.e
if((r&16)===0)return
s.e=r|42
s.d.mS(s.c)
s.e&=4294967263},
$S:0}
A.uk.prototype={
DS(a,b,c,d){return this.a.AM(a,d,c,b===!0)},
pr(a){return this.DS(a,null,null,null)}}
A.Ci.prototype={
giS(){return this.a},
siS(a){return this.a=a}}
A.kH.prototype={
Ee(a){a.il(this.b)}}
A.UE.prototype={
Ee(a){a.im()},
giS(){return null},
siS(a){throw A.e(A.az("No events after a done."))}}
A.tP.prototype={
ql(a){var s=this,r=s.a
if(r===1)return
if(r>=1){s.a=1
return}A.fD(new A.Wc(s,a))
s.a=1},
C(a,b){var s=this,r=s.c
if(r==null)s.b=s.c=b
else{r.siS(b)
s.c=b}}}
A.Wc.prototype={
$0(){var s,r,q=this.a,p=q.a
q.a=0
if(p===3)return
s=q.b
r=s.giS()
q.b=r
if(r==null)q.c=null
s.Ee(this.b)},
$S:0}
A.t6.prototype={
b3(){this.a=-1
this.c=null
return $.Hy()},
Oj(){var s,r=this,q=r.a-1
if(q===0){r.a=-1
s=r.c
if(s!=null){r.c=null
r.b.mS(s)}}else r.a=q}}
A.FN.prototype={}
A.XC.prototype={}
A.Yn.prototype={
$0(){A.abo(this.a,this.b)},
$S:0}
A.WC.prototype={
mS(a){var s,r,q
try{if(B.a5===$.a6){a.$0()
return}A.a6q(null,null,this,a)}catch(q){s=A.ah(q)
r=A.aI(q)
A.v4(s,r)}},
Wk(a,b){var s,r,q
try{if(B.a5===$.a6){a.$1(b)
return}A.a6r(null,null,this,a,b)}catch(q){s=A.ah(q)
r=A.aI(q)
A.v4(s,r)}},
w0(a,b){return this.Wk(a,b,t.z)},
R5(a,b,c,d){return new A.WD(this,a,c,d,b)},
u0(a){return new A.WE(this,a)},
k(a,b){return null},
Wh(a){if($.a6===B.a5)return a.$0()
return A.a6q(null,null,this,a)},
d8(a){return this.Wh(a,t.z)},
Wj(a,b){if($.a6===B.a5)return a.$1(b)
return A.a6r(null,null,this,a,b)},
w_(a,b){var s=t.z
return this.Wj(a,b,s,s)},
Wi(a,b,c){if($.a6===B.a5)return a.$2(b,c)
return A.ah_(null,null,this,a,b,c)},
ES(a,b,c){var s=t.z
return this.Wi(a,b,c,s,s,s)},
VX(a){return a},
vT(a){var s=t.z
return this.VX(a,s,s,s)}}
A.WD.prototype={
$2(a,b){return this.a.ES(this.b,a,b)},
$S(){return this.e.h("@<0>").Z(this.c).Z(this.d).h("1(2,3)")}}
A.WE.prototype={
$0(){return this.a.mS(this.b)},
$S:0}
A.hw.prototype={
gv(a){return this.a},
gL(a){return this.a===0},
gaP(a){return this.a!==0},
gb1(){return new A.kI(this,A.q(this).h("kI<1>"))},
gau(){var s=A.q(this)
return A.y6(new A.kI(this,s.h("kI<1>")),new A.Vc(this),s.c,s.y[1])},
T(a){var s,r
if(typeof a=="string"&&a!=="__proto__"){s=this.b
return s==null?!1:s[a]!=null}else if(typeof a=="number"&&(a&1073741823)===a){r=this.c
return r==null?!1:r[a]!=null}else return this.yr(a)},
yr(a){var s=this.d
if(s==null)return!1
return this.di(this.z_(s,a),a)>=0},
k(a,b){var s,r,q
if(typeof b=="string"&&b!=="__proto__"){s=this.b
r=s==null?null:A.a06(s,b)
return r}else if(typeof b=="number"&&(b&1073741823)===b){q=this.c
r=q==null?null:A.a06(q,b)
return r}else return this.yZ(b)},
yZ(a){var s,r,q=this.d
if(q==null)return null
s=this.z_(q,a)
r=this.di(s,a)
return r<0?null:s[r+1]},
l(a,b,c){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
q.yd(s==null?q.b=A.a07():s,b,c)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
q.yd(r==null?q.c=A.a07():r,b,c)}else q.As(b,c)},
As(a,b){var s,r,q,p=this,o=p.d
if(o==null)o=p.d=A.a07()
s=p.dD(a)
r=o[s]
if(r==null){A.a08(o,s,[a,b]);++p.a
p.e=null}else{q=p.di(r,a)
if(q>=0)r[q+1]=b
else{r.push(a,b);++p.a
p.e=null}}},
bj(a,b){var s,r,q=this
if(q.T(a)){s=q.k(0,a)
return s==null?A.q(q).y[1].a(s):s}r=b.$0()
q.l(0,a,r)
return r},
A(a,b){var s=this
if(typeof b=="string"&&b!=="__proto__")return s.ht(s.b,b)
else if(typeof b=="number"&&(b&1073741823)===b)return s.ht(s.c,b)
else return s.jF(b)},
jF(a){var s,r,q,p,o=this,n=o.d
if(n==null)return null
s=o.dD(a)
r=n[s]
q=o.di(r,a)
if(q<0)return null;--o.a
o.e=null
p=r.splice(q,2)[1]
if(0===r.length)delete n[s]
return p},
W(a,b){var s,r,q,p,o,n=this,m=n.r8()
for(s=m.length,r=A.q(n).y[1],q=0;q<s;++q){p=m[q]
o=n.k(0,p)
b.$2(p,o==null?r.a(o):o)
if(m!==n.e)throw A.e(A.bl(n))}},
r8(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.e
if(h!=null)return h
h=A.aZ(i.a,null,!1,t.z)
s=i.b
if(s!=null){r=Object.getOwnPropertyNames(s)
q=r.length
for(p=0,o=0;o<q;++o){h[p]=r[o];++p}}else p=0
n=i.c
if(n!=null){r=Object.getOwnPropertyNames(n)
q=r.length
for(o=0;o<q;++o){h[p]=+r[o];++p}}m=i.d
if(m!=null){r=Object.getOwnPropertyNames(m)
q=r.length
for(o=0;o<q;++o){l=m[r[o]]
k=l.length
for(j=0;j<k;j+=2){h[p]=l[j];++p}}}return i.e=h},
yd(a,b,c){if(a[b]==null){++this.a
this.e=null}A.a08(a,b,c)},
ht(a,b){var s
if(a!=null&&a[b]!=null){s=A.a06(a,b)
delete a[b];--this.a
this.e=null
return s}else return null},
dD(a){return J.l(a)&1073741823},
z_(a,b){return a[this.dD(b)]},
di(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;r+=2)if(J.d(a[r],b))return r
return-1}}
A.Vc.prototype={
$1(a){var s=this.a,r=s.k(0,a)
return r==null?A.q(s).y[1].a(r):r},
$S(){return A.q(this.a).h("2(1)")}}
A.iI.prototype={
dD(a){return A.kZ(a)&1073741823},
di(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=0;r<s;r+=2){q=a[r]
if(q==null?b==null:q===b)return r}return-1}}
A.t2.prototype={
k(a,b){if(!this.w.$1(b))return null
return this.Ie(b)},
l(a,b,c){this.Ig(b,c)},
T(a){if(!this.w.$1(a))return!1
return this.Id(a)},
A(a,b){if(!this.w.$1(b))return null
return this.If(b)},
dD(a){return this.r.$1(a)&1073741823},
di(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=this.f,q=0;q<s;q+=2)if(r.$2(a[q],b))return q
return-1}}
A.Up.prototype={
$1(a){return this.a.b(a)},
$S:256}
A.kI.prototype={
gv(a){return this.a.a},
gL(a){return this.a.a===0},
gaP(a){return this.a.a!==0},
gK(a){var s=this.a
return new A.mO(s,s.r8(),this.$ti.h("mO<1>"))},
t(a,b){return this.a.T(b)}}
A.mO.prototype={
gB(){var s=this.d
return s==null?this.$ti.c.a(s):s},
p(){var s=this,r=s.b,q=s.c,p=s.a
if(r!==p.e)throw A.e(A.bl(p))
else if(q>=r.length){s.d=null
return!1}else{s.d=r[q]
s.c=q+1
return!0}}}
A.iG.prototype={
nZ(){return new A.iG(A.q(this).h("iG<1>"))},
gK(a){return new A.dp(this,this.jx(),A.q(this).h("dp<1>"))},
gv(a){return this.a},
gL(a){return this.a===0},
gaP(a){return this.a!==0},
t(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
return s==null?!1:s[b]!=null}else if(typeof b=="number"&&(b&1073741823)===b){r=this.c
return r==null?!1:r[b]!=null}else return this.rb(b)},
rb(a){var s=this.d
if(s==null)return!1
return this.di(s[this.dD(a)],a)>=0},
C(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.la(s==null?q.b=A.a09():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.la(r==null?q.c=A.a09():r,b)}else return q.dW(b)},
dW(a){var s,r,q=this,p=q.d
if(p==null)p=q.d=A.a09()
s=q.dD(a)
r=p[s]
if(r==null)p[s]=[a]
else{if(q.di(r,a)>=0)return!1
r.push(a)}++q.a
q.e=null
return!0},
G(a,b){var s
for(s=J.ao(b);s.p();)this.C(0,s.gB())},
A(a,b){var s=this
if(typeof b=="string"&&b!=="__proto__")return s.ht(s.b,b)
else if(typeof b=="number"&&(b&1073741823)===b)return s.ht(s.c,b)
else return s.jF(b)},
jF(a){var s,r,q,p=this,o=p.d
if(o==null)return!1
s=p.dD(a)
r=o[s]
q=p.di(r,a)
if(q<0)return!1;--p.a
p.e=null
r.splice(q,1)
if(0===r.length)delete o[s]
return!0},
F(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=null
s.a=0}},
jx(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.e
if(h!=null)return h
h=A.aZ(i.a,null,!1,t.z)
s=i.b
if(s!=null){r=Object.getOwnPropertyNames(s)
q=r.length
for(p=0,o=0;o<q;++o){h[p]=r[o];++p}}else p=0
n=i.c
if(n!=null){r=Object.getOwnPropertyNames(n)
q=r.length
for(o=0;o<q;++o){h[p]=+r[o];++p}}m=i.d
if(m!=null){r=Object.getOwnPropertyNames(m)
q=r.length
for(o=0;o<q;++o){l=m[r[o]]
k=l.length
for(j=0;j<k;++j){h[p]=l[j];++p}}}return i.e=h},
la(a,b){if(a[b]!=null)return!1
a[b]=0;++this.a
this.e=null
return!0},
ht(a,b){if(a!=null&&a[b]!=null){delete a[b];--this.a
this.e=null
return!0}else return!1},
dD(a){return J.l(a)&1073741823},
di(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.d(a[r],b))return r
return-1}}
A.dp.prototype={
gB(){var s=this.d
return s==null?this.$ti.c.a(s):s},
p(){var s=this,r=s.b,q=s.c,p=s.a
if(r!==p.e)throw A.e(A.bl(p))
else if(q>=r.length){s.d=null
return!1}else{s.d=r[q]
s.c=q+1
return!0}}}
A.dq.prototype={
nZ(){return new A.dq(A.q(this).h("dq<1>"))},
zL(a){return new A.dq(a.h("dq<0>"))},
Ob(){return this.zL(t.z)},
gK(a){var s=this,r=new A.iK(s,s.r,A.q(s).h("iK<1>"))
r.c=s.e
return r},
gv(a){return this.a},
gL(a){return this.a===0},
gaP(a){return this.a!==0},
t(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return s[b]!=null}else if(typeof b=="number"&&(b&1073741823)===b){r=this.c
if(r==null)return!1
return r[b]!=null}else return this.rb(b)},
rb(a){var s=this.d
if(s==null)return!1
return this.di(s[this.dD(a)],a)>=0},
W(a,b){var s=this,r=s.e,q=s.r
for(;r!=null;){b.$1(r.a)
if(q!==s.r)throw A.e(A.bl(s))
r=r.b}},
gJ(a){var s=this.e
if(s==null)throw A.e(A.az("No elements"))
return s.a},
gO(a){var s=this.f
if(s==null)throw A.e(A.az("No elements"))
return s.a},
C(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.la(s==null?q.b=A.a0a():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.la(r==null?q.c=A.a0a():r,b)}else return q.dW(b)},
dW(a){var s,r,q=this,p=q.d
if(p==null)p=q.d=A.a0a()
s=q.dD(a)
r=p[s]
if(r==null)p[s]=[q.r5(a)]
else{if(q.di(r,a)>=0)return!1
r.push(q.r5(a))}return!0},
A(a,b){var s=this
if(typeof b=="string"&&b!=="__proto__")return s.ht(s.b,b)
else if(typeof b=="number"&&(b&1073741823)===b)return s.ht(s.c,b)
else return s.jF(b)},
jF(a){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.dD(a)
r=n[s]
q=o.di(r,a)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.ye(p)
return!0},
Lw(a,b){var s,r,q,p,o=this,n=o.e
for(;n!=null;n=r){s=n.a
r=n.b
q=o.r
p=a.$1(s)
if(q!==o.r)throw A.e(A.bl(o))
if(!0===p)o.A(0,s)}},
F(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.r4()}},
la(a,b){if(a[b]!=null)return!1
a[b]=this.r5(b)
return!0},
ht(a,b){var s
if(a==null)return!1
s=a[b]
if(s==null)return!1
this.ye(s)
delete a[b]
return!0},
r4(){this.r=this.r+1&1073741823},
r5(a){var s,r=this,q=new A.VH(a)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.r4()
return q},
ye(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.r4()},
dD(a){return J.l(a)&1073741823},
di(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.d(a[r].a,b))return r
return-1},
$iaca:1}
A.VH.prototype={}
A.iK.prototype={
gB(){var s=this.d
return s==null?this.$ti.c.a(s):s},
p(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.e(A.bl(q))
else if(r==null){s.d=null
return!1}else{s.d=r.a
s.c=r.b
return!0}}}
A.NC.prototype={
$2(a,b){this.a.l(0,this.b.a(a),this.c.a(b))},
$S:74}
A.jQ.prototype={
A(a,b){if(b.ec$!==this)return!1
this.B4(b)
return!0},
t(a,b){return t.g4.b(b)&&this===b.ec$},
gK(a){var s=this
return new A.mT(s,s.a,s.c,s.$ti.h("mT<1>"))},
gv(a){return this.b},
gJ(a){var s
if(this.b===0)throw A.e(A.az("No such element"))
s=this.c
s.toString
return s},
gO(a){var s
if(this.b===0)throw A.e(A.az("No such element"))
s=this.c.ee$
s.toString
return s},
gL(a){return this.b===0},
rV(a,b,c){var s,r,q=this
if(b.ec$!=null)throw A.e(A.az("LinkedListEntry is already in a LinkedList"));++q.a
b.ec$=q
s=q.b
if(s===0){b.ed$=b
q.c=b.ee$=b
q.b=s+1
return}r=a.ee$
r.toString
b.ee$=r
b.ed$=a
a.ee$=r.ed$=b
if(c&&a==q.c)q.c=b
q.b=s+1},
B4(a){var s,r,q=this;++q.a
s=a.ed$
s.ee$=a.ee$
a.ee$.ed$=s
r=--q.b
a.ec$=a.ed$=a.ee$=null
if(r===0)q.c=null
else if(a===q.c)q.c=s}}
A.mT.prototype={
gB(){var s=this.c
return s==null?this.$ti.c.a(s):s},
p(){var s=this,r=s.a
if(s.b!==r.a)throw A.e(A.bl(s))
if(r.b!==0)r=s.e&&s.d===r.gJ(0)
else r=!0
if(r){s.c=null
return!1}s.e=!0
r=s.d
s.c=r
s.d=r.ed$
return!0}}
A.dG.prototype={
giS(){var s=this.ec$
if(s==null||s.gJ(0)===this.ed$)return null
return this.ed$},
gEk(){var s=this.ec$
if(s==null||this===s.gJ(0))return null
return this.ee$}}
A.am.prototype={
gK(a){return new A.bX(a,this.gv(a),A.ca(a).h("bX<am.E>"))},
bo(a,b){return this.k(a,b)},
W(a,b){var s,r=this.gv(a)
for(s=0;s<r;++s){b.$1(this.k(a,s))
if(r!==this.gv(a))throw A.e(A.bl(a))}},
gL(a){return this.gv(a)===0},
gaP(a){return!this.gL(a)},
gJ(a){if(this.gv(a)===0)throw A.e(A.bA())
return this.k(a,0)},
gO(a){if(this.gv(a)===0)throw A.e(A.bA())
return this.k(a,this.gv(a)-1)},
t(a,b){var s,r=this.gv(a)
for(s=0;s<r;++s){if(J.d(this.k(a,s),b))return!0
if(r!==this.gv(a))throw A.e(A.bl(a))}return!1},
bv(a,b){var s
if(this.gv(a)===0)return""
s=A.a_S("",a,b)
return s.charCodeAt(0)==0?s:s},
v2(a){return this.bv(a,"")},
eo(a,b,c){return new A.ag(a,b,A.ca(a).h("@<am.E>").Z(c).h("ag<1,2>"))},
f4(a,b){return A.dl(a,b,null,A.ca(a).h("am.E"))},
q2(a,b){return A.dl(a,0,A.dR(b,"count",t.S),A.ca(a).h("am.E"))},
ck(a,b){var s,r,q,p,o=this
if(o.gL(a)){s=J.pc(0,A.ca(a).h("am.E"))
return s}r=o.k(a,0)
q=A.aZ(o.gv(a),r,!0,A.ca(a).h("am.E"))
for(p=1;p<o.gv(a);++p)q[p]=o.k(a,p)
return q},
d9(a){return this.ck(a,!0)},
hf(a){var s,r=A.fZ(A.ca(a).h("am.E"))
for(s=0;s<this.gv(a);++s)r.C(0,this.k(a,s))
return r},
C(a,b){var s=this.gv(a)
this.sv(a,s+1)
this.l(a,s,b)},
A(a,b){var s
for(s=0;s<this.gv(a);++s)if(J.d(this.k(a,s),b)){this.Kq(a,s,s+1)
return!0}return!1},
Kq(a,b,c){var s,r=this,q=r.gv(a),p=c-b
for(s=c;s<q;++s)r.l(a,s-p,r.k(a,s))
r.sv(a,q-p)},
fS(a,b){return new A.cZ(a,A.ca(a).h("@<am.E>").Z(b).h("cZ<1,2>"))},
dQ(a){var s,r=this
if(r.gv(a)===0)throw A.e(A.bA())
s=r.k(a,r.gv(a)-1)
r.sv(a,r.gv(a)-1)
return s},
S(a,b){var s=A.a0(a,!0,A.ca(a).h("am.E"))
B.b.G(s,b)
return s},
b6(a,b,c){var s=this.gv(a)
if(c==null)c=s
A.cN(b,c,s)
return A.jR(this.n5(a,b,c),!0,A.ca(a).h("am.E"))},
cL(a,b){return this.b6(a,b,null)},
n5(a,b,c){A.cN(b,c,this.gv(a))
return A.dl(a,b,c,A.ca(a).h("am.E"))},
ST(a,b,c,d){var s
A.cN(b,c,this.gv(a))
for(s=b;s<c;++s)this.l(a,s,d)},
b_(a,b,c,d,e){var s,r,q,p,o
A.cN(b,c,this.gv(a))
s=c-b
if(s===0)return
A.cF(e,"skipCount")
if(A.ca(a).h("J<am.E>").b(d)){r=e
q=d}else{q=J.HI(d,e).ck(0,!1)
r=0}p=J.b4(q)
if(r+s>p.gv(q))throw A.e(A.a3b())
if(r<b)for(o=s-1;o>=0;--o)this.l(a,b+o,p.k(q,r+o))
else for(o=0;o<s;++o)this.l(a,b+o,p.k(q,r+o))},
de(a,b,c,d){return this.b_(a,b,c,d,0)},
kS(a,b,c){var s,r
if(t.j.b(c))this.de(a,b,b+c.length,c)
else for(s=J.ao(c);s.p();b=r){r=b+1
this.l(a,b,s.gB())}},
j(a){return A.lG(a,"[","]")},
$ia_:1,
$iv:1,
$iJ:1}
A.aN.prototype={
fT(a,b,c){var s=A.q(this)
return A.a3u(this,s.h("aN.K"),s.h("aN.V"),b,c)},
W(a,b){var s,r,q,p
for(s=this.gb1(),s=s.gK(s),r=A.q(this).h("aN.V");s.p();){q=s.gB()
p=this.k(0,q)
b.$2(q,p==null?r.a(p):p)}},
bj(a,b){var s,r=this
if(r.T(a)){s=r.k(0,a)
return s==null?A.q(r).h("aN.V").a(s):s}s=b.$0()
r.l(0,a,s)
return s},
WB(a,b,c){var s,r=this
if(r.T(a)){s=r.k(0,a)
s=b.$1(s==null?A.q(r).h("aN.V").a(s):s)
r.l(0,a,s)
return s}if(c!=null){s=c.$0()
r.l(0,a,s)
return s}throw A.e(A.fG(a,"key","Key not in map."))},
ew(a,b){return this.WB(a,b,null)},
F2(a){var s,r,q,p,o=this
for(s=o.gb1(),s=s.gK(s),r=A.q(o).h("aN.V");s.p();){q=s.gB()
p=o.k(0,q)
o.l(0,q,a.$2(q,p==null?r.a(p):p))}},
gdq(){return this.gb1().eo(0,new A.NK(this),A.q(this).h("be<aN.K,aN.V>"))},
mz(a,b,c,d){var s,r,q,p,o,n=A.y(c,d)
for(s=this.gb1(),s=s.gK(s),r=A.q(this).h("aN.V");s.p();){q=s.gB()
p=this.k(0,q)
o=b.$2(q,p==null?r.a(p):p)
n.l(0,o.a,o.b)}return n},
BG(a){var s,r
for(s=a.gK(a);s.p();){r=s.gB()
this.l(0,r.a,r.b)}},
W3(a,b){var s,r,q,p,o=this,n=A.q(o),m=A.a([],n.h("t<aN.K>"))
for(s=o.gb1(),s=s.gK(s),n=n.h("aN.V");s.p();){r=s.gB()
q=o.k(0,r)
if(b.$2(r,q==null?n.a(q):q))m.push(r)}for(n=m.length,p=0;p<m.length;m.length===n||(0,A.C)(m),++p)o.A(0,m[p])},
T(a){return this.gb1().t(0,a)},
gv(a){var s=this.gb1()
return s.gv(s)},
gL(a){var s=this.gb1()
return s.gL(s)},
gaP(a){var s=this.gb1()
return s.gaP(s)},
gau(){var s=A.q(this)
return new A.tu(this,s.h("@<aN.K>").Z(s.h("aN.V")).h("tu<1,2>"))},
j(a){return A.a_s(this)},
$iay:1}
A.NK.prototype={
$1(a){var s=this.a,r=s.k(0,a)
if(r==null)r=A.q(s).h("aN.V").a(r)
s=A.q(s)
return new A.be(a,r,s.h("@<aN.K>").Z(s.h("aN.V")).h("be<1,2>"))},
$S(){return A.q(this.a).h("be<aN.K,aN.V>(aN.K)")}}
A.NL.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=r.a+=A.f(a)
r.a=s+": "
r.a+=A.f(b)},
$S:42}
A.tu.prototype={
gv(a){var s=this.a
return s.gv(s)},
gL(a){var s=this.a
return s.gL(s)},
gaP(a){var s=this.a
return s.gaP(s)},
gJ(a){var s=this.a,r=s.gb1()
r=s.k(0,r.gJ(r))
return r==null?this.$ti.y[1].a(r):r},
gO(a){var s=this.a,r=s.gb1()
r=s.k(0,r.gO(r))
return r==null?this.$ti.y[1].a(r):r},
gK(a){var s=this.a,r=this.$ti,q=s.gb1()
return new A.Dv(q.gK(q),s,r.h("@<1>").Z(r.y[1]).h("Dv<1,2>"))}}
A.Dv.prototype={
p(){var s=this,r=s.a
if(r.p()){s.c=s.b.k(0,r.gB())
return!0}s.c=null
return!1},
gB(){var s=this.c
return s==null?this.$ti.y[1].a(s):s}}
A.Gw.prototype={
l(a,b,c){throw A.e(A.aH("Cannot modify unmodifiable map"))},
A(a,b){throw A.e(A.aH("Cannot modify unmodifiable map"))},
bj(a,b){throw A.e(A.aH("Cannot modify unmodifiable map"))}}
A.pv.prototype={
fT(a,b,c){return this.a.fT(0,b,c)},
k(a,b){return this.a.k(0,b)},
l(a,b,c){this.a.l(0,b,c)},
bj(a,b){return this.a.bj(a,b)},
T(a){return this.a.T(a)},
W(a,b){this.a.W(0,b)},
gL(a){var s=this.a
return s.gL(s)},
gaP(a){var s=this.a
return s.gaP(s)},
gv(a){var s=this.a
return s.gv(s)},
gb1(){return this.a.gb1()},
A(a,b){return this.a.A(0,b)},
j(a){return this.a.j(0)},
gau(){return this.a.gau()},
gdq(){return this.a.gdq()},
mz(a,b,c,d){return this.a.mz(0,b,c,d)},
$iay:1}
A.kC.prototype={
fT(a,b,c){return new A.kC(this.a.fT(0,b,c),b.h("@<0>").Z(c).h("kC<1,2>"))}}
A.t8.prototype={
NL(a,b){var s=this
s.b=b
s.a=a
if(a!=null)a.b=s
if(b!=null)b.a=s},
Q8(){var s,r=this,q=r.a
if(q!=null)q.b=r.b
s=r.b
if(s!=null)s.a=q
r.a=r.b=null}}
A.t7.prototype={
A7(){var s,r,q=this
q.c=null
s=q.a
if(s!=null)s.b=q.b
r=q.b
if(r!=null)r.a=s
q.a=q.b=null
return q.d},
i1(a){var s=this,r=s.c
if(r!=null)--r.b
s.c=null
s.Q8()
return s.d},
nt(){return this},
$ia2D:1,
goW(){return this.d}}
A.t9.prototype={
nt(){return null},
A7(){throw A.e(A.bA())},
goW(){throw A.e(A.bA())}}
A.ol.prototype={
gv(a){return this.b},
oq(a){var s=this.a
new A.t7(this,a,s.$ti.h("t7<1>")).NL(s,s.b);++this.b},
dQ(a){var s=this.a.a.A7();--this.b
return s},
gJ(a){return this.a.b.goW()},
gO(a){return this.a.a.goW()},
gL(a){var s=this.a
return s.b===s},
gK(a){return new A.Cs(this,this.a.b,this.$ti.h("Cs<1>"))},
j(a){return A.lG(this,"{","}")},
$ia_:1}
A.Cs.prototype={
p(){var s=this,r=s.b,q=r==null?null:r.nt()
if(q==null){s.a=s.b=s.c=null
return!1}r=s.a
if(r!=q.c)throw A.e(A.bl(r))
s.c=q.d
s.b=q.b
return!0},
gB(){var s=this.c
return s==null?this.$ti.c.a(s):s}}
A.pp.prototype={
gK(a){var s=this
return new A.Dr(s,s.c,s.d,s.b,s.$ti.h("Dr<1>"))},
gL(a){return this.b===this.c},
gv(a){return(this.c-this.b&this.a.length-1)>>>0},
gJ(a){var s=this,r=s.b
if(r===s.c)throw A.e(A.bA())
r=s.a[r]
return r==null?s.$ti.c.a(r):r},
gO(a){var s=this,r=s.b,q=s.c
if(r===q)throw A.e(A.bA())
r=s.a
r=r[(q-1&r.length-1)>>>0]
return r==null?s.$ti.c.a(r):r},
bo(a,b){var s,r=this
A.a37(b,r.gv(0),r,null)
s=r.a
s=s[(r.b+b&s.length-1)>>>0]
return s==null?r.$ti.c.a(s):s},
ck(a,b){var s,r,q,p,o,n,m=this,l=m.a.length-1,k=(m.c-m.b&l)>>>0
if(k===0){s=J.pc(0,m.$ti.c)
return s}s=m.$ti.c
r=A.aZ(k,m.gJ(0),!0,s)
for(q=m.a,p=m.b,o=0;o<k;++o){n=q[(p+o&l)>>>0]
r[o]=n==null?s.a(n):n}return r},
d9(a){return this.ck(0,!0)},
G(a,b){var s,r,q,p,o,n,m,l,k=this,j=k.$ti
if(j.h("J<1>").b(b)){s=b.length
r=k.gv(0)
q=r+s
p=k.a
o=p.length
if(q>=o){n=A.aZ(A.a3q(q+(q>>>1)),null,!1,j.h("1?"))
k.c=k.QG(n)
k.a=n
k.b=0
B.b.b_(n,r,q,b,0)
k.c+=s}else{j=k.c
m=o-j
if(s<m){B.b.b_(p,j,j+s,b,0)
k.c+=s}else{l=s-m
B.b.b_(p,j,j+m,b,0)
B.b.b_(k.a,0,l,b,m)
k.c=l}}++k.d}else for(j=J.ao(b);j.p();)k.dW(j.gB())},
F(a){var s,r,q=this,p=q.b,o=q.c
if(p!==o){for(s=q.a,r=s.length-1;p!==o;p=(p+1&r)>>>0)s[p]=null
q.b=q.c=0;++q.d}},
j(a){return A.lG(this,"{","}")},
oq(a){var s=this,r=s.b,q=s.a
r=s.b=(r-1&q.length-1)>>>0
q[r]=a
if(r===s.c)s.z6();++s.d},
mP(){var s,r,q=this,p=q.b
if(p===q.c)throw A.e(A.bA());++q.d
s=q.a
r=s[p]
if(r==null)r=q.$ti.c.a(r)
s[p]=null
q.b=(p+1&s.length-1)>>>0
return r},
dQ(a){var s,r=this,q=r.b,p=r.c
if(q===p)throw A.e(A.bA());++r.d
q=r.a
p=r.c=(p-1&q.length-1)>>>0
s=q[p]
if(s==null)s=r.$ti.c.a(s)
q[p]=null
return s},
dW(a){var s=this,r=s.a,q=s.c
r[q]=a
r=(q+1&r.length-1)>>>0
s.c=r
if(s.b===r)s.z6();++s.d},
z6(){var s=this,r=A.aZ(s.a.length*2,null,!1,s.$ti.h("1?")),q=s.a,p=s.b,o=q.length-p
B.b.b_(r,0,o,q,p)
B.b.b_(r,o,o+s.b,s.a,0)
s.b=0
s.c=s.a.length
s.a=r},
QG(a){var s,r,q=this,p=q.b,o=q.c,n=q.a
if(p<=o){s=o-p
B.b.b_(a,0,s,n,p)
return s}else{r=n.length-p
B.b.b_(a,0,r,n,p)
B.b.b_(a,r,r+q.c,q.a,0)
return q.c+r}}}
A.Dr.prototype={
gB(){var s=this.e
return s==null?this.$ti.c.a(s):s},
p(){var s,r=this,q=r.a
if(r.c!==q.d)A.ae(A.bl(q))
s=r.d
if(s===r.b){r.e=null
return!1}q=q.a
r.e=q[s]
r.d=(s+1&q.length-1)>>>0
return!0}}
A.fm.prototype={
gL(a){return this.gv(this)===0},
gaP(a){return this.gv(this)!==0},
G(a,b){var s
for(s=J.ao(b);s.p();)this.C(0,s.gB())},
ED(a){var s,r
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.C)(a),++r)this.A(0,a[r])},
hV(a){var s,r,q=this.hf(0)
for(s=this.gK(this);s.p();){r=s.gB()
if(!a.t(0,r))q.A(0,r)}return q},
ck(a,b){return A.a0(this,b,A.q(this).c)},
d9(a){return this.ck(0,!0)},
eo(a,b,c){return new A.jq(this,b,A.q(this).h("@<1>").Z(c).h("jq<1,2>"))},
gjf(a){var s,r=this
if(r.gv(r)>1)throw A.e(A.a_h())
s=r.gK(r)
if(!s.p())throw A.e(A.bA())
return s.gB()},
j(a){return A.lG(this,"{","}")},
p_(a,b){var s
for(s=this.gK(this);s.p();)if(!b.$1(s.gB()))return!1
return!0},
jT(a,b){var s
for(s=this.gK(this);s.p();)if(b.$1(s.gB()))return!0
return!1},
f4(a,b){return A.a4z(this,b,A.q(this).c)},
gJ(a){var s=this.gK(this)
if(!s.p())throw A.e(A.bA())
return s.gB()},
gO(a){var s,r=this.gK(this)
if(!r.p())throw A.e(A.bA())
do s=r.gB()
while(r.p())
return s},
bo(a,b){var s,r
A.cF(b,"index")
s=this.gK(this)
for(r=b;s.p();){if(r===0)return s.gB();--r}throw A.e(A.xH(b,b-r,this,null,"index"))},
$ia_:1,
$iv:1,
$ib8:1}
A.n4.prototype={
ix(a){var s,r,q=this.nZ()
for(s=this.gK(this);s.p();){r=s.gB()
if(!a.t(0,r))q.C(0,r)}return q},
hV(a){var s,r,q=this.nZ()
for(s=this.gK(this);s.p();){r=s.gB()
if(a.t(0,r))q.C(0,r)}return q},
hf(a){var s=this.nZ()
s.G(0,this)
return s}}
A.ux.prototype={}
A.Dg.prototype={
k(a,b){var s,r=this.b
if(r==null)return this.c.k(0,b)
else if(typeof b!="string")return null
else{s=r[b]
return typeof s=="undefined"?this.OZ(b):s}},
gv(a){return this.b==null?this.c.a:this.jy().length},
gL(a){return this.gv(0)===0},
gaP(a){return this.gv(0)>0},
gb1(){if(this.b==null){var s=this.c
return new A.aB(s,A.q(s).h("aB<1>"))}return new A.Dh(this)},
gau(){var s=this
if(s.b==null)return s.c.gau()
return A.y6(s.jy(),new A.VC(s),t.N,t.z)},
l(a,b,c){var s,r,q=this
if(q.b==null)q.c.l(0,b,c)
else if(q.T(b)){s=q.b
s[b]=c
r=q.a
if(r==null?s!=null:r!==s)r[b]=null}else q.Bt().l(0,b,c)},
T(a){if(this.b==null)return this.c.T(a)
if(typeof a!="string")return!1
return Object.prototype.hasOwnProperty.call(this.a,a)},
bj(a,b){var s
if(this.T(a))return this.k(0,a)
s=b.$0()
this.l(0,a,s)
return s},
A(a,b){if(this.b!=null&&!this.T(b))return null
return this.Bt().A(0,b)},
W(a,b){var s,r,q,p,o=this
if(o.b==null)return o.c.W(0,b)
s=o.jy()
for(r=0;r<s.length;++r){q=s[r]
p=o.b[q]
if(typeof p=="undefined"){p=A.XV(o.a[q])
o.b[q]=p}b.$2(q,p)
if(s!==o.c)throw A.e(A.bl(o))}},
jy(){var s=this.c
if(s==null)s=this.c=A.a(Object.keys(this.a),t.s)
return s},
Bt(){var s,r,q,p,o,n=this
if(n.b==null)return n.c
s=A.y(t.N,t.z)
r=n.jy()
for(q=0;p=r.length,q<p;++q){o=r[q]
s.l(0,o,n.k(0,o))}if(p===0)r.push("")
else B.b.F(r)
n.a=n.b=null
return n.c=s},
OZ(a){var s
if(!Object.prototype.hasOwnProperty.call(this.a,a))return null
s=A.XV(this.a[a])
return this.b[a]=s}}
A.VC.prototype={
$1(a){return this.a.k(0,a)},
$S:97}
A.Dh.prototype={
gv(a){return this.a.gv(0)},
bo(a,b){var s=this.a
return s.b==null?s.gb1().bo(0,b):s.jy()[b]},
gK(a){var s=this.a
if(s.b==null){s=s.gb1()
s=s.gK(s)}else{s=s.jy()
s=new J.bj(s,s.length,A.X(s).h("bj<1>"))}return s},
t(a,b){return this.a.T(b)}}
A.tq.prototype={
av(){var s,r,q=this
q.IO()
s=q.a
r=s.a
s.a=""
s=q.c
s.C(0,A.a6j(r.charCodeAt(0)==0?r:r,q.b))
s.av()}}
A.Xr.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){}return null},
$S:106}
A.Xq.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){}return null},
$S:106}
A.Ie.prototype={
Vh(a,b,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="Invalid base64 encoding length "
a0=A.cN(b,a0,a.length)
s=$.a8e()
for(r=b,q=r,p=null,o=-1,n=-1,m=0;r<a0;r=l){l=r+1
k=a.charCodeAt(r)
if(k===37){j=l+2
if(j<=a0){i=A.aiz(a,l)
if(i===37)i=-1
l=j}else i=-1}else i=k
if(0<=i&&i<=127){h=s[i]
if(h>=0){i=u.n.charCodeAt(h)
if(i===k)continue
k=i}else{if(h===-1){if(o<0){g=p==null?null:p.a.length
if(g==null)g=0
o=g+(r-q)
n=r}++m
if(k===61)continue}k=i}if(h!==-2){if(p==null){p=new A.bz("")
g=p}else g=p
g.a+=B.d.a7(a,q,r)
g.a+=A.cE(k)
q=l
continue}}throw A.e(A.bx("Invalid base64 data",a,r))}if(p!=null){g=p.a+=B.d.a7(a,q,a0)
f=g.length
if(o>=0)A.a1E(a,n,a0,o,m,f)
else{e=B.f.bS(f-1,4)+1
if(e===1)throw A.e(A.bx(c,a,a0))
for(;e<4;){g+="="
p.a=g;++e}}g=p.a
return B.d.kH(a,b,a0,g.charCodeAt(0)==0?g:g)}d=a0-b
if(o>=0)A.a1E(a,n,a0,o,m,d)
else{e=B.f.bS(d,4)
if(e===1)throw A.e(A.bx(c,a,a0))
if(e>1)a=B.d.kH(a,a0,a0,e===2?"==":"=")}return a}}
A.If.prototype={
hl(a){return new A.Xp(new A.Gz(new A.uA(!1),a,a.a),new A.Tz(u.n))}}
A.Tz.prototype={
S_(a){return new Uint8Array(a)},
SA(a,b,c,d){var s,r=this,q=(r.a&3)+(c-b),p=B.f.bZ(q,3),o=p*4
if(d&&q-p*3>0)o+=4
s=r.S_(o)
r.a=A.aeT(r.b,a,b,c,d,s,0,r.a)
if(o>0)return s
return null}}
A.TA.prototype={
C(a,b){this.ys(b,0,b.length,!1)},
av(){this.ys(B.bp,0,0,!0)}}
A.Xp.prototype={
ys(a,b,c,d){var s=this.b.SA(a,b,c,d)
if(s!=null)this.a.jQ(s,0,s.length,d)}}
A.Ix.prototype={}
A.U9.prototype={
C(a,b){this.a.a.a+=b},
av(){this.a.av()}}
A.vV.prototype={}
A.FG.prototype={
C(a,b){this.b.push(b)},
av(){this.a.$1(this.b)}}
A.wd.prototype={}
A.o2.prototype={
T9(a){return new A.CV(this,a)},
hl(a){throw A.e(A.aH("This converter does not support chunked conversions: "+this.j(0)))}}
A.CV.prototype={
hl(a){return this.a.hl(new A.tq(this.b.a,a,new A.bz("")))}}
A.Kt.prototype={}
A.ph.prototype={
j(a){var s=A.jr(this.a)
return(this.b!=null?"Converting object to an encodable object failed:":"Converting object did not return an encodable object:")+" "+s}}
A.xM.prototype={
j(a){return"Cyclic error in JSON stringify"}}
A.N8.prototype={
e9(a){var s=A.a6j(a,this.gSa().a)
return s},
CZ(a){var s=A.af3(a,this.gSB().b,null)
return s},
gSB(){return B.xT},
gSa(){return B.iE}}
A.Na.prototype={
hl(a){return new A.VB(null,this.b,a)}}
A.VB.prototype={
C(a,b){var s,r=this
if(r.d)throw A.e(A.az("Only one call to add allowed"))
r.d=!0
s=r.c.BZ()
A.a58(b,s,r.b,r.a)
s.av()},
av(){}}
A.N9.prototype={
hl(a){return new A.tq(this.a,a,new A.bz(""))}}
A.VE.prototype={
Fd(a){var s,r,q,p,o,n=this,m=a.length
for(s=0,r=0;r<m;++r){q=a.charCodeAt(r)
if(q>92){if(q>=55296){p=q&64512
if(p===55296){o=r+1
o=!(o<m&&(a.charCodeAt(o)&64512)===56320)}else o=!1
if(!o)if(p===56320){p=r-1
p=!(p>=0&&(a.charCodeAt(p)&64512)===55296)}else p=!1
else p=!0
if(p){if(r>s)n.qd(a,s,r)
s=r+1
n.bR(92)
n.bR(117)
n.bR(100)
p=q>>>8&15
n.bR(p<10?48+p:87+p)
p=q>>>4&15
n.bR(p<10?48+p:87+p)
p=q&15
n.bR(p<10?48+p:87+p)}}continue}if(q<32){if(r>s)n.qd(a,s,r)
s=r+1
n.bR(92)
switch(q){case 8:n.bR(98)
break
case 9:n.bR(116)
break
case 10:n.bR(110)
break
case 12:n.bR(102)
break
case 13:n.bR(114)
break
default:n.bR(117)
n.bR(48)
n.bR(48)
p=q>>>4&15
n.bR(p<10?48+p:87+p)
p=q&15
n.bR(p<10?48+p:87+p)
break}}else if(q===34||q===92){if(r>s)n.qd(a,s,r)
s=r+1
n.bR(92)
n.bR(q)}}if(s===0)n.dw(a)
else if(s<m)n.qd(a,s,m)},
r0(a){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(a==null?p==null:a===p)throw A.e(new A.xM(a,null))}s.push(a)},
qc(a){var s,r,q,p,o=this
if(o.Fc(a))return
o.r0(a)
try{s=o.b.$1(a)
if(!o.Fc(s)){q=A.a3j(a,null,o.gzU())
throw A.e(q)}o.a.pop()}catch(p){r=A.ah(p)
q=A.a3j(a,r,o.gzU())
throw A.e(q)}},
Fc(a){var s,r=this
if(typeof a=="number"){if(!isFinite(a))return!1
r.WP(a)
return!0}else if(a===!0){r.dw("true")
return!0}else if(a===!1){r.dw("false")
return!0}else if(a==null){r.dw("null")
return!0}else if(typeof a=="string"){r.dw('"')
r.Fd(a)
r.dw('"')
return!0}else if(t.j.b(a)){r.r0(a)
r.WN(a)
r.a.pop()
return!0}else if(t.f.b(a)){r.r0(a)
s=r.WO(a)
r.a.pop()
return s}else return!1},
WN(a){var s,r,q=this
q.dw("[")
s=J.b4(a)
if(s.gaP(a)){q.qc(s.k(a,0))
for(r=1;r<s.gv(a);++r){q.dw(",")
q.qc(s.k(a,r))}}q.dw("]")},
WO(a){var s,r,q,p,o=this,n={}
if(a.gL(a)){o.dw("{}")
return!0}s=a.gv(a)*2
r=A.aZ(s,null,!1,t.X)
q=n.a=0
n.b=!0
a.W(0,new A.VF(n,r))
if(!n.b)return!1
o.dw("{")
for(p='"';q<s;q+=2,p=',"'){o.dw(p)
o.Fd(A.bT(r[q]))
o.dw('":')
o.qc(r[q+1])}o.dw("}")
return!0}}
A.VF.prototype={
$2(a,b){var s,r,q,p
if(typeof a!="string")this.a.b=!1
s=this.b
r=this.a
q=r.a
p=r.a=q+1
s[q]=a
r.a=p+1
s[p]=b},
$S:42}
A.VD.prototype={
gzU(){var s=this.c
return s instanceof A.bz?s.j(0):null},
WP(a){this.c.n2(B.c.j(a))},
dw(a){this.c.n2(a)},
qd(a,b,c){this.c.n2(B.d.a7(a,b,c))},
bR(a){this.c.bR(a)}}
A.Ay.prototype={
C(a,b){this.jQ(b,0,b.length,!1)},
BZ(){return new A.X6(new A.bz(""),this)}}
A.Uc.prototype={
av(){this.a.$0()},
bR(a){this.b.a+=A.cE(a)},
n2(a){this.b.a+=a}}
A.X6.prototype={
av(){if(this.a.a.length!==0)this.rd()
this.b.av()},
bR(a){var s=this.a.a+=A.cE(a)
if(s.length>16)this.rd()},
n2(a){if(this.a.a.length!==0)this.rd()
this.b.C(0,a)},
rd(){var s=this.a,r=s.a
s.a=""
this.b.C(0,r.charCodeAt(0)==0?r:r)}}
A.ul.prototype={
av(){},
jQ(a,b,c,d){var s,r
if(b!==0||c!==a.length)for(s=this.a,r=b;r<c;++r)s.a+=A.cE(a.charCodeAt(r))
else this.a.a+=a
if(d)this.av()},
C(a,b){this.a.a+=b},
R_(a){return new A.Gz(new A.uA(a),this,this.a)},
BZ(){return new A.Uc(this.gRu(),this.a)}}
A.Gz.prototype={
av(){this.a.T_(this.c)
this.b.av()},
C(a,b){this.jQ(b,0,b.length,!1)},
jQ(a,b,c,d){this.c.a+=this.a.yt(a,b,c,!1)
if(d)this.av()}}
A.T8.prototype={
e9(a){return B.bB.dI(a)}}
A.Ta.prototype={
dI(a){var s,r,q=A.cN(0,null,a.length),p=q-0
if(p===0)return new Uint8Array(0)
s=new Uint8Array(p*3)
r=new A.Gy(s)
if(r.yQ(a,0,q)!==q)r.om()
return B.R.b6(s,0,r.b)},
hl(a){return new A.Xs(new A.U9(a),new Uint8Array(1024))}}
A.Gy.prototype={
om(){var s=this,r=s.c,q=s.b,p=s.b=q+1
r[q]=239
q=s.b=p+1
r[p]=191
s.b=q+1
r[q]=189},
BA(a,b){var s,r,q,p,o=this
if((b&64512)===56320){s=65536+((a&1023)<<10)|b&1023
r=o.c
q=o.b
p=o.b=q+1
r[q]=s>>>18|240
q=o.b=p+1
r[p]=s>>>12&63|128
p=o.b=q+1
r[q]=s>>>6&63|128
o.b=p+1
r[p]=s&63|128
return!0}else{o.om()
return!1}},
yQ(a,b,c){var s,r,q,p,o,n,m,l=this
if(b!==c&&(a.charCodeAt(c-1)&64512)===55296)--c
for(s=l.c,r=s.length,q=b;q<c;++q){p=a.charCodeAt(q)
if(p<=127){o=l.b
if(o>=r)break
l.b=o+1
s[o]=p}else{o=p&64512
if(o===55296){if(l.b+4>r)break
n=q+1
if(l.BA(p,a.charCodeAt(n)))q=n}else if(o===56320){if(l.b+3>r)break
l.om()}else if(p<=2047){o=l.b
m=o+1
if(m>=r)break
l.b=m
s[o]=p>>>6|192
l.b=m+1
s[m]=p&63|128}else{o=l.b
if(o+2>=r)break
m=l.b=o+1
s[o]=p>>>12|224
o=l.b=m+1
s[m]=p>>>6&63|128
l.b=o+1
s[o]=p&63|128}}}return q}}
A.Xs.prototype={
av(){if(this.a!==0){this.jQ("",0,0,!0)
return}this.d.a.av()},
jQ(a,b,c,d){var s,r,q,p,o,n=this
n.b=0
s=b===c
if(s&&!d)return
r=n.a
if(r!==0){if(n.BA(r,!s?a.charCodeAt(b):0))++b
n.a=0}s=n.d
r=n.c
q=c-1
p=r.length-3
do{b=n.yQ(a,b,c)
o=d&&b===c
if(b===q&&(a.charCodeAt(b)&64512)===55296){if(d&&n.b<p)n.om()
else n.a=a.charCodeAt(b);++b}s.C(0,B.R.b6(r,0,n.b))
if(o)s.av()
n.b=0}while(b<c)
if(d)n.av()}}
A.T9.prototype={
dI(a){return new A.uA(this.a).yt(a,0,null,!0)},
hl(a){return a.R_(this.a)}}
A.uA.prototype={
yt(a,b,c,d){var s,r,q,p,o,n,m=this,l=A.cN(b,c,J.c0(a))
if(b===l)return""
if(a instanceof Uint8Array){s=a
r=s
q=0}else{r=A.afN(a,b,l)
l-=b
q=b
b=0}if(d&&l-b>=15){p=m.a
o=A.afM(p,r,b,l)
if(o!=null){if(!p)return o
if(o.indexOf("\ufffd")<0)return o}}o=m.ri(r,b,l,d)
p=m.b
if((p&1)!==0){n=A.a5K(p)
m.b=0
throw A.e(A.bx(n,a,q+m.c))}return o},
ri(a,b,c,d){var s,r,q=this
if(c-b>1000){s=B.f.bZ(b+c,2)
r=q.ri(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.ri(a,s,c,d)}return q.S9(a,b,c,d)},
T_(a){var s=this.b
this.b=0
if(s<=32)return
if(this.a)a.a+=A.cE(65533)
else throw A.e(A.bx(A.a5K(77),null,null))},
S9(a,b,c,d){var s,r,q,p,o,n,m,l=this,k=65533,j=l.b,i=l.c,h=new A.bz(""),g=b+1,f=a[b]
$label0$0:for(s=l.a;!0;){for(;!0;g=p){r="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHIHHHJEEBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBKCCCCCCCCCCCCDCLONNNMEEEEEEEEEEE".charCodeAt(f)&31
i=j<=32?f&61694>>>r:(f&63|i<<6)>>>0
j=" \x000:XECCCCCN:lDb \x000:XECCCCCNvlDb \x000:XECCCCCN:lDb AAAAA\x00\x00\x00\x00\x00AAAAA00000AAAAA:::::AAAAAGG000AAAAA00KKKAAAAAG::::AAAAA:IIIIAAAAA000\x800AAAAA\x00\x00\x00\x00 AAAAA".charCodeAt(j+r)
if(j===0){h.a+=A.cE(i)
if(g===c)break $label0$0
break}else if((j&1)!==0){if(s)switch(j){case 69:case 67:h.a+=A.cE(k)
break
case 65:h.a+=A.cE(k);--g
break
default:q=h.a+=A.cE(k)
h.a=q+A.cE(k)
break}else{l.b=j
l.c=g-1
return""}j=0}if(g===c)break $label0$0
p=g+1
f=a[g]}p=g+1
f=a[g]
if(f<128){while(!0){if(!(p<c)){o=c
break}n=p+1
f=a[p]
if(f>=128){o=n-1
p=n
break}p=n}if(o-g<20)for(m=g;m<o;++m)h.a+=A.cE(a[m])
else h.a+=A.a_T(a,g,o)
if(o===c)break $label0$0
g=p}else g=p}if(d&&j>32)if(s)h.a+=A.cE(k)
else{l.b=77
l.c=c
return""}l.b=j
l.c=i
s=h.a
return s.charCodeAt(0)==0?s:s}}
A.He.prototype={}
A.kR.prototype={}
A.Ot.prototype={
$2(a,b){var s=this.b,r=this.a,q=s.a+=r.a
q+=a.a
s.a=q
s.a=q+": "
s.a+=A.jr(b)
r.a=", "},
$S:263}
A.Xn.prototype={
$2(a,b){var s,r
if(typeof b=="string")this.a.set(a,b)
else if(b==null)this.a.set(a,"")
else for(s=J.ao(b),r=this.a;s.p();){b=s.gB()
if(typeof b=="string")r.append(a,b)
else if(b==null)r.append(a,"")
else A.bO(b)}},
$S:56}
A.hV.prototype={
i(a,b){if(b==null)return!1
return b instanceof A.hV&&this.a===b.a&&this.b===b.b},
aq(a,b){return B.f.aq(this.a,b.a)},
gq(a){var s=this.a
return(s^B.f.eH(s,30))&1073741823},
j(a){var s=this,r=A.aaA(A.adg(s)),q=A.wv(A.ade(s)),p=A.wv(A.ada(s)),o=A.wv(A.adb(s)),n=A.wv(A.add(s)),m=A.wv(A.adf(s)),l=A.aaB(A.adc(s)),k=r+"-"+q
if(s.b)return k+"-"+p+" "+o+":"+n+":"+m+"."+l+"Z"
else return k+"-"+p+" "+o+":"+n+":"+m+"."+l}}
A.aS.prototype={
S(a,b){return new A.aS(this.a+b.a)},
V(a,b){return new A.aS(this.a-b.a)},
X(a,b){return new A.aS(B.c.bx(this.a*b))},
i(a,b){if(b==null)return!1
return b instanceof A.aS&&this.a===b.a},
gq(a){return B.f.gq(this.a)},
aq(a,b){return B.f.aq(this.a,b.a)},
j(a){var s,r,q,p,o,n=this.a,m=B.f.bZ(n,36e8),l=n%36e8
if(n<0){m=0-m
n=0-l
s="-"}else{n=l
s=""}r=B.f.bZ(n,6e7)
n%=6e7
q=r<10?"0":""
p=B.f.bZ(n,1e6)
o=p<10?"0":""
return s+m+":"+q+r+":"+o+p+"."+B.d.mH(B.f.j(n%1e6),6,"0")}}
A.UG.prototype={
j(a){return this.D()}}
A.b2.prototype={
gnj(){return A.aI(this.$thrownJsError)}}
A.j7.prototype={
j(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.jr(s)
return"Assertion failed"},
gE1(){return this.a}}
A.hn.prototype={}
A.ef.prototype={
grr(){return"Invalid argument"+(!this.a?"(s)":"")},
grq(){return""},
j(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+A.f(p),n=s.grr()+q+o
if(!s.a)return n
return n+s.grq()+": "+A.jr(s.guW())},
guW(){return this.b}}
A.qm.prototype={
guW(){return this.b},
grr(){return"RangeError"},
grq(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.f(q):""
else if(q==null)s=": Not greater than or equal to "+A.f(r)
else if(q>r)s=": Not in inclusive range "+A.f(r)+".."+A.f(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.f(r)
return s}}
A.p5.prototype={
guW(){return this.b},
grr(){return"RangeError"},
grq(){if(this.b<0)return": index must not be nega