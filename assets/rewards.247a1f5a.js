import {
    ad as a,
    ae as t,
    af as n
} from "./index.8a4ef25f.js";
const l = async (r = {}) => {
        try {
            const e = a();
            return await t.get("api/rewards/details", {
                params: r,
                headers: e ? {
                    Authorization: `Bearer ${a()}`
                } : {}
            })
        } catch {}
    },
    h = async (r = {}) => {
        try {
            return await t.get("api/rewardtypes", {
                params: r,
                headers: {
                    Authorization: `Bearer ${a()}`
                }
            })
        } catch {}
    },
    d = async (r = {}) => {
        try {
            return await t.get("api/raffleentries", {
                params: r,
                headers: {
                    Authorization: `Bearer ${a()}`
                }
            })
        } catch {}
    },
    f = async (r, e, o, i = {}) => {
        const {
            isEligible: s
        } = n(r, e, o);
        if (s) try {
            return await t.put("api/raffleentry", i, {
                headers: {
                    Authorization: `Bearer ${a()}`
                }
            })
        } catch (c) {
            throw c
        } else throw new Error("Ineligible for Raffle")
    },
    w = async (r = {}) => {
        try {
            return await t.get("api/claimcodes", {
                params: r,
                headers: {
                    Authorization: `Bearer ${a()}`
                }
            })
        } catch {}
    },
    g = async (r, e, o = {}) => {
        const {
            isEligible: i
        } = n(r, e);
        if (i) try {
            return await t.get("api/claimcode", {
                params: o,
                headers: {
                    Authorization: `Bearer ${a()}`
                }
            })
        } catch {} else throw new Error("Ineligible for Claim")
    },
    y = async (r, e, o = {}) => {
        const {
            isEligible: i
        } = n(r, e);
        if (i) try {
            return await t.post("api/claimcode/assign", o, {
                headers: {
                    Authorization: `Bearer ${a()}`
                }
            })
        } catch (s) {
            throw s
        } else throw new Error("Ineligible for Claim")
    },
    u = async (r = {}) => {
        try {
            return await t.put("api/claimmeta", r, {
                headers: {
                    Authorization: `Bearer ${a()}`
                }
            })
        } catch (e) {
            throw e
        }
    },
    m = {
        getRewardsDetails: l,
        getRewardTypes: h,
        getRaffleEntriesOfProfile: d,
        addRaffleEntry: f,
        getClaimsOfProfile: w,
        getClaimCode: g,
        assignClaimCode: y,
        addClaimMeta: u
    };
export {
    m as R
};